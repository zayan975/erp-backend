import { Body, Controller, Get, HttpCode, Post, Req, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import type { CookieOptions, Request, Response } from 'express';
import { CurrentUser, Public } from '../../core/auth/auth.decorators.js';
import type { AuthUser } from '../../core/auth/auth.types.js';
import { LoginDto } from './auth.dto.js';
import { AuthService, IssuedTokens, RequestMeta } from './auth.service.js';

const REFRESH_COOKIE = 'refresh_token';
const AUTH_THROTTLE = { default: { limit: 10, ttl: 60_000 } };

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly auth: AuthService,
    private readonly config: ConfigService,
  ) {}

  @Public()
  @Throttle(AUTH_THROTTLE)
  @Post('login')
  @HttpCode(200)
  async login(@Body() dto: LoginDto, @Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return this.respond(res, await this.auth.login(dto, this.meta(req)));
  }

  @Public()
  @Throttle(AUTH_THROTTLE)
  @Post('refresh')
  @HttpCode(200)
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return this.respond(res, await this.auth.refresh(req.cookies?.[REFRESH_COOKIE], this.meta(req)));
  }

  @Public()
  @Post('logout')
  @HttpCode(200)
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    await this.auth.logout(req.cookies?.[REFRESH_COOKIE]);
    res.clearCookie(REFRESH_COOKIE, this.cookieOptions());
    return { success: true };
  }

  @ApiBearerAuth()
  @Get('me')
  me(@CurrentUser() user: AuthUser) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.roleName,
      permissions: user.permissions,
      company: { id: user.companyId, name: user.companyName },
    };
  }

  private respond(res: Response, tokens: IssuedTokens) {
    res.cookie(REFRESH_COOKIE, tokens.refreshToken, { ...this.cookieOptions(), expires: tokens.refreshExpiresAt });
    return { accessToken: tokens.accessToken };
  }

  private cookieOptions(): CookieOptions {
    return {
      httpOnly: true,
      secure: this.config.get('NODE_ENV') === 'production',
      sameSite: 'strict',
      path: '/api/v1/auth',
    };
  }

  private meta(req: Request): RequestMeta {
    return { ip: req.ip, userAgent: req.headers['user-agent'] };
  }
}