import { NextFunction, Request, Response } from "express";
import { getOneDevice } from "modules/Device/dal/getOneDevice";
import ApiError from "shared/api/ApiError/ApiError";

export const getOneDeviceDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const id: number = Number(request.query.id);
  const result = await getOneDevice(id);
  if (!result)
    return next(ApiError.internal(`Данного устройства не существует`));
  return response.json(result);
  try {
  } catch (error) {
    console.log(error);
  }
};
