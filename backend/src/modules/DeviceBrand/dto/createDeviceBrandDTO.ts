import { NextFunction, Request, Response } from "express";
import { createDeviceBrand } from "../dal/createDeviceBrand";
import { IDeviceTypeInput } from "modules/DeviceType/model/schema";
import ApiError from "shared/api/ApiError/ApiError";

export const createDeviceBrandDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { name }: IDeviceTypeInput = request.body;
    if (!name || typeof name != "string") {
      return next(ApiError.badRequest("При созданнии бренда произошла ошибка"));
    }
    const result = await createDeviceBrand({ name });
    return response.json(result);
  } catch (error) {
    console.log(error);
  }
};
