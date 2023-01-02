import { Request, Response } from "express";
import { generateToken } from "shared/lib/generateToken";
import { IUser } from "modules/User";

export const checkUser = async (request: Request, response: Response) => {
  const { id, email, role }: IUser = request.user;
  /*Если мы попадаем сюда, то пользователь прошел аутентификацию в authMiddleware.
   * после чего мы должны создать новый токен и передать на клиент*/
  const token = generateToken({ id, email, role });
  return response.json({ token });
};
