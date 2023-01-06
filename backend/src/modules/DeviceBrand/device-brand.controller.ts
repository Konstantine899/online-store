import * as DeviceBrandService from "./device-brand.service";
import { NextFunction, Request, Response } from "express";
import { IDeviceBrandInput } from "modules/DeviceBrand/device-brand.model";
import ApiError from "shared/api/ApiError/ApiError";

class DeviceBrandController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const { name }: IDeviceBrandInput = request.body;
      const result = await DeviceBrandService.create({ name });
      if (!result)
        return next(ApiError.internal(`При создании бренда произошла ошибка`));
      return response.json(result);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(request: Request, response: Response, next: NextFunction) {
    const result = await DeviceBrandService.getAll();
    if (!result) {
      return next(ApiError.internal(`При получении брендов произошла ошибка`));
    }
    return response.json(result);
  }
  async update(request: Request, response: Response, next: NextFunction) {
    const id: number = Number(request.query.id);
    const { name }: IDeviceBrandInput = request.body;
    const result = await DeviceBrandService.update(id, { name });
    if (!result) {
      return next(ApiError.internal(`При обновлении бренда произошла ошибка`));
    }
    return response.json(result);
  }
  async remove(request: Request, response: Response, next: NextFunction) {
    const id: number = Number(request.query.id);
    const result = await DeviceBrandService.deleteById(id);
    if (!result) {
      return next(ApiError.internal(`При удалении бренда произошла ошибка`));
    }
    return response.json({ status: 200, message: "Бренд удален успешно" });
  }
}

export default new DeviceBrandController();
