import { plainToInstance } from 'class-transformer';
import { IsIn, IsNumber, IsString, validateSync } from 'class-validator';

class Env {
  @IsIn(['development', 'test', 'production']) NODE_ENV!: string;
  @IsNumber() PORT!: number;
  @IsString() FRONTEND_ORIGIN!: string;
  @IsString() DATABASE_URL!: string;
  @IsString() JWT_ACCESS_SECRET!: string;
  @IsString() JWT_ACCESS_TTL!: string;
  @IsNumber() REFRESH_TTL_DAYS!: number;
}

export function validateEnv(raw: Record<string, unknown>) {
  const cfg = plainToInstance(Env, raw, { enableImplicitConversion: true });
  const errors = validateSync(cfg, { skipMissingProperties: false });
  if (errors.length) {
    throw new Error(
      'Invalid environment: ' +
        errors.map((e) => Object.values(e.constraints ?? {}).join(', ')).join('; '),
    );
  }
  return raw;
}