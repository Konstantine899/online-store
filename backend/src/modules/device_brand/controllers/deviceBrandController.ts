import { Request, Response } from "express";

class DeviceBrandController {
  async create(request: Request, response: Response) {}

  async getAll(request: Request, response: Response) {
    return response.json({ message: "Страница Brand" });
  }
}

export default new DeviceBrandController();
