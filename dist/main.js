import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module.js';
async function bootstrap() {
    const app = await NestFactory.create(AppModule, { bufferLogs: true });
    app.useLogger(app.get(Logger));
    app.use(helmet());
    app.use(cookieParser());
    app.enableCors({ origin: process.env.FRONTEND_ORIGIN, credentials: true });
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    const doc = SwaggerModule.createDocument(app, new DocumentBuilder().setTitle('ERP API').setVersion('1').addBearerAuth().build());
    SwaggerModule.setup('api/docs', app, doc);
    await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
//# sourceMappingURL=main.js.map