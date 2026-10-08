import { PrismaService } from './core/prisma/prisma.service.js';
export declare class HealthController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    check(): Promise<{
        status: string;
    }>;
}
