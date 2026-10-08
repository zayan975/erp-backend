import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DocumentCounterModel = runtime.Types.Result.DefaultSelection<Prisma.$DocumentCounterPayload>;
export type AggregateDocumentCounter = {
    _count: DocumentCounterCountAggregateOutputType | null;
    _avg: DocumentCounterAvgAggregateOutputType | null;
    _sum: DocumentCounterSumAggregateOutputType | null;
    _min: DocumentCounterMinAggregateOutputType | null;
    _max: DocumentCounterMaxAggregateOutputType | null;
};
export type DocumentCounterAvgAggregateOutputType = {
    year: number | null;
    lastNo: number | null;
};
export type DocumentCounterSumAggregateOutputType = {
    year: number | null;
    lastNo: number | null;
};
export type DocumentCounterMinAggregateOutputType = {
    companyId: string | null;
    type: string | null;
    year: number | null;
    lastNo: number | null;
};
export type DocumentCounterMaxAggregateOutputType = {
    companyId: string | null;
    type: string | null;
    year: number | null;
    lastNo: number | null;
};
export type DocumentCounterCountAggregateOutputType = {
    companyId: number;
    type: number;
    year: number;
    lastNo: number;
    _all: number;
};
export type DocumentCounterAvgAggregateInputType = {
    year?: true;
    lastNo?: true;
};
export type DocumentCounterSumAggregateInputType = {
    year?: true;
    lastNo?: true;
};
export type DocumentCounterMinAggregateInputType = {
    companyId?: true;
    type?: true;
    year?: true;
    lastNo?: true;
};
export type DocumentCounterMaxAggregateInputType = {
    companyId?: true;
    type?: true;
    year?: true;
    lastNo?: true;
};
export type DocumentCounterCountAggregateInputType = {
    companyId?: true;
    type?: true;
    year?: true;
    lastNo?: true;
    _all?: true;
};
export type DocumentCounterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentCounterWhereInput;
    orderBy?: Prisma.DocumentCounterOrderByWithRelationInput | Prisma.DocumentCounterOrderByWithRelationInput[];
    cursor?: Prisma.DocumentCounterWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DocumentCounterCountAggregateInputType;
    _avg?: DocumentCounterAvgAggregateInputType;
    _sum?: DocumentCounterSumAggregateInputType;
    _min?: DocumentCounterMinAggregateInputType;
    _max?: DocumentCounterMaxAggregateInputType;
};
export type GetDocumentCounterAggregateType<T extends DocumentCounterAggregateArgs> = {
    [P in keyof T & keyof AggregateDocumentCounter]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocumentCounter[P]> : Prisma.GetScalarType<T[P], AggregateDocumentCounter[P]>;
};
export type DocumentCounterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentCounterWhereInput;
    orderBy?: Prisma.DocumentCounterOrderByWithAggregationInput | Prisma.DocumentCounterOrderByWithAggregationInput[];
    by: Prisma.DocumentCounterScalarFieldEnum[] | Prisma.DocumentCounterScalarFieldEnum;
    having?: Prisma.DocumentCounterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocumentCounterCountAggregateInputType | true;
    _avg?: DocumentCounterAvgAggregateInputType;
    _sum?: DocumentCounterSumAggregateInputType;
    _min?: DocumentCounterMinAggregateInputType;
    _max?: DocumentCounterMaxAggregateInputType;
};
export type DocumentCounterGroupByOutputType = {
    companyId: string;
    type: string;
    year: number;
    lastNo: number;
    _count: DocumentCounterCountAggregateOutputType | null;
    _avg: DocumentCounterAvgAggregateOutputType | null;
    _sum: DocumentCounterSumAggregateOutputType | null;
    _min: DocumentCounterMinAggregateOutputType | null;
    _max: DocumentCounterMaxAggregateOutputType | null;
};
export type GetDocumentCounterGroupByPayload<T extends DocumentCounterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DocumentCounterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DocumentCounterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DocumentCounterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DocumentCounterGroupByOutputType[P]>;
}>>;
export type DocumentCounterWhereInput = {
    AND?: Prisma.DocumentCounterWhereInput | Prisma.DocumentCounterWhereInput[];
    OR?: Prisma.DocumentCounterWhereInput[];
    NOT?: Prisma.DocumentCounterWhereInput | Prisma.DocumentCounterWhereInput[];
    companyId?: Prisma.UuidFilter<"DocumentCounter"> | string;
    type?: Prisma.StringFilter<"DocumentCounter"> | string;
    year?: Prisma.IntFilter<"DocumentCounter"> | number;
    lastNo?: Prisma.IntFilter<"DocumentCounter"> | number;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
};
export type DocumentCounterOrderByWithRelationInput = {
    companyId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    lastNo?: Prisma.SortOrder;
    company?: Prisma.CompanyOrderByWithRelationInput;
};
export type DocumentCounterWhereUniqueInput = Prisma.AtLeast<{
    companyId_type_year?: Prisma.DocumentCounterCompanyIdTypeYearCompoundUniqueInput;
    AND?: Prisma.DocumentCounterWhereInput | Prisma.DocumentCounterWhereInput[];
    OR?: Prisma.DocumentCounterWhereInput[];
    NOT?: Prisma.DocumentCounterWhereInput | Prisma.DocumentCounterWhereInput[];
    companyId?: Prisma.UuidFilter<"DocumentCounter"> | string;
    type?: Prisma.StringFilter<"DocumentCounter"> | string;
    year?: Prisma.IntFilter<"DocumentCounter"> | number;
    lastNo?: Prisma.IntFilter<"DocumentCounter"> | number;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
}, "companyId_type_year">;
export type DocumentCounterOrderByWithAggregationInput = {
    companyId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    lastNo?: Prisma.SortOrder;
    _count?: Prisma.DocumentCounterCountOrderByAggregateInput;
    _avg?: Prisma.DocumentCounterAvgOrderByAggregateInput;
    _max?: Prisma.DocumentCounterMaxOrderByAggregateInput;
    _min?: Prisma.DocumentCounterMinOrderByAggregateInput;
    _sum?: Prisma.DocumentCounterSumOrderByAggregateInput;
};
export type DocumentCounterScalarWhereWithAggregatesInput = {
    AND?: Prisma.DocumentCounterScalarWhereWithAggregatesInput | Prisma.DocumentCounterScalarWhereWithAggregatesInput[];
    OR?: Prisma.DocumentCounterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DocumentCounterScalarWhereWithAggregatesInput | Prisma.DocumentCounterScalarWhereWithAggregatesInput[];
    companyId?: Prisma.UuidWithAggregatesFilter<"DocumentCounter"> | string;
    type?: Prisma.StringWithAggregatesFilter<"DocumentCounter"> | string;
    year?: Prisma.IntWithAggregatesFilter<"DocumentCounter"> | number;
    lastNo?: Prisma.IntWithAggregatesFilter<"DocumentCounter"> | number;
};
export type DocumentCounterCreateInput = {
    type: string;
    year: number;
    lastNo?: number;
    company: Prisma.CompanyCreateNestedOneWithoutDocumentCountersInput;
};
export type DocumentCounterUncheckedCreateInput = {
    companyId: string;
    type: string;
    year: number;
    lastNo?: number;
};
export type DocumentCounterUpdateInput = {
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    lastNo?: Prisma.IntFieldUpdateOperationsInput | number;
    company?: Prisma.CompanyUpdateOneRequiredWithoutDocumentCountersNestedInput;
};
export type DocumentCounterUncheckedUpdateInput = {
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    lastNo?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type DocumentCounterCreateManyInput = {
    companyId: string;
    type: string;
    year: number;
    lastNo?: number;
};
export type DocumentCounterUpdateManyMutationInput = {
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    lastNo?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type DocumentCounterUncheckedUpdateManyInput = {
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    lastNo?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type DocumentCounterListRelationFilter = {
    every?: Prisma.DocumentCounterWhereInput;
    some?: Prisma.DocumentCounterWhereInput;
    none?: Prisma.DocumentCounterWhereInput;
};
export type DocumentCounterOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DocumentCounterCompanyIdTypeYearCompoundUniqueInput = {
    companyId: string;
    type: string;
    year: number;
};
export type DocumentCounterCountOrderByAggregateInput = {
    companyId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    lastNo?: Prisma.SortOrder;
};
export type DocumentCounterAvgOrderByAggregateInput = {
    year?: Prisma.SortOrder;
    lastNo?: Prisma.SortOrder;
};
export type DocumentCounterMaxOrderByAggregateInput = {
    companyId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    lastNo?: Prisma.SortOrder;
};
export type DocumentCounterMinOrderByAggregateInput = {
    companyId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    lastNo?: Prisma.SortOrder;
};
export type DocumentCounterSumOrderByAggregateInput = {
    year?: Prisma.SortOrder;
    lastNo?: Prisma.SortOrder;
};
export type DocumentCounterCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.DocumentCounterCreateWithoutCompanyInput, Prisma.DocumentCounterUncheckedCreateWithoutCompanyInput> | Prisma.DocumentCounterCreateWithoutCompanyInput[] | Prisma.DocumentCounterUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.DocumentCounterCreateOrConnectWithoutCompanyInput | Prisma.DocumentCounterCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.DocumentCounterCreateManyCompanyInputEnvelope;
    connect?: Prisma.DocumentCounterWhereUniqueInput | Prisma.DocumentCounterWhereUniqueInput[];
};
export type DocumentCounterUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.DocumentCounterCreateWithoutCompanyInput, Prisma.DocumentCounterUncheckedCreateWithoutCompanyInput> | Prisma.DocumentCounterCreateWithoutCompanyInput[] | Prisma.DocumentCounterUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.DocumentCounterCreateOrConnectWithoutCompanyInput | Prisma.DocumentCounterCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.DocumentCounterCreateManyCompanyInputEnvelope;
    connect?: Prisma.DocumentCounterWhereUniqueInput | Prisma.DocumentCounterWhereUniqueInput[];
};
export type DocumentCounterUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCounterCreateWithoutCompanyInput, Prisma.DocumentCounterUncheckedCreateWithoutCompanyInput> | Prisma.DocumentCounterCreateWithoutCompanyInput[] | Prisma.DocumentCounterUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.DocumentCounterCreateOrConnectWithoutCompanyInput | Prisma.DocumentCounterCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.DocumentCounterUpsertWithWhereUniqueWithoutCompanyInput | Prisma.DocumentCounterUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.DocumentCounterCreateManyCompanyInputEnvelope;
    set?: Prisma.DocumentCounterWhereUniqueInput | Prisma.DocumentCounterWhereUniqueInput[];
    disconnect?: Prisma.DocumentCounterWhereUniqueInput | Prisma.DocumentCounterWhereUniqueInput[];
    delete?: Prisma.DocumentCounterWhereUniqueInput | Prisma.DocumentCounterWhereUniqueInput[];
    connect?: Prisma.DocumentCounterWhereUniqueInput | Prisma.DocumentCounterWhereUniqueInput[];
    update?: Prisma.DocumentCounterUpdateWithWhereUniqueWithoutCompanyInput | Prisma.DocumentCounterUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.DocumentCounterUpdateManyWithWhereWithoutCompanyInput | Prisma.DocumentCounterUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.DocumentCounterScalarWhereInput | Prisma.DocumentCounterScalarWhereInput[];
};
export type DocumentCounterUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.DocumentCounterCreateWithoutCompanyInput, Prisma.DocumentCounterUncheckedCreateWithoutCompanyInput> | Prisma.DocumentCounterCreateWithoutCompanyInput[] | Prisma.DocumentCounterUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.DocumentCounterCreateOrConnectWithoutCompanyInput | Prisma.DocumentCounterCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.DocumentCounterUpsertWithWhereUniqueWithoutCompanyInput | Prisma.DocumentCounterUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.DocumentCounterCreateManyCompanyInputEnvelope;
    set?: Prisma.DocumentCounterWhereUniqueInput | Prisma.DocumentCounterWhereUniqueInput[];
    disconnect?: Prisma.DocumentCounterWhereUniqueInput | Prisma.DocumentCounterWhereUniqueInput[];
    delete?: Prisma.DocumentCounterWhereUniqueInput | Prisma.DocumentCounterWhereUniqueInput[];
    connect?: Prisma.DocumentCounterWhereUniqueInput | Prisma.DocumentCounterWhereUniqueInput[];
    update?: Prisma.DocumentCounterUpdateWithWhereUniqueWithoutCompanyInput | Prisma.DocumentCounterUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.DocumentCounterUpdateManyWithWhereWithoutCompanyInput | Prisma.DocumentCounterUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.DocumentCounterScalarWhereInput | Prisma.DocumentCounterScalarWhereInput[];
};
export type DocumentCounterCreateWithoutCompanyInput = {
    type: string;
    year: number;
    lastNo?: number;
};
export type DocumentCounterUncheckedCreateWithoutCompanyInput = {
    type: string;
    year: number;
    lastNo?: number;
};
export type DocumentCounterCreateOrConnectWithoutCompanyInput = {
    where: Prisma.DocumentCounterWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCounterCreateWithoutCompanyInput, Prisma.DocumentCounterUncheckedCreateWithoutCompanyInput>;
};
export type DocumentCounterCreateManyCompanyInputEnvelope = {
    data: Prisma.DocumentCounterCreateManyCompanyInput | Prisma.DocumentCounterCreateManyCompanyInput[];
    skipDuplicates?: boolean;
};
export type DocumentCounterUpsertWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.DocumentCounterWhereUniqueInput;
    update: Prisma.XOR<Prisma.DocumentCounterUpdateWithoutCompanyInput, Prisma.DocumentCounterUncheckedUpdateWithoutCompanyInput>;
    create: Prisma.XOR<Prisma.DocumentCounterCreateWithoutCompanyInput, Prisma.DocumentCounterUncheckedCreateWithoutCompanyInput>;
};
export type DocumentCounterUpdateWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.DocumentCounterWhereUniqueInput;
    data: Prisma.XOR<Prisma.DocumentCounterUpdateWithoutCompanyInput, Prisma.DocumentCounterUncheckedUpdateWithoutCompanyInput>;
};
export type DocumentCounterUpdateManyWithWhereWithoutCompanyInput = {
    where: Prisma.DocumentCounterScalarWhereInput;
    data: Prisma.XOR<Prisma.DocumentCounterUpdateManyMutationInput, Prisma.DocumentCounterUncheckedUpdateManyWithoutCompanyInput>;
};
export type DocumentCounterScalarWhereInput = {
    AND?: Prisma.DocumentCounterScalarWhereInput | Prisma.DocumentCounterScalarWhereInput[];
    OR?: Prisma.DocumentCounterScalarWhereInput[];
    NOT?: Prisma.DocumentCounterScalarWhereInput | Prisma.DocumentCounterScalarWhereInput[];
    companyId?: Prisma.UuidFilter<"DocumentCounter"> | string;
    type?: Prisma.StringFilter<"DocumentCounter"> | string;
    year?: Prisma.IntFilter<"DocumentCounter"> | number;
    lastNo?: Prisma.IntFilter<"DocumentCounter"> | number;
};
export type DocumentCounterCreateManyCompanyInput = {
    type: string;
    year: number;
    lastNo?: number;
};
export type DocumentCounterUpdateWithoutCompanyInput = {
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    lastNo?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type DocumentCounterUncheckedUpdateWithoutCompanyInput = {
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    lastNo?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type DocumentCounterUncheckedUpdateManyWithoutCompanyInput = {
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    lastNo?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type DocumentCounterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    companyId?: boolean;
    type?: boolean;
    year?: boolean;
    lastNo?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentCounter"]>;
export type DocumentCounterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    companyId?: boolean;
    type?: boolean;
    year?: boolean;
    lastNo?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentCounter"]>;
export type DocumentCounterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    companyId?: boolean;
    type?: boolean;
    year?: boolean;
    lastNo?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["documentCounter"]>;
export type DocumentCounterSelectScalar = {
    companyId?: boolean;
    type?: boolean;
    year?: boolean;
    lastNo?: boolean;
};
export type DocumentCounterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"companyId" | "type" | "year" | "lastNo", ExtArgs["result"]["documentCounter"]>;
export type DocumentCounterInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type DocumentCounterIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type DocumentCounterIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type $DocumentCounterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DocumentCounter";
    objects: {
        company: Prisma.$CompanyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        companyId: string;
        type: string;
        year: number;
        lastNo: number;
    }, ExtArgs["result"]["documentCounter"]>;
    composites: {};
};
export type DocumentCounterGetPayload<S extends boolean | null | undefined | DocumentCounterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DocumentCounterPayload, S>;
export type DocumentCounterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DocumentCounterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocumentCounterCountAggregateInputType | true;
};
export interface DocumentCounterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DocumentCounter'];
        meta: {
            name: 'DocumentCounter';
        };
    };
    findUnique<T extends DocumentCounterFindUniqueArgs>(args: Prisma.SelectSubset<T, DocumentCounterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DocumentCounterClient<runtime.Types.Result.GetResult<Prisma.$DocumentCounterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DocumentCounterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DocumentCounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentCounterClient<runtime.Types.Result.GetResult<Prisma.$DocumentCounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DocumentCounterFindFirstArgs>(args?: Prisma.SelectSubset<T, DocumentCounterFindFirstArgs<ExtArgs>>): Prisma.Prisma__DocumentCounterClient<runtime.Types.Result.GetResult<Prisma.$DocumentCounterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DocumentCounterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DocumentCounterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocumentCounterClient<runtime.Types.Result.GetResult<Prisma.$DocumentCounterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DocumentCounterFindManyArgs>(args?: Prisma.SelectSubset<T, DocumentCounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentCounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DocumentCounterCreateArgs>(args: Prisma.SelectSubset<T, DocumentCounterCreateArgs<ExtArgs>>): Prisma.Prisma__DocumentCounterClient<runtime.Types.Result.GetResult<Prisma.$DocumentCounterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DocumentCounterCreateManyArgs>(args?: Prisma.SelectSubset<T, DocumentCounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DocumentCounterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DocumentCounterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentCounterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DocumentCounterDeleteArgs>(args: Prisma.SelectSubset<T, DocumentCounterDeleteArgs<ExtArgs>>): Prisma.Prisma__DocumentCounterClient<runtime.Types.Result.GetResult<Prisma.$DocumentCounterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DocumentCounterUpdateArgs>(args: Prisma.SelectSubset<T, DocumentCounterUpdateArgs<ExtArgs>>): Prisma.Prisma__DocumentCounterClient<runtime.Types.Result.GetResult<Prisma.$DocumentCounterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DocumentCounterDeleteManyArgs>(args?: Prisma.SelectSubset<T, DocumentCounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DocumentCounterUpdateManyArgs>(args: Prisma.SelectSubset<T, DocumentCounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DocumentCounterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DocumentCounterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocumentCounterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DocumentCounterUpsertArgs>(args: Prisma.SelectSubset<T, DocumentCounterUpsertArgs<ExtArgs>>): Prisma.Prisma__DocumentCounterClient<runtime.Types.Result.GetResult<Prisma.$DocumentCounterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DocumentCounterCountArgs>(args?: Prisma.Subset<T, DocumentCounterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DocumentCounterCountAggregateOutputType> : number>;
    aggregate<T extends DocumentCounterAggregateArgs>(args: Prisma.Subset<T, DocumentCounterAggregateArgs>): Prisma.PrismaPromise<GetDocumentCounterAggregateType<T>>;
    groupBy<T extends DocumentCounterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DocumentCounterGroupByArgs['orderBy'];
    } : {
        orderBy?: DocumentCounterGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DocumentCounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DocumentCounterFieldRefs;
}
export interface Prisma__DocumentCounterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    company<T extends Prisma.CompanyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CompanyDefaultArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DocumentCounterFieldRefs {
    readonly companyId: Prisma.FieldRef<"DocumentCounter", 'String'>;
    readonly type: Prisma.FieldRef<"DocumentCounter", 'String'>;
    readonly year: Prisma.FieldRef<"DocumentCounter", 'Int'>;
    readonly lastNo: Prisma.FieldRef<"DocumentCounter", 'Int'>;
}
export type DocumentCounterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentCounterSelect<ExtArgs> | null;
    omit?: Prisma.DocumentCounterOmit<ExtArgs> | null;
    include?: Prisma.DocumentCounterInclude<ExtArgs> | null;
    where: Prisma.DocumentCounterWhereUniqueInput;
};
export type DocumentCounterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentCounterSelect<ExtArgs> | null;
    omit?: Prisma.DocumentCounterOmit<ExtArgs> | null;
    include?: Prisma.DocumentCounterInclude<ExtArgs> | null;
    where: Prisma.DocumentCounterWhereUniqueInput;
};
export type DocumentCounterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DocumentCounterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DocumentCounterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DocumentCounterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentCounterSelect<ExtArgs> | null;
    omit?: Prisma.DocumentCounterOmit<ExtArgs> | null;
    include?: Prisma.DocumentCounterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentCounterCreateInput, Prisma.DocumentCounterUncheckedCreateInput>;
};
export type DocumentCounterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DocumentCounterCreateManyInput | Prisma.DocumentCounterCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocumentCounterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentCounterSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentCounterOmit<ExtArgs> | null;
    data: Prisma.DocumentCounterCreateManyInput | Prisma.DocumentCounterCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DocumentCounterIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DocumentCounterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentCounterSelect<ExtArgs> | null;
    omit?: Prisma.DocumentCounterOmit<ExtArgs> | null;
    include?: Prisma.DocumentCounterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentCounterUpdateInput, Prisma.DocumentCounterUncheckedUpdateInput>;
    where: Prisma.DocumentCounterWhereUniqueInput;
};
export type DocumentCounterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DocumentCounterUpdateManyMutationInput, Prisma.DocumentCounterUncheckedUpdateManyInput>;
    where?: Prisma.DocumentCounterWhereInput;
    limit?: number;
};
export type DocumentCounterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentCounterSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocumentCounterOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocumentCounterUpdateManyMutationInput, Prisma.DocumentCounterUncheckedUpdateManyInput>;
    where?: Prisma.DocumentCounterWhereInput;
    limit?: number;
    include?: Prisma.DocumentCounterIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DocumentCounterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentCounterSelect<ExtArgs> | null;
    omit?: Prisma.DocumentCounterOmit<ExtArgs> | null;
    include?: Prisma.DocumentCounterInclude<ExtArgs> | null;
    where: Prisma.DocumentCounterWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocumentCounterCreateInput, Prisma.DocumentCounterUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DocumentCounterUpdateInput, Prisma.DocumentCounterUncheckedUpdateInput>;
};
export type DocumentCounterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentCounterSelect<ExtArgs> | null;
    omit?: Prisma.DocumentCounterOmit<ExtArgs> | null;
    include?: Prisma.DocumentCounterInclude<ExtArgs> | null;
    where: Prisma.DocumentCounterWhereUniqueInput;
};
export type DocumentCounterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocumentCounterWhereInput;
    limit?: number;
};
export type DocumentCounterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocumentCounterSelect<ExtArgs> | null;
    omit?: Prisma.DocumentCounterOmit<ExtArgs> | null;
    include?: Prisma.DocumentCounterInclude<ExtArgs> | null;
};
