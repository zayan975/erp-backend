import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CompanyModel = runtime.Types.Result.DefaultSelection<Prisma.$CompanyPayload>;
export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
};
export type CompanyMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    ntn: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type CompanyMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    ntn: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type CompanyCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    ntn: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type CompanyMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    ntn?: true;
    isActive?: true;
    createdAt?: true;
};
export type CompanyMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    ntn?: true;
    isActive?: true;
    createdAt?: true;
};
export type CompanyCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    ntn?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type CompanyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompanyWhereInput;
    orderBy?: Prisma.CompanyOrderByWithRelationInput | Prisma.CompanyOrderByWithRelationInput[];
    cursor?: Prisma.CompanyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CompanyCountAggregateInputType;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
};
export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCompany[P]> : Prisma.GetScalarType<T[P], AggregateCompany[P]>;
};
export type CompanyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompanyWhereInput;
    orderBy?: Prisma.CompanyOrderByWithAggregationInput | Prisma.CompanyOrderByWithAggregationInput[];
    by: Prisma.CompanyScalarFieldEnum[] | Prisma.CompanyScalarFieldEnum;
    having?: Prisma.CompanyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
};
export type CompanyGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    ntn: string | null;
    isActive: boolean;
    createdAt: Date;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
};
export type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CompanyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CompanyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CompanyGroupByOutputType[P]>;
}>>;
export type CompanyWhereInput = {
    AND?: Prisma.CompanyWhereInput | Prisma.CompanyWhereInput[];
    OR?: Prisma.CompanyWhereInput[];
    NOT?: Prisma.CompanyWhereInput | Prisma.CompanyWhereInput[];
    id?: Prisma.UuidFilter<"Company"> | string;
    name?: Prisma.StringFilter<"Company"> | string;
    slug?: Prisma.StringFilter<"Company"> | string;
    ntn?: Prisma.StringNullableFilter<"Company"> | string | null;
    isActive?: Prisma.BoolFilter<"Company"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Company"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    roles?: Prisma.RoleListRelationFilter;
    settings?: Prisma.SettingListRelationFilter;
    files?: Prisma.FileListRelationFilter;
    documentCounters?: Prisma.DocumentCounterListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
    idempotencyKeys?: Prisma.IdempotencyKeyListRelationFilter;
};
export type CompanyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    ntn?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    users?: Prisma.UserOrderByRelationAggregateInput;
    roles?: Prisma.RoleOrderByRelationAggregateInput;
    settings?: Prisma.SettingOrderByRelationAggregateInput;
    files?: Prisma.FileOrderByRelationAggregateInput;
    documentCounters?: Prisma.DocumentCounterOrderByRelationAggregateInput;
    auditLogs?: Prisma.AuditLogOrderByRelationAggregateInput;
    idempotencyKeys?: Prisma.IdempotencyKeyOrderByRelationAggregateInput;
};
export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.CompanyWhereInput | Prisma.CompanyWhereInput[];
    OR?: Prisma.CompanyWhereInput[];
    NOT?: Prisma.CompanyWhereInput | Prisma.CompanyWhereInput[];
    name?: Prisma.StringFilter<"Company"> | string;
    ntn?: Prisma.StringNullableFilter<"Company"> | string | null;
    isActive?: Prisma.BoolFilter<"Company"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Company"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    roles?: Prisma.RoleListRelationFilter;
    settings?: Prisma.SettingListRelationFilter;
    files?: Prisma.FileListRelationFilter;
    documentCounters?: Prisma.DocumentCounterListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
    idempotencyKeys?: Prisma.IdempotencyKeyListRelationFilter;
}, "id" | "slug">;
export type CompanyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    ntn?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CompanyCountOrderByAggregateInput;
    _max?: Prisma.CompanyMaxOrderByAggregateInput;
    _min?: Prisma.CompanyMinOrderByAggregateInput;
};
export type CompanyScalarWhereWithAggregatesInput = {
    AND?: Prisma.CompanyScalarWhereWithAggregatesInput | Prisma.CompanyScalarWhereWithAggregatesInput[];
    OR?: Prisma.CompanyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CompanyScalarWhereWithAggregatesInput | Prisma.CompanyScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Company"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Company"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Company"> | string;
    ntn?: Prisma.StringNullableWithAggregatesFilter<"Company"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Company"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Company"> | Date | string;
};
export type CompanyCreateInput = {
    id?: string;
    name: string;
    slug: string;
    ntn?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutCompanyInput;
    roles?: Prisma.RoleCreateNestedManyWithoutCompanyInput;
    settings?: Prisma.SettingCreateNestedManyWithoutCompanyInput;
    files?: Prisma.FileCreateNestedManyWithoutCompanyInput;
    documentCounters?: Prisma.DocumentCounterCreateNestedManyWithoutCompanyInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutCompanyInput;
    idempotencyKeys?: Prisma.IdempotencyKeyCreateNestedManyWithoutCompanyInput;
};
export type CompanyUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    ntn?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutCompanyInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutCompanyInput;
    settings?: Prisma.SettingUncheckedCreateNestedManyWithoutCompanyInput;
    files?: Prisma.FileUncheckedCreateNestedManyWithoutCompanyInput;
    documentCounters?: Prisma.DocumentCounterUncheckedCreateNestedManyWithoutCompanyInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutCompanyInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedCreateNestedManyWithoutCompanyInput;
};
export type CompanyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutCompanyNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutCompanyNestedInput;
    settings?: Prisma.SettingUpdateManyWithoutCompanyNestedInput;
    files?: Prisma.FileUpdateManyWithoutCompanyNestedInput;
    documentCounters?: Prisma.DocumentCounterUpdateManyWithoutCompanyNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutCompanyNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUpdateManyWithoutCompanyNestedInput;
};
export type CompanyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutCompanyNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutCompanyNestedInput;
    settings?: Prisma.SettingUncheckedUpdateManyWithoutCompanyNestedInput;
    files?: Prisma.FileUncheckedUpdateManyWithoutCompanyNestedInput;
    documentCounters?: Prisma.DocumentCounterUncheckedUpdateManyWithoutCompanyNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutCompanyNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedUpdateManyWithoutCompanyNestedInput;
};
export type CompanyCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    ntn?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type CompanyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CompanyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    ntn?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CompanyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    ntn?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CompanyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    ntn?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CompanyScalarRelationFilter = {
    is?: Prisma.CompanyWhereInput;
    isNot?: Prisma.CompanyWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.CompanyCreateWithoutUsersInput, Prisma.CompanyUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.CompanyCreateOrConnectWithoutUsersInput;
    connect?: Prisma.CompanyWhereUniqueInput;
};
export type CompanyUpdateOneRequiredWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.CompanyCreateWithoutUsersInput, Prisma.CompanyUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.CompanyCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.CompanyUpsertWithoutUsersInput;
    connect?: Prisma.CompanyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CompanyUpdateToOneWithWhereWithoutUsersInput, Prisma.CompanyUpdateWithoutUsersInput>, Prisma.CompanyUncheckedUpdateWithoutUsersInput>;
};
export type CompanyCreateNestedOneWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.CompanyCreateWithoutRolesInput, Prisma.CompanyUncheckedCreateWithoutRolesInput>;
    connectOrCreate?: Prisma.CompanyCreateOrConnectWithoutRolesInput;
    connect?: Prisma.CompanyWhereUniqueInput;
};
export type CompanyUpdateOneRequiredWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.CompanyCreateWithoutRolesInput, Prisma.CompanyUncheckedCreateWithoutRolesInput>;
    connectOrCreate?: Prisma.CompanyCreateOrConnectWithoutRolesInput;
    upsert?: Prisma.CompanyUpsertWithoutRolesInput;
    connect?: Prisma.CompanyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CompanyUpdateToOneWithWhereWithoutRolesInput, Prisma.CompanyUpdateWithoutRolesInput>, Prisma.CompanyUncheckedUpdateWithoutRolesInput>;
};
export type CompanyCreateNestedOneWithoutAuditLogsInput = {
    create?: Prisma.XOR<Prisma.CompanyCreateWithoutAuditLogsInput, Prisma.CompanyUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.CompanyCreateOrConnectWithoutAuditLogsInput;
    connect?: Prisma.CompanyWhereUniqueInput;
};
export type CompanyUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: Prisma.XOR<Prisma.CompanyCreateWithoutAuditLogsInput, Prisma.CompanyUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.CompanyCreateOrConnectWithoutAuditLogsInput;
    upsert?: Prisma.CompanyUpsertWithoutAuditLogsInput;
    connect?: Prisma.CompanyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CompanyUpdateToOneWithWhereWithoutAuditLogsInput, Prisma.CompanyUpdateWithoutAuditLogsInput>, Prisma.CompanyUncheckedUpdateWithoutAuditLogsInput>;
};
export type CompanyCreateNestedOneWithoutFilesInput = {
    create?: Prisma.XOR<Prisma.CompanyCreateWithoutFilesInput, Prisma.CompanyUncheckedCreateWithoutFilesInput>;
    connectOrCreate?: Prisma.CompanyCreateOrConnectWithoutFilesInput;
    connect?: Prisma.CompanyWhereUniqueInput;
};
export type CompanyUpdateOneRequiredWithoutFilesNestedInput = {
    create?: Prisma.XOR<Prisma.CompanyCreateWithoutFilesInput, Prisma.CompanyUncheckedCreateWithoutFilesInput>;
    connectOrCreate?: Prisma.CompanyCreateOrConnectWithoutFilesInput;
    upsert?: Prisma.CompanyUpsertWithoutFilesInput;
    connect?: Prisma.CompanyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CompanyUpdateToOneWithWhereWithoutFilesInput, Prisma.CompanyUpdateWithoutFilesInput>, Prisma.CompanyUncheckedUpdateWithoutFilesInput>;
};
export type CompanyCreateNestedOneWithoutSettingsInput = {
    create?: Prisma.XOR<Prisma.CompanyCreateWithoutSettingsInput, Prisma.CompanyUncheckedCreateWithoutSettingsInput>;
    connectOrCreate?: Prisma.CompanyCreateOrConnectWithoutSettingsInput;
    connect?: Prisma.CompanyWhereUniqueInput;
};
export type CompanyUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: Prisma.XOR<Prisma.CompanyCreateWithoutSettingsInput, Prisma.CompanyUncheckedCreateWithoutSettingsInput>;
    connectOrCreate?: Prisma.CompanyCreateOrConnectWithoutSettingsInput;
    upsert?: Prisma.CompanyUpsertWithoutSettingsInput;
    connect?: Prisma.CompanyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CompanyUpdateToOneWithWhereWithoutSettingsInput, Prisma.CompanyUpdateWithoutSettingsInput>, Prisma.CompanyUncheckedUpdateWithoutSettingsInput>;
};
export type CompanyCreateNestedOneWithoutDocumentCountersInput = {
    create?: Prisma.XOR<Prisma.CompanyCreateWithoutDocumentCountersInput, Prisma.CompanyUncheckedCreateWithoutDocumentCountersInput>;
    connectOrCreate?: Prisma.CompanyCreateOrConnectWithoutDocumentCountersInput;
    connect?: Prisma.CompanyWhereUniqueInput;
};
export type CompanyUpdateOneRequiredWithoutDocumentCountersNestedInput = {
    create?: Prisma.XOR<Prisma.CompanyCreateWithoutDocumentCountersInput, Prisma.CompanyUncheckedCreateWithoutDocumentCountersInput>;
    connectOrCreate?: Prisma.CompanyCreateOrConnectWithoutDocumentCountersInput;
    upsert?: Prisma.CompanyUpsertWithoutDocumentCountersInput;
    connect?: Prisma.CompanyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CompanyUpdateToOneWithWhereWithoutDocumentCountersInput, Prisma.CompanyUpdateWithoutDocumentCountersInput>, Prisma.CompanyUncheckedUpdateWithoutDocumentCountersInput>;
};
export type CompanyCreateNestedOneWithoutIdempotencyKeysInput = {
    create?: Prisma.XOR<Prisma.CompanyCreateWithoutIdempotencyKeysInput, Prisma.CompanyUncheckedCreateWithoutIdempotencyKeysInput>;
    connectOrCreate?: Prisma.CompanyCreateOrConnectWithoutIdempotencyKeysInput;
    connect?: Prisma.CompanyWhereUniqueInput;
};
export type CompanyUpdateOneRequiredWithoutIdempotencyKeysNestedInput = {
    create?: Prisma.XOR<Prisma.CompanyCreateWithoutIdempotencyKeysInput, Prisma.CompanyUncheckedCreateWithoutIdempotencyKeysInput>;
    connectOrCreate?: Prisma.CompanyCreateOrConnectWithoutIdempotencyKeysInput;
    upsert?: Prisma.CompanyUpsertWithoutIdempotencyKeysInput;
    connect?: Prisma.CompanyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CompanyUpdateToOneWithWhereWithoutIdempotencyKeysInput, Prisma.CompanyUpdateWithoutIdempotencyKeysInput>, Prisma.CompanyUncheckedUpdateWithoutIdempotencyKeysInput>;
};
export type CompanyCreateWithoutUsersInput = {
    id?: string;
    name: string;
    slug: string;
    ntn?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    roles?: Prisma.RoleCreateNestedManyWithoutCompanyInput;
    settings?: Prisma.SettingCreateNestedManyWithoutCompanyInput;
    files?: Prisma.FileCreateNestedManyWithoutCompanyInput;
    documentCounters?: Prisma.DocumentCounterCreateNestedManyWithoutCompanyInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutCompanyInput;
    idempotencyKeys?: Prisma.IdempotencyKeyCreateNestedManyWithoutCompanyInput;
};
export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    slug: string;
    ntn?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutCompanyInput;
    settings?: Prisma.SettingUncheckedCreateNestedManyWithoutCompanyInput;
    files?: Prisma.FileUncheckedCreateNestedManyWithoutCompanyInput;
    documentCounters?: Prisma.DocumentCounterUncheckedCreateNestedManyWithoutCompanyInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutCompanyInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedCreateNestedManyWithoutCompanyInput;
};
export type CompanyCreateOrConnectWithoutUsersInput = {
    where: Prisma.CompanyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompanyCreateWithoutUsersInput, Prisma.CompanyUncheckedCreateWithoutUsersInput>;
};
export type CompanyUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.CompanyUpdateWithoutUsersInput, Prisma.CompanyUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.CompanyCreateWithoutUsersInput, Prisma.CompanyUncheckedCreateWithoutUsersInput>;
    where?: Prisma.CompanyWhereInput;
};
export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.CompanyWhereInput;
    data: Prisma.XOR<Prisma.CompanyUpdateWithoutUsersInput, Prisma.CompanyUncheckedUpdateWithoutUsersInput>;
};
export type CompanyUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.RoleUpdateManyWithoutCompanyNestedInput;
    settings?: Prisma.SettingUpdateManyWithoutCompanyNestedInput;
    files?: Prisma.FileUpdateManyWithoutCompanyNestedInput;
    documentCounters?: Prisma.DocumentCounterUpdateManyWithoutCompanyNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutCompanyNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUpdateManyWithoutCompanyNestedInput;
};
export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutCompanyNestedInput;
    settings?: Prisma.SettingUncheckedUpdateManyWithoutCompanyNestedInput;
    files?: Prisma.FileUncheckedUpdateManyWithoutCompanyNestedInput;
    documentCounters?: Prisma.DocumentCounterUncheckedUpdateManyWithoutCompanyNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutCompanyNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedUpdateManyWithoutCompanyNestedInput;
};
export type CompanyCreateWithoutRolesInput = {
    id?: string;
    name: string;
    slug: string;
    ntn?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutCompanyInput;
    settings?: Prisma.SettingCreateNestedManyWithoutCompanyInput;
    files?: Prisma.FileCreateNestedManyWithoutCompanyInput;
    documentCounters?: Prisma.DocumentCounterCreateNestedManyWithoutCompanyInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutCompanyInput;
    idempotencyKeys?: Prisma.IdempotencyKeyCreateNestedManyWithoutCompanyInput;
};
export type CompanyUncheckedCreateWithoutRolesInput = {
    id?: string;
    name: string;
    slug: string;
    ntn?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutCompanyInput;
    settings?: Prisma.SettingUncheckedCreateNestedManyWithoutCompanyInput;
    files?: Prisma.FileUncheckedCreateNestedManyWithoutCompanyInput;
    documentCounters?: Prisma.DocumentCounterUncheckedCreateNestedManyWithoutCompanyInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutCompanyInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedCreateNestedManyWithoutCompanyInput;
};
export type CompanyCreateOrConnectWithoutRolesInput = {
    where: Prisma.CompanyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompanyCreateWithoutRolesInput, Prisma.CompanyUncheckedCreateWithoutRolesInput>;
};
export type CompanyUpsertWithoutRolesInput = {
    update: Prisma.XOR<Prisma.CompanyUpdateWithoutRolesInput, Prisma.CompanyUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.CompanyCreateWithoutRolesInput, Prisma.CompanyUncheckedCreateWithoutRolesInput>;
    where?: Prisma.CompanyWhereInput;
};
export type CompanyUpdateToOneWithWhereWithoutRolesInput = {
    where?: Prisma.CompanyWhereInput;
    data: Prisma.XOR<Prisma.CompanyUpdateWithoutRolesInput, Prisma.CompanyUncheckedUpdateWithoutRolesInput>;
};
export type CompanyUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutCompanyNestedInput;
    settings?: Prisma.SettingUpdateManyWithoutCompanyNestedInput;
    files?: Prisma.FileUpdateManyWithoutCompanyNestedInput;
    documentCounters?: Prisma.DocumentCounterUpdateManyWithoutCompanyNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutCompanyNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUpdateManyWithoutCompanyNestedInput;
};
export type CompanyUncheckedUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutCompanyNestedInput;
    settings?: Prisma.SettingUncheckedUpdateManyWithoutCompanyNestedInput;
    files?: Prisma.FileUncheckedUpdateManyWithoutCompanyNestedInput;
    documentCounters?: Prisma.DocumentCounterUncheckedUpdateManyWithoutCompanyNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutCompanyNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedUpdateManyWithoutCompanyNestedInput;
};
export type CompanyCreateWithoutAuditLogsInput = {
    id?: string;
    name: string;
    slug: string;
    ntn?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutCompanyInput;
    roles?: Prisma.RoleCreateNestedManyWithoutCompanyInput;
    settings?: Prisma.SettingCreateNestedManyWithoutCompanyInput;
    files?: Prisma.FileCreateNestedManyWithoutCompanyInput;
    documentCounters?: Prisma.DocumentCounterCreateNestedManyWithoutCompanyInput;
    idempotencyKeys?: Prisma.IdempotencyKeyCreateNestedManyWithoutCompanyInput;
};
export type CompanyUncheckedCreateWithoutAuditLogsInput = {
    id?: string;
    name: string;
    slug: string;
    ntn?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutCompanyInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutCompanyInput;
    settings?: Prisma.SettingUncheckedCreateNestedManyWithoutCompanyInput;
    files?: Prisma.FileUncheckedCreateNestedManyWithoutCompanyInput;
    documentCounters?: Prisma.DocumentCounterUncheckedCreateNestedManyWithoutCompanyInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedCreateNestedManyWithoutCompanyInput;
};
export type CompanyCreateOrConnectWithoutAuditLogsInput = {
    where: Prisma.CompanyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompanyCreateWithoutAuditLogsInput, Prisma.CompanyUncheckedCreateWithoutAuditLogsInput>;
};
export type CompanyUpsertWithoutAuditLogsInput = {
    update: Prisma.XOR<Prisma.CompanyUpdateWithoutAuditLogsInput, Prisma.CompanyUncheckedUpdateWithoutAuditLogsInput>;
    create: Prisma.XOR<Prisma.CompanyCreateWithoutAuditLogsInput, Prisma.CompanyUncheckedCreateWithoutAuditLogsInput>;
    where?: Prisma.CompanyWhereInput;
};
export type CompanyUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: Prisma.CompanyWhereInput;
    data: Prisma.XOR<Prisma.CompanyUpdateWithoutAuditLogsInput, Prisma.CompanyUncheckedUpdateWithoutAuditLogsInput>;
};
export type CompanyUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutCompanyNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutCompanyNestedInput;
    settings?: Prisma.SettingUpdateManyWithoutCompanyNestedInput;
    files?: Prisma.FileUpdateManyWithoutCompanyNestedInput;
    documentCounters?: Prisma.DocumentCounterUpdateManyWithoutCompanyNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUpdateManyWithoutCompanyNestedInput;
};
export type CompanyUncheckedUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutCompanyNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutCompanyNestedInput;
    settings?: Prisma.SettingUncheckedUpdateManyWithoutCompanyNestedInput;
    files?: Prisma.FileUncheckedUpdateManyWithoutCompanyNestedInput;
    documentCounters?: Prisma.DocumentCounterUncheckedUpdateManyWithoutCompanyNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedUpdateManyWithoutCompanyNestedInput;
};
export type CompanyCreateWithoutFilesInput = {
    id?: string;
    name: string;
    slug: string;
    ntn?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutCompanyInput;
    roles?: Prisma.RoleCreateNestedManyWithoutCompanyInput;
    settings?: Prisma.SettingCreateNestedManyWithoutCompanyInput;
    documentCounters?: Prisma.DocumentCounterCreateNestedManyWithoutCompanyInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutCompanyInput;
    idempotencyKeys?: Prisma.IdempotencyKeyCreateNestedManyWithoutCompanyInput;
};
export type CompanyUncheckedCreateWithoutFilesInput = {
    id?: string;
    name: string;
    slug: string;
    ntn?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutCompanyInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutCompanyInput;
    settings?: Prisma.SettingUncheckedCreateNestedManyWithoutCompanyInput;
    documentCounters?: Prisma.DocumentCounterUncheckedCreateNestedManyWithoutCompanyInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutCompanyInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedCreateNestedManyWithoutCompanyInput;
};
export type CompanyCreateOrConnectWithoutFilesInput = {
    where: Prisma.CompanyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompanyCreateWithoutFilesInput, Prisma.CompanyUncheckedCreateWithoutFilesInput>;
};
export type CompanyUpsertWithoutFilesInput = {
    update: Prisma.XOR<Prisma.CompanyUpdateWithoutFilesInput, Prisma.CompanyUncheckedUpdateWithoutFilesInput>;
    create: Prisma.XOR<Prisma.CompanyCreateWithoutFilesInput, Prisma.CompanyUncheckedCreateWithoutFilesInput>;
    where?: Prisma.CompanyWhereInput;
};
export type CompanyUpdateToOneWithWhereWithoutFilesInput = {
    where?: Prisma.CompanyWhereInput;
    data: Prisma.XOR<Prisma.CompanyUpdateWithoutFilesInput, Prisma.CompanyUncheckedUpdateWithoutFilesInput>;
};
export type CompanyUpdateWithoutFilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutCompanyNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutCompanyNestedInput;
    settings?: Prisma.SettingUpdateManyWithoutCompanyNestedInput;
    documentCounters?: Prisma.DocumentCounterUpdateManyWithoutCompanyNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutCompanyNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUpdateManyWithoutCompanyNestedInput;
};
export type CompanyUncheckedUpdateWithoutFilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutCompanyNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutCompanyNestedInput;
    settings?: Prisma.SettingUncheckedUpdateManyWithoutCompanyNestedInput;
    documentCounters?: Prisma.DocumentCounterUncheckedUpdateManyWithoutCompanyNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutCompanyNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedUpdateManyWithoutCompanyNestedInput;
};
export type CompanyCreateWithoutSettingsInput = {
    id?: string;
    name: string;
    slug: string;
    ntn?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutCompanyInput;
    roles?: Prisma.RoleCreateNestedManyWithoutCompanyInput;
    files?: Prisma.FileCreateNestedManyWithoutCompanyInput;
    documentCounters?: Prisma.DocumentCounterCreateNestedManyWithoutCompanyInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutCompanyInput;
    idempotencyKeys?: Prisma.IdempotencyKeyCreateNestedManyWithoutCompanyInput;
};
export type CompanyUncheckedCreateWithoutSettingsInput = {
    id?: string;
    name: string;
    slug: string;
    ntn?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutCompanyInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutCompanyInput;
    files?: Prisma.FileUncheckedCreateNestedManyWithoutCompanyInput;
    documentCounters?: Prisma.DocumentCounterUncheckedCreateNestedManyWithoutCompanyInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutCompanyInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedCreateNestedManyWithoutCompanyInput;
};
export type CompanyCreateOrConnectWithoutSettingsInput = {
    where: Prisma.CompanyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompanyCreateWithoutSettingsInput, Prisma.CompanyUncheckedCreateWithoutSettingsInput>;
};
export type CompanyUpsertWithoutSettingsInput = {
    update: Prisma.XOR<Prisma.CompanyUpdateWithoutSettingsInput, Prisma.CompanyUncheckedUpdateWithoutSettingsInput>;
    create: Prisma.XOR<Prisma.CompanyCreateWithoutSettingsInput, Prisma.CompanyUncheckedCreateWithoutSettingsInput>;
    where?: Prisma.CompanyWhereInput;
};
export type CompanyUpdateToOneWithWhereWithoutSettingsInput = {
    where?: Prisma.CompanyWhereInput;
    data: Prisma.XOR<Prisma.CompanyUpdateWithoutSettingsInput, Prisma.CompanyUncheckedUpdateWithoutSettingsInput>;
};
export type CompanyUpdateWithoutSettingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutCompanyNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutCompanyNestedInput;
    files?: Prisma.FileUpdateManyWithoutCompanyNestedInput;
    documentCounters?: Prisma.DocumentCounterUpdateManyWithoutCompanyNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutCompanyNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUpdateManyWithoutCompanyNestedInput;
};
export type CompanyUncheckedUpdateWithoutSettingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutCompanyNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutCompanyNestedInput;
    files?: Prisma.FileUncheckedUpdateManyWithoutCompanyNestedInput;
    documentCounters?: Prisma.DocumentCounterUncheckedUpdateManyWithoutCompanyNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutCompanyNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedUpdateManyWithoutCompanyNestedInput;
};
export type CompanyCreateWithoutDocumentCountersInput = {
    id?: string;
    name: string;
    slug: string;
    ntn?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutCompanyInput;
    roles?: Prisma.RoleCreateNestedManyWithoutCompanyInput;
    settings?: Prisma.SettingCreateNestedManyWithoutCompanyInput;
    files?: Prisma.FileCreateNestedManyWithoutCompanyInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutCompanyInput;
    idempotencyKeys?: Prisma.IdempotencyKeyCreateNestedManyWithoutCompanyInput;
};
export type CompanyUncheckedCreateWithoutDocumentCountersInput = {
    id?: string;
    name: string;
    slug: string;
    ntn?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutCompanyInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutCompanyInput;
    settings?: Prisma.SettingUncheckedCreateNestedManyWithoutCompanyInput;
    files?: Prisma.FileUncheckedCreateNestedManyWithoutCompanyInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutCompanyInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedCreateNestedManyWithoutCompanyInput;
};
export type CompanyCreateOrConnectWithoutDocumentCountersInput = {
    where: Prisma.CompanyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompanyCreateWithoutDocumentCountersInput, Prisma.CompanyUncheckedCreateWithoutDocumentCountersInput>;
};
export type CompanyUpsertWithoutDocumentCountersInput = {
    update: Prisma.XOR<Prisma.CompanyUpdateWithoutDocumentCountersInput, Prisma.CompanyUncheckedUpdateWithoutDocumentCountersInput>;
    create: Prisma.XOR<Prisma.CompanyCreateWithoutDocumentCountersInput, Prisma.CompanyUncheckedCreateWithoutDocumentCountersInput>;
    where?: Prisma.CompanyWhereInput;
};
export type CompanyUpdateToOneWithWhereWithoutDocumentCountersInput = {
    where?: Prisma.CompanyWhereInput;
    data: Prisma.XOR<Prisma.CompanyUpdateWithoutDocumentCountersInput, Prisma.CompanyUncheckedUpdateWithoutDocumentCountersInput>;
};
export type CompanyUpdateWithoutDocumentCountersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutCompanyNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutCompanyNestedInput;
    settings?: Prisma.SettingUpdateManyWithoutCompanyNestedInput;
    files?: Prisma.FileUpdateManyWithoutCompanyNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutCompanyNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUpdateManyWithoutCompanyNestedInput;
};
export type CompanyUncheckedUpdateWithoutDocumentCountersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutCompanyNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutCompanyNestedInput;
    settings?: Prisma.SettingUncheckedUpdateManyWithoutCompanyNestedInput;
    files?: Prisma.FileUncheckedUpdateManyWithoutCompanyNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutCompanyNestedInput;
    idempotencyKeys?: Prisma.IdempotencyKeyUncheckedUpdateManyWithoutCompanyNestedInput;
};
export type CompanyCreateWithoutIdempotencyKeysInput = {
    id?: string;
    name: string;
    slug: string;
    ntn?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutCompanyInput;
    roles?: Prisma.RoleCreateNestedManyWithoutCompanyInput;
    settings?: Prisma.SettingCreateNestedManyWithoutCompanyInput;
    files?: Prisma.FileCreateNestedManyWithoutCompanyInput;
    documentCounters?: Prisma.DocumentCounterCreateNestedManyWithoutCompanyInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutCompanyInput;
};
export type CompanyUncheckedCreateWithoutIdempotencyKeysInput = {
    id?: string;
    name: string;
    slug: string;
    ntn?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutCompanyInput;
    roles?: Prisma.RoleUncheckedCreateNestedManyWithoutCompanyInput;
    settings?: Prisma.SettingUncheckedCreateNestedManyWithoutCompanyInput;
    files?: Prisma.FileUncheckedCreateNestedManyWithoutCompanyInput;
    documentCounters?: Prisma.DocumentCounterUncheckedCreateNestedManyWithoutCompanyInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutCompanyInput;
};
export type CompanyCreateOrConnectWithoutIdempotencyKeysInput = {
    where: Prisma.CompanyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompanyCreateWithoutIdempotencyKeysInput, Prisma.CompanyUncheckedCreateWithoutIdempotencyKeysInput>;
};
export type CompanyUpsertWithoutIdempotencyKeysInput = {
    update: Prisma.XOR<Prisma.CompanyUpdateWithoutIdempotencyKeysInput, Prisma.CompanyUncheckedUpdateWithoutIdempotencyKeysInput>;
    create: Prisma.XOR<Prisma.CompanyCreateWithoutIdempotencyKeysInput, Prisma.CompanyUncheckedCreateWithoutIdempotencyKeysInput>;
    where?: Prisma.CompanyWhereInput;
};
export type CompanyUpdateToOneWithWhereWithoutIdempotencyKeysInput = {
    where?: Prisma.CompanyWhereInput;
    data: Prisma.XOR<Prisma.CompanyUpdateWithoutIdempotencyKeysInput, Prisma.CompanyUncheckedUpdateWithoutIdempotencyKeysInput>;
};
export type CompanyUpdateWithoutIdempotencyKeysInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutCompanyNestedInput;
    roles?: Prisma.RoleUpdateManyWithoutCompanyNestedInput;
    settings?: Prisma.SettingUpdateManyWithoutCompanyNestedInput;
    files?: Prisma.FileUpdateManyWithoutCompanyNestedInput;
    documentCounters?: Prisma.DocumentCounterUpdateManyWithoutCompanyNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutCompanyNestedInput;
};
export type CompanyUncheckedUpdateWithoutIdempotencyKeysInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ntn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutCompanyNestedInput;
    roles?: Prisma.RoleUncheckedUpdateManyWithoutCompanyNestedInput;
    settings?: Prisma.SettingUncheckedUpdateManyWithoutCompanyNestedInput;
    files?: Prisma.FileUncheckedUpdateManyWithoutCompanyNestedInput;
    documentCounters?: Prisma.DocumentCounterUncheckedUpdateManyWithoutCompanyNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutCompanyNestedInput;
};
export type CompanyCountOutputType = {
    users: number;
    roles: number;
    settings: number;
    files: number;
    documentCounters: number;
    auditLogs: number;
    idempotencyKeys: number;
};
export type CompanyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | CompanyCountOutputTypeCountUsersArgs;
    roles?: boolean | CompanyCountOutputTypeCountRolesArgs;
    settings?: boolean | CompanyCountOutputTypeCountSettingsArgs;
    files?: boolean | CompanyCountOutputTypeCountFilesArgs;
    documentCounters?: boolean | CompanyCountOutputTypeCountDocumentCountersArgs;
    auditLogs?: boolean | CompanyCountOutputTypeCountAuditLogsArgs;
    idempotencyKeys?: boolean | CompanyCountOutputTypeCountIdempotencyKeysArgs;
};
export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanyCountOutputTypeSelect<ExtArgs> | null;
};
export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type CompanyCountOutputTypeCountRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleWhereInput;
};
export type CompanyCountOutputTypeCountSettingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SettingWhereInput;
};
export type CompanyCountOutputTypeCountFilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileWhereInput;
};
export type CompanyCountOutputTypeCountDocumentCountersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentCounterWhereInput;
};
export type CompanyCountOutputTypeCountAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
};
export type CompanyCountOutputTypeCountIdempotencyKeysArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IdempotencyKeyWhereInput;
};
export type CompanySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    ntn?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    users?: boolean | Prisma.Company$usersArgs<ExtArgs>;
    roles?: boolean | Prisma.Company$rolesArgs<ExtArgs>;
    settings?: boolean | Prisma.Company$settingsArgs<ExtArgs>;
    files?: boolean | Prisma.Company$filesArgs<ExtArgs>;
    documentCounters?: boolean | Prisma.Company$documentCountersArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.Company$auditLogsArgs<ExtArgs>;
    idempotencyKeys?: boolean | Prisma.Company$idempotencyKeysArgs<ExtArgs>;
    _count?: boolean | Prisma.CompanyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["company"]>;
export type CompanySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    ntn?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["company"]>;
export type CompanySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    ntn?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["company"]>;
export type CompanySelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    ntn?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type CompanyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "ntn" | "isActive" | "createdAt", ExtArgs["result"]["company"]>;
export type CompanyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.Company$usersArgs<ExtArgs>;
    roles?: boolean | Prisma.Company$rolesArgs<ExtArgs>;
    settings?: boolean | Prisma.Company$settingsArgs<ExtArgs>;
    files?: boolean | Prisma.Company$filesArgs<ExtArgs>;
    documentCounters?: boolean | Prisma.Company$documentCountersArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.Company$auditLogsArgs<ExtArgs>;
    idempotencyKeys?: boolean | Prisma.Company$idempotencyKeysArgs<ExtArgs>;
    _count?: boolean | Prisma.CompanyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CompanyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CompanyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Company";
    objects: {
        users: Prisma.$UserPayload<ExtArgs>[];
        roles: Prisma.$RolePayload<ExtArgs>[];
        settings: Prisma.$SettingPayload<ExtArgs>[];
        files: Prisma.$FilePayload<ExtArgs>[];
        documentCounters: Prisma.$DocumentCounterPayload<ExtArgs>[];
        auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
        idempotencyKeys: Prisma.$IdempotencyKeyPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        ntn: string | null;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["company"]>;
    composites: {};
};
export type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CompanyPayload, S>;
export type CompanyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CompanyCountAggregateInputType | true;
};
export interface CompanyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Company'];
        meta: {
            name: 'Company';
        };
    };
    findUnique<T extends CompanyFindUniqueArgs>(args: Prisma.SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CompanyFindFirstArgs>(args?: Prisma.SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CompanyFindManyArgs>(args?: Prisma.SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CompanyCreateArgs>(args: Prisma.SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CompanyCreateManyArgs>(args?: Prisma.SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CompanyDeleteArgs>(args: Prisma.SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CompanyUpdateArgs>(args: Prisma.SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CompanyDeleteManyArgs>(args?: Prisma.SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CompanyUpdateManyArgs>(args: Prisma.SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CompanyUpsertArgs>(args: Prisma.SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CompanyCountArgs>(args?: Prisma.Subset<T, CompanyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CompanyCountAggregateOutputType> : number>;
    aggregate<T extends CompanyAggregateArgs>(args: Prisma.Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;
    groupBy<T extends CompanyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CompanyGroupByArgs['orderBy'];
    } : {
        orderBy?: CompanyGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CompanyFieldRefs;
}
export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.Company$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    roles<T extends Prisma.Company$rolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Company$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    settings<T extends Prisma.Company$settingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Company$settingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    files<T extends Prisma.Company$filesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Company$filesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    documentCounters<T extends Prisma.Company$documentCountersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Company$documentCountersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentCounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auditLogs<T extends Prisma.Company$auditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Company$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    idempotencyKeys<T extends Prisma.Company$idempotencyKeysArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Company$idempotencyKeysArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CompanyFieldRefs {
    readonly id: Prisma.FieldRef<"Company", 'String'>;
    readonly name: Prisma.FieldRef<"Company", 'String'>;
    readonly slug: Prisma.FieldRef<"Company", 'String'>;
    readonly ntn: Prisma.FieldRef<"Company", 'String'>;
    readonly isActive: Prisma.FieldRef<"Company", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Company", 'DateTime'>;
}
export type CompanyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanySelect<ExtArgs> | null;
    omit?: Prisma.CompanyOmit<ExtArgs> | null;
    include?: Prisma.CompanyInclude<ExtArgs> | null;
    where: Prisma.CompanyWhereUniqueInput;
};
export type CompanyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanySelect<ExtArgs> | null;
    omit?: Prisma.CompanyOmit<ExtArgs> | null;
    include?: Prisma.CompanyInclude<ExtArgs> | null;
    where: Prisma.CompanyWhereUniqueInput;
};
export type CompanyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanySelect<ExtArgs> | null;
    omit?: Prisma.CompanyOmit<ExtArgs> | null;
    include?: Prisma.CompanyInclude<ExtArgs> | null;
    where?: Prisma.CompanyWhereInput;
    orderBy?: Prisma.CompanyOrderByWithRelationInput | Prisma.CompanyOrderByWithRelationInput[];
    cursor?: Prisma.CompanyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CompanyScalarFieldEnum | Prisma.CompanyScalarFieldEnum[];
};
export type CompanyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanySelect<ExtArgs> | null;
    omit?: Prisma.CompanyOmit<ExtArgs> | null;
    include?: Prisma.CompanyInclude<ExtArgs> | null;
    where?: Prisma.CompanyWhereInput;
    orderBy?: Prisma.CompanyOrderByWithRelationInput | Prisma.CompanyOrderByWithRelationInput[];
    cursor?: Prisma.CompanyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CompanyScalarFieldEnum | Prisma.CompanyScalarFieldEnum[];
};
export type CompanyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanySelect<ExtArgs> | null;
    omit?: Prisma.CompanyOmit<ExtArgs> | null;
    include?: Prisma.CompanyInclude<ExtArgs> | null;
    where?: Prisma.CompanyWhereInput;
    orderBy?: Prisma.CompanyOrderByWithRelationInput | Prisma.CompanyOrderByWithRelationInput[];
    cursor?: Prisma.CompanyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CompanyScalarFieldEnum | Prisma.CompanyScalarFieldEnum[];
};
export type CompanyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanySelect<ExtArgs> | null;
    omit?: Prisma.CompanyOmit<ExtArgs> | null;
    include?: Prisma.CompanyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompanyCreateInput, Prisma.CompanyUncheckedCreateInput>;
};
export type CompanyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CompanyCreateManyInput | Prisma.CompanyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CompanyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CompanyOmit<ExtArgs> | null;
    data: Prisma.CompanyCreateManyInput | Prisma.CompanyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CompanyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanySelect<ExtArgs> | null;
    omit?: Prisma.CompanyOmit<ExtArgs> | null;
    include?: Prisma.CompanyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompanyUpdateInput, Prisma.CompanyUncheckedUpdateInput>;
    where: Prisma.CompanyWhereUniqueInput;
};
export type CompanyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CompanyUpdateManyMutationInput, Prisma.CompanyUncheckedUpdateManyInput>;
    where?: Prisma.CompanyWhereInput;
    limit?: number;
};
export type CompanyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CompanyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CompanyUpdateManyMutationInput, Prisma.CompanyUncheckedUpdateManyInput>;
    where?: Prisma.CompanyWhereInput;
    limit?: number;
};
export type CompanyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanySelect<ExtArgs> | null;
    omit?: Prisma.CompanyOmit<ExtArgs> | null;
    include?: Prisma.CompanyInclude<ExtArgs> | null;
    where: Prisma.CompanyWhereUniqueInput;
    create: Prisma.XOR<Prisma.CompanyCreateInput, Prisma.CompanyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CompanyUpdateInput, Prisma.CompanyUncheckedUpdateInput>;
};
export type CompanyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanySelect<ExtArgs> | null;
    omit?: Prisma.CompanyOmit<ExtArgs> | null;
    include?: Prisma.CompanyInclude<ExtArgs> | null;
    where: Prisma.CompanyWhereUniqueInput;
};
export type CompanyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CompanyWhereInput;
    limit?: number;
};
export type Company$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type Company$rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[];
    cursor?: Prisma.RoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[];
};
export type Company$settingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingSelect<ExtArgs> | null;
    omit?: Prisma.SettingOmit<ExtArgs> | null;
    include?: Prisma.SettingInclude<ExtArgs> | null;
    where?: Prisma.SettingWhereInput;
    orderBy?: Prisma.SettingOrderByWithRelationInput | Prisma.SettingOrderByWithRelationInput[];
    cursor?: Prisma.SettingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SettingScalarFieldEnum | Prisma.SettingScalarFieldEnum[];
};
export type Company$filesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    where?: Prisma.FileWhereInput;
    orderBy?: Prisma.FileOrderByWithRelationInput | Prisma.FileOrderByWithRelationInput[];
    cursor?: Prisma.FileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FileScalarFieldEnum | Prisma.FileScalarFieldEnum[];
};
export type Company$documentCountersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentCounterSelect<ExtArgs> | null;
    omit?: Prisma.DocumentCounterOmit<ExtArgs> | null;
    include?: Prisma.DocumentCounterInclude<ExtArgs> | null;
    where?: Prisma.DocumentCounterWhereInput;
    orderBy?: Prisma.DocumentCounterOrderByWithRelationInput | Prisma.DocumentCounterOrderByWithRelationInput[];
    cursor?: Prisma.DocumentCounterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocumentCounterScalarFieldEnum | Prisma.DocumentCounterScalarFieldEnum[];
};
export type Company$auditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithRelationInput | Prisma.AuditLogOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditLogScalarFieldEnum | Prisma.AuditLogScalarFieldEnum[];
};
export type Company$idempotencyKeysArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    include?: Prisma.IdempotencyKeyInclude<ExtArgs> | null;
    where?: Prisma.IdempotencyKeyWhereInput;
    orderBy?: Prisma.IdempotencyKeyOrderByWithRelationInput | Prisma.IdempotencyKeyOrderByWithRelationInput[];
    cursor?: Prisma.IdempotencyKeyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IdempotencyKeyScalarFieldEnum | Prisma.IdempotencyKeyScalarFieldEnum[];
};
export type CompanyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CompanySelect<ExtArgs> | null;
    omit?: Prisma.CompanyOmit<ExtArgs> | null;
    include?: Prisma.CompanyInclude<ExtArgs> | null;
};
