import { ConfigService } from '@nestjs/config';
import type { Request, Response } from 'express';
import type { AuthUser } from '../../core/auth/auth.types.js';
import { LoginDto } from './auth.dto.js';
import { AuthService } from './auth.service.js';
export declare class AuthController {
    private readonly auth;
    private readonly config;
    constructor(auth: AuthService, config: ConfigService);
    login(dto: LoginDto, req: Request, res: Response): Promise<{
        accessToken: string;
    }>;
    refresh(req: Request, res: Response): Promise<{
        accessToken: string;
    }>;
    logout(req: Request, res: Response): Promise<{
        success: boolean;
    }>;
    me(user: AuthUser): {
        id: string;
        name: string;
        email: string;
        role: string;
        permissions: string[];
        company: {
            id: string;
            name: string;
        };
    };
    private respond;
    private cookieOptions;
    private meta;
}
