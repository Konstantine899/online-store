import { NextFunction, Request, Response } from "express";
import { getAllDevice } from "../dal/getAllDevice";
import { IDeviceInput } from "../model/schema";
import ApiError from "shared/api/ApiError/ApiError";

export const getAllDeviceDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    let { deviceBrandId, deviceTypeId, limit, page }: Partial<IDeviceInput> =
      request.query;

    page = Number(page) || 1;
    limit = Number(limit) || 9;
    // Рассчитываю смещение товара
    let offset = page * limit - limit; // 2 * 9 - 9 отступ в 9 товаров

    const result = await getAllDevice({
      deviceBrandId,
      deviceTypeId,
      offset,
      limit,
    });
    if (result.length === 0) {
      return next(ApiError.internal("Создайте девайс"));
    }
    return response.json(result);
  } catch (error) {
    console.log(error);
  }
};
