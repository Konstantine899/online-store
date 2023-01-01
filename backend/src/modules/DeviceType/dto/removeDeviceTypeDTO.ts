import { NextFunction, Request, Response } from "express";
import { deleteDeviceType } from "../dal/dataAccess";
import ApiError from "shared/api/ApiError/ApiError";

export const removeDeviceTypeDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const id: number = Number(request.query.id);

    if (!id) {
      return next(
        ApiError.badRequest("При удалении типа устройства произошла ошибка")
      );
    }

    const result = await deleteDeviceType(id);
    return response.json(result);
  } catch (error) {
    console.log(error);
  }
};
