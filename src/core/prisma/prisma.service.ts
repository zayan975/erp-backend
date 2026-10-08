import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { ClsService } from 'nestjs-cls';
import { PrismaClient } from '../../generated/prisma/client.js';
import { createTenantClient } from '../tenant/tenant-client.js';
import { AppClsStore } from '../tenant/tenant.types.js';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  /**
   * Company-scoped client. Use this for ALL business data: companyId is added to every query automatically.
   * Use the plain `this.prisma.xxx` (unscoped) only where there is no company yet: login, seed, system jobs.
   */
  readonly tenant: ReturnType<typeof createTenantClient>;

  constructor(config: ConfigService, cls: ClsService<AppClsStore>) {
    super({
      adapter: new PrismaPg({ connectionString: config.getOrThrow<string>('DATABASE_URL') }),
    });
    this.tenant = createTenantClient(this, () => cls.get('companyId'));
  }

  async onModuleInit() { await this.$connect(); }
  async onModuleDestroy() { await this.$disconnect(); }
}