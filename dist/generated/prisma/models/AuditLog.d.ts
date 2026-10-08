import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AuditLogModel = runtime.Types.Result.DefaultSelection<Prisma.$AuditLogPayload>;
export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null;
    _min: AuditLogMinAggregateOutputType | null;
    _max: AuditLogMaxAggregateOutputType | null;
};
export type AuditLogMinAggregateOutputType = {
    id: string | null;
    companyId: string | null;
    userId: string | null;
    action: string | null;
    entity: string | null;
    entityId: string | null;
    ip: string | null;
    requestId: string | null;
    createdAt: Date | null;
};
export type AuditLogMaxAggregateOutputType = {
    id: string | null;
    companyId: string | null;
    userId: string | null;
    action: string | null;
    entity: string | null;
    entityId: string | null;
    ip: string | null;
    requestId: string | null;
    createdAt: Date | null;
};
export type AuditLogCountAggregateOutputType = {
    id: number;
    companyId: number;
    userId: number;
    action: number;
    entity: number;
    entityId: number;
    before: number;
    after: number;
    ip: number;
    requestId: number;
    createdAt: number;
    _all: number;
};
export type AuditLogMinAggregateInputType = {
    id?: true;
    companyId?: true;
    userId?: true;
    action?: true;
    entity?: true;
    entityId?: true;
    ip?: true;
    requestId?: true;
    createdAt?: true;
};
export type AuditLogMaxAggregateInputType = {
    id?: true;
    companyId?: true;
    userId?: true;
    action?: true;
    entity?: true;
    entityId?: true;
    ip?: true;
    requestId?: true;
    createdAt?: true;
};
export type AuditLogCountAggregateInputType = {
    id?: true;
    companyId?: true;
    userId?: true;
    action?: true;
    entity?: true;
    entityId?: true;
    before?: true;
    after?: true;
    ip?: true;
    requestId?: true;
    createdAt?: true;
    _all?: true;
};
export type AuditLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithRelationInput | Prisma.AuditLogOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AuditLogCountAggregateInputType;
    _min?: AuditLogMinAggregateInputType;
    _max?: AuditLogMaxAggregateInputType;
};
export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
    [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuditLog[P]> : Prisma.GetScalarType<T[P], AggregateAuditLog[P]>;
};
export type AuditLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithAggregationInput | Prisma.AuditLogOrderByWithAggregationInput[];
    by: Prisma.AuditLogScalarFieldEnum[] | Prisma.AuditLogScalarFieldEnum;
    having?: Prisma.AuditLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuditLogCountAggregateInputType | true;
    _min?: AuditLogMinAggregateInputType;
    _max?: AuditLogMaxAggregateInputType;
};
export type AuditLogGroupByOutputType = {
    id: string;
    companyId: string;
    userId: string | null;
    action: string;
    entity: string;
    entityId: string | null;
    before: runtime.JsonValue | null;
    after: runtime.JsonValue | null;
    ip: string | null;
    requestId: string | null;
    createdAt: Date;
    _count: AuditLogCountAggregateOutputType | null;
    _min: AuditLogMinAggregateOutputType | null;
    _max: AuditLogMaxAggregateOutputType | null;
};
export type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuditLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuditLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuditLogGroupByOutputType[P]>;
}>>;
export type AuditLogWhereInput = {
    AND?: Prisma.AuditLogWhereInput | Prisma.AuditLogWhereInput[];
    OR?: Prisma.AuditLogWhereInput[];
    NOT?: Prisma.AuditLogWhereInput | Prisma.AuditLogWhereInput[];
    id?: Prisma.UuidFilter<"AuditLog"> | string;
    companyId?: Prisma.UuidFilter<"AuditLog"> | string;
    userId?: Prisma.UuidNullableFilter<"AuditLog"> | string | null;
    action?: Prisma.StringFilter<"AuditLog"> | string;
    entity?: Prisma.StringFilter<"AuditLog"> | string;
    entityId?: Prisma.StringNullableFilter<"AuditLog"> | string | null;
    before?: Prisma.JsonNullableFilter<"AuditLog">;
    after?: Prisma.JsonNullableFilter<"AuditLog">;
    ip?: Prisma.StringNullableFilter<"AuditLog"> | string | null;
    requestId?: Prisma.StringNullableFilter<"AuditLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AuditLog"> | Date | string;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
};
export type AuditLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entity?: Prisma.SortOrder;
    entityId?: Prisma.SortOrderInput | Prisma.SortOrder;
    before?: Prisma.SortOrderInput | Prisma.SortOrder;
    after?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    company?: Prisma.CompanyOrderByWithRelationInput;
};
export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AuditLogWhereInput | Prisma.AuditLogWhereInput[];
    OR?: Prisma.AuditLogWhereInput[];
    NOT?: Prisma.AuditLogWhereInput | Prisma.AuditLogWhereInput[];
    companyId?: Prisma.UuidFilter<"AuditLog"> | string;
    userId?: Prisma.UuidNullableFilter<"AuditLog"> | string | null;
    action?: Prisma.StringFilter<"AuditLog"> | string;
    entity?: Prisma.StringFilter<"AuditLog"> | string;
    entityId?: Prisma.StringNullableFilter<"AuditLog"> | string | null;
    before?: Prisma.JsonNullableFilter<"AuditLog">;
    after?: Prisma.JsonNullableFilter<"AuditLog">;
    ip?: Prisma.StringNullableFilter<"AuditLog"> | string | null;
    requestId?: Prisma.StringNullableFilter<"AuditLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AuditLog"> | Date | string;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
}, "id">;
export type AuditLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entity?: Prisma.SortOrder;
    entityId?: Prisma.SortOrderInput | Prisma.SortOrder;
    before?: Prisma.SortOrderInput | Prisma.SortOrder;
    after?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip?: Prisma.SortOrderInput | Prisma.SortOrder;
    requestId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AuditLogCountOrderByAggregateInput;
    _max?: Prisma.AuditLogMaxOrderByAggregateInput;
    _min?: Prisma.AuditLogMinOrderByAggregateInput;
};
export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.AuditLogScalarWhereWithAggregatesInput | Prisma.AuditLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.AuditLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AuditLogScalarWhereWithAggregatesInput | Prisma.AuditLogScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AuditLog"> | string;
    companyId?: Prisma.UuidWithAggregatesFilter<"AuditLog"> | string;
    userId?: Prisma.UuidNullableWithAggregatesFilter<"AuditLog"> | string | null;
    action?: Prisma.StringWithAggregatesFilter<"AuditLog"> | string;
    entity?: Prisma.StringWithAggregatesFilter<"AuditLog"> | string;
    entityId?: Prisma.StringNullableWithAggregatesFilter<"AuditLog"> | string | null;
    before?: Prisma.JsonNullableWithAggregatesFilter<"AuditLog">;
    after?: Prisma.JsonNullableWithAggregatesFilter<"AuditLog">;
    ip?: Prisma.StringNullableWithAggregatesFilter<"AuditLog"> | string | null;
    requestId?: Prisma.StringNullableWithAggregatesFilter<"AuditLog"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AuditLog"> | Date | string;
};
export type AuditLogCreateInput = {
    id?: string;
    userId?: string | null;
    action: string;
    entity: string;
    entityId?: string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip?: string | null;
    requestId?: string | null;
    createdAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutAuditLogsInput;
};
export type AuditLogUncheckedCreateInput = {
    id?: string;
    companyId: string;
    userId?: string | null;
    action: string;
    entity: string;
    entityId?: string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip?: string | null;
    requestId?: string | null;
    createdAt?: Date | string;
};
export type AuditLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entity?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutAuditLogsNestedInput;
};
export type AuditLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entity?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogCreateManyInput = {
    id?: string;
    companyId: string;
    userId?: string | null;
    action: string;
    entity: string;
    entityId?: string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip?: string | null;
    requestId?: string | null;
    createdAt?: Date | string;
};
export type AuditLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entity?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entity?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogListRelationFilter = {
    every?: Prisma.AuditLogWhereInput;
    some?: Prisma.AuditLogWhereInput;
    none?: Prisma.AuditLogWhereInput;
};
export type AuditLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AuditLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entity?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    before?: Prisma.SortOrder;
    after?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AuditLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entity?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AuditLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entity?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AuditLogCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.AuditLogCreateWithoutCompanyInput, Prisma.AuditLogUncheckedCreateWithoutCompanyInput> | Prisma.AuditLogCreateWithoutCompanyInput[] | Prisma.AuditLogUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.AuditLogCreateOrConnectWithoutCompanyInput | Prisma.AuditLogCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.AuditLogCreateManyCompanyInputEnvelope;
    connect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
};
export type AuditLogUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.AuditLogCreateWithoutCompanyInput, Prisma.AuditLogUncheckedCreateWithoutCompanyInput> | Prisma.AuditLogCreateWithoutCompanyInput[] | Prisma.AuditLogUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.AuditLogCreateOrConnectWithoutCompanyInput | Prisma.AuditLogCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.AuditLogCreateManyCompanyInputEnvelope;
    connect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
};
export type AuditLogUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.AuditLogCreateWithoutCompanyInput, Prisma.AuditLogUncheckedCreateWithoutCompanyInput> | Prisma.AuditLogCreateWithoutCompanyInput[] | Prisma.AuditLogUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.AuditLogCreateOrConnectWithoutCompanyInput | Prisma.AuditLogCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.AuditLogUpsertWithWhereUniqueWithoutCompanyInput | Prisma.AuditLogUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.AuditLogCreateManyCompanyInputEnvelope;
    set?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    disconnect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    delete?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    connect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    update?: Prisma.AuditLogUpdateWithWhereUniqueWithoutCompanyInput | Prisma.AuditLogUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.AuditLogUpdateManyWithWhereWithoutCompanyInput | Prisma.AuditLogUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.AuditLogScalarWhereInput | Prisma.AuditLogScalarWhereInput[];
};
export type AuditLogUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.AuditLogCreateWithoutCompanyInput, Prisma.AuditLogUncheckedCreateWithoutCompanyInput> | Prisma.AuditLogCreateWithoutCompanyInput[] | Prisma.AuditLogUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.AuditLogCreateOrConnectWithoutCompanyInput | Prisma.AuditLogCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.AuditLogUpsertWithWhereUniqueWithoutCompanyInput | Prisma.AuditLogUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.AuditLogCreateManyCompanyInputEnvelope;
    set?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    disconnect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    delete?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    connect?: Prisma.AuditLogWhereUniqueInput | Prisma.AuditLogWhereUniqueInput[];
    update?: Prisma.AuditLogUpdateWithWhereUniqueWithoutCompanyInput | Prisma.AuditLogUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.AuditLogUpdateManyWithWhereWithoutCompanyInput | Prisma.AuditLogUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.AuditLogScalarWhereInput | Prisma.AuditLogScalarWhereInput[];
};
export type AuditLogCreateWithoutCompanyInput = {
    id?: string;
    userId?: string | null;
    action: string;
    entity: string;
    entityId?: string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip?: string | null;
    requestId?: string | null;
    createdAt?: Date | string;
};
export type AuditLogUncheckedCreateWithoutCompanyInput = {
    id?: string;
    userId?: string | null;
    action: string;
    entity: string;
    entityId?: string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip?: string | null;
    requestId?: string | null;
    createdAt?: Date | string;
};
export type AuditLogCreateOrConnectWithoutCompanyInput = {
    where: Prisma.AuditLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditLogCreateWithoutCompanyInput, Prisma.AuditLogUncheckedCreateWithoutCompanyInput>;
};
export type AuditLogCreateManyCompanyInputEnvelope = {
    data: Prisma.AuditLogCreateManyCompanyInput | Prisma.AuditLogCreateManyCompanyInput[];
    skipDuplicates?: boolean;
};
export type AuditLogUpsertWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.AuditLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.AuditLogUpdateWithoutCompanyInput, Prisma.AuditLogUncheckedUpdateWithoutCompanyInput>;
    create: Prisma.XOR<Prisma.AuditLogCreateWithoutCompanyInput, Prisma.AuditLogUncheckedCreateWithoutCompanyInput>;
};
export type AuditLogUpdateWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.AuditLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.AuditLogUpdateWithoutCompanyInput, Prisma.AuditLogUncheckedUpdateWithoutCompanyInput>;
};
export type AuditLogUpdateManyWithWhereWithoutCompanyInput = {
    where: Prisma.AuditLogScalarWhereInput;
    data: Prisma.XOR<Prisma.AuditLogUpdateManyMutationInput, Prisma.AuditLogUncheckedUpdateManyWithoutCompanyInput>;
};
export type AuditLogScalarWhereInput = {
    AND?: Prisma.AuditLogScalarWhereInput | Prisma.AuditLogScalarWhereInput[];
    OR?: Prisma.AuditLogScalarWhereInput[];
    NOT?: Prisma.AuditLogScalarWhereInput | Prisma.AuditLogScalarWhereInput[];
    id?: Prisma.UuidFilter<"AuditLog"> | string;
    companyId?: Prisma.UuidFilter<"AuditLog"> | string;
    userId?: Prisma.UuidNullableFilter<"AuditLog"> | string | null;
    action?: Prisma.StringFilter<"AuditLog"> | string;
    entity?: Prisma.StringFilter<"AuditLog"> | string;
    entityId?: Prisma.StringNullableFilter<"AuditLog"> | string | null;
    before?: Prisma.JsonNullableFilter<"AuditLog">;
    after?: Prisma.JsonNullableFilter<"AuditLog">;
    ip?: Prisma.StringNullableFilter<"AuditLog"> | string | null;
    requestId?: Prisma.StringNullableFilter<"AuditLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AuditLog"> | Date | string;
};
export type AuditLogCreateManyCompanyInput = {
    id?: string;
    userId?: string | null;
    action: string;
    entity: string;
    entityId?: string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip?: string | null;
    requestId?: string | null;
    createdAt?: Date | string;
};
export type AuditLogUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entity?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogUncheckedUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entity?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogUncheckedUpdateManyWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entity?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    before?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    after?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requestId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    userId?: boolean;
    action?: boolean;
    entity?: boolean;
    entityId?: boolean;
    before?: boolean;
    after?: boolean;
    ip?: boolean;
    requestId?: boolean;
    createdAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auditLog"]>;
export type AuditLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    userId?: boolean;
    action?: boolean;
    entity?: boolean;
    entityId?: boolean;
    before?: boolean;
    after?: boolean;
    ip?: boolean;
    requestId?: boolean;
    createdAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auditLog"]>;
export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    userId?: boolean;
    action?: boolean;
    entity?: boolean;
    entityId?: boolean;
    before?: boolean;
    after?: boolean;
    ip?: boolean;
    requestId?: boolean;
    createdAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["auditLog"]>;
export type AuditLogSelectScalar = {
    id?: boolean;
    companyId?: boolean;
    userId?: boolean;
    action?: boolean;
    entity?: boolean;
    entityId?: boolean;
    before?: boolean;
    after?: boolean;
    ip?: boolean;
    requestId?: boolean;
    createdAt?: boolean;
};
export type AuditLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "companyId" | "userId" | "action" | "entity" | "entityId" | "before" | "after" | "ip" | "requestId" | "createdAt", ExtArgs["result"]["auditLog"]>;
export type AuditLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type $AuditLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AuditLog";
    objects: {
        company: Prisma.$CompanyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        companyId: string;
        userId: string | null;
        action: string;
        entity: string;
        entityId: string | null;
        before: runtime.JsonValue | null;
        after: runtime.JsonValue | null;
        ip: string | null;
        requestId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["auditLog"]>;
    composites: {};
};
export type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AuditLogPayload, S>;
export type AuditLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuditLogCountAggregateInputType | true;
};
export interface AuditLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'];
        meta: {
            name: 'AuditLog';
        };
    };
    findUnique<T extends AuditLogFindUniqueArgs>(args: Prisma.SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AuditLogFindFirstArgs>(args?: Prisma.SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AuditLogFindManyArgs>(args?: Prisma.SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AuditLogCreateArgs>(args: Prisma.SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AuditLogCreateManyArgs>(args?: Prisma.SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AuditLogDeleteArgs>(args: Prisma.SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AuditLogUpdateArgs>(args: Prisma.SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AuditLogUpdateManyArgs>(args: Prisma.SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AuditLogUpsertArgs>(args: Prisma.SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma.Prisma__AuditLogClient<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AuditLogCountArgs>(args?: Prisma.Subset<T, AuditLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuditLogCountAggregateOutputType> : number>;
    aggregate<T extends AuditLogAggregateArgs>(args: Prisma.Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>;
    groupBy<T extends AuditLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AuditLogGroupByArgs['orderBy'];
    } : {
        orderBy?: AuditLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AuditLogFieldRefs;
}
export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    company<T extends Prisma.CompanyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CompanyDefaultArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AuditLogFieldRefs {
    readonly id: Prisma.FieldRef<"AuditLog", 'String'>;
    readonly companyId: Prisma.FieldRef<"AuditLog", 'String'>;
    readonly userId: Prisma.FieldRef<"AuditLog", 'String'>;
    readonly action: Prisma.FieldRef<"AuditLog", 'String'>;
    readonly entity: Prisma.FieldRef<"AuditLog", 'String'>;
    readonly entityId: Prisma.FieldRef<"AuditLog", 'String'>;
    readonly before: Prisma.FieldRef<"AuditLog", 'Json'>;
    readonly after: Prisma.FieldRef<"AuditLog", 'Json'>;
    readonly ip: Prisma.FieldRef<"AuditLog", 'String'>;
    readonly requestId: Prisma.FieldRef<"AuditLog", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AuditLog", 'DateTime'>;
}
export type AuditLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where: Prisma.AuditLogWhereUniqueInput;
};
export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where: Prisma.AuditLogWhereUniqueInput;
};
export type AuditLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AuditLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditLogCreateInput, Prisma.AuditLogUncheckedCreateInput>;
};
export type AuditLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AuditLogCreateManyInput | Prisma.AuditLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AuditLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    data: Prisma.AuditLogCreateManyInput | Prisma.AuditLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AuditLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AuditLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditLogUpdateInput, Prisma.AuditLogUncheckedUpdateInput>;
    where: Prisma.AuditLogWhereUniqueInput;
};
export type AuditLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AuditLogUpdateManyMutationInput, Prisma.AuditLogUncheckedUpdateManyInput>;
    where?: Prisma.AuditLogWhereInput;
    limit?: number;
};
export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditLogUpdateManyMutationInput, Prisma.AuditLogUncheckedUpdateManyInput>;
    where?: Prisma.AuditLogWhereInput;
    limit?: number;
    include?: Prisma.AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AuditLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where: Prisma.AuditLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditLogCreateInput, Prisma.AuditLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AuditLogUpdateInput, Prisma.AuditLogUncheckedUpdateInput>;
};
export type AuditLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where: Prisma.AuditLogWhereUniqueInput;
};
export type AuditLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
    limit?: number;
};
export type AuditLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
};
