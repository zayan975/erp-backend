import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FileModel = runtime.Types.Result.DefaultSelection<Prisma.$FilePayload>;
export type AggregateFile = {
    _count: FileCountAggregateOutputType | null;
    _avg: FileAvgAggregateOutputType | null;
    _sum: FileSumAggregateOutputType | null;
    _min: FileMinAggregateOutputType | null;
    _max: FileMaxAggregateOutputType | null;
};
export type FileAvgAggregateOutputType = {
    sizeBytes: number | null;
};
export type FileSumAggregateOutputType = {
    sizeBytes: number | null;
};
export type FileMinAggregateOutputType = {
    id: string | null;
    companyId: string | null;
    storageKey: string | null;
    originalName: string | null;
    mimeType: string | null;
    sizeBytes: number | null;
    status: string | null;
    createdAt: Date | null;
    createdBy: string | null;
};
export type FileMaxAggregateOutputType = {
    id: string | null;
    companyId: string | null;
    storageKey: string | null;
    originalName: string | null;
    mimeType: string | null;
    sizeBytes: number | null;
    status: string | null;
    createdAt: Date | null;
    createdBy: string | null;
};
export type FileCountAggregateOutputType = {
    id: number;
    companyId: number;
    storageKey: number;
    originalName: number;
    mimeType: number;
    sizeBytes: number;
    status: number;
    createdAt: number;
    createdBy: number;
    _all: number;
};
export type FileAvgAggregateInputType = {
    sizeBytes?: true;
};
export type FileSumAggregateInputType = {
    sizeBytes?: true;
};
export type FileMinAggregateInputType = {
    id?: true;
    companyId?: true;
    storageKey?: true;
    originalName?: true;
    mimeType?: true;
    sizeBytes?: true;
    status?: true;
    createdAt?: true;
    createdBy?: true;
};
export type FileMaxAggregateInputType = {
    id?: true;
    companyId?: true;
    storageKey?: true;
    originalName?: true;
    mimeType?: true;
    sizeBytes?: true;
    status?: true;
    createdAt?: true;
    createdBy?: true;
};
export type FileCountAggregateInputType = {
    id?: true;
    companyId?: true;
    storageKey?: true;
    originalName?: true;
    mimeType?: true;
    sizeBytes?: true;
    status?: true;
    createdAt?: true;
    createdBy?: true;
    _all?: true;
};
export type FileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileWhereInput;
    orderBy?: Prisma.FileOrderByWithRelationInput | Prisma.FileOrderByWithRelationInput[];
    cursor?: Prisma.FileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FileCountAggregateInputType;
    _avg?: FileAvgAggregateInputType;
    _sum?: FileSumAggregateInputType;
    _min?: FileMinAggregateInputType;
    _max?: FileMaxAggregateInputType;
};
export type GetFileAggregateType<T extends FileAggregateArgs> = {
    [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFile[P]> : Prisma.GetScalarType<T[P], AggregateFile[P]>;
};
export type FileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileWhereInput;
    orderBy?: Prisma.FileOrderByWithAggregationInput | Prisma.FileOrderByWithAggregationInput[];
    by: Prisma.FileScalarFieldEnum[] | Prisma.FileScalarFieldEnum;
    having?: Prisma.FileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FileCountAggregateInputType | true;
    _avg?: FileAvgAggregateInputType;
    _sum?: FileSumAggregateInputType;
    _min?: FileMinAggregateInputType;
    _max?: FileMaxAggregateInputType;
};
export type FileGroupByOutputType = {
    id: string;
    companyId: string;
    storageKey: string;
    originalName: string;
    mimeType: string;
    sizeBytes: number;
    status: string;
    createdAt: Date;
    createdBy: string | null;
    _count: FileCountAggregateOutputType | null;
    _avg: FileAvgAggregateOutputType | null;
    _sum: FileSumAggregateOutputType | null;
    _min: FileMinAggregateOutputType | null;
    _max: FileMaxAggregateOutputType | null;
};
export type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FileGroupByOutputType[P]>;
}>>;
export type FileWhereInput = {
    AND?: Prisma.FileWhereInput | Prisma.FileWhereInput[];
    OR?: Prisma.FileWhereInput[];
    NOT?: Prisma.FileWhereInput | Prisma.FileWhereInput[];
    id?: Prisma.UuidFilter<"File"> | string;
    companyId?: Prisma.UuidFilter<"File"> | string;
    storageKey?: Prisma.StringFilter<"File"> | string;
    originalName?: Prisma.StringFilter<"File"> | string;
    mimeType?: Prisma.StringFilter<"File"> | string;
    sizeBytes?: Prisma.IntFilter<"File"> | number;
    status?: Prisma.StringFilter<"File"> | string;
    createdAt?: Prisma.DateTimeFilter<"File"> | Date | string;
    createdBy?: Prisma.UuidNullableFilter<"File"> | string | null;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
};
export type FileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    company?: Prisma.CompanyOrderByWithRelationInput;
};
export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    storageKey?: string;
    AND?: Prisma.FileWhereInput | Prisma.FileWhereInput[];
    OR?: Prisma.FileWhereInput[];
    NOT?: Prisma.FileWhereInput | Prisma.FileWhereInput[];
    companyId?: Prisma.UuidFilter<"File"> | string;
    originalName?: Prisma.StringFilter<"File"> | string;
    mimeType?: Prisma.StringFilter<"File"> | string;
    sizeBytes?: Prisma.IntFilter<"File"> | number;
    status?: Prisma.StringFilter<"File"> | string;
    createdAt?: Prisma.DateTimeFilter<"File"> | Date | string;
    createdBy?: Prisma.UuidNullableFilter<"File"> | string | null;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
}, "id" | "storageKey">;
export type FileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.FileCountOrderByAggregateInput;
    _avg?: Prisma.FileAvgOrderByAggregateInput;
    _max?: Prisma.FileMaxOrderByAggregateInput;
    _min?: Prisma.FileMinOrderByAggregateInput;
    _sum?: Prisma.FileSumOrderByAggregateInput;
};
export type FileScalarWhereWithAggregatesInput = {
    AND?: Prisma.FileScalarWhereWithAggregatesInput | Prisma.FileScalarWhereWithAggregatesInput[];
    OR?: Prisma.FileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FileScalarWhereWithAggregatesInput | Prisma.FileScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"File"> | string;
    companyId?: Prisma.UuidWithAggregatesFilter<"File"> | string;
    storageKey?: Prisma.StringWithAggregatesFilter<"File"> | string;
    originalName?: Prisma.StringWithAggregatesFilter<"File"> | string;
    mimeType?: Prisma.StringWithAggregatesFilter<"File"> | string;
    sizeBytes?: Prisma.IntWithAggregatesFilter<"File"> | number;
    status?: Prisma.StringWithAggregatesFilter<"File"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"File"> | Date | string;
    createdBy?: Prisma.UuidNullableWithAggregatesFilter<"File"> | string | null;
};
export type FileCreateInput = {
    id?: string;
    storageKey: string;
    originalName: string;
    mimeType: string;
    sizeBytes: number;
    status?: string;
    createdAt?: Date | string;
    createdBy?: string | null;
    company: Prisma.CompanyCreateNestedOneWithoutFilesInput;
};
export type FileUncheckedCreateInput = {
    id?: string;
    companyId: string;
    storageKey: string;
    originalName: string;
    mimeType: string;
    sizeBytes: number;
    status?: string;
    createdAt?: Date | string;
    createdBy?: string | null;
};
export type FileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    company?: Prisma.CompanyUpdateOneRequiredWithoutFilesNestedInput;
};
export type FileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type FileCreateManyInput = {
    id?: string;
    companyId: string;
    storageKey: string;
    originalName: string;
    mimeType: string;
    sizeBytes: number;
    status?: string;
    createdAt?: Date | string;
    createdBy?: string | null;
};
export type FileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type FileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type FileListRelationFilter = {
    every?: Prisma.FileWhereInput;
    some?: Prisma.FileWhereInput;
    none?: Prisma.FileWhereInput;
};
export type FileOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
};
export type FileAvgOrderByAggregateInput = {
    sizeBytes?: Prisma.SortOrder;
};
export type FileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
};
export type FileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    storageKey?: Prisma.SortOrder;
    originalName?: Prisma.SortOrder;
    mimeType?: Prisma.SortOrder;
    sizeBytes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
};
export type FileSumOrderByAggregateInput = {
    sizeBytes?: Prisma.SortOrder;
};
export type FileCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutCompanyInput, Prisma.FileUncheckedCreateWithoutCompanyInput> | Prisma.FileCreateWithoutCompanyInput[] | Prisma.FileUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutCompanyInput | Prisma.FileCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.FileCreateManyCompanyInputEnvelope;
    connect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
};
export type FileUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutCompanyInput, Prisma.FileUncheckedCreateWithoutCompanyInput> | Prisma.FileCreateWithoutCompanyInput[] | Prisma.FileUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutCompanyInput | Prisma.FileCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.FileCreateManyCompanyInputEnvelope;
    connect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
};
export type FileUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutCompanyInput, Prisma.FileUncheckedCreateWithoutCompanyInput> | Prisma.FileCreateWithoutCompanyInput[] | Prisma.FileUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutCompanyInput | Prisma.FileCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.FileUpsertWithWhereUniqueWithoutCompanyInput | Prisma.FileUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.FileCreateManyCompanyInputEnvelope;
    set?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    disconnect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    delete?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    connect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    update?: Prisma.FileUpdateWithWhereUniqueWithoutCompanyInput | Prisma.FileUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.FileUpdateManyWithWhereWithoutCompanyInput | Prisma.FileUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.FileScalarWhereInput | Prisma.FileScalarWhereInput[];
};
export type FileUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutCompanyInput, Prisma.FileUncheckedCreateWithoutCompanyInput> | Prisma.FileCreateWithoutCompanyInput[] | Prisma.FileUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutCompanyInput | Prisma.FileCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.FileUpsertWithWhereUniqueWithoutCompanyInput | Prisma.FileUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.FileCreateManyCompanyInputEnvelope;
    set?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    disconnect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    delete?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    connect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    update?: Prisma.FileUpdateWithWhereUniqueWithoutCompanyInput | Prisma.FileUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.FileUpdateManyWithWhereWithoutCompanyInput | Prisma.FileUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.FileScalarWhereInput | Prisma.FileScalarWhereInput[];
};
export type FileCreateWithoutCompanyInput = {
    id?: string;
    storageKey: string;
    originalName: string;
    mimeType: string;
    sizeBytes: number;
    status?: string;
    createdAt?: Date | string;
    createdBy?: string | null;
};
export type FileUncheckedCreateWithoutCompanyInput = {
    id?: string;
    storageKey: string;
    originalName: string;
    mimeType: string;
    sizeBytes: number;
    status?: string;
    createdAt?: Date | string;
    createdBy?: string | null;
};
export type FileCreateOrConnectWithoutCompanyInput = {
    where: Prisma.FileWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileCreateWithoutCompanyInput, Prisma.FileUncheckedCreateWithoutCompanyInput>;
};
export type FileCreateManyCompanyInputEnvelope = {
    data: Prisma.FileCreateManyCompanyInput | Prisma.FileCreateManyCompanyInput[];
    skipDuplicates?: boolean;
};
export type FileUpsertWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.FileWhereUniqueInput;
    update: Prisma.XOR<Prisma.FileUpdateWithoutCompanyInput, Prisma.FileUncheckedUpdateWithoutCompanyInput>;
    create: Prisma.XOR<Prisma.FileCreateWithoutCompanyInput, Prisma.FileUncheckedCreateWithoutCompanyInput>;
};
export type FileUpdateWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.FileWhereUniqueInput;
    data: Prisma.XOR<Prisma.FileUpdateWithoutCompanyInput, Prisma.FileUncheckedUpdateWithoutCompanyInput>;
};
export type FileUpdateManyWithWhereWithoutCompanyInput = {
    where: Prisma.FileScalarWhereInput;
    data: Prisma.XOR<Prisma.FileUpdateManyMutationInput, Prisma.FileUncheckedUpdateManyWithoutCompanyInput>;
};
export type FileScalarWhereInput = {
    AND?: Prisma.FileScalarWhereInput | Prisma.FileScalarWhereInput[];
    OR?: Prisma.FileScalarWhereInput[];
    NOT?: Prisma.FileScalarWhereInput | Prisma.FileScalarWhereInput[];
    id?: Prisma.UuidFilter<"File"> | string;
    companyId?: Prisma.UuidFilter<"File"> | string;
    storageKey?: Prisma.StringFilter<"File"> | string;
    originalName?: Prisma.StringFilter<"File"> | string;
    mimeType?: Prisma.StringFilter<"File"> | string;
    sizeBytes?: Prisma.IntFilter<"File"> | number;
    status?: Prisma.StringFilter<"File"> | string;
    createdAt?: Prisma.DateTimeFilter<"File"> | Date | string;
    createdBy?: Prisma.UuidNullableFilter<"File"> | string | null;
};
export type FileCreateManyCompanyInput = {
    id?: string;
    storageKey: string;
    originalName: string;
    mimeType: string;
    sizeBytes: number;
    status?: string;
    createdAt?: Date | string;
    createdBy?: string | null;
};
export type FileUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type FileUncheckedUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type FileUncheckedUpdateManyWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storageKey?: Prisma.StringFieldUpdateOperationsInput | string;
    originalName?: Prisma.StringFieldUpdateOperationsInput | string;
    mimeType?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeBytes?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type FileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    storageKey?: boolean;
    originalName?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    status?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["file"]>;
export type FileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    storageKey?: boolean;
    originalName?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    status?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["file"]>;
export type FileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    storageKey?: boolean;
    originalName?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    status?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["file"]>;
export type FileSelectScalar = {
    id?: boolean;
    companyId?: boolean;
    storageKey?: boolean;
    originalName?: boolean;
    mimeType?: boolean;
    sizeBytes?: boolean;
    status?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
};
export type FileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "companyId" | "storageKey" | "originalName" | "mimeType" | "sizeBytes" | "status" | "createdAt" | "createdBy", ExtArgs["result"]["file"]>;
export type FileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type FileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type FileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type $FilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "File";
    objects: {
        company: Prisma.$CompanyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        companyId: string;
        storageKey: string;
        originalName: string;
        mimeType: string;
        sizeBytes: number;
        status: string;
        createdAt: Date;
        createdBy: string | null;
    }, ExtArgs["result"]["file"]>;
    composites: {};
};
export type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FilePayload, S>;
export type FileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FileCountAggregateInputType | true;
};
export interface FileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['File'];
        meta: {
            name: 'File';
        };
    };
    findUnique<T extends FileFindUniqueArgs>(args: Prisma.SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FileFindFirstArgs>(args?: Prisma.SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FileFindManyArgs>(args?: Prisma.SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FileCreateArgs>(args: Prisma.SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FileCreateManyArgs>(args?: Prisma.SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FileDeleteArgs>(args: Prisma.SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FileUpdateArgs>(args: Prisma.SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FileDeleteManyArgs>(args?: Prisma.SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FileUpdateManyArgs>(args: Prisma.SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FileUpsertArgs>(args: Prisma.SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FileCountArgs>(args?: Prisma.Subset<T, FileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FileCountAggregateOutputType> : number>;
    aggregate<T extends FileAggregateArgs>(args: Prisma.Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>;
    groupBy<T extends FileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FileGroupByArgs['orderBy'];
    } : {
        orderBy?: FileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FileFieldRefs;
}
export interface Prisma__FileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    company<T extends Prisma.CompanyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CompanyDefaultArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FileFieldRefs {
    readonly id: Prisma.FieldRef<"File", 'String'>;
    readonly companyId: Prisma.FieldRef<"File", 'String'>;
    readonly storageKey: Prisma.FieldRef<"File", 'String'>;
    readonly originalName: Prisma.FieldRef<"File", 'String'>;
    readonly mimeType: Prisma.FieldRef<"File", 'String'>;
    readonly sizeBytes: Prisma.FieldRef<"File", 'Int'>;
    readonly status: Prisma.FieldRef<"File", 'String'>;
    readonly createdAt: Prisma.FieldRef<"File", 'DateTime'>;
    readonly createdBy: Prisma.FieldRef<"File", 'String'>;
}
export type FileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    where: Prisma.FileWhereUniqueInput;
};
export type FileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    where: Prisma.FileWhereUniqueInput;
};
export type FileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FileCreateInput, Prisma.FileUncheckedCreateInput>;
};
export type FileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FileCreateManyInput | Prisma.FileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    data: Prisma.FileCreateManyInput | Prisma.FileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FileUpdateInput, Prisma.FileUncheckedUpdateInput>;
    where: Prisma.FileWhereUniqueInput;
};
export type FileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FileUpdateManyMutationInput, Prisma.FileUncheckedUpdateManyInput>;
    where?: Prisma.FileWhereInput;
    limit?: number;
};
export type FileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FileUpdateManyMutationInput, Prisma.FileUncheckedUpdateManyInput>;
    where?: Prisma.FileWhereInput;
    limit?: number;
    include?: Prisma.FileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    where: Prisma.FileWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileCreateInput, Prisma.FileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FileUpdateInput, Prisma.FileUncheckedUpdateInput>;
};
export type FileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    where: Prisma.FileWhereUniqueInput;
};
export type FileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileWhereInput;
    limit?: number;
};
export type FileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
};
