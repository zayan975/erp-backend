var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
let TenantContext = class TenantContext {
    cls;
    constructor(cls) {
        this.cls = cls;
    }
    get companyId() {
        const id = this.cls.get('companyId');
        if (!id)
            throw new Error('No tenant context (is the request authenticated?)');
        return id;
    }
    get userId() { return this.cls.get('userId'); }
    get permissions() { return this.cls.get('permissions') ?? []; }
    set(values) {
        this.cls.set('companyId', values.companyId);
        this.cls.set('userId', values.userId);
        this.cls.set('roleName', values.roleName);
        this.cls.set('permissions', values.permissions);
    }
};
TenantContext = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ClsService])
], TenantContext);
export { TenantContext };
//# sourceMappingURL=tenant-context.service.js.map