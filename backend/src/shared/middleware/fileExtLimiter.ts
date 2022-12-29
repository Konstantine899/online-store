import { NextFunction, Request, Response } from "express";
import path from "path";
import ApiError from "shared/api/ApiError/ApiError";

const fileExtLimiter = (allowedExtArray: string[]) => {
  return (request: Request, response: Response, next: NextFunction) => {
    const files: any = request.files;

    const fileExtensions: string[] = [];
    Object.keys(files).forEach((key) => {
      fileExtensions.push(path.extname(files[key].name));
    });

    // Определяем разрешены ли расширения фалов
    const allowed = fileExtensions.every((ext) =>
      allowedExtArray.includes(ext)
    );

    if (!allowed) {
      const message = `Загрузка не удалась. Для загрузки разрешены файлы ${allowedExtArray}`;
      return next(ApiError.badRequest(message));
    }
    next();
  };
};

export default fileExtLimiter;
