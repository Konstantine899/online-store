import { Request, Response } from "express";

class DeviceTypeController {
  async create(request: Request, response: Response) {}

  async getAll(request: Request, response: Response) {
    return response.json({ message: "Страница Type" });
  }
}

export default new DeviceTypeController();
