import { Request, Response } from "express";

class DeviceTypeController {
  async create(request: Request, response: Response) {}

  async getAll(request: Request, response: Response) {
    return response.json({ message: "Страница Type" });
  }
  async removeDeviceTypeById(request: Request, response: Response) {
    try {
      const id = request.query.id;

      if (!id) throw new Error("id не указан");

      // Далее должна быть логика удаленияиз БД
      // Т.к. type связян с другими таблицами
      // то нужно реализовать каскадное удаление, удаление всех устройст связанных с данным type
    } catch (error) {
      console.log(error);
    }
  }
}

export default new DeviceTypeController();
