var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AllExceptionsFilter_1;
import { Catch, HttpException, Logger } from '@nestjs/common';
import { AppException } from '../errors/app.exception.js';
const STATUS_CODES = {
    400: 'BAD_REQUEST',
    401: 'UNAUTHORIZED',
    403: 'FORBIDDEN',
    404: 'NOT_FOUND',
    409: 'CONFLICT',
    413: 'PAYLOAD_TOO_LARGE',
    422: 'UNPROCESSABLE_ENTITY',
    429: 'TOO_MANY_REQUESTS',
};
const codeFor = (status) => STATUS_CODES[status] ?? `HTTP_${status}`;
let AllExceptionsFilter = AllExceptionsFilter_1 = class AllExceptionsFilter {
    logger = new Logger(AllExceptionsFilter_1.name);
    catch(exception, host) {
        const res = host.switchToHttp().getResponse();
        const { status, body } = this.normalize(exception);
        if (status >= 500) {
            this.logger.error(exception instanceof Error ? (exception.stack ?? exception.message) : String(exception));
        }
        res.status(status).json({ error: body });
    }
    normalize(exception) {
        if (exception instanceof AppException) {
            return {
                status: exception.getStatus(),
                body: { code: exception.code, message: exception.message, details: exception.details },
            };
        }
        if (exception instanceof HttpException) {
            const status = exception.getStatus();
            const r = exception.getResponse();
            if (typeof r === 'string')
                return { status, body: { code: codeFor(status), message: r } };
            const obj = r;
            if (Array.isArray(obj.message)) {
                return {
                    status,
                    body: {
                        code: status === 400 ? 'VALIDATION_ERROR' : codeFor(status),
                        message: 'Validation failed',
                        details: obj.message,
                    },
                };
            }
            return { status, body: { code: codeFor(status), message: obj.message ?? exception.message } };
        }
        const e = exception;
        if (e?.name === 'PrismaClientKnownRequestError') {
            if (e.code === 'P2002')
                return {
                    status: 409,
                    body: { code: 'UNIQUE_VIOLATION', message: 'A record with the same value already exists', details: e.meta?.target },
                };
            if (e.code === 'P2025')
                return { status: 404, body: { code: 'NOT_FOUND', message: 'Record not found' } };
            if (e.code === 'P2003')
                return { status: 409, body: { code: 'FOREIGN_KEY_VIOLATION', message: 'Related record does not exist or is still in use' } };
        }
        const http = exception;
        if (typeof http?.status === 'number' && http.status >= 400 && http.status < 500) {
            return { status: http.status, body: { code: codeFor(http.status), message: http.message ?? 'Bad request' } };
        }
        return { status: 500, body: { code: 'INTERNAL_ERROR', message: 'Something went wrong' } };
    }
};
AllExceptionsFilter = AllExceptionsFilter_1 = __decorate([
    Catch()
], AllExceptionsFilter);
export { AllExceptionsFilter };
//# sourceMappingURL=all-exceptions.filter.js.map