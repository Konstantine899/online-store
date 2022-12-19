import { NextFunction, Request, Response } from "express";
import ApiError from "shared/api/ApiError/ApiError";
import { removeDeviceBrand } from "modules/DeviceBrand/dal/removeDeviceBrand";

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
