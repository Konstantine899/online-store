import { NextFunction, Request, Response } from "express";
import { IDeviceTypeInput } from "modules/DeviceType/model/schema";
import ApiError from "shared/api/ApiError/ApiError";
import { updateDeviceType } from "modules/DeviceType/dal/dataAccess";
import { ValidationError } from "sequelize";

export const updateDeviceTypeDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const id: number = Number(request.query.id);
    const payload: IDeviceTypeInput = request.body;
    if (!id) {
      return next(
        ApiError.badRequest("При обновении типа устройства произошла ошибка")
      );
    }
    const result = await updateDeviceType(id, payload);
    return response.json(result);
  } catch (error) {
    if (error instanceof ValidationError) {
      error.errors.forEach((error) => next(ApiError.internal(error.message)));
    }
  }
};
