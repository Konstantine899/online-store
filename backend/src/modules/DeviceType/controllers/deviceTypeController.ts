import { NextFunction, Request, Response } from "express";
import ApiError from "shared/api/ApiError/ApiError";
import {
  createDeviceType,
  deleteByIdDeviceType,
  getAllDevicesTypes,
} from "../dal/dataAccess";

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
      console.log(error);
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

  async removeDeviceTypeById(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const id = Number(request.query.id);

      if (!id) {
        return next(
          ApiError.badRequest("При удалении данных произошла ошибка")
        );
      }

      const result = await deleteByIdDeviceType(id);
      return response.json(result);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new DeviceTypeController();
