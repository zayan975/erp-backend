import 'dotenv/config';
import * as argon2 from 'argon2';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

// ---------- Permission catalog (module:action) ----------
const PERMISSIONS: Record<string, string[]> = {
  land: ['read', 'create', 'update', 'delete'],
  projects: ['read', 'create', 'update'],
  plots: ['update', 'block'],
  customers: ['read', 'read_all', 'create', 'update'],
  bookings: ['read', 'read_all', 'create', 'approve', 'cancel', 'transfer'],
  installments: ['read', 'reschedule'],
  payments: ['read', 'read_all', 'create', 'confirm', 'verify', 'reverse'],
  finance: ['read', 'post'],
  accounts: ['manage'],
  journal: ['create', 'reverse'],
  construction: ['read', 'update', 'progress'],
  inventory: ['read', 'receive', 'issue', 'adjust', 'approve_adjustment'],
  vendors: ['read', 'manage'],
  purchase_orders: ['create', 'approve', 'receive'],
  vendor_bills: ['manage'],
  employees: ['read', 'manage'],
  attendance: ['read', 'mark'],
  leave: ['approve'],
  payroll: ['read', 'run', 'approve'],
  reports: ['read', 'export', 'schedule'],
  users: ['read', 'manage'],
  roles: ['manage'],
  settings: ['read', 'manage'],
  audit: ['read'],
};

const ALL = Object.entries(PERMISSIONS).flatMap(([m, actions]) =>
  actions.map((a) => `${m}:${a}`),
);

const without = (...excluded: string[]) => ALL.filter((p) => !excluded.includes(p));

// ---------- Default roles ----------
const ROLES: Record<string, string[]> = {
  ADMIN: ALL,
  MANAGER: without(
    'roles:manage',
    'settings:manage',
    'accounts:manage',
    'payroll:run',
    'payroll:approve',
  ),
  ACCOUNTANT: [
    'finance:read', 'finance:post', 'accounts:manage', 'journal:create', 'journal:reverse',
    'payments:read', 'payments:read_all', 'payments:confirm', 'payments:verify', 'payments:reverse',
    'installments:read', 'bookings:read_all', 'customers:read_all',
    'vendors:read', 'vendor_bills:manage',
    'payroll:read', 'payroll:run', 'payroll:approve', 'employees:read',
    'reports:read', 'reports:export',
  ],
  SALES_AGENT: [
    'projects:read',
    'customers:read', 'customers:create', 'customers:update',
    'bookings:read', 'bookings:create',
    'payments:read', 'payments:create',
    'installments:read',
  ],
  SITE_ENGINEER: [
    'projects:read',
    'construction:read', 'construction:update', 'construction:progress',
    'inventory:read', 'inventory:issue',
    'attendance:read', 'attendance:mark',
  ],
};

const DEFAULT_SETTINGS: Record<string, string | number> = {
  reservationExpiryHours: 48,
  defaulterThresholdDays: 30,
  lateFeePercent: 2,
  currency: 'PKR',
};

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

async function main() {
  const companyName = process.env.SEED_COMPANY_NAME ?? 'Demo Developers';
  const adminEmail = (process.env.SEED_ADMIN_EMAIL ?? 'admin@demo.com').toLowerCase();
  const adminPassword = process.env.SEED_ADMIN_PASSWORD;
  if (!adminPassword) throw new Error('SEED_ADMIN_PASSWORD is not set in .env');

  // 1. Permissions (global catalog)
  for (const key of ALL) {
    await prisma.permission.upsert({ where: { key }, update: {}, create: { key } });
  }
  const perms = await prisma.permission.findMany();
  const permId = new Map(perms.map((p) => [p.key, p.id]));

  // 2. Company
  const slug = slugify(companyName);
  const company = await prisma.company.upsert({
    where: { slug },
    update: {},
    create: { name: companyName, slug },
  });

  // 3. Roles + their permissions
  const roleId = new Map<string, string>();
  for (const [name, keys] of Object.entries(ROLES)) {
    const role = await prisma.role.upsert({
      where: { companyId_name: { companyId: company.id, name } },
      update: { isSystem: true },
      create: { companyId: company.id, name, isSystem: true },
    });
    roleId.set(name, role.id);

    await prisma.rolePermission.deleteMany({ where: { roleId: role.id } });
    await prisma.rolePermission.createMany({
      data: keys.map((k) => ({ roleId: role.id, permissionId: permId.get(k)! })),
    });
  }

  // 4. Admin user (password is NOT overwritten if the user already exists)
  const existing = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!existing) {
    await prisma.user.create({
      data: {
        companyId: company.id,
        name: 'Admin',
        email: adminEmail,
        passwordHash: await argon2.hash(adminPassword, { type: argon2.argon2id }),
        roleId: roleId.get('ADMIN')!,
      },
    });
  }

  // 5. Default settings
  for (const [key, value] of Object.entries(DEFAULT_SETTINGS)) {
    await prisma.setting.upsert({
      where: { companyId_key: { companyId: company.id, key } },
      update: {},
      create: { companyId: company.id, key, value },
    });
  }

  console.log(
    `Seed done: ${company.name} | ${ALL.length} permissions | ${Object.keys(ROLES).length} roles | admin ${adminEmail}`,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());