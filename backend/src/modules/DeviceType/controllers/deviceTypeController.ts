import { NextFunction, Request, Response } from "express";
import { createDeviceTypeDTO } from "modules/DeviceType/dto/createDeviceTypeDTO";
import { getAllDeviceTypeDTO } from "modules/DeviceType/dto/getAllDeviceTypeDTO";
import { updateDeviceTypeDTO } from "modules/DeviceType/dto/updateDeviceTypeDTO";
import { removeDeviceTypeDTO } from "modules/DeviceType/dto/removeDeviceTypeDTO";

class DeviceTypeController {
  async create(request: Request, response: Response, next: NextFunction) {
    await createDeviceTypeDTO(request, response, next);
  }

  async getAll(request: Request, response: Response, next: NextFunction) {
    await getAllDeviceTypeDTO(request, response, next);
  }

  async update(request: Request, response: Response, next: NextFunction) {
    await updateDeviceTypeDTO(request, response, next);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    await removeDeviceTypeDTO(request, response, next);
  }
}

export default new DeviceTypeController();
