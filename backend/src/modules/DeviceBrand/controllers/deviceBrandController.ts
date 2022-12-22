import { NextFunction, Request, Response } from "express";
import { createDeviceBrandDTO } from "../dto/createDeviceBrandDTO";
import { getAllDeviceBrandDTO } from "../dto/getAllDeviceBrandDTO";
import { removeDeviceBrandDTO } from "../dto/removeDeviceBrandDTO";
import { updateDeviceBrandDTO } from "../dto/updateDeviceBrandDTO";

class DeviceBrandController {
  async create(request: Request, response: Response, next: NextFunction) {
    await createDeviceBrandDTO(request, response, next);
  }

  async getAll(request: Request, response: Response, next: NextFunction) {
    return await getAllDeviceBrandDTO(request, response, next);
  }
  async remove(request: Request, response: Response, next: NextFunction) {
    return await removeDeviceBrandDTO(request, response, next);
  }
  async update(request: Request, response: Response, next: NextFunction) {
    return await updateDeviceBrandDTO(request, response, next);
  }
}

export default new DeviceBrandController();
