import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common';
import type { Response } from 'express';
import { AppException } from '../errors/app.exception.js';

interface ErrorBody {
  code: string;
  message: string;
  details?: unknown;
}

const STATUS_CODES: Record<number, string> = {
  400: 'BAD_REQUEST',
  401: 'UNAUTHORIZED',
  403: 'FORBIDDEN',
  404: 'NOT_FOUND',
  409: 'CONFLICT',
  413: 'PAYLOAD_TOO_LARGE',
  422: 'UNPROCESSABLE_ENTITY',
  429: 'TOO_MANY_REQUESTS',
};
const codeFor = (status: number) => STATUS_CODES[status] ?? `HTTP_${status}`;

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse<Response>();
    const { status, body } = this.normalize(exception);
    if (status >= 500) {
      this.logger.error(exception instanceof Error ? (exception.stack ?? exception.message) : String(exception));
    }
    res.status(status).json({ error: body });
  }

  private normalize(exception: unknown): { status: number; body: ErrorBody } {
    if (exception instanceof AppException) {
      return {
        status: exception.getStatus(),
        body: { code: exception.code, message: exception.message, details: exception.details },
      };
    }

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const r = exception.getResponse();
      if (typeof r === 'string') return { status, body: { code: codeFor(status), message: r } };

      const obj = r as { message?: string | string[] };
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

    // Prisma errors (matched by name so we do not depend on the generated client path)
    const e = exception as { name?: string; code?: string; meta?: { target?: unknown } } | null;
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

    // Errors from Express middleware (bad JSON, payload too large) carry their own 4xx status
    const http = exception as { status?: number; message?: string } | null;
    if (typeof http?.status === 'number' && http.status >= 400 && http.status < 500) {
      return { status: http.status, body: { code: codeFor(http.status), message: http.message ?? 'Bad request' } };
    }

    return { status: 500, body: { code: 'INTERNAL_ERROR', message: 'Something went wrong' } };
  }
}