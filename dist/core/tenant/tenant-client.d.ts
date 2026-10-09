import type { PrismaClient } from '../../generated/prisma/client.js';
export declare function createTenantClient(client: PrismaClient, getCompanyId: () => string | undefined): import("@prisma/client/runtime/client").DynamicClientExtensionThis<import("../../generated/prisma/internal/prismaNamespace.js").TypeMap<import("@prisma/client/runtime/client").InternalArgs & {
    result: {};
    model: {};
    query: {};
    client: {};
}, import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined>, import("../../generated/prisma/internal/prismaNamespace.js").TypeMapCb<import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined>, {
    result: {};
    model: {};
    query: {};
    client: {};
}>;
