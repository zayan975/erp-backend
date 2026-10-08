import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ClsModule } from 'nestjs-cls';
import { LoggerModule } from 'nestjs-pino';
import { randomUUID } from 'crypto';
import { validateEnv } from './core/config/env.validation.js';
import { PrismaModule } from './core/prisma/prisma.module.js';
import { HealthController } from './health.controller.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate: validateEnv }), //konsa user konsi compnay check krta ha
    ClsModule.forRoot({ global: true, middleware: { mount: true } }),
    LoggerModule.forRoot({
      pinoHttp: {
        genReqId: (req, res) => {
          const id = (req.headers['x-request-id'] as string) ?? randomUUID();
          res.setHeader('X-Request-Id', id);
          return id;
        },
        redact: ['req.headers.authorization', 'req.headers.cookie', 'req.body.password'],
        transport: process.env.NODE_ENV === 'production' ? undefined : { target: 'pino-pretty' },
      },
    }),
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 120 }]), //ek IP se 1 minute mein 120 se zyada requests rok deta hai.
    PrismaModule,
  ],
  controllers: [HealthController],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}