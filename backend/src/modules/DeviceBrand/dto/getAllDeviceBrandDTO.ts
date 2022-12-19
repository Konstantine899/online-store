import { NextFunction, Request, Response } from "express";
import { getAllDeviceBrand } from "../dal/getAllDeviceBrand";
import ApiError from "shared/api/ApiError/ApiError";

export const getAllDeviceBrandDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const result = await getAllDeviceBrand();
    if (result.length === 0) {
      return next(
        ApiError.internal(
          "Бренды устройств не созданы. Создайте бренд и повторите запрос"
        )
      );
    }
    return response.json(result);
  } catch (error) {
    console.log(error);
  }
};
