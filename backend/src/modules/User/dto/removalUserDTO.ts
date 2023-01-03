import { NextFunction, Request, Response } from "express";
import { IUserInput } from "../model/schema";
import { findUser } from "../dal/findUser";
import { removalUser } from "../dal/removalUser";
import ApiError from "shared/api/ApiError/ApiError";
import { RoleUser } from "shared/middleware/CheckRoleMiddleware";

export const removalUserDTO = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { email }: Partial<IUserInput> = request.body;
    if (!email) {
      return next(
        ApiError.badRequest(`При передаче email: ${email} произошла ошибка`)
      );
    }
    const user = await findUser({ email });
    if (!user) {
      return next(
        ApiError.internal(
          `Пользователь с email:${email} не существует в базе данных`
        )
      );
    }
    if (user.role === RoleUser.ADMIN) {
      return next(
        ApiError.internal(
          `Вы не можете удалить данного пользователя так как он является администратором`
        )
      );
    }
    if (user) {
      await removalUser({ email });
      const findRemovedUser = await findUser({ email });
      if (!findRemovedUser) {
        return response
          .status(200)
          .json({ message: `Пользователь с email: ${email} удален успешно` });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
