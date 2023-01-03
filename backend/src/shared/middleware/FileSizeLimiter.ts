import { NextFunction, Response, Request } from "express";
import ApiError from "shared/api/ApiError/ApiError";

const MB: number = 5;
const FILE_SIZE_LIMITER: number = MB * 1024 * 1024;

const FileSizeLimiter = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const files: any = request.files;
  const fileOverLimit: string[] = [];

  // Определяю какие файлы превышают лимит
  Object.keys(files).forEach((key) => {
    if (files[key].size > FILE_SIZE_LIMITER) {
      fileOverLimit.push(files[key].name);
    }
  });

  if (fileOverLimit.length) {
    const message = `Загружаемый файл ${fileOverLimit} превышен лимит размера файла ${MB} MB.`;
    return next(ApiError.badRequest(message));
  }
  next();
};

export default FileSizeLimiter;
