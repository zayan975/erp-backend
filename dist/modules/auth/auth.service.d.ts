import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../core/prisma/prisma.service.js';
import { LoginDto } from './auth.dto.js';
export declare const MAX_FAILED_LOGINS = 5;
export declare const LOCK_MINUTES = 15;
export interface RequestMeta {
    ip?: string;
    userAgent?: string;
}
export interface IssuedTokens {
    accessToken: string;
    refreshToken: string;
    refreshExpiresAt: Date;
}
export declare class AuthService {
    private readonly prisma;
    private readonly jwt;
    private readonly config;
    private readonly dummyHash;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    login(dto: LoginDto, meta: RequestMeta): Promise<IssuedTokens>;
    refresh(rawToken: string | undefined, meta: RequestMeta): Promise<IssuedTokens>;
    logout(rawToken: string | undefined): Promise<void>;
    private issueTokens;
    private revokeFamily;
    private registerFailure;
    private audit;
}
