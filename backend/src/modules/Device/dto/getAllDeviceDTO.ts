import { NextFunction, Request, Response } from "express";
import { getAllDevice } from "../dal/getAllDevice";
import ApiError from "shared/api/ApiError/ApiError";

export const getAllDeviceDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const result = await getAllDevice();
    if (result.length === 0) {
      return next(ApiError.internal("Создайте девайс"));
    }
    return response.json(result);
  } catch (error) {
    console.log(error);
  }
};
