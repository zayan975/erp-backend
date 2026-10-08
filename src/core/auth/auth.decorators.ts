import { createParamDecorator, ExecutionContext, SetMetadata } from '@nestjs/common';
import type { Request } from 'express';
import type { AuthUser } from './auth.types.js';

export const IS_PUBLIC_KEY = 'isPublic';
export const PERMISSIONS_KEY = 'requiredPermissions';

/** Route needs no login. Everything else requires a valid access token. */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

/** Route needs ALL of these permissions, e.g. @RequirePermissions('payments:verify'). */
export const RequirePermissions = (...permissions: string[]) => SetMetadata(PERMISSIONS_KEY, permissions);

/** Injects the logged-in user: handler(@CurrentUser() user: AuthUser) */
export const CurrentUser = createParamDecorator((_data: unknown, ctx: ExecutionContext): AuthUser => {
  return ctx.switchToHttp().getRequest<Request & { user: AuthUser }>().user;
});