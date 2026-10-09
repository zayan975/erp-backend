import { ClsService } from 'nestjs-cls';
import { AppClsStore } from './tenant.types.js';
export declare class TenantContext {
    private readonly cls;
    constructor(cls: ClsService<AppClsStore>);
    get companyId(): string;
    get userId(): string | undefined;
    get permissions(): string[];
    set(values: {
        companyId: string;
        userId: string;
        roleName: string;
        permissions: string[];
    }): void;
}
