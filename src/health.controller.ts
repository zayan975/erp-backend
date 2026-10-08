import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './core/prisma/prisma.service.js';
import { Public } from './core/auth/auth.decorators.js';

@Public()
@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async check() {
    await this.prisma.$queryRaw`SELECT 1`;
    return { status: 'ok' };
  }
}