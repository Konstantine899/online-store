import { NextFunction, Request, Response } from "express";
import path from "path";
import ApiError from "shared/api/ApiError/ApiError";

export const createImg = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const images: any = request.files;
    // Перемещаю картинку в хранилище
    Object.keys(images).forEach((key) => {
      const filepath = path.join(FILES_PATH, images[key].name);
      images[key].mv(filepath, (error: Error) => {
        if (error) return next(ApiError.internal(error.message));
      });
    });

    // Получаю значение картинки из массива
    return Object.keys(images)
      .map((key) => images[key].name)
      .toString();
  } catch (error) {
    console.log(error);
  }
};
