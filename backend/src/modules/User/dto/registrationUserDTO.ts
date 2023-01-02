import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser } from "../model/schema";
import ApiError from "shared/api/ApiError/ApiError";
import { userEmailVereficate } from "../dal/userEmailVereficate";
import { createUser } from "modules/User/dal/createUser";
import { createBasket } from "../dal/createBasket";
import { IBasket } from "modules/Basket";

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
    const user: IUser = await createUser({ email, role, hashPassword });
    const basket: IBasket = await createBasket(user.id);
    const token = jwt.sign(
      { id: user.id, email: user.email, role },
      SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );
    return response.json({ token });
  } catch (error) {
    console.log(error);
  }
};
