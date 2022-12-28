import { Request, Response, NextFunction } from "express";
import { Device, IDeviceInput } from "modules/Device";
import { FileArray } from "express-fileupload";
import path from "path";
import { Error } from "sequelize";

export const createDeviceDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { deviceTypeId, deviceBrandId, price, name, info }: IDeviceInput =
      request.body;
    const images: any = request.files;

    await Object.keys(images).forEach((key) => {
      const filepath = path.join(FILES_PATH, images[key].name);
      images[key].mv(filepath, (error: Error) => {
        if (error) {
          return response.status(500).json({ status: "error", message: error });
        }
      });
      Device.create({
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
      message: `Device ${name} создан успешно`,
    });
  } catch (error) {
    console.log(error);
  }
};
