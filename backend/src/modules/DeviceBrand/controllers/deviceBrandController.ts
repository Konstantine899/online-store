import {NextFunction, Request, Response} from "express";
import {createDeviceBrandDTO} from '../dto/createDeviceBrandDTO'
import {getAllDeviceBrandDTO} from "../dto/getAllDeviceBrandDTO";

class DeviceBrandController {
  async create(request: Request, response: Response, next: NextFunction) {
    await createDeviceBrandDTO(request,response,next)
  }

  async getAll(request: Request, response: Response, next: NextFunction) {
    return await getAllDeviceBrandDTO(request,response, next)
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
