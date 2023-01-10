import * as DeviceService from "./device.service";
import { NextFunction, Request, Response } from "express";
import { IDeviceInput } from "./device.model";
import ApiError from "shared/api/ApiError/ApiError";
import { DeviceInfo } from "modules/DeviceInfo";
import { createFileImg } from "shared/lib/createFile";

class DeviceController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      let { deviceTypeId, deviceBrandId, price, name, info }: IDeviceInput =
        request.body;
      const img = createFileImg(request, response, next);
      if (info) {
        await DeviceInfo.create({
          deviceId: Number(info.deviceId),
          title: info.title,
          description: info.description,
        });
      }
      const result = await DeviceService.create({
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
  }

  async getAll(request: Request, response: Response, next: NextFunction) {
    try {
      let { deviceBrandId, deviceTypeId, limit, page }: Partial<IDeviceInput> =
        request.params;

      page = Number(page) || 1;
      limit = Number(limit) || 9;
      // Рассчитываю смещение товара
      let offset = page * limit - limit; // 2 * 9 - 9 отступ в 9 товаров

      const result = await DeviceService.getAll({
        deviceBrandId,
        deviceTypeId,
        offset,
        limit,
      });
      if (result.length === 0) {
        return next(ApiError.internal("Создайте девайс"));
      }
      return response.json(result);
    } catch (error) {
      console.log(error);
    }
  }

  async getOne(request: Request, response: Response, next: NextFunction) {
    try {
      const id: number = Number(request.params.id);
      if (!id) return next(ApiError.badRequest(`id устройства не передан`));
      const result = await DeviceService.getById(id);
      if (!result) return next(ApiError.internal(`Устройство не найдено`));
      return response.json(result);
    } catch (error) {
      console.log(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const id: number = Number(request.params.id);
      const { deviceTypeId, deviceBrandId, price, name, info }: IDeviceInput =
        request.body;

      const img = createFileImg(request, response, next);

      const result = await DeviceService.update(id, {
        deviceTypeId: Number(deviceTypeId),
        deviceBrandId: Number(deviceBrandId),
        price,
        name,
        info,
        img,
      });
      return response.json(result);
    } catch (error) {
      next(ApiError.internal((error as Error).message));
    }
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    try {
      const id: number = Number(request.params.id);
      if (!id) return next(ApiError.badRequest("Не указан id девайса"));
      const result = await DeviceService.deleteById(id);
      if (!result)
        return next(
          ApiError.internal(`При удалении устройства произошло ошибка`)
        );
      if (result)
        return response.json({
          message: "Устройство удалено успешно",
        });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new DeviceController();
