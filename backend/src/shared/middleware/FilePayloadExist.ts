import { NextFunction, Request, Response } from "express";
import ApiError from "shared/api/ApiError/ApiError";

const FilePayloadExist = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (!request.files) {
    return next(ApiError.badRequest(`Отсутствует загружаемый файл файл`));
  }
  next();
};

export default FilePayloadExist;
