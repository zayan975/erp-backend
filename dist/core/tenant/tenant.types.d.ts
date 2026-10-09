import { ClsStore } from 'nestjs-cls';
export interface AppClsStore extends ClsStore {
    companyId?: string;
    userId?: string;
    roleName?: string;
    permissions?: string[];
}
