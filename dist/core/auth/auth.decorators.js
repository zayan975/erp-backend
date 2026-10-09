import { createParamDecorator, SetMetadata } from '@nestjs/common';
export const IS_PUBLIC_KEY = 'isPublic';
export const PERMISSIONS_KEY = 'requiredPermissions';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
export const RequirePermissions = (...permissions) => SetMetadata(PERMISSIONS_KEY, permissions);
export const CurrentUser = createParamDecorator((_data, ctx) => {
    return ctx.switchToHttp().getRequest().user;
});
//# sourceMappingURL=auth.decorators.js.map