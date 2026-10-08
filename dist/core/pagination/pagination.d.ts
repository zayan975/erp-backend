export declare class PaginationQueryDto {
    page: number;
    limit: number;
    sort?: string;
    search?: string;
}
export type SortOrder = Array<Record<string, 'asc' | 'desc'>>;
export declare const pageArgs: (q: PaginationQueryDto) => {
    skip: number;
    take: number;
};
export declare const toPage: <T>(data: T[], total: number, q: PaginationQueryDto) => {
    data: T[];
    meta: {
        page: number;
        limit: number;
        total: number;
    };
};
export declare function parseSort(sort: string | undefined, allowed: string[], fallback?: Record<string, 'asc' | 'desc'>): SortOrder;
