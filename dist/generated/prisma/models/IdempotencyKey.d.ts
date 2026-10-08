import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type IdempotencyKeyModel = runtime.Types.Result.DefaultSelection<Prisma.$IdempotencyKeyPayload>;
export type AggregateIdempotencyKey = {
    _count: IdempotencyKeyCountAggregateOutputType | null;
    _avg: IdempotencyKeyAvgAggregateOutputType | null;
    _sum: IdempotencyKeySumAggregateOutputType | null;
    _min: IdempotencyKeyMinAggregateOutputType | null;
    _max: IdempotencyKeyMaxAggregateOutputType | null;
};
export type IdempotencyKeyAvgAggregateOutputType = {
    responseCode: number | null;
};
export type IdempotencyKeySumAggregateOutputType = {
    responseCode: number | null;
};
export type IdempotencyKeyMinAggregateOutputType = {
    id: string | null;
    companyId: string | null;
    key: string | null;
    userId: string | null;
    requestHash: string | null;
    responseCode: number | null;
    createdAt: Date | null;
};
export type IdempotencyKeyMaxAggregateOutputType = {
    id: string | null;
    companyId: string | null;
    key: string | null;
    userId: string | null;
    requestHash: string | null;
    responseCode: number | null;
    createdAt: Date | null;
};
export type IdempotencyKeyCountAggregateOutputType = {
    id: number;
    companyId: number;
    key: number;
    userId: number;
    requestHash: number;
    responseCode: number;
    responseBody: number;
    createdAt: number;
    _all: number;
};
export type IdempotencyKeyAvgAggregateInputType = {
    responseCode?: true;
};
export type IdempotencyKeySumAggregateInputType = {
    responseCode?: true;
};
export type IdempotencyKeyMinAggregateInputType = {
    id?: true;
    companyId?: true;
    key?: true;
    userId?: true;
    requestHash?: true;
    responseCode?: true;
    createdAt?: true;
};
export type IdempotencyKeyMaxAggregateInputType = {
    id?: true;
    companyId?: true;
    key?: true;
    userId?: true;
    requestHash?: true;
    responseCode?: true;
    createdAt?: true;
};
export type IdempotencyKeyCountAggregateInputType = {
    id?: true;
    companyId?: true;
    key?: true;
    userId?: true;
    requestHash?: true;
    responseCode?: true;
    responseBody?: true;
    createdAt?: true;
    _all?: true;
};
export type IdempotencyKeyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IdempotencyKeyWhereInput;
    orderBy?: Prisma.IdempotencyKeyOrderByWithRelationInput | Prisma.IdempotencyKeyOrderByWithRelationInput[];
    cursor?: Prisma.IdempotencyKeyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IdempotencyKeyCountAggregateInputType;
    _avg?: IdempotencyKeyAvgAggregateInputType;
    _sum?: IdempotencyKeySumAggregateInputType;
    _min?: IdempotencyKeyMinAggregateInputType;
    _max?: IdempotencyKeyMaxAggregateInputType;
};
export type GetIdempotencyKeyAggregateType<T extends IdempotencyKeyAggregateArgs> = {
    [P in keyof T & keyof AggregateIdempotencyKey]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIdempotencyKey[P]> : Prisma.GetScalarType<T[P], AggregateIdempotencyKey[P]>;
};
export type IdempotencyKeyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IdempotencyKeyWhereInput;
    orderBy?: Prisma.IdempotencyKeyOrderByWithAggregationInput | Prisma.IdempotencyKeyOrderByWithAggregationInput[];
    by: Prisma.IdempotencyKeyScalarFieldEnum[] | Prisma.IdempotencyKeyScalarFieldEnum;
    having?: Prisma.IdempotencyKeyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IdempotencyKeyCountAggregateInputType | true;
    _avg?: IdempotencyKeyAvgAggregateInputType;
    _sum?: IdempotencyKeySumAggregateInputType;
    _min?: IdempotencyKeyMinAggregateInputType;
    _max?: IdempotencyKeyMaxAggregateInputType;
};
export type IdempotencyKeyGroupByOutputType = {
    id: string;
    companyId: string;
    key: string;
    userId: string;
    requestHash: string;
    responseCode: number | null;
    responseBody: runtime.JsonValue | null;
    createdAt: Date;
    _count: IdempotencyKeyCountAggregateOutputType | null;
    _avg: IdempotencyKeyAvgAggregateOutputType | null;
    _sum: IdempotencyKeySumAggregateOutputType | null;
    _min: IdempotencyKeyMinAggregateOutputType | null;
    _max: IdempotencyKeyMaxAggregateOutputType | null;
};
export type GetIdempotencyKeyGroupByPayload<T extends IdempotencyKeyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IdempotencyKeyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IdempotencyKeyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IdempotencyKeyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IdempotencyKeyGroupByOutputType[P]>;
}>>;
export type IdempotencyKeyWhereInput = {
    AND?: Prisma.IdempotencyKeyWhereInput | Prisma.IdempotencyKeyWhereInput[];
    OR?: Prisma.IdempotencyKeyWhereInput[];
    NOT?: Prisma.IdempotencyKeyWhereInput | Prisma.IdempotencyKeyWhereInput[];
    id?: Prisma.UuidFilter<"IdempotencyKey"> | string;
    companyId?: Prisma.UuidFilter<"IdempotencyKey"> | string;
    key?: Prisma.StringFilter<"IdempotencyKey"> | string;
    userId?: Prisma.UuidFilter<"IdempotencyKey"> | string;
    requestHash?: Prisma.StringFilter<"IdempotencyKey"> | string;
    responseCode?: Prisma.IntNullableFilter<"IdempotencyKey"> | number | null;
    responseBody?: Prisma.JsonNullableFilter<"IdempotencyKey">;
    createdAt?: Prisma.DateTimeFilter<"IdempotencyKey"> | Date | string;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
};
export type IdempotencyKeyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    requestHash?: Prisma.SortOrder;
    responseCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    responseBody?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    company?: Prisma.CompanyOrderByWithRelationInput;
};
export type IdempotencyKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    companyId_userId_key?: Prisma.IdempotencyKeyCompanyIdUserIdKeyCompoundUniqueInput;
    AND?: Prisma.IdempotencyKeyWhereInput | Prisma.IdempotencyKeyWhereInput[];
    OR?: Prisma.IdempotencyKeyWhereInput[];
    NOT?: Prisma.IdempotencyKeyWhereInput | Prisma.IdempotencyKeyWhereInput[];
    companyId?: Prisma.UuidFilter<"IdempotencyKey"> | string;
    key?: Prisma.StringFilter<"IdempotencyKey"> | string;
    userId?: Prisma.UuidFilter<"IdempotencyKey"> | string;
    requestHash?: Prisma.StringFilter<"IdempotencyKey"> | string;
    responseCode?: Prisma.IntNullableFilter<"IdempotencyKey"> | number | null;
    responseBody?: Prisma.JsonNullableFilter<"IdempotencyKey">;
    createdAt?: Prisma.DateTimeFilter<"IdempotencyKey"> | Date | string;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
}, "id" | "companyId_userId_key">;
export type IdempotencyKeyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    requestHash?: Prisma.SortOrder;
    responseCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    responseBody?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.IdempotencyKeyCountOrderByAggregateInput;
    _avg?: Prisma.IdempotencyKeyAvgOrderByAggregateInput;
    _max?: Prisma.IdempotencyKeyMaxOrderByAggregateInput;
    _min?: Prisma.IdempotencyKeyMinOrderByAggregateInput;
    _sum?: Prisma.IdempotencyKeySumOrderByAggregateInput;
};
export type IdempotencyKeyScalarWhereWithAggregatesInput = {
    AND?: Prisma.IdempotencyKeyScalarWhereWithAggregatesInput | Prisma.IdempotencyKeyScalarWhereWithAggregatesInput[];
    OR?: Prisma.IdempotencyKeyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IdempotencyKeyScalarWhereWithAggregatesInput | Prisma.IdempotencyKeyScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"IdempotencyKey"> | string;
    companyId?: Prisma.UuidWithAggregatesFilter<"IdempotencyKey"> | string;
    key?: Prisma.StringWithAggregatesFilter<"IdempotencyKey"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"IdempotencyKey"> | string;
    requestHash?: Prisma.StringWithAggregatesFilter<"IdempotencyKey"> | string;
    responseCode?: Prisma.IntNullableWithAggregatesFilter<"IdempotencyKey"> | number | null;
    responseBody?: Prisma.JsonNullableWithAggregatesFilter<"IdempotencyKey">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"IdempotencyKey"> | Date | string;
};
export type IdempotencyKeyCreateInput = {
    id?: string;
    key: string;
    userId: string;
    requestHash: string;
    responseCode?: number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutIdempotencyKeysInput;
};
export type IdempotencyKeyUncheckedCreateInput = {
    id?: string;
    companyId: string;
    key: string;
    userId: string;
    requestHash: string;
    responseCode?: number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type IdempotencyKeyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestHash?: Prisma.StringFieldUpdateOperationsInput | string;
    responseCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutIdempotencyKeysNestedInput;
};
export type IdempotencyKeyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestHash?: Prisma.StringFieldUpdateOperationsInput | string;
    responseCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdempotencyKeyCreateManyInput = {
    id?: string;
    companyId: string;
    key: string;
    userId: string;
    requestHash: string;
    responseCode?: number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type IdempotencyKeyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestHash?: Prisma.StringFieldUpdateOperationsInput | string;
    responseCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdempotencyKeyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestHash?: Prisma.StringFieldUpdateOperationsInput | string;
    responseCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdempotencyKeyListRelationFilter = {
    every?: Prisma.IdempotencyKeyWhereInput;
    some?: Prisma.IdempotencyKeyWhereInput;
    none?: Prisma.IdempotencyKeyWhereInput;
};
export type IdempotencyKeyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IdempotencyKeyCompanyIdUserIdKeyCompoundUniqueInput = {
    companyId: string;
    userId: string;
    key: string;
};
export type IdempotencyKeyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    requestHash?: Prisma.SortOrder;
    responseCode?: Prisma.SortOrder;
    responseBody?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IdempotencyKeyAvgOrderByAggregateInput = {
    responseCode?: Prisma.SortOrder;
};
export type IdempotencyKeyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    requestHash?: Prisma.SortOrder;
    responseCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IdempotencyKeyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    requestHash?: Prisma.SortOrder;
    responseCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IdempotencyKeySumOrderByAggregateInput = {
    responseCode?: Prisma.SortOrder;
};
export type IdempotencyKeyCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutCompanyInput, Prisma.IdempotencyKeyUncheckedCreateWithoutCompanyInput> | Prisma.IdempotencyKeyCreateWithoutCompanyInput[] | Prisma.IdempotencyKeyUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.IdempotencyKeyCreateOrConnectWithoutCompanyInput | Prisma.IdempotencyKeyCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.IdempotencyKeyCreateManyCompanyInputEnvelope;
    connect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
};
export type IdempotencyKeyUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutCompanyInput, Prisma.IdempotencyKeyUncheckedCreateWithoutCompanyInput> | Prisma.IdempotencyKeyCreateWithoutCompanyInput[] | Prisma.IdempotencyKeyUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.IdempotencyKeyCreateOrConnectWithoutCompanyInput | Prisma.IdempotencyKeyCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.IdempotencyKeyCreateManyCompanyInputEnvelope;
    connect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
};
export type IdempotencyKeyUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutCompanyInput, Prisma.IdempotencyKeyUncheckedCreateWithoutCompanyInput> | Prisma.IdempotencyKeyCreateWithoutCompanyInput[] | Prisma.IdempotencyKeyUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.IdempotencyKeyCreateOrConnectWithoutCompanyInput | Prisma.IdempotencyKeyCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.IdempotencyKeyUpsertWithWhereUniqueWithoutCompanyInput | Prisma.IdempotencyKeyUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.IdempotencyKeyCreateManyCompanyInputEnvelope;
    set?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    disconnect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    delete?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    connect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    update?: Prisma.IdempotencyKeyUpdateWithWhereUniqueWithoutCompanyInput | Prisma.IdempotencyKeyUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.IdempotencyKeyUpdateManyWithWhereWithoutCompanyInput | Prisma.IdempotencyKeyUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.IdempotencyKeyScalarWhereInput | Prisma.IdempotencyKeyScalarWhereInput[];
};
export type IdempotencyKeyUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutCompanyInput, Prisma.IdempotencyKeyUncheckedCreateWithoutCompanyInput> | Prisma.IdempotencyKeyCreateWithoutCompanyInput[] | Prisma.IdempotencyKeyUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.IdempotencyKeyCreateOrConnectWithoutCompanyInput | Prisma.IdempotencyKeyCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.IdempotencyKeyUpsertWithWhereUniqueWithoutCompanyInput | Prisma.IdempotencyKeyUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.IdempotencyKeyCreateManyCompanyInputEnvelope;
    set?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    disconnect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    delete?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    connect?: Prisma.IdempotencyKeyWhereUniqueInput | Prisma.IdempotencyKeyWhereUniqueInput[];
    update?: Prisma.IdempotencyKeyUpdateWithWhereUniqueWithoutCompanyInput | Prisma.IdempotencyKeyUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.IdempotencyKeyUpdateManyWithWhereWithoutCompanyInput | Prisma.IdempotencyKeyUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.IdempotencyKeyScalarWhereInput | Prisma.IdempotencyKeyScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IdempotencyKeyCreateWithoutCompanyInput = {
    id?: string;
    key: string;
    userId: string;
    requestHash: string;
    responseCode?: number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type IdempotencyKeyUncheckedCreateWithoutCompanyInput = {
    id?: string;
    key: string;
    userId: string;
    requestHash: string;
    responseCode?: number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type IdempotencyKeyCreateOrConnectWithoutCompanyInput = {
    where: Prisma.IdempotencyKeyWhereUniqueInput;
    create: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutCompanyInput, Prisma.IdempotencyKeyUncheckedCreateWithoutCompanyInput>;
};
export type IdempotencyKeyCreateManyCompanyInputEnvelope = {
    data: Prisma.IdempotencyKeyCreateManyCompanyInput | Prisma.IdempotencyKeyCreateManyCompanyInput[];
    skipDuplicates?: boolean;
};
export type IdempotencyKeyUpsertWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.IdempotencyKeyWhereUniqueInput;
    update: Prisma.XOR<Prisma.IdempotencyKeyUpdateWithoutCompanyInput, Prisma.IdempotencyKeyUncheckedUpdateWithoutCompanyInput>;
    create: Prisma.XOR<Prisma.IdempotencyKeyCreateWithoutCompanyInput, Prisma.IdempotencyKeyUncheckedCreateWithoutCompanyInput>;
};
export type IdempotencyKeyUpdateWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.IdempotencyKeyWhereUniqueInput;
    data: Prisma.XOR<Prisma.IdempotencyKeyUpdateWithoutCompanyInput, Prisma.IdempotencyKeyUncheckedUpdateWithoutCompanyInput>;
};
export type IdempotencyKeyUpdateManyWithWhereWithoutCompanyInput = {
    where: Prisma.IdempotencyKeyScalarWhereInput;
    data: Prisma.XOR<Prisma.IdempotencyKeyUpdateManyMutationInput, Prisma.IdempotencyKeyUncheckedUpdateManyWithoutCompanyInput>;
};
export type IdempotencyKeyScalarWhereInput = {
    AND?: Prisma.IdempotencyKeyScalarWhereInput | Prisma.IdempotencyKeyScalarWhereInput[];
    OR?: Prisma.IdempotencyKeyScalarWhereInput[];
    NOT?: Prisma.IdempotencyKeyScalarWhereInput | Prisma.IdempotencyKeyScalarWhereInput[];
    id?: Prisma.UuidFilter<"IdempotencyKey"> | string;
    companyId?: Prisma.UuidFilter<"IdempotencyKey"> | string;
    key?: Prisma.StringFilter<"IdempotencyKey"> | string;
    userId?: Prisma.UuidFilter<"IdempotencyKey"> | string;
    requestHash?: Prisma.StringFilter<"IdempotencyKey"> | string;
    responseCode?: Prisma.IntNullableFilter<"IdempotencyKey"> | number | null;
    responseBody?: Prisma.JsonNullableFilter<"IdempotencyKey">;
    createdAt?: Prisma.DateTimeFilter<"IdempotencyKey"> | Date | string;
};
export type IdempotencyKeyCreateManyCompanyInput = {
    id?: string;
    key: string;
    userId: string;
    requestHash: string;
    responseCode?: number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type IdempotencyKeyUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestHash?: Prisma.StringFieldUpdateOperationsInput | string;
    responseCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdempotencyKeyUncheckedUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestHash?: Prisma.StringFieldUpdateOperationsInput | string;
    responseCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdempotencyKeyUncheckedUpdateManyWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestHash?: Prisma.StringFieldUpdateOperationsInput | string;
    responseCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdempotencyKeySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    key?: boolean;
    userId?: boolean;
    requestHash?: boolean;
    responseCode?: boolean;
    responseBody?: boolean;
    createdAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["idempotencyKey"]>;
export type IdempotencyKeySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    key?: boolean;
    userId?: boolean;
    requestHash?: boolean;
    responseCode?: boolean;
    responseBody?: boolean;
    createdAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["idempotencyKey"]>;
export type IdempotencyKeySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    key?: boolean;
    userId?: boolean;
    requestHash?: boolean;
    responseCode?: boolean;
    responseBody?: boolean;
    createdAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["idempotencyKey"]>;
export type IdempotencyKeySelectScalar = {
    id?: boolean;
    companyId?: boolean;
    key?: boolean;
    userId?: boolean;
    requestHash?: boolean;
    responseCode?: boolean;
    responseBody?: boolean;
    createdAt?: boolean;
};
export type IdempotencyKeyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "companyId" | "key" | "userId" | "requestHash" | "responseCode" | "responseBody" | "createdAt", ExtArgs["result"]["idempotencyKey"]>;
export type IdempotencyKeyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type IdempotencyKeyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type IdempotencyKeyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type $IdempotencyKeyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "IdempotencyKey";
    objects: {
        company: Prisma.$CompanyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        companyId: string;
        key: string;
        userId: string;
        requestHash: string;
        responseCode: number | null;
        responseBody: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["idempotencyKey"]>;
    composites: {};
};
export type IdempotencyKeyGetPayload<S extends boolean | null | undefined | IdempotencyKeyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload, S>;
export type IdempotencyKeyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IdempotencyKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IdempotencyKeyCountAggregateInputType | true;
};
export interface IdempotencyKeyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['IdempotencyKey'];
        meta: {
            name: 'IdempotencyKey';
        };
    };
    findUnique<T extends IdempotencyKeyFindUniqueArgs>(args: Prisma.SelectSubset<T, IdempotencyKeyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IdempotencyKeyClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IdempotencyKeyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IdempotencyKeyClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IdempotencyKeyFindFirstArgs>(args?: Prisma.SelectSubset<T, IdempotencyKeyFindFirstArgs<ExtArgs>>): Prisma.Prisma__IdempotencyKeyClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IdempotencyKeyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IdempotencyKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IdempotencyKeyClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IdempotencyKeyFindManyArgs>(args?: Prisma.SelectSubset<T, IdempotencyKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IdempotencyKeyCreateArgs>(args: Prisma.SelectSubset<T, IdempotencyKeyCreateArgs<ExtArgs>>): Prisma.Prisma__IdempotencyKeyClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IdempotencyKeyCreateManyArgs>(args?: Prisma.SelectSubset<T, IdempotencyKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IdempotencyKeyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IdempotencyKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IdempotencyKeyDeleteArgs>(args: Prisma.SelectSubset<T, IdempotencyKeyDeleteArgs<ExtArgs>>): Prisma.Prisma__IdempotencyKeyClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IdempotencyKeyUpdateArgs>(args: Prisma.SelectSubset<T, IdempotencyKeyUpdateArgs<ExtArgs>>): Prisma.Prisma__IdempotencyKeyClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IdempotencyKeyDeleteManyArgs>(args?: Prisma.SelectSubset<T, IdempotencyKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IdempotencyKeyUpdateManyArgs>(args: Prisma.SelectSubset<T, IdempotencyKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IdempotencyKeyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IdempotencyKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IdempotencyKeyUpsertArgs>(args: Prisma.SelectSubset<T, IdempotencyKeyUpsertArgs<ExtArgs>>): Prisma.Prisma__IdempotencyKeyClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IdempotencyKeyCountArgs>(args?: Prisma.Subset<T, IdempotencyKeyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IdempotencyKeyCountAggregateOutputType> : number>;
    aggregate<T extends IdempotencyKeyAggregateArgs>(args: Prisma.Subset<T, IdempotencyKeyAggregateArgs>): Prisma.PrismaPromise<GetIdempotencyKeyAggregateType<T>>;
    groupBy<T extends IdempotencyKeyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IdempotencyKeyGroupByArgs['orderBy'];
    } : {
        orderBy?: IdempotencyKeyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IdempotencyKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdempotencyKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IdempotencyKeyFieldRefs;
}
export interface Prisma__IdempotencyKeyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    company<T extends Prisma.CompanyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CompanyDefaultArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IdempotencyKeyFieldRefs {
    readonly id: Prisma.FieldRef<"IdempotencyKey", 'String'>;
    readonly companyId: Prisma.FieldRef<"IdempotencyKey", 'String'>;
    readonly key: Prisma.FieldRef<"IdempotencyKey", 'String'>;
    readonly userId: Prisma.FieldRef<"IdempotencyKey", 'String'>;
    readonly requestHash: Prisma.FieldRef<"IdempotencyKey", 'String'>;
    readonly responseCode: Prisma.FieldRef<"IdempotencyKey", 'Int'>;
    readonly responseBody: Prisma.FieldRef<"IdempotencyKey", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"IdempotencyKey", 'DateTime'>;
}
export type IdempotencyKeyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    include?: Prisma.IdempotencyKeyInclude<ExtArgs> | null;
    where: Prisma.IdempotencyKeyWhereUniqueInput;
};
export type IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    include?: Prisma.IdempotencyKeyInclude<ExtArgs> | null;
    where: Prisma.IdempotencyKeyWhereUniqueInput;
};
export type IdempotencyKeyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IdempotencyKeyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IdempotencyKeyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IdempotencyKeyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    include?: Prisma.IdempotencyKeyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IdempotencyKeyCreateInput, Prisma.IdempotencyKeyUncheckedCreateInput>;
};
export type IdempotencyKeyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IdempotencyKeyCreateManyInput | Prisma.IdempotencyKeyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IdempotencyKeyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    data: Prisma.IdempotencyKeyCreateManyInput | Prisma.IdempotencyKeyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.IdempotencyKeyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type IdempotencyKeyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    include?: Prisma.IdempotencyKeyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IdempotencyKeyUpdateInput, Prisma.IdempotencyKeyUncheckedUpdateInput>;
    where: Prisma.IdempotencyKeyWhereUniqueInput;
};
export type IdempotencyKeyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IdempotencyKeyUpdateManyMutationInput, Prisma.IdempotencyKeyUncheckedUpdateManyInput>;
    where?: Prisma.IdempotencyKeyWhereInput;
    limit?: number;
};
export type IdempotencyKeyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IdempotencyKeyUpdateManyMutationInput, Prisma.IdempotencyKeyUncheckedUpdateManyInput>;
    where?: Prisma.IdempotencyKeyWhereInput;
    limit?: number;
    include?: Prisma.IdempotencyKeyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type IdempotencyKeyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    include?: Prisma.IdempotencyKeyInclude<ExtArgs> | null;
    where: Prisma.IdempotencyKeyWhereUniqueInput;
    create: Prisma.XOR<Prisma.IdempotencyKeyCreateInput, Prisma.IdempotencyKeyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IdempotencyKeyUpdateInput, Prisma.IdempotencyKeyUncheckedUpdateInput>;
};
export type IdempotencyKeyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    include?: Prisma.IdempotencyKeyInclude<ExtArgs> | null;
    where: Prisma.IdempotencyKeyWhereUniqueInput;
};
export type IdempotencyKeyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IdempotencyKeyWhereInput;
    limit?: number;
};
export type IdempotencyKeyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyKeySelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyKeyOmit<ExtArgs> | null;
    include?: Prisma.IdempotencyKeyInclude<ExtArgs> | null;
};
