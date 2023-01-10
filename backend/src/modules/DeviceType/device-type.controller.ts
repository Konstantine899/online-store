import { NextFunction, Request, Response } from "express";
import * as DeviceTypeService from "./device-type.service";
import { IDeviceTypeInput } from "./device-type.model";
import ApiError from "shared/api/ApiError/ApiError";

class DeviceTypeController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const { name }: IDeviceTypeInput = request.body;
      const result = await DeviceTypeService.create({ name });
      if (!result) {
        return next(ApiError.internal(`При создании типа произошла ошибка`));
      }
      return response.json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(request: Request, response: Response, next: NextFunction) {
    try {
      const result = await DeviceTypeService.getAll();
      if (!result) {
        return next(ApiError.internal(`При получении типов произошла ошибка`));
      }
      return response.json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const id: number = Number(request.params.id);
      const { name }: IDeviceTypeInput = request.body;
      const result = await DeviceTypeService.update(id, { name });
      if (!result) {
        return next(ApiError.internal(`При обновлении типа произошла ошибка`));
      }
      return response.json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async remove(request: Request, response: Response, next: NextFunction) {
    const id: number = Number(request.params.id);
    const result = await DeviceTypeService.deleteById(id);
    if (!result) {
      return next(ApiError.internal(`При удалении типа произошла ошибка`));
    }
    return response.json({ status: 200, message: "Тип удален успешно" });
  }
}

export default new DeviceTypeController();
