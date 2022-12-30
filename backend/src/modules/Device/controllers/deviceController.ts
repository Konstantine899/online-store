import { NextFunction, Request, Response } from "express";
import { createDeviceDTO } from "../dto/createDeviceDTO";
import { getAllDeviceDTO } from "../dto/getAllDeviceDTO";
import { getOneDeviceDTO } from "../dto/getOneDeviceDTO";
import { updateDeviceDTO } from "../dto/updateDeviceDTO";
import { removeDeviceDTO } from "../dto/removeDeviceDTO";

class DeviceController {
  async create(request: Request, response: Response, next: NextFunction) {
    await createDeviceDTO(request, response, next);
  }

  async getAll(request: Request, response: Response, next: NextFunction) {
    await getAllDeviceDTO(request, response, next);
  }

  async getOne(request: Request, response: Response, next: NextFunction) {
    return await getOneDeviceDTO(request, response, next);
  }

  async update(request: Request, response: Response, next: NextFunction) {
    return await updateDeviceDTO(request, response, next);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    return await removeDeviceDTO(request, response, next);
  }
}

export default new DeviceController();
