var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            ConfigModule.forRoot({ isGlobal: true, validate: validateEnv }),
            ClsModule.forRoot({ global: true, middleware: { mount: true } }),
            LoggerModule.forRoot({
                pinoHttp: {
                    genReqId: (req, res) => {
                        const id = req.headers['x-request-id'] ?? randomUUID();
                        res.setHeader('X-Request-Id', id);
                        return id;
                    },
                    redact: ['req.headers.authorization', 'req.headers.cookie', 'req.body.password'],
                    transport: process.env.NODE_ENV === 'production' ? undefined : { target: 'pino-pretty' },
                },
            }),
            ThrottlerModule.forRoot([{ ttl: 60_000, limit: 120 }]),
            PrismaModule,
        ],
        controllers: [HealthController],
        providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map