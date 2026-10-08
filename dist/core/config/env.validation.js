var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { plainToInstance } from 'class-transformer';
import { IsIn, IsNumber, IsString, validateSync } from 'class-validator';
class Env {
    NODE_ENV;
    PORT;
    FRONTEND_ORIGIN;
    DATABASE_URL;
    JWT_ACCESS_SECRET;
    JWT_ACCESS_TTL;
    REFRESH_TTL_DAYS;
}
__decorate([
    IsIn(['development', 'test', 'production']),
    __metadata("design:type", String)
], Env.prototype, "NODE_ENV", void 0);
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], Env.prototype, "PORT", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], Env.prototype, "FRONTEND_ORIGIN", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], Env.prototype, "DATABASE_URL", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], Env.prototype, "JWT_ACCESS_SECRET", void 0);
__decorate([
    IsString(),
    __metadata("design:type", String)
], Env.prototype, "JWT_ACCESS_TTL", void 0);
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], Env.prototype, "REFRESH_TTL_DAYS", void 0);
export function validateEnv(raw) {
    const cfg = plainToInstance(Env, raw, { enableImplicitConversion: true });
    const errors = validateSync(cfg, { skipMissingProperties: false });
    if (errors.length) {
        throw new Error('Invalid environment: ' +
            errors.map((e) => Object.values(e.constraints ?? {}).join(', ')).join('; '));
    }
    return raw;
}
//# sourceMappingURL=env.validation.js.map