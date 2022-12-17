import { ValidationError } from "sequelize";
import { NextFunction, Request, Response } from "express";
import ApiError from "shared/api/ApiError/ApiError";
import {
  createDeviceType,
  deleteDeviceType,
  getAllDevicesTypes,
  updateDeviceType,
} from "../dal/dataAccess";
import { IDeviceTypeInput } from "modules/DeviceType/model/schema";

class DeviceTypeController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const { name } = request.body;
      if (!name) {
        return next(ApiError.badRequest("Не корректный запрос"));
      }
      const result = await createDeviceType({ name });
      return response.json(result);
    } catch (error) {
      if (error instanceof ValidationError) {
        error.errors.forEach((error) => next(ApiError.internal(error.message)));
      }
    }
  }

  async getAll(request: Request, response: Response, next: NextFunction) {
    try {
      const result = await getAllDevicesTypes();
      if (result.length === 0) {
        return next(
          ApiError.internal("При получении данных с сервера произошла ошибка")
        );
      }
      return response.json(result);
    } catch (error) {
      console.log(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const id: number = Number(request.query.id);
      const payload: IDeviceTypeInput = request.body;
      if (!id) {
        return next(
          ApiError.badRequest("При обновении типа устройства произошла ошибка")
        );
      }
      const result = await updateDeviceType(id, payload);
      return response.json(result);
    } catch (error) {
      if (error instanceof ValidationError) {
        error.errors.forEach((error) => next(ApiError.internal(error.message)));
      }
    }
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    try {
      const id = Number(request.query.id);

      if (!id) {
        return next(
          ApiError.badRequest("При удалении типа устройства произошло ошибка")
        );
      }

      const result = await deleteDeviceType(id);
      return response.json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new DeviceTypeController();
