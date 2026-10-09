var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { randomUUID } from 'crypto';
import { AppException, forbidden, unauthorized } from '../../core/errors/app.exception.js';
import { PrismaService } from '../../core/prisma/prisma.service.js';
import { generateToken, hashToken } from './token.util.js';
export const MAX_FAILED_LOGINS = 5;
export const LOCK_MINUTES = 15;
const invalidCredentials = () => unauthorized('INVALID_CREDENTIALS', 'Invalid email or password');
let AuthService = class AuthService {
    prisma;
    jwt;
    config;
    dummyHash;
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
        this.dummyHash = argon2.hash('timing-equalizer', { type: argon2.argon2id });
    }
    async login(dto, meta) {
        const email = dto.email.trim().toLowerCase();
        const user = await this.prisma.user.findUnique({ where: { email }, include: { company: true } });
        if (!user || user.deletedAt) {
            await argon2.verify(await this.dummyHash, dto.password).catch(() => false);
            throw invalidCredentials();
        }
        if (user.lockedUntil && user.lockedUntil > new Date()) {
            throw new AppException('ACCOUNT_LOCKED', 'Too many failed attempts. Try again later.', HttpStatus.LOCKED, {
                lockedUntil: user.lockedUntil,
            });
        }
        const passwordOk = await argon2.verify(user.passwordHash, dto.password).catch(() => false);
        if (!passwordOk) {
            await this.registerFailure(user, meta);
            throw invalidCredentials();
        }
        if (user.status !== 'ACTIVE' || !user.company.isActive) {
            throw forbidden('ACCOUNT_DISABLED', 'This account is disabled');
        }
        await this.prisma.user.update({
            where: { id: user.id },
            data: { failedLogins: 0, lockedUntil: null, lastLoginAt: new Date() },
        });
        await this.audit(user.companyId, user.id, 'LOGIN', meta);
        return this.issueTokens(user.id, randomUUID(), meta);
    }
    async refresh(rawToken, meta) {
        if (!rawToken)
            throw unauthorized('REFRESH_TOKEN_MISSING', 'Refresh token missing');
        const stored = await this.prisma.refreshToken.findUnique({
            where: { tokenHash: hashToken(rawToken) },
            include: { user: { include: { company: true } } },
        });
        if (!stored)
            throw unauthorized('REFRESH_TOKEN_INVALID', 'Invalid refresh token');
        if (stored.revokedAt) {
            await this.revokeFamily(stored.familyId);
            throw unauthorized('REFRESH_TOKEN_REUSED', 'Session is no longer valid. Please log in again.');
        }
        if (stored.expiresAt <= new Date())
            throw unauthorized('REFRESH_TOKEN_EXPIRED', 'Session expired. Please log in again.');
        const u = stored.user;
        if (u.deletedAt || u.status !== 'ACTIVE' || !u.company.isActive) {
            await this.revokeFamily(stored.familyId);
            throw unauthorized('ACCOUNT_DISABLED', 'This account is not active');
        }
        const { count } = await this.prisma.refreshToken.updateMany({
            where: { id: stored.id, revokedAt: null },
            data: { revokedAt: new Date() },
        });
        if (count === 0) {
            await this.revokeFamily(stored.familyId);
            throw unauthorized('REFRESH_TOKEN_REUSED', 'Session is no longer valid. Please log in again.');
        }
        return this.issueTokens(u.id, stored.familyId, meta);
    }
    async logout(rawToken) {
        if (!rawToken)
            return;
        const stored = await this.prisma.refreshToken.findUnique({ where: { tokenHash: hashToken(rawToken) } });
        if (stored)
            await this.revokeFamily(stored.familyId);
    }
    async issueTokens(userId, familyId, meta) {
        const accessToken = await this.jwt.signAsync({ sub: userId });
        const refreshToken = generateToken();
        const days = Number(this.config.getOrThrow('REFRESH_TTL_DAYS'));
        const refreshExpiresAt = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
        await this.prisma.refreshToken.create({
            data: {
                userId,
                familyId,
                tokenHash: hashToken(refreshToken),
                expiresAt: refreshExpiresAt,
                ip: meta.ip,
                userAgent: meta.userAgent?.slice(0, 255),
            },
        });
        return { accessToken, refreshToken, refreshExpiresAt };
    }
    revokeFamily(familyId) {
        return this.prisma.refreshToken.updateMany({
            where: { familyId, revokedAt: null },
            data: { revokedAt: new Date() },
        });
    }
    async registerFailure(user, meta) {
        const lockExpired = !!user.lockedUntil && user.lockedUntil <= new Date();
        const failed = (lockExpired ? 0 : user.failedLogins) + 1;
        const lockedUntil = failed >= MAX_FAILED_LOGINS ? new Date(Date.now() + LOCK_MINUTES * 60_000) : null;
        await this.prisma.user.update({
            where: { id: user.id },
            data: { failedLogins: lockedUntil ? 0 : failed, lockedUntil },
        });
        await this.audit(user.companyId, user.id, lockedUntil ? 'LOGIN_LOCKED' : 'LOGIN_FAILED', meta);
    }
    audit(companyId, userId, action, meta) {
        return this.prisma.auditLog.create({
            data: { companyId, userId, action, entity: 'auth', entityId: userId, ip: meta.ip },
        });
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        JwtService,
        ConfigService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map