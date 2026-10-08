import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';
import { IS_PUBLIC_KEY } from '../auth/auth.decorators.js';
import type { AuthUser } from '../auth/auth.types.js';
import { unauthorized } from '../errors/app.exception.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { TenantContext } from '../tenant/tenant-context.service.js';

/**
 * Global guard: every route needs a valid access token unless marked @Public().
 * The user is re-read from the database on each request, so deactivating a user or
 * changing a role takes effect immediately (no waiting for the 15 minute token to expire).
 */
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwt: JwtService,
    private readonly prisma: PrismaService,
    private readonly tenant: TenantContext,
  ) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [ctx.getHandler(), ctx.getClass()]);
    if (isPublic) return true;

    const req = ctx.switchToHttp().getRequest<Request & { user?: AuthUser }>();
    const [scheme, token] = (req.headers.authorization ?? '').split(' ');
    if (scheme !== 'Bearer' || !token) throw unauthorized('TOKEN_MISSING', 'Authentication required');

    let userId: string;
    try {
      const payload = await this.jwt.verifyAsync<{ sub: string }>(token);
      userId = payload.sub;
    } catch (e) {
      const expired = (e as { name?: string }).name === 'TokenExpiredError';
      throw unauthorized(expired ? 'TOKEN_EXPIRED' : 'TOKEN_INVALID', expired ? 'Access token expired' : 'Invalid access token');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { company: true, role: { include: { permissions: { include: { permission: true } } } } },
    });
    if (!user || user.deletedAt || user.status !== 'ACTIVE' || !user.company.isActive) {
      throw unauthorized('ACCOUNT_DISABLED', 'This account is not active');
    }

    const authUser: AuthUser = {
      id: user.id,
      companyId: user.companyId,
      companyName: user.company.name,
      name: user.name,
      email: user.email,
      roleName: user.role.name,
      permissions: user.role.permissions.map((rp) => rp.permission.key),
    };
    req.user = authUser;
    this.tenant.set({
      companyId: authUser.companyId,
      userId: authUser.id,
      roleName: authUser.roleName,
      permissions: authUser.permissions,
    });
    return true;
  }
}