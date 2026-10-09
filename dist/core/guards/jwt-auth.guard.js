var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { IS_PUBLIC_KEY } from '../auth/auth.decorators.js';
import { unauthorized } from '../errors/app.exception.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { TenantContext } from '../tenant/tenant-context.service.js';
let JwtAuthGuard = class JwtAuthGuard {
    reflector;
    jwt;
    prisma;
    tenant;
    constructor(reflector, jwt, prisma, tenant) {
        this.reflector = reflector;
        this.jwt = jwt;
        this.prisma = prisma;
        this.tenant = tenant;
    }
    async canActivate(ctx) {
        const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [ctx.getHandler(), ctx.getClass()]);
        if (isPublic)
            return true;
        const req = ctx.switchToHttp().getRequest();
        const [scheme, token] = (req.headers.authorization ?? '').split(' ');
        if (scheme !== 'Bearer' || !token)
            throw unauthorized('TOKEN_MISSING', 'Authentication required');
        let userId;
        try {
            const payload = await this.jwt.verifyAsync(token);
            userId = payload.sub;
        }
        catch (e) {
            const expired = e.name === 'TokenExpiredError';
            throw unauthorized(expired ? 'TOKEN_EXPIRED' : 'TOKEN_INVALID', expired ? 'Access token expired' : 'Invalid access token');
        }
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: { company: true, role: { include: { permissions: { include: { permission: true } } } } },
        });
        if (!user || user.deletedAt || user.status !== 'ACTIVE' || !user.company.isActive) {
            throw unauthorized('ACCOUNT_DISABLED', 'This account is not active');
        }
        const authUser = {
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
};
JwtAuthGuard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Reflector,
        JwtService,
        PrismaService,
        TenantContext])
], JwtAuthGuard);
export { JwtAuthGuard };
//# sourceMappingURL=jwt-auth.guard.js.map