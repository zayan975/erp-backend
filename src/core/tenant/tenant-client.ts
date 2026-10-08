/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PrismaClient } from '../../generated/prisma/client.js';
import { scopeArgs, TENANT_MODELS } from './scope-args.js';

/** Wraps a PrismaClient so every query on a tenant model is automatically limited to the current company. */
export function createTenantClient(client: PrismaClient, getCompanyId: () => string | undefined) {
  return client.$extends({
    name: 'tenant-scope',
    query: {
      $allModels: {
        async $allOperations({ model, operation, args, query }) {
          if (!TENANT_MODELS.has(model)) return query(args);
          const companyId = getCompanyId();
          if (!companyId) {
            throw new Error(`No tenant context for ${model}.${operation} (is the request authenticated?)`);
          }
          return query(scopeArgs(operation, args as any, companyId) as any);
        },
      },
    },
  });
}