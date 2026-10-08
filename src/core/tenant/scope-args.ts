/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Models that carry a companyId column. Every new table with companyId MUST be added here
 * (tenant.spec.ts fails if schema.prisma and this list disagree).
 */
export const TENANT_MODELS = new Set([
  'User',
  'Role',
  'AuditLog',
  'File',
  'Setting',
  'DocumentCounter',
  'IdempotencyKey',
]);

/**
 * Forces companyId into a Prisma query. A companyId passed by the caller is always overwritten,
 * so one company can never read or write another company's rows.
 * Convention: create/upsert data uses plain scalar fields, not `company: { connect }`.
 */
export function scopeArgs(
  operation: string,
  args: Record<string, any> | undefined,
  companyId: string,
): Record<string, any> {
  const a: Record<string, any> = { ...(args ?? {}) };

  switch (operation) {
    case 'findMany':
    case 'findFirst':
    case 'findFirstOrThrow':
    case 'findUnique':
    case 'findUniqueOrThrow':
    case 'count':
    case 'aggregate':
    case 'groupBy':
    case 'update':
    case 'updateMany':
    case 'updateManyAndReturn':
    case 'delete':
    case 'deleteMany':
      a.where = { ...(a.where ?? {}), companyId };
      return a;

    case 'create':
      a.data = { ...(a.data ?? {}), companyId };
      return a;

    case 'createMany':
    case 'createManyAndReturn':
      a.data = Array.isArray(a.data)
        ? a.data.map((d: any) => ({ ...d, companyId }))
        : { ...(a.data ?? {}), companyId };
      return a;

    case 'upsert':
      a.where = { ...(a.where ?? {}), companyId };
      a.create = { ...(a.create ?? {}), companyId };
      return a;

    default:
      throw new Error(`Operation "${operation}" is not supported on tenant-scoped models`);
  }
}