import { NextFunction, Request, Response } from "express";
import { IDeviceInput } from "modules/Device";
import path from "path";
import { Error } from "sequelize";
import { createDevice } from "modules/Device/dal/createDevice";
import ApiError from "shared/api/ApiError/ApiError";
import { DeviceInfo } from "modules/DeviceInfo";

export const createDeviceDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    let { deviceTypeId, deviceBrandId, price, name, info }: IDeviceInput =
      request.body;
    const images: any = request.files;

    // Перемещаю картинку в хранилище
    Object.keys(images).forEach((key) => {
      const filepath = path.join(FILES_PATH, images[key].name);
      images[key].mv(filepath, (error: Error) => {
        if (error) return next(ApiError.internal(error.message));
      });
    });

    // Получаю значение картинки из массива
    const img: string = Object.keys(images)
      .map((key) => images[key].name)
      .toString();

    if (info) {
      await DeviceInfo.create({
        deviceId: Number(info.deviceId),
        title: info.title,
        description: info.description,
      });
    }

    const result = await createDevice({
      deviceTypeId: Number(deviceTypeId),
      deviceBrandId: Number(deviceBrandId),
      price,
      name,
      img,
    });

    return response.json(result);
  } catch (error) {
    console.log(error);
  }
};
