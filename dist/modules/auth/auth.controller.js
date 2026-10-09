var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Get, HttpCode, Post, Req, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { CurrentUser, Public } from '../../core/auth/auth.decorators.js';
import { LoginDto } from './auth.dto.js';
import { AuthService } from './auth.service.js';
const REFRESH_COOKIE = 'refresh_token';
const AUTH_THROTTLE = { default: { limit: 10, ttl: 60_000 } };
let AuthController = class AuthController {
    auth;
    config;
    constructor(auth, config) {
        this.auth = auth;
        this.config = config;
    }
    async login(dto, req, res) {
        return this.respond(res, await this.auth.login(dto, this.meta(req)));
    }
    async refresh(req, res) {
        return this.respond(res, await this.auth.refresh(req.cookies?.[REFRESH_COOKIE], this.meta(req)));
    }
    async logout(req, res) {
        await this.auth.logout(req.cookies?.[REFRESH_COOKIE]);
        res.clearCookie(REFRESH_COOKIE, this.cookieOptions());
        return { success: true };
    }
    me(user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.roleName,
            permissions: user.permissions,
            company: { id: user.companyId, name: user.companyName },
        };
    }
    respond(res, tokens) {
        res.cookie(REFRESH_COOKIE, tokens.refreshToken, { ...this.cookieOptions(), expires: tokens.refreshExpiresAt });
        return { accessToken: tokens.accessToken };
    }
    cookieOptions() {
        return {
            httpOnly: true,
            secure: this.config.get('NODE_ENV') === 'production',
            sameSite: 'strict',
            path: '/api/v1/auth',
        };
    }
    meta(req) {
        return { ip: req.ip, userAgent: req.headers['user-agent'] };
    }
};
__decorate([
    Public(),
    Throttle(AUTH_THROTTLE),
    Post('login'),
    HttpCode(200),
    __param(0, Body()),
    __param(1, Req()),
    __param(2, Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginDto, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    Public(),
    Throttle(AUTH_THROTTLE),
    Post('refresh'),
    HttpCode(200),
    __param(0, Req()),
    __param(1, Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
__decorate([
    Public(),
    Post('logout'),
    HttpCode(200),
    __param(0, Req()),
    __param(1, Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    ApiBearerAuth(),
    Get('me'),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "me", null);
AuthController = __decorate([
    ApiTags('auth'),
    Controller('auth'),
    __metadata("design:paramtypes", [AuthService,
        ConfigService])
], AuthController);
export { AuthController };
//# sourceMappingURL=auth.controller.js.map