import { NextFunction, Request, Response } from "express";
import ApiError from "shared/api/ApiError/ApiError";
import { registrationUserDTO } from "modules/User/dto/registrationUserDTO";
import { loginUserDTO } from "modules/User/dto/loginUserDTO";

class UserController {
  async registration(request: Request, response: Response, next: NextFunction) {
    return await registrationUserDTO(request, response, next);
  }

  async login(request: Request, response: Response, next: NextFunction) {
    return await loginUserDTO(request, response, next);
  }

  // Функция авторизации пользователя
  async check(request: Request, response: Response, next: NextFunction) {
    const id = request.query.id;
    if (!id) {
      return next(ApiError.badRequest("id пользователя не задан"));
    }
    return response.json({ message: `Добро пожаловать пользователь ${id}` });
  }

  async removeUserById(request: Request, response: Response) {
    try {
      const id = request.query.id;

      if (!id) throw new Error("id не указан");

      // логика удаления из бд
    } catch (error) {
      console.log(error);
    }
  }
}
export default new UserController();
