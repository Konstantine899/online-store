import { NextFunction, Request, Response } from "express";
import { removeDeviceBrand } from "../dal/removeDeviceBrand";
import ApiError from "shared/api/ApiError/ApiError";

export const removeDeviceBrandDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const id = Number(request.query.id);

    if (!id) {
      return next(
        ApiError.badRequest("При удалении бренда устройства произошла ошибка")
      );
    }
    const result = await removeDeviceBrand(id);
    return response.json(result);
  } catch (error) {
    console.log(error);
  }
};
