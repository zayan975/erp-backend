var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';
import { AppException } from '../errors/app.exception.js';
export class PaginationQueryDto {
    page = 1;
    limit = 20;
    sort;
    search;
}
__decorate([
    ApiPropertyOptional({ default: 1 }),
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], PaginationQueryDto.prototype, "page", void 0);
__decorate([
    ApiPropertyOptional({ default: 20, maximum: 100 }),
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(1),
    Max(100),
    __metadata("design:type", Number)
], PaginationQueryDto.prototype, "limit", void 0);
__decorate([
    ApiPropertyOptional({ example: '-createdAt', description: 'Comma separated, "-" prefix = descending' }),
    IsOptional(),
    IsString(),
    MaxLength(100),
    __metadata("design:type", String)
], PaginationQueryDto.prototype, "sort", void 0);
__decorate([
    ApiPropertyOptional(),
    IsOptional(),
    IsString(),
    MaxLength(100),
    __metadata("design:type", String)
], PaginationQueryDto.prototype, "search", void 0);
export const pageArgs = (q) => ({ skip: (q.page - 1) * q.limit, take: q.limit });
export const toPage = (data, total, q) => ({
    data,
    meta: { page: q.page, limit: q.limit, total },
});
export function parseSort(sort, allowed, fallback = { createdAt: 'desc' }) {
    if (!sort)
        return [fallback];
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
        return { [field]: desc ? 'desc' : 'asc' };
    });
}
//# sourceMappingURL=pagination.js.map