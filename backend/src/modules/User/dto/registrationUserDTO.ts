import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { IUser } from "../model/schema";
import ApiError from "shared/api/ApiError/ApiError";
import { userEmailVereficate } from "../dal/userEmailVereficate";
import { createUser } from "../dal/createUser";
import { createBasket } from "../dal/createBasket";
import { generateToken } from "shared/lib/generateToken";

export const registrationUserDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { email, password, role }: IUser = request.body;
    if (!email || !password) {
      return next(ApiError.badRequest(`Не корректный email или пароль`));
    }
    // проверка существования пользователя с таким mail
    const candidate = await userEmailVereficate(email);
    if (candidate) {
      return next(
        ApiError.badRequest(`Пользователь с таким email уже существует`)
      );
    }
    const hashPassword: string = await bcrypt.hash(password, 5);
    const user = await createUser({ email, role, hashPassword });
    const basket = await createBasket(user.id);
    const token = generateToken({ id: user.id, email: user.email, role });
    return response.json({ token });
  } catch (error) {
    console.log(error);
  }
};
