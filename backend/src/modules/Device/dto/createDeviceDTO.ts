import { NextFunction, Request, Response } from "express";
import { IDeviceInput } from "modules/Device";
import path from "path";
import { Error } from "sequelize";
import { createDevice } from "modules/Device/dal/createDevice";
import ApiError from "shared/api/ApiError/ApiError";

export const createDeviceDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { deviceTypeId, deviceBrandId, price, name, info }: IDeviceInput =
      request.body;
    const images: any = request.files;

    Object.keys(images).forEach((key) => {
      const filepath = path.join(FILES_PATH, images[key].name);
      images[key].mv(filepath, (error: Error) => {
        if (error) return next(ApiError.internal(error.message));
      });
      createDevice({
        deviceTypeId: Number(deviceTypeId),
        deviceBrandId: Number(deviceBrandId),
        price,
        name,
        info,
        img: images[key].name,
      });
    });

    return response.json({
      status: "success",
      message: `${name} создан успешно`,
    });
  } catch (error) {
    console.log(error);
  }
};
