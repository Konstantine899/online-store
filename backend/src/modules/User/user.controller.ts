import * as UserService from "./user.service";
import { NextFunction, Request, Response } from "express";
import { IUser } from "modules/User/user.model";
import ApiError from "shared/api/ApiError/ApiError";
import bcrypt from "bcrypt";
import { generateToken } from "shared/lib/generateToken";
import { RoleUser } from "shared/middleware/CheckRoleMiddleware";

export class UserController {
  async registration(request: Request, response: Response, next: NextFunction) {
    try {
      const { email, password, role = RoleUser.USER }: IUser = request.body;
      if (!email || !password) {
        return next(ApiError.badRequest(`Не правильный email или пароль`));
      }
      // проверка существования пользователя с таким mail
      const candidate = await UserService.userEmailVerification(email);
      if (candidate) {
        return next(
          ApiError.badRequest(`Пользователь с email: ${email} уже существует`)
        );
      }
      const hashPassword: string = await bcrypt.hash(password, 5);
      const user = await UserService.createUser({ email, role, hashPassword });
      const basket = await UserService.createBasket(user.id);
      const token = generateToken({
        id: user.id,
        email: user.email,
        role: user.role,
      });
      return response.json({ token });
    } catch (error) {
      console.log(error);
    }
  }

  async login(request: Request, response: Response, next: NextFunction) {
    try {
      const { email, password }: IUser = request.body;
      const user = await UserService.findUserByEmail(email);
      if (!user) {
        return next(
          ApiError.internal(`Пользователь c email: ${email} не найден`)
        );
      }
      // сравниваю пароль, который прилетел с клиента, с паролем полученного пользователя из БД
      let comparePassword = bcrypt.compareSync(password, user.password);
      if (!comparePassword) {
        return next(ApiError.badRequest(`Не верный пароль`));
      }
      const token = generateToken({
        id: user.id,
        email: user.email,
        role: user.role,
      });
      return response.json({ token });
    } catch (error) {
      console.log(error);
    }
  }

  async check(request: Request, response: Response, next: NextFunction) {
    /*При переходе на любую страницу будет происходить проверка авторизации пользователя
     * Если пользователь авторизован то функция check будет постоянно перезаписывать токен
     * */
    try {
      const { id, email, role = RoleUser.USER }: IUser = request.user;
      /*Если мы попадаем сюда, то пользователь прошел аутентификацию в authMiddleware.
       * после чего мы должны создать новый токен и передать на клиент*/
      const token = generateToken({ id, email, role });
      if (!token)
        return next(ApiError.internal(`При генерации токена произошла ошибка`));
      return response.json({ token });
    } catch (error) {
      console.log(error);
    }
  }

  async removeUserById(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const id = Number(request.params.id);
    if (!id) return next(ApiError.badRequest(`id не передан`));
    const user = await UserService.findUserById(id);
    if (!user) return next(ApiError.internal(`Пользователь не найден`));
    if (user.role === RoleUser.ADMIN) {
      return next(
        ApiError.internal(
          `Удаление не возможно так как пользователь является администратором`
        )
      );
    }
    await UserService.removeUserById(id);
    return response.json({
      message: `Пользователь ${user.email} успешно удален`,
    });
  }

  async getAll(request: Request, response: Response, next: NextFunction) {
    try {
      const users = await UserService.findUsers();
      if (!users)
        return next(
          ApiError.internal(`При поиске пользователей произошла ошибка`)
        );
      return response.json(users);
    } catch (error) {
      console.log(error);
    }
  }

  async getUserById(request: Request, response: Response, next: NextFunction) {
    try {
      const id = Number(request.params.id);
      console.log("ID", id);
      if (!id) return next(ApiError.badRequest(`id пользователя не передан`));
      const user = await UserService.findUserById(id);
      if (!user) return next(ApiError.internal(`Пользователь не найден`));
      return response.json(user);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserController();
