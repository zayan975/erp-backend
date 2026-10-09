export interface AuthUser {
    id: string;
    companyId: string;
    companyName: string;
    name: string;
    email: string;
    roleName: string;
    permissions: string[];
}
