import { NextFunction, Response, Request } from "express";
import { removeDevice } from "../dal/removeDevice";
import ApiError from "shared/api/ApiError/ApiError";

export const removeDeviceDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const id: number = Number(request.query.id);
    if (!id) return next(ApiError.badRequest("Не указан id девайса"));
    const result = await removeDevice(id);
    return response.json(result);
  } catch (error) {
    console.log(error);
  }
};
