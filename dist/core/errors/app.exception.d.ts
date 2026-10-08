import { HttpException } from '@nestjs/common';
export declare class AppException extends HttpException {
    readonly code: string;
    readonly details?: unknown | undefined;
    constructor(code: string, message: string, status?: number, details?: unknown | undefined);
}
export declare const unauthorized: (code: string, message: string, details?: unknown) => AppException;
export declare const forbidden: (code: string, message: string, details?: unknown) => AppException;
export declare const notFound: (code: string, message: string, details?: unknown) => AppException;
export declare const conflict: (code: string, message: string, details?: unknown) => AppException;
export declare const businessRule: (code: string, message: string, details?: unknown) => AppException;
