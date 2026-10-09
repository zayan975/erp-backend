import { createHash, randomBytes } from 'crypto';
export const generateToken = () => randomBytes(48).toString('base64url');
export const hashToken = (token) => createHash('sha256').update(token).digest('hex');
//# sourceMappingURL=token.util.js.map