import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Company: 'Company',
    User: 'User',
    Role: 'Role',
    Permission: 'Permission',
    RolePermission: 'RolePermission',
    RefreshToken: 'RefreshToken',
    AuditLog: 'AuditLog',
    File: 'File',
    Setting: 'Setting',
    DocumentCounter: 'DocumentCounter',
    IdempotencyKey: 'IdempotencyKey'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const CompanyScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    ntn: 'ntn',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
export const UserScalarFieldEnum = {
    id: 'id',
    companyId: 'companyId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    passwordHash: 'passwordHash',
    roleId: 'roleId',
    status: 'status',
    failedLogins: 'failedLogins',
    lockedUntil: 'lockedUntil',
    lastLoginAt: 'lastLoginAt',
    avatarFileId: 'avatarFileId',
    totpSecret: 'totpSecret',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
export const RoleScalarFieldEnum = {
    id: 'id',
    companyId: 'companyId',
    name: 'name',
    isSystem: 'isSystem',
    createdAt: 'createdAt'
};
export const PermissionScalarFieldEnum = {
    id: 'id',
    key: 'key',
    description: 'description'
};
export const RolePermissionScalarFieldEnum = {
    roleId: 'roleId',
    permissionId: 'permissionId'
};
export const RefreshTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    familyId: 'familyId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt',
    createdAt: 'createdAt',
    ip: 'ip',
    userAgent: 'userAgent'
};
export const AuditLogScalarFieldEnum = {
    id: 'id',
    companyId: 'companyId',
    userId: 'userId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    before: 'before',
    after: 'after',
    ip: 'ip',
    requestId: 'requestId',
    createdAt: 'createdAt'
};
export const FileScalarFieldEnum = {
    id: 'id',
    companyId: 'companyId',
    storageKey: 'storageKey',
    originalName: 'originalName',
    mimeType: 'mimeType',
    sizeBytes: 'sizeBytes',
    status: 'status',
    createdAt: 'createdAt',
    createdBy: 'createdBy'
};
export const SettingScalarFieldEnum = {
    id: 'id',
    companyId: 'companyId',
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt'
};
export const DocumentCounterScalarFieldEnum = {
    companyId: 'companyId',
    type: 'type',
    year: 'year',
    lastNo: 'lastNo'
};
export const IdempotencyKeyScalarFieldEnum = {
    id: 'id',
    companyId: 'companyId',
    key: 'key',
    userId: 'userId',
    requestHash: 'requestHash',
    responseCode: 'responseCode',
    responseBody: 'responseBody',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullableJsonNullValueInput = {
    DbNull: DbNull,
    JsonNull: JsonNull
};
export const JsonNullValueInput = {
    JsonNull: JsonNull
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map