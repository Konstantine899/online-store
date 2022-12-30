import { NextFunction, Request, Response } from "express";
import { IDeviceInput } from "modules/Device";
import path from "path";
import { Error } from "sequelize";
import ApiError from "shared/api/ApiError/ApiError";
import { updateDevice } from "modules/Device/dal/updateDevice";

export const updateDeviceDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const id: number = Number(request.query.id);
    const { deviceTypeId, deviceBrandId, price, name, info }: IDeviceInput =
      request.body;
    const images: any = request.files;

    Object.keys(images).forEach((key) => {
      const filepath = path.join(FILES_PATH, images[key].name);
      images[key].mv(filepath, (error: Error) => {
        if (error) return next(ApiError.internal(error.message));
      });
      updateDevice(id, {
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
      message: `${name} Обновлен успешно`,
    });
  } catch (error) {
    console.log(error);
  }
};
