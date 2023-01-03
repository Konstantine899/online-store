import { NextFunction, Request, Response } from "express";
import { registrationUserDTO } from "modules/User/dto/registrationUserDTO";
import { loginUserDTO } from "modules/User/dto/loginUserDTO";
import { checkUser } from "modules/User/dto/checkUser";
import { removalUserDTO } from "modules/User/dto/removalUserDTO";

class UserController {
  async registration(request: Request, response: Response, next: NextFunction) {
    return await registrationUserDTO(request, response, next);
  }

  async login(request: Request, response: Response, next: NextFunction) {
    return await loginUserDTO(request, response, next);
  }

  // Функция авторизации пользователя
  async check(request: Request, response: Response) {
    return await checkUser(request, response);
  }

  // Удаление пользователя буду использовать только в development
  async remove(request: Request, response: Response, next: NextFunction) {
    return await removalUserDTO(request, response, next);
  }
}
export default new UserController();
