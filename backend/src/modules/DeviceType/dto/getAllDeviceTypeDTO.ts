import { NextFunction, Request, Response } from "express";
import { getAllDevicesTypes } from "modules/DeviceType/dal/dataAccess";
import ApiError from "shared/api/ApiError/ApiError";

export const getAllDeviceTypeDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const result = await getAllDevicesTypes();
    if (result.length === 0) {
      return next(
        ApiError.internal(
          "Типы устройств не созданы. Пожалуйста создайте тип и сделайте запрос на получение еще раз"
        )
      );
    }
    return response.json(result);
  } catch (error) {
    console.log(error);
  }
};
