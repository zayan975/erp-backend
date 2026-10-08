import { HttpException, HttpStatus } from '@nestjs/common';
export class AppException extends HttpException {
    code;
    details;
    constructor(code, message, status = HttpStatus.BAD_REQUEST, details) {
        super({ code, message, details }, status);
        this.code = code;
        this.details = details;
    }
}
export const unauthorized = (code, message, details) => new AppException(code, message, HttpStatus.UNAUTHORIZED, details);
export const forbidden = (code, message, details) => new AppException(code, message, HttpStatus.FORBIDDEN, details);
export const notFound = (code, message, details) => new AppException(code, message, HttpStatus.NOT_FOUND, details);
export const conflict = (code, message, details) => new AppException(code, message, HttpStatus.CONFLICT, details);
export const businessRule = (code, message, details) => new AppException(code, message, HttpStatus.UNPROCESSABLE_ENTITY, details);
//# sourceMappingURL=app.exception.js.map