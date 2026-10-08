import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "company" | "user" | "role" | "permission" | "rolePermission" | "refreshToken" | "auditLog" | "file" | "setting" | "documentCounter" | "idempotencyKey";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Company: {
            payload: Prisma.$CompanyPayload<ExtArgs>;
            fields: Prisma.CompanyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CompanyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                findFirst: {
                    args: Prisma.CompanyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                findMany: {
                    args: Prisma.CompanyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>[];
                };
                create: {
                    args: Prisma.CompanyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                createMany: {
                    args: Prisma.CompanyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>[];
                };
                delete: {
                    args: Prisma.CompanyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                update: {
                    args: Prisma.CompanyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                deleteMany: {
                    args: Prisma.CompanyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CompanyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>[];
                };
                upsert: {
                    args: Prisma.CompanyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CompanyPayload>;
                };
                aggregate: {
                    args: Prisma.CompanyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCompany>;
                };
                groupBy: {
                    args: Prisma.CompanyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CompanyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CompanyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CompanyCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Role: {
            payload: Prisma.$RolePayload<ExtArgs>;
            fields: Prisma.RoleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RoleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                findFirst: {
                    args: Prisma.RoleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                findMany: {
                    args: Prisma.RoleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                create: {
                    args: Prisma.RoleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                createMany: {
                    args: Prisma.RoleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                delete: {
                    args: Prisma.RoleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                update: {
                    args: Prisma.RoleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                deleteMany: {
                    args: Prisma.RoleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RoleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>[];
                };
                upsert: {
                    args: Prisma.RoleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePayload>;
                };
                aggregate: {
                    args: Prisma.RoleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRole>;
                };
                groupBy: {
                    args: Prisma.RoleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RoleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RoleCountAggregateOutputType> | number;
                };
            };
        };
        Permission: {
            payload: Prisma.$PermissionPayload<ExtArgs>;
            fields: Prisma.PermissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PermissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                findFirst: {
                    args: Prisma.PermissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                findMany: {
                    args: Prisma.PermissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>[];
                };
                create: {
                    args: Prisma.PermissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                createMany: {
                    args: Prisma.PermissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>[];
                };
                delete: {
                    args: Prisma.PermissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                update: {
                    args: Prisma.PermissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                deleteMany: {
                    args: Prisma.PermissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PermissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>[];
                };
                upsert: {
                    args: Prisma.PermissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PermissionPayload>;
                };
                aggregate: {
                    args: Prisma.PermissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePermission>;
                };
                groupBy: {
                    args: Prisma.PermissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PermissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PermissionCountAggregateOutputType> | number;
                };
            };
        };
        RolePermission: {
            payload: Prisma.$RolePermissionPayload<ExtArgs>;
            fields: Prisma.RolePermissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                findFirst: {
                    args: Prisma.RolePermissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                findMany: {
                    args: Prisma.RolePermissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
                };
                create: {
                    args: Prisma.RolePermissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                createMany: {
                    args: Prisma.RolePermissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RolePermissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
                };
                delete: {
                    args: Prisma.RolePermissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                update: {
                    args: Prisma.RolePermissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                deleteMany: {
                    args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RolePermissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>[];
                };
                upsert: {
                    args: Prisma.RolePermissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolePermissionPayload>;
                };
                aggregate: {
                    args: Prisma.RolePermissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRolePermission>;
                };
                groupBy: {
                    args: Prisma.RolePermissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolePermissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RolePermissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolePermissionCountAggregateOutputType> | number;
                };
            };
        };
        RefreshToken: {
            payload: Prisma.$RefreshTokenPayload<ExtArgs>;
            fields: Prisma.RefreshTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findFirst: {
                    args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findMany: {
                    args: Prisma.RefreshTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                create: {
                    args: Prisma.RefreshTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                createMany: {
                    args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                delete: {
                    args: Prisma.RefreshTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                update: {
                    args: Prisma.RefreshTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                upsert: {
                    args: Prisma.RefreshTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                aggregate: {
                    args: Prisma.RefreshTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefreshToken>;
                };
                groupBy: {
                    args: Prisma.RefreshTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RefreshTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        File: {
            payload: Prisma.$FilePayload<ExtArgs>;
            fields: Prisma.FileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                findFirst: {
                    args: Prisma.FileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                findMany: {
                    args: Prisma.FileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>[];
                };
                create: {
                    args: Prisma.FileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                createMany: {
                    args: Prisma.FileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>[];
                };
                delete: {
                    args: Prisma.FileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                update: {
                    args: Prisma.FileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                deleteMany: {
                    args: Prisma.FileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>[];
                };
                upsert: {
                    args: Prisma.FileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                aggregate: {
                    args: Prisma.FileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFile>;
                };
                groupBy: {
                    args: Prisma.FileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FileCountAggregateOutputType> | number;
                };
            };
        };
        Setting: {
            payload: Prisma.$SettingPayload<ExtArgs>;
            fields: Prisma.SettingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SettingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingPayload>;
                };
                findFirst: {
                    args: Prisma.SettingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingPayload>;
                };
                findMany: {
                    args: Prisma.SettingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingPayload>[];
                };
                create: {
                    args: Prisma.SettingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingPayload>;
                };
                createMany: {
                    args: Prisma.SettingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingPayload>[];
                };
                delete: {
                    args: Prisma.SettingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingPayload>;
                };
                update: {
                    args: Prisma.SettingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingPayload>;
                };
                deleteMany: {
                    args: Prisma.SettingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SettingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SettingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingPayload>[];
                };
                upsert: {
                    args: Prisma.SettingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingPayload>;
                };
                aggregate: {
                    args: Prisma.SettingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSetting>;
                };
                groupBy: {
                    args: Prisma.SettingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SettingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SettingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SettingCountAggregateOutputType> | number;
                };
            };
        };
        DocumentCounter: {
            payload: Prisma.$DocumentCounterPayload<ExtArgs>;
            fields: Prisma.DocumentCounterFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DocumentCounterFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentCounterPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DocumentCounterFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentCounterPayload>;
                };
                findFirst: {
                    args: Prisma.DocumentCounterFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentCounterPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DocumentCounterFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentCounterPayload>;
                };
                findMany: {
                    args: Prisma.DocumentCounterFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentCounterPayload>[];
                };
                create: {
                    args: Prisma.DocumentCounterCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentCounterPayload>;
                };
                createMany: {
                    args: Prisma.DocumentCounterCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DocumentCounterCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentCounterPayload>[];
                };
                delete: {
                    args: Prisma.DocumentCounterDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentCounterPayload>;
                };
                update: {
                    args: Prisma.DocumentCounterUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentCounterPayload>;
                };
                deleteMany: {
                    args: Prisma.DocumentCounterDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DocumentCounterUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DocumentCounterUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentCounterPayload>[];
                };
                upsert: {
                    args: Prisma.DocumentCounterUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocumentCounterPayload>;
                };
                aggregate: {
                    args: Prisma.DocumentCounterAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDocumentCounter>;
                };
                groupBy: {
                    args: Prisma.DocumentCounterGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocumentCounterGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DocumentCounterCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocumentCounterCountAggregateOutputType> | number;
                };
            };
        };
        IdempotencyKey: {
            payload: Prisma.$IdempotencyKeyPayload<ExtArgs>;
            fields: Prisma.IdempotencyKeyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.IdempotencyKeyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>;
                };
                findFirst: {
                    args: Prisma.IdempotencyKeyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.IdempotencyKeyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>;
                };
                findMany: {
                    args: Prisma.IdempotencyKeyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>[];
                };
                create: {
                    args: Prisma.IdempotencyKeyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>;
                };
                createMany: {
                    args: Prisma.IdempotencyKeyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.IdempotencyKeyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>[];
                };
                delete: {
                    args: Prisma.IdempotencyKeyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>;
                };
                update: {
                    args: Prisma.IdempotencyKeyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>;
                };
                deleteMany: {
                    args: Prisma.IdempotencyKeyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.IdempotencyKeyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.IdempotencyKeyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>[];
                };
                upsert: {
                    args: Prisma.IdempotencyKeyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>;
                };
                aggregate: {
                    args: Prisma.IdempotencyKeyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIdempotencyKey>;
                };
                groupBy: {
                    args: Prisma.IdempotencyKeyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IdempotencyKeyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.IdempotencyKeyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IdempotencyKeyCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>;
export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    company?: Prisma.CompanyOmit;
    user?: Prisma.UserOmit;
    role?: Prisma.RoleOmit;
    permission?: Prisma.PermissionOmit;
    rolePermission?: Prisma.RolePermissionOmit;
    refreshToken?: Prisma.RefreshTokenOmit;
    auditLog?: Prisma.AuditLogOmit;
    file?: Prisma.FileOmit;
    setting?: Prisma.SettingOmit;
    documentCounter?: Prisma.DocumentCounterOmit;
    idempotencyKey?: Prisma.IdempotencyKeyOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
