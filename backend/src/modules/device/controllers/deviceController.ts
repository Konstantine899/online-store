import { Request, Response } from "express";

class DeviceController {
  async create(request: Request, response: Response) {}

  async getAll(request: Request, response: Response) {
    response.json({ message: "Страница device" });
  }

  async getOne(request: Request, response: Response) {}

  async removeDeviceById(request: Request, response: Response) {
    try {
      const id = request.query.id;

      if (!id) throw new Error("id не указан");

      // Далее должна быть логика удаленияиз БД
      // должно удаляться только по одному устройству
      /* или логичнее будет реализовать каскадное удаление т.к.
      в таблице device_info содержится информация об устройстве */
    } catch (error) {
      console.log(error);
    }
  }
}

export default new DeviceController();
