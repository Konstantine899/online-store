import { NextFunction, Request, Response } from "express";
import { IUser } from "modules/User";
import { findUser } from "modules/User/dal/findUser";
import bcrypt from "bcrypt";
import ApiError from "shared/api/ApiError/ApiError";
import { generateToken } from "shared/lib/generateToken";

export const loginUserDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { email, password, role }: IUser = request.body;
  const user = await findUser(email);
  if (!user) {
    return next(ApiError.internal(`Пользователь с таким ${email} не найден`));
  }
  // сравниваю пароль, который прилетел с клиента, с паролем полученного пользователя из БД
  let comparePassword = bcrypt.compareSync(password, user.password);
  if (!comparePassword) {
    return next(ApiError.badRequest(`Не верный пароль`));
  }
  const token = generateToken({ id: user.id, email: user.email, role });
  return response.json({ token });
};
