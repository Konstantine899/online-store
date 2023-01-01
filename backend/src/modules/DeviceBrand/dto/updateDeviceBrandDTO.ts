import { NextFunction, Request, Response } from "express";
import { ValidationError } from "sequelize";
import { IDeviceBrandInput } from "../model/schema";
import { updateDeviceBrand } from "../dal/updateDeviceBrand";
import ApiError from "shared/api/ApiError/ApiError";

export const updateDeviceBrandDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const id: number = Number(request.query.id);
    const payload: IDeviceBrandInput = request.body;
    const result = await updateDeviceBrand(id, payload);
    return response.json(result);
    if (!id) {
      return next(
        ApiError.badRequest("При обновении бренда устройства произошла ошибка")
      );
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      error.errors.forEach((error) => next(ApiError.internal(error.message)));
    }
  }
};
