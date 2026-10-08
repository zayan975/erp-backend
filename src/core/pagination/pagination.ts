import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';
import { AppException } from '../errors/app.exception.js';

/** Shared list query: ?page=1&limit=20&sort=-createdAt&search=ahmed. Module DTOs extend this to add filters. */
export class PaginationQueryDto {
  @ApiPropertyOptional({ default: 1 })
  @IsOptional() @Type(() => Number) @IsInt() @Min(1)
  page: number = 1;

  @ApiPropertyOptional({ default: 20, maximum: 100 })
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(100)
  limit: number = 20;

  @ApiPropertyOptional({ example: '-createdAt', description: 'Comma separated, "-" prefix = descending' })
  @IsOptional() @IsString() @MaxLength(100)
  sort?: string;

  @ApiPropertyOptional()
  @IsOptional() @IsString() @MaxLength(100)
  search?: string;
}

export type SortOrder = Array<Record<string, 'asc' | 'desc'>>;

/** { skip, take } for Prisma findMany */
export const pageArgs = (q: PaginationQueryDto) => ({ skip: (q.page - 1) * q.limit, take: q.limit });

/** Builds the { data, meta } list response */
export const toPage = <T>(data: T[], total: number, q: PaginationQueryDto) => ({
  data,
  meta: { page: q.page, limit: q.limit, total },
});

/** "-createdAt,name" -> [{ createdAt: 'desc' }, { name: 'asc' }]; only whitelisted fields are allowed */
export function parseSort(
  sort: string | undefined,
  allowed: string[],
  fallback: Record<string, 'asc' | 'desc'> = { createdAt: 'desc' },
): SortOrder {
  if (!sort) return [fallback];
  return sort
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => {
      const desc = s.startsWith('-');
      const field = desc ? s.slice(1) : s;
      if (!allowed.includes(field)) {
        throw new AppException('INVALID_SORT', `Cannot sort by "${field}"`, 400, { allowed });
      }
      return { [field]: desc ? 'desc' : 'asc' } as Record<string, 'asc' | 'desc'>;
    });
}