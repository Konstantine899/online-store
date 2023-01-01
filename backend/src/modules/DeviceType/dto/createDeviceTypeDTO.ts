import { NextFunction, Request, Response } from "express";
import { ValidationError } from "sequelize";
import { IDeviceTypeInput } from "../model/schema";
import { createDeviceType } from "../dal/dataAccess";
import ApiError from "shared/api/ApiError/ApiError";

export const createDeviceTypeDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { name }: IDeviceTypeInput = request.body;
    if (!name || typeof name != "string") {
      return next(ApiError.badRequest("При создании типа произошла ошибка"));
    }

    const result = await createDeviceType({ name });
    return response.json(result);
  } catch (error) {
    if (error instanceof ValidationError) {
      error.errors.forEach((error) => next(ApiError.internal(error.message)));
    }
  }
};
