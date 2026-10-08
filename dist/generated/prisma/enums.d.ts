export declare const UserStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly LOCKED: "LOCKED";
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
