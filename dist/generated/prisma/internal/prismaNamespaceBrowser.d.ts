import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Company: "Company";
    readonly User: "User";
    readonly Role: "Role";
    readonly Permission: "Permission";
    readonly RolePermission: "RolePermission";
    readonly RefreshToken: "RefreshToken";
    readonly AuditLog: "AuditLog";
    readonly File: "File";
    readonly Setting: "Setting";
    readonly DocumentCounter: "DocumentCounter";
    readonly IdempotencyKey: "IdempotencyKey";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CompanyScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly ntn: "ntn";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
};
export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly companyId: "companyId";
    readonly name: "name";
    readonly email: "email";
    readonly phone: "phone";
    readonly passwordHash: "passwordHash";
    readonly roleId: "roleId";
    readonly status: "status";
    readonly failedLogins: "failedLogins";
    readonly lockedUntil: "lockedUntil";
    readonly lastLoginAt: "lastLoginAt";
    readonly avatarFileId: "avatarFileId";
    readonly totpSecret: "totpSecret";
    readonly createdAt: "createdAt";
    readonly createdBy: "createdBy";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly companyId: "companyId";
    readonly name: "name";
    readonly isSystem: "isSystem";
    readonly createdAt: "createdAt";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const PermissionScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly description: "description";
};
export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum];
export declare const RolePermissionScalarFieldEnum: {
    readonly roleId: "roleId";
    readonly permissionId: "permissionId";
};
export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly familyId: "familyId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
    readonly createdAt: "createdAt";
    readonly ip: "ip";
    readonly userAgent: "userAgent";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly companyId: "companyId";
    readonly userId: "userId";
    readonly action: "action";
    readonly entity: "entity";
    readonly entityId: "entityId";
    readonly before: "before";
    readonly after: "after";
    readonly ip: "ip";
    readonly requestId: "requestId";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const FileScalarFieldEnum: {
    readonly id: "id";
    readonly companyId: "companyId";
    readonly storageKey: "storageKey";
    readonly originalName: "originalName";
    readonly mimeType: "mimeType";
    readonly sizeBytes: "sizeBytes";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly createdBy: "createdBy";
};
export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum];
export declare const SettingScalarFieldEnum: {
    readonly id: "id";
    readonly companyId: "companyId";
    readonly key: "key";
    readonly value: "value";
    readonly updatedAt: "updatedAt";
};
export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum];
export declare const DocumentCounterScalarFieldEnum: {
    readonly companyId: "companyId";
    readonly type: "type";
    readonly year: "year";
    readonly lastNo: "lastNo";
};
export type DocumentCounterScalarFieldEnum = (typeof DocumentCounterScalarFieldEnum)[keyof typeof DocumentCounterScalarFieldEnum];
export declare const IdempotencyKeyScalarFieldEnum: {
    readonly id: "id";
    readonly companyId: "companyId";
    readonly key: "key";
    readonly userId: "userId";
    readonly requestHash: "requestHash";
    readonly responseCode: "responseCode";
    readonly responseBody: "responseBody";
    readonly createdAt: "createdAt";
};
export type IdempotencyKeyScalarFieldEnum = (typeof IdempotencyKeyScalarFieldEnum)[keyof typeof IdempotencyKeyScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
