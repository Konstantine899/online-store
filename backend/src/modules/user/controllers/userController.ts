import { Request, Response } from "express";

class UserController {
  async registration(request: Request, response: Response) {}
  async login(request: Request, response: Response) {}
  async check(request: Request, response: Response) {
    return response.json({ message: "Страница авторизации пользователя" });
  }
}
export default new UserController();
