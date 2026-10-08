import { Injectable } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { AppClsStore } from './tenant.types.js';

@Injectable()
export class TenantContext {
  constructor(private readonly cls: ClsService<AppClsStore>) {}

  get companyId(): string {
    const id = this.cls.get('companyId');
    if (!id) throw new Error('No tenant context (is the request authenticated?)');
    return id;
  }
  get userId(): string | undefined { return this.cls.get('userId'); }
  get permissions(): string[] { return this.cls.get('permissions') ?? []; }

  set(values: { companyId: string; userId: string; roleName: string; permissions: string[] }) {
    this.cls.set('companyId', values.companyId);
    this.cls.set('userId', values.userId);
    this.cls.set('roleName', values.roleName);
    this.cls.set('permissions', values.permissions);
  }
}