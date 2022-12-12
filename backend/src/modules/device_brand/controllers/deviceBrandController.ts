import { Request, Response } from "express";

class DeviceBrandController {
  async create(request: Request, response: Response) {}

  async getAll(request: Request, response: Response) {
    return response.json({ message: "Страница Brand" });
  }
  async removeDeviceBrandById(request: Request, response: Response) {
    try {
      const id = request.query.id;

      if (!id) throw new Error("id не указан");

      // Далее должна быть логика удаленияиз БД
      // Т.к. brand связян с другими таблицами
      // то нужно реализовать каскадное удаление, удаление всех устройст связанных с данным брендом
    } catch (error) {
      console.log(error);
    }
  }
}

export default new DeviceBrandController();
