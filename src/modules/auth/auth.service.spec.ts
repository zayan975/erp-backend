/* eslint-disable @typescript-eslint/no-explicit-any */
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { AuthService, MAX_FAILED_LOGINS } from './auth.service.js';
import { hashToken } from './token.util.js';

/** Tiny in-memory stand-in for the parts of Prisma that AuthService uses. */
function makeFakePrisma(user: any) {
  const tokens: any[] = [];
  const audits: any[] = [];
  let seq = 0;
  return {
    tokens,
    audits,
    user: {
      findUnique: async ({ where }: any) => (where.email === user.email || where.id === user.id ? user : null),
      update: async ({ data }: any) => Object.assign(user, data),
    },
    auditLog: { create: async ({ data }: any) => audits.push(data) },
    refreshToken: {
      create: async ({ data }: any) => {
        tokens.push({ id: `t${++seq}`, revokedAt: null, ...data });
      },
      findUnique: async ({ where }: any) => {
        const t = tokens.find((x) => x.tokenHash === where.tokenHash);
        return t ? { ...t, user } : null;
      },
      updateMany: async ({ where, data }: any) => {
        const hit = tokens.filter(
          (x) =>
            (where.id === undefined || x.id === where.id) &&
            (where.familyId === undefined || x.familyId === where.familyId) &&
            (where.revokedAt === null ? x.revokedAt === null : true),
        );
        hit.forEach((x) => Object.assign(x, data));
        return { count: hit.length };
      },
    },
  };
}

describe('AuthService', () => {
  const PASSWORD = 'Correct-Horse-1';
  let passwordHash: string;
  let user: any;
  let prisma: ReturnType<typeof makeFakePrisma>;
  let auth: AuthService;
  const meta = { ip: '127.0.0.1', userAgent: 'vitest' };

  beforeAll(async () => {
    passwordHash = await argon2.hash(PASSWORD, { type: argon2.argon2id });
  });

  beforeEach(() => {
    user = {
      id: 'u1',
      companyId: 'c1',
      email: 'admin@demo.com',
      passwordHash,
      status: 'ACTIVE',
      deletedAt: null,
      failedLogins: 0,
      lockedUntil: null,
      company: { isActive: true },
    };
    prisma = makeFakePrisma(user);
    auth = new AuthService(
      prisma as any,
      new JwtService({ secret: 'test-secret', signOptions: { expiresIn: '15m' } }),
      { getOrThrow: () => 7 } as any,
    );
  });

  it('logs in, issues a JWT and stores only the HASH of the refresh token', async () => {
    const t = await auth.login({ email: ' Admin@Demo.com ', password: PASSWORD }, meta);
    expect(t.accessToken.split('.')).toHaveLength(3);
    expect(prisma.tokens).toHaveLength(1);
    expect(prisma.tokens[0].tokenHash).toBe(hashToken(t.refreshToken));
    expect(prisma.tokens[0].tokenHash).not.toBe(t.refreshToken);
  });

  it('gives the same error for a wrong password and an unknown email', async () => {
    const wrong = await auth.login({ email: user.email, password: 'nope' }, meta).catch((e) => e);
    const unknown = await auth.login({ email: 'ghost@demo.com', password: 'nope' }, meta).catch((e) => e);
    expect(wrong.code).toBe('INVALID_CREDENTIALS');
    expect(unknown.code).toBe('INVALID_CREDENTIALS');
    expect(wrong.message).toBe(unknown.message);
  });

  it(`locks the account after ${MAX_FAILED_LOGINS} failures, even for the right password`, async () => {
    for (let i = 0; i < MAX_FAILED_LOGINS; i++) {
      await auth.login({ email: user.email, password: 'bad' }, meta).catch(() => undefined);
    }
    const res = await auth.login({ email: user.email, password: PASSWORD }, meta).catch((e) => e);
    expect(res.code).toBe('ACCOUNT_LOCKED');
    expect(res.getStatus()).toBe(423);
  });

  it('works again once the lock has expired and resets the counter', async () => {
    user.lockedUntil = new Date(Date.now() - 1000);
    user.failedLogins = 0;
    const t = await auth.login({ email: user.email, password: PASSWORD }, meta);
    expect(t.accessToken).toBeTruthy();
    expect(user.failedLogins).toBe(0);
    expect(user.lockedUntil).toBeNull();
  });

  it('rejects a disabled user (correct password) and an inactive company', async () => {
    user.status = 'INACTIVE';
    expect((await auth.login({ email: user.email, password: PASSWORD }, meta).catch((e) => e)).code).toBe('ACCOUNT_DISABLED');
    user.status = 'ACTIVE';
    user.company.isActive = false;
    expect((await auth.login({ email: user.email, password: PASSWORD }, meta).catch((e) => e)).code).toBe('ACCOUNT_DISABLED');
  });

  it('rotates the refresh token: new token works, old token is revoked', async () => {
    const first = await auth.login({ email: user.email, password: PASSWORD }, meta);
    const second = await auth.refresh(first.refreshToken, meta);
    expect(second.refreshToken).not.toBe(first.refreshToken);
    expect(prisma.tokens[0].revokedAt).not.toBeNull();
    expect(prisma.tokens[1].familyId).toBe(prisma.tokens[0].familyId);
    const third = await auth.refresh(second.refreshToken, meta);
    expect(third.accessToken).toBeTruthy();
  });

  it('treats reuse of an old refresh token as theft and revokes the whole family', async () => {
    const first = await auth.login({ email: user.email, password: PASSWORD }, meta);
    const second = await auth.refresh(first.refreshToken, meta);

    const reuse = await auth.refresh(first.refreshToken, meta).catch((e) => e);
    expect(reuse.code).toBe('REFRESH_TOKEN_REUSED');

    // the legitimate newest token is dead too
    const after = await auth.refresh(second.refreshToken, meta).catch((e) => e);
    expect(after.code).toBe('REFRESH_TOKEN_REUSED');
  });

  it('rejects missing, unknown and expired refresh tokens', async () => {
    expect((await auth.refresh(undefined, meta).catch((e) => e)).code).toBe('REFRESH_TOKEN_MISSING');
    expect((await auth.refresh('garbage', meta).catch((e) => e)).code).toBe('REFRESH_TOKEN_INVALID');
    const t = await auth.login({ email: user.email, password: PASSWORD }, meta);
    prisma.tokens[0].expiresAt = new Date(Date.now() - 1000);
    expect((await auth.refresh(t.refreshToken, meta).catch((e) => e)).code).toBe('REFRESH_TOKEN_EXPIRED');
  });

  it('logout revokes the whole session family', async () => {
    const first = await auth.login({ email: user.email, password: PASSWORD }, meta);
    const second = await auth.refresh(first.refreshToken, meta);
    await auth.logout(second.refreshToken);
    expect(prisma.tokens.every((t) => t.revokedAt !== null)).toBe(true);
    expect((await auth.refresh(second.refreshToken, meta).catch((e) => e)).code).toBe('REFRESH_TOKEN_REUSED');
  });

  it('refuses to refresh for a deactivated user', async () => {
    const t = await auth.login({ email: user.email, password: PASSWORD }, meta);
    user.status = 'INACTIVE';
    expect((await auth.refresh(t.refreshToken, meta).catch((e) => e)).code).toBe('ACCOUNT_DISABLED');
  });
});