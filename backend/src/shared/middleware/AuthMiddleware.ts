import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const AuthMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    if (request.method === "OPTIONS") next();
    const token = request.headers.authorization!.split(" ")[1];
    if (!token) {
      return response.status(401).json({ message: "Вы не авторизованы" });
    }
    // расшифровываю токен и помещаю все данные о пользователе в user
    request.user = jwt.verify(token, SECRET_KEY);
    return next();
  } catch (error) {
    return response.status(401).json({ message: "Вы не авторизованы" });
  }
};

export default AuthMiddleware;
