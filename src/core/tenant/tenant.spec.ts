import { readFileSync } from 'fs';
import { join } from 'path';
import { scopeArgs, TENANT_MODELS } from './scope-args.js';

const CID = 'company-A';

describe('scopeArgs', () => {
  it('adds companyId to reads', () => {
    expect(scopeArgs('findMany', { where: { name: 'x' } }, CID)).toEqual({
      where: { name: 'x', companyId: CID },
    });
    expect(scopeArgs('findMany', undefined, CID)).toEqual({ where: { companyId: CID } });
  });

  it('overwrites a companyId supplied by the caller (no cross-tenant reads)', () => {
    expect(scopeArgs('findMany', { where: { companyId: 'company-B' } }, CID).where.companyId).toBe(CID);
  });

  it('scopes unique lookups, updates and deletes', () => {
    for (const op of ['findUnique', 'findUniqueOrThrow', 'update', 'updateMany', 'delete', 'deleteMany', 'count']) {
      expect(scopeArgs(op, { where: { id: '1' } }, CID).where).toEqual({ id: '1', companyId: CID });
    }
  });

  it('sets companyId on create and createMany', () => {
    expect(scopeArgs('create', { data: { name: 'x', companyId: 'company-B' } }, CID).data).toEqual({
      name: 'x',
      companyId: CID,
    });
    expect(scopeArgs('createMany', { data: [{ name: 'a' }, { name: 'b' }] }, CID).data).toEqual([
      { name: 'a', companyId: CID },
      { name: 'b', companyId: CID },
    ]);
  });

  it('scopes upsert on where and create', () => {
    const r = scopeArgs('upsert', { where: { id: '1' }, create: { name: 'x' }, update: { name: 'y' } }, CID);
    expect(r.where).toEqual({ id: '1', companyId: CID });
    expect(r.create).toEqual({ name: 'x', companyId: CID });
    expect(r.update).toEqual({ name: 'y' });
  });

  it('rejects unknown operations instead of leaving them unscoped', () => {
    expect(() => scopeArgs('somethingNew', {}, CID)).toThrow();
  });
});

describe('TENANT_MODELS', () => {
  it('lists exactly the schema models that have a companyId column', () => {
    const schema = readFileSync(join(process.cwd(), 'prisma/schema.prisma'), 'utf8');
    const withCompanyId = [...schema.matchAll(/model\s+(\w+)\s*\{([\s\S]*?)\n\}/g)]
      .filter(([, , body]) => /^\s*companyId\s/m.test(body))
      .map(([, name]) => name)
      .sort();
    expect([...TENANT_MODELS].sort()).toEqual(withCompanyId);
  });
});