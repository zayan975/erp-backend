import { ClsStore } from 'nestjs-cls';

/** Per-request values, filled by the auth guard (Step 5) and read anywhere via TenantContext. */
export interface AppClsStore extends ClsStore {
  companyId?: string;
  userId?: string;
  roleName?: string;
  permissions?: string[];
}