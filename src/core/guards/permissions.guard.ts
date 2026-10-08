import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { Request } from 'express';
import { PERMISSIONS_KEY } from '../auth/auth.decorators.js';
import type { AuthUser } from '../auth/auth.types.js';
import { forbidden } from '../errors/app.exception.js';

/** Runs after JwtAuthGuard. Routes without @RequirePermissions only need a login. */
@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(ctx: ExecutionContext): boolean {
    const required = this.reflector.getAllAndOverride<string[] | undefined>(PERMISSIONS_KEY, [
      ctx.getHandler(),
      ctx.getClass(),
    ]);
    if (!required?.length) return true;

    const user = ctx.switchToHttp().getRequest<Request & { user?: AuthUser }>().user;
    const missing = required.filter((p) => !user?.permissions.includes(p));
    if (missing.length) throw forbidden('PERMISSION_DENIED', 'You do not have permission to do this', { missing });
    return true;
  }
}