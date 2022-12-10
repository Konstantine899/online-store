import { Request, Response } from "express";

class DeviceController {
  async create(request: Request, response: Response) {}

  async getAll(request: Request, response: Response) {
    response.json({ message: "Страница device" });
  }

  async getOne(request: Request, response: Response) {}
}

export default new DeviceController();
