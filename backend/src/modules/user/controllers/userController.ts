import { Request, Response } from "express";

class UserController {
  async registration(request: Request, response: Response) {}
  async login(request: Request, response: Response) {}
  async check(request: Request, response: Response) {
    return response.json({ message: "Страница авторизации пользователя" });
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
