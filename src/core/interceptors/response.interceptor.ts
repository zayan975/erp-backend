import { CallHandler, ExecutionContext, Injectable, NestInterceptor, StreamableFile } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/** Success shape: { data } for single results; paginated results already return { data, meta }. */
@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(_ctx: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map((value: unknown) => {
        if (value === undefined || value === null) return value;
        if (value instanceof StreamableFile) return value;
        if (typeof value === 'object' && 'data' in value && 'meta' in value) return value;
        return { data: value };
      }),
    );
  }
}