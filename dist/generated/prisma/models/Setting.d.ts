import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SettingModel = runtime.Types.Result.DefaultSelection<Prisma.$SettingPayload>;
export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null;
    _min: SettingMinAggregateOutputType | null;
    _max: SettingMaxAggregateOutputType | null;
};
export type SettingMinAggregateOutputType = {
    id: string | null;
    companyId: string | null;
    key: string | null;
    updatedAt: Date | null;
};
export type SettingMaxAggregateOutputType = {
    id: string | null;
    companyId: string | null;
    key: string | null;
    updatedAt: Date | null;
};
export type SettingCountAggregateOutputType = {
    id: number;
    companyId: number;
    key: number;
    value: number;
    updatedAt: number;
    _all: number;
};
export type SettingMinAggregateInputType = {
    id?: true;
    companyId?: true;
    key?: true;
    updatedAt?: true;
};
export type SettingMaxAggregateInputType = {
    id?: true;
    companyId?: true;
    key?: true;
    updatedAt?: true;
};
export type SettingCountAggregateInputType = {
    id?: true;
    companyId?: true;
    key?: true;
    value?: true;
    updatedAt?: true;
    _all?: true;
};
export type SettingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SettingWhereInput;
    orderBy?: Prisma.SettingOrderByWithRelationInput | Prisma.SettingOrderByWithRelationInput[];
    cursor?: Prisma.SettingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SettingCountAggregateInputType;
    _min?: SettingMinAggregateInputType;
    _max?: SettingMaxAggregateInputType;
};
export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
    [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSetting[P]> : Prisma.GetScalarType<T[P], AggregateSetting[P]>;
};
export type SettingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SettingWhereInput;
    orderBy?: Prisma.SettingOrderByWithAggregationInput | Prisma.SettingOrderByWithAggregationInput[];
    by: Prisma.SettingScalarFieldEnum[] | Prisma.SettingScalarFieldEnum;
    having?: Prisma.SettingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SettingCountAggregateInputType | true;
    _min?: SettingMinAggregateInputType;
    _max?: SettingMaxAggregateInputType;
};
export type SettingGroupByOutputType = {
    id: string;
    companyId: string;
    key: string;
    value: runtime.JsonValue;
    updatedAt: Date;
    _count: SettingCountAggregateOutputType | null;
    _min: SettingMinAggregateOutputType | null;
    _max: SettingMaxAggregateOutputType | null;
};
export type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SettingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SettingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SettingGroupByOutputType[P]>;
}>>;
export type SettingWhereInput = {
    AND?: Prisma.SettingWhereInput | Prisma.SettingWhereInput[];
    OR?: Prisma.SettingWhereInput[];
    NOT?: Prisma.SettingWhereInput | Prisma.SettingWhereInput[];
    id?: Prisma.UuidFilter<"Setting"> | string;
    companyId?: Prisma.UuidFilter<"Setting"> | string;
    key?: Prisma.StringFilter<"Setting"> | string;
    value?: Prisma.JsonFilter<"Setting">;
    updatedAt?: Prisma.DateTimeFilter<"Setting"> | Date | string;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
};
export type SettingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    company?: Prisma.CompanyOrderByWithRelationInput;
};
export type SettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    companyId_key?: Prisma.SettingCompanyIdKeyCompoundUniqueInput;
    AND?: Prisma.SettingWhereInput | Prisma.SettingWhereInput[];
    OR?: Prisma.SettingWhereInput[];
    NOT?: Prisma.SettingWhereInput | Prisma.SettingWhereInput[];
    companyId?: Prisma.UuidFilter<"Setting"> | string;
    key?: Prisma.StringFilter<"Setting"> | string;
    value?: Prisma.JsonFilter<"Setting">;
    updatedAt?: Prisma.DateTimeFilter<"Setting"> | Date | string;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
}, "id" | "companyId_key">;
export type SettingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SettingCountOrderByAggregateInput;
    _max?: Prisma.SettingMaxOrderByAggregateInput;
    _min?: Prisma.SettingMinOrderByAggregateInput;
};
export type SettingScalarWhereWithAggregatesInput = {
    AND?: Prisma.SettingScalarWhereWithAggregatesInput | Prisma.SettingScalarWhereWithAggregatesInput[];
    OR?: Prisma.SettingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SettingScalarWhereWithAggregatesInput | Prisma.SettingScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Setting"> | string;
    companyId?: Prisma.UuidWithAggregatesFilter<"Setting"> | string;
    key?: Prisma.StringWithAggregatesFilter<"Setting"> | string;
    value?: Prisma.JsonWithAggregatesFilter<"Setting">;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Setting"> | Date | string;
};
export type SettingCreateInput = {
    id?: string;
    key: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutSettingsInput;
};
export type SettingUncheckedCreateInput = {
    id?: string;
    companyId: string;
    key: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
};
export type SettingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutSettingsNestedInput;
};
export type SettingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SettingCreateManyInput = {
    id?: string;
    companyId: string;
    key: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
};
export type SettingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SettingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SettingListRelationFilter = {
    every?: Prisma.SettingWhereInput;
    some?: Prisma.SettingWhereInput;
    none?: Prisma.SettingWhereInput;
};
export type SettingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SettingCompanyIdKeyCompoundUniqueInput = {
    companyId: string;
    key: string;
};
export type SettingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SettingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SettingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SettingCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.SettingCreateWithoutCompanyInput, Prisma.SettingUncheckedCreateWithoutCompanyInput> | Prisma.SettingCreateWithoutCompanyInput[] | Prisma.SettingUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.SettingCreateOrConnectWithoutCompanyInput | Prisma.SettingCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.SettingCreateManyCompanyInputEnvelope;
    connect?: Prisma.SettingWhereUniqueInput | Prisma.SettingWhereUniqueInput[];
};
export type SettingUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.SettingCreateWithoutCompanyInput, Prisma.SettingUncheckedCreateWithoutCompanyInput> | Prisma.SettingCreateWithoutCompanyInput[] | Prisma.SettingUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.SettingCreateOrConnectWithoutCompanyInput | Prisma.SettingCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.SettingCreateManyCompanyInputEnvelope;
    connect?: Prisma.SettingWhereUniqueInput | Prisma.SettingWhereUniqueInput[];
};
export type SettingUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.SettingCreateWithoutCompanyInput, Prisma.SettingUncheckedCreateWithoutCompanyInput> | Prisma.SettingCreateWithoutCompanyInput[] | Prisma.SettingUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.SettingCreateOrConnectWithoutCompanyInput | Prisma.SettingCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.SettingUpsertWithWhereUniqueWithoutCompanyInput | Prisma.SettingUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.SettingCreateManyCompanyInputEnvelope;
    set?: Prisma.SettingWhereUniqueInput | Prisma.SettingWhereUniqueInput[];
    disconnect?: Prisma.SettingWhereUniqueInput | Prisma.SettingWhereUniqueInput[];
    delete?: Prisma.SettingWhereUniqueInput | Prisma.SettingWhereUniqueInput[];
    connect?: Prisma.SettingWhereUniqueInput | Prisma.SettingWhereUniqueInput[];
    update?: Prisma.SettingUpdateWithWhereUniqueWithoutCompanyInput | Prisma.SettingUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.SettingUpdateManyWithWhereWithoutCompanyInput | Prisma.SettingUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.SettingScalarWhereInput | Prisma.SettingScalarWhereInput[];
};
export type SettingUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.SettingCreateWithoutCompanyInput, Prisma.SettingUncheckedCreateWithoutCompanyInput> | Prisma.SettingCreateWithoutCompanyInput[] | Prisma.SettingUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.SettingCreateOrConnectWithoutCompanyInput | Prisma.SettingCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.SettingUpsertWithWhereUniqueWithoutCompanyInput | Prisma.SettingUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.SettingCreateManyCompanyInputEnvelope;
    set?: Prisma.SettingWhereUniqueInput | Prisma.SettingWhereUniqueInput[];
    disconnect?: Prisma.SettingWhereUniqueInput | Prisma.SettingWhereUniqueInput[];
    delete?: Prisma.SettingWhereUniqueInput | Prisma.SettingWhereUniqueInput[];
    connect?: Prisma.SettingWhereUniqueInput | Prisma.SettingWhereUniqueInput[];
    update?: Prisma.SettingUpdateWithWhereUniqueWithoutCompanyInput | Prisma.SettingUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.SettingUpdateManyWithWhereWithoutCompanyInput | Prisma.SettingUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.SettingScalarWhereInput | Prisma.SettingScalarWhereInput[];
};
export type SettingCreateWithoutCompanyInput = {
    id?: string;
    key: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
};
export type SettingUncheckedCreateWithoutCompanyInput = {
    id?: string;
    key: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
};
export type SettingCreateOrConnectWithoutCompanyInput = {
    where: Prisma.SettingWhereUniqueInput;
    create: Prisma.XOR<Prisma.SettingCreateWithoutCompanyInput, Prisma.SettingUncheckedCreateWithoutCompanyInput>;
};
export type SettingCreateManyCompanyInputEnvelope = {
    data: Prisma.SettingCreateManyCompanyInput | Prisma.SettingCreateManyCompanyInput[];
    skipDuplicates?: boolean;
};
export type SettingUpsertWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.SettingWhereUniqueInput;
    update: Prisma.XOR<Prisma.SettingUpdateWithoutCompanyInput, Prisma.SettingUncheckedUpdateWithoutCompanyInput>;
    create: Prisma.XOR<Prisma.SettingCreateWithoutCompanyInput, Prisma.SettingUncheckedCreateWithoutCompanyInput>;
};
export type SettingUpdateWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.SettingWhereUniqueInput;
    data: Prisma.XOR<Prisma.SettingUpdateWithoutCompanyInput, Prisma.SettingUncheckedUpdateWithoutCompanyInput>;
};
export type SettingUpdateManyWithWhereWithoutCompanyInput = {
    where: Prisma.SettingScalarWhereInput;
    data: Prisma.XOR<Prisma.SettingUpdateManyMutationInput, Prisma.SettingUncheckedUpdateManyWithoutCompanyInput>;
};
export type SettingScalarWhereInput = {
    AND?: Prisma.SettingScalarWhereInput | Prisma.SettingScalarWhereInput[];
    OR?: Prisma.SettingScalarWhereInput[];
    NOT?: Prisma.SettingScalarWhereInput | Prisma.SettingScalarWhereInput[];
    id?: Prisma.UuidFilter<"Setting"> | string;
    companyId?: Prisma.UuidFilter<"Setting"> | string;
    key?: Prisma.StringFilter<"Setting"> | string;
    value?: Prisma.JsonFilter<"Setting">;
    updatedAt?: Prisma.DateTimeFilter<"Setting"> | Date | string;
};
export type SettingCreateManyCompanyInput = {
    id?: string;
    key: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Date | string;
};
export type SettingUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SettingUncheckedUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SettingUncheckedUpdateManyWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SettingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    key?: boolean;
    value?: boolean;
    updatedAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["setting"]>;
export type SettingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    key?: boolean;
    value?: boolean;
    updatedAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["setting"]>;
export type SettingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    key?: boolean;
    value?: boolean;
    updatedAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["setting"]>;
export type SettingSelectScalar = {
    id?: boolean;
    companyId?: boolean;
    key?: boolean;
    value?: boolean;
    updatedAt?: boolean;
};
export type SettingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "companyId" | "key" | "value" | "updatedAt", ExtArgs["result"]["setting"]>;
export type SettingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type SettingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type SettingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type $SettingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Setting";
    objects: {
        company: Prisma.$CompanyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        companyId: string;
        key: string;
        value: runtime.JsonValue;
        updatedAt: Date;
    }, ExtArgs["result"]["setting"]>;
    composites: {};
};
export type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SettingPayload, S>;
export type SettingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SettingCountAggregateInputType | true;
};
export interface SettingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Setting'];
        meta: {
            name: 'Setting';
        };
    };
    findUnique<T extends SettingFindUniqueArgs>(args: Prisma.SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SettingClient<runtime.Types.Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SettingClient<runtime.Types.Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SettingFindFirstArgs>(args?: Prisma.SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma.Prisma__SettingClient<runtime.Types.Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SettingClient<runtime.Types.Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SettingFindManyArgs>(args?: Prisma.SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SettingCreateArgs>(args: Prisma.SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma.Prisma__SettingClient<runtime.Types.Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SettingCreateManyArgs>(args?: Prisma.SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SettingDeleteArgs>(args: Prisma.SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma.Prisma__SettingClient<runtime.Types.Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SettingUpdateArgs>(args: Prisma.SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma.Prisma__SettingClient<runtime.Types.Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SettingDeleteManyArgs>(args?: Prisma.SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SettingUpdateManyArgs>(args: Prisma.SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SettingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SettingUpsertArgs>(args: Prisma.SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma.Prisma__SettingClient<runtime.Types.Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SettingCountArgs>(args?: Prisma.Subset<T, SettingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SettingCountAggregateOutputType> : number>;
    aggregate<T extends SettingAggregateArgs>(args: Prisma.Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>;
    groupBy<T extends SettingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SettingGroupByArgs['orderBy'];
    } : {
        orderBy?: SettingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SettingFieldRefs;
}
export interface Prisma__SettingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    company<T extends Prisma.CompanyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CompanyDefaultArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SettingFieldRefs {
    readonly id: Prisma.FieldRef<"Setting", 'String'>;
    readonly companyId: Prisma.FieldRef<"Setting", 'String'>;
    readonly key: Prisma.FieldRef<"Setting", 'String'>;
    readonly value: Prisma.FieldRef<"Setting", 'Json'>;
    readonly updatedAt: Prisma.FieldRef<"Setting", 'DateTime'>;
}
export type SettingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingSelect<ExtArgs> | null;
    omit?: Prisma.SettingOmit<ExtArgs> | null;
    include?: Prisma.SettingInclude<ExtArgs> | null;
    where: Prisma.SettingWhereUniqueInput;
};
export type SettingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingSelect<ExtArgs> | null;
    omit?: Prisma.SettingOmit<ExtArgs> | null;
    include?: Prisma.SettingInclude<ExtArgs> | null;
    where: Prisma.SettingWhereUniqueInput;
};
export type SettingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SettingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SettingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SettingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingSelect<ExtArgs> | null;
    omit?: Prisma.SettingOmit<ExtArgs> | null;
    include?: Prisma.SettingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SettingCreateInput, Prisma.SettingUncheckedCreateInput>;
};
export type SettingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SettingCreateManyInput | Prisma.SettingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SettingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SettingOmit<ExtArgs> | null;
    data: Prisma.SettingCreateManyInput | Prisma.SettingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SettingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SettingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingSelect<ExtArgs> | null;
    omit?: Prisma.SettingOmit<ExtArgs> | null;
    include?: Prisma.SettingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SettingUpdateInput, Prisma.SettingUncheckedUpdateInput>;
    where: Prisma.SettingWhereUniqueInput;
};
export type SettingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SettingUpdateManyMutationInput, Prisma.SettingUncheckedUpdateManyInput>;
    where?: Prisma.SettingWhereInput;
    limit?: number;
};
export type SettingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SettingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SettingUpdateManyMutationInput, Prisma.SettingUncheckedUpdateManyInput>;
    where?: Prisma.SettingWhereInput;
    limit?: number;
    include?: Prisma.SettingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SettingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingSelect<ExtArgs> | null;
    omit?: Prisma.SettingOmit<ExtArgs> | null;
    include?: Prisma.SettingInclude<ExtArgs> | null;
    where: Prisma.SettingWhereUniqueInput;
    create: Prisma.XOR<Prisma.SettingCreateInput, Prisma.SettingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SettingUpdateInput, Prisma.SettingUncheckedUpdateInput>;
};
export type SettingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingSelect<ExtArgs> | null;
    omit?: Prisma.SettingOmit<ExtArgs> | null;
    include?: Prisma.SettingInclude<ExtArgs> | null;
    where: Prisma.SettingWhereUniqueInput;
};
export type SettingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SettingWhereInput;
    limit?: number;
};
export type SettingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingSelect<ExtArgs> | null;
    omit?: Prisma.SettingOmit<ExtArgs> | null;
    include?: Prisma.SettingInclude<ExtArgs> | null;
};
