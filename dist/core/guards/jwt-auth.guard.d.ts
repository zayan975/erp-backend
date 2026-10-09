import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
import { TenantContext } from '../tenant/tenant-context.service.js';
export declare class JwtAuthGuard implements CanActivate {
    private readonly reflector;
    private readonly jwt;
    private readonly prisma;
    private readonly tenant;
    constructor(reflector: Reflector, jwt: JwtService, prisma: PrismaService, tenant: TenantContext);
    canActivate(ctx: ExecutionContext): Promise<boolean>;
}
