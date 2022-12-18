import { NextFunction, Request, Response } from "express";
import ApiError from "shared/api/ApiError/ApiError";
import { deleteDeviceType } from "modules/DeviceType/dal/dataAccess";

export const removeDeviceTypeDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const id: number = Number(request.query.id);

    if (!id) {
      return next(
        ApiError.badRequest("При удалении типа устройства произошло ошибка")
      );
    }

    const result = await deleteDeviceType(id);
    return response.json(result);
  } catch (error) {
    console.log(error);
  }
};
