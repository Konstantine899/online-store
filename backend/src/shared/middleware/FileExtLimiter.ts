import { NextFunction, Request, Response } from "express";
import path from "path";
import ApiError from "shared/api/ApiError/ApiError";

const FileExtLimiter = (allowedExtArray: string[]) => {
  return (request: Request, response: Response, next: NextFunction) => {
    const files: any = request.files;

    // Добавляю расширения файлов в массив
    const fileExtensions: string[] = [];
    Object.keys(files).forEach((key) => {
      fileExtensions.push(path.extname(files[key].name));
    });

    // Если условие удовлетворяет, возвращается true и элемент попадает в allowed
    const allowed = fileExtensions.every((extension) =>
      allowedExtArray.includes(extension)
    );

    if (!allowed) {
      const message = `Загрузка не удалась. Для загрузки разрешены файлы ${allowedExtArray}`;
      return next(ApiError.badRequest(message));
    }
    next();
  };
};

export default FileExtLimiter;
