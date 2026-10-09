import { scopeArgs, TENANT_MODELS } from './scope-args.js';
export function createTenantClient(client, getCompanyId) {
    return client.$extends({
        name: 'tenant-scope',
        query: {
            $allModels: {
                async $allOperations({ model, operation, args, query }) {
                    if (!TENANT_MODELS.has(model))
                        return query(args);
                    const companyId = getCompanyId();
                    if (!companyId) {
                        throw new Error(`No tenant context for ${model}.${operation} (is the request authenticated?)`);
                    }
                    return query(scopeArgs(operation, args, companyId));
                },
            },
        },
    });
}
//# sourceMappingURL=tenant-client.js.map