import { NextFunction, Request, Response } from "express";
import { getAllDevice } from "../dal/getAllDevice";
import ApiError from "shared/api/ApiError/ApiError";
import { IDeviceInput } from "modules/Device";

export const getAllDeviceDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    let { deviceBrandId, deviceTypeId }: Partial<IDeviceInput> = request.query;
    const result = await getAllDevice({ deviceBrandId, deviceTypeId });
    if (result.length === 0) {
      return next(ApiError.internal("Создайте девайс"));
    }
    return response.json(result);
  } catch (error) {
    console.log(error);
  }
};
