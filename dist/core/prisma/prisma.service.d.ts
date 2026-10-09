import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClsService } from 'nestjs-cls';
import { PrismaClient } from '../../generated/prisma/client.js';
import { createTenantClient } from '../tenant/tenant-client.js';
import { AppClsStore } from '../tenant/tenant.types.js';
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    readonly tenant: ReturnType<typeof createTenantClient>;
    constructor(config: ConfigService, cls: ClsService<AppClsStore>);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
