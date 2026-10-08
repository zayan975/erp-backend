import { HttpException, HttpStatus } from '@nestjs/common';

/** Business error with a stable machine-readable code, e.g. BOOKING_PLOT_UNAVAILABLE */
export class AppException extends HttpException {
  constructor(
    public readonly code: string,
    message: string,
    status: number = HttpStatus.BAD_REQUEST,
    public readonly details?: unknown,
  ) {
    super({ code, message, details }, status);
  }
}

export const unauthorized = (code: string, message: string, details?: unknown) =>
  new AppException(code, message, HttpStatus.UNAUTHORIZED, details);
export const forbidden = (code: string, message: string, details?: unknown) =>
  new AppException(code, message, HttpStatus.FORBIDDEN, details);
export const notFound = (code: string, message: string, details?: unknown) =>
  new AppException(code, message, HttpStatus.NOT_FOUND, details);
export const conflict = (code: string, message: string, details?: unknown) =>
  new AppException(code, message, HttpStatus.CONFLICT, details);
export const businessRule = (code: string, message: string, details?: unknown) =>
  new AppException(code, message, HttpStatus.UNPROCESSABLE_ENTITY, details);