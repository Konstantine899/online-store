import { IDeviceTypeInput } from "modules/DeviceType/model/schema";
import ApiError from "shared/api/ApiError/ApiError";
import { createDeviceType } from "modules/DeviceType/dal/dataAccess";
import { ValidationError } from "sequelize";
import { NextFunction, Request, Response } from "express";

export const createDeviceTypeDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { name }: IDeviceTypeInput = request.body;
    if (!name) {
      return next(ApiError.badRequest("Не корректный запрос"));
    }
    const result = await createDeviceType({ name });
    return response.json(result);
  } catch (error) {
    if (error instanceof ValidationError) {
      error.errors.forEach((error) => next(ApiError.internal(error.message)));
    }
  }
};
