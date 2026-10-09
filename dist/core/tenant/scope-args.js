export const TENANT_MODELS = new Set([
    'User',
    'Role',
    'AuditLog',
    'File',
    'Setting',
    'DocumentCounter',
    'IdempotencyKey',
]);
export function scopeArgs(operation, args, companyId) {
    const a = { ...(args ?? {}) };
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
                ? a.data.map((d) => ({ ...d, companyId }))
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
//# sourceMappingURL=scope-args.js.map