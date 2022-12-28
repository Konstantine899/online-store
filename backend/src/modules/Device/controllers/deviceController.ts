import { NextFunction, Request, Response } from "express";
import { createDeviceDTO } from "../dto/createDeviceDTO";

class DeviceController {
  async create(request: Request, response: Response, next: NextFunction) {
    await createDeviceDTO(request, response, next);
  }

  async getAll(request: Request, response: Response) {
    response.json({ message: "Страница Device" });
  }

  async getOne(request: Request, response: Response) {}

  async removeDeviceById(request: Request, response: Response) {
    try {
      const id = request.query.id;

      if (!id) throw new Error("id не указан");

      // Далее должна быть логика удаленияиз БД
      // должно удаляться только по одному устройству
      /* или логичнее будет реализовать каскадное удаление т.к.
      в таблице DeviceInfo содержится информация об устройстве */
    } catch (error) {
      console.log(error);
    }
  }
}

export default new DeviceController();
