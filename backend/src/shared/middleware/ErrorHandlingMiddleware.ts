import ApiError from "shared/api/ApiError/ApiError";
import { Request, Response, NextFunction } from "express";
function ErrorHandlingMiddleware(
  error: ApiError,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error) {
    return response.status(error.status).json({ message: error.message });
  }
  return response.status(500).json({ message: "Непредвиденная ошибка" });
}

export default ErrorHandlingMiddleware;
