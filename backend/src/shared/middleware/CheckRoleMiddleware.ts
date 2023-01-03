import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export enum RoleUser {
  ADMIN = "ADMIN",
  USER = "USER",
}

function CheckRoleMiddleware(role: string) {
  return function (request: Request, response: Response, next: NextFunction) {
    if (request.method === "OPTIONS") next();
    try {
      const token = request.headers.authorization!.split(" ")[1]; // получаю токен
      const decodedToken = jwt.verify(token, SECRET_KEY) as JwtPayload; // расшифровываю token
      if (decodedToken.role !== role) {
        //Если в расшифрованном token роль пользователя != ADMIN
        return response
          .status(403)
          .json({ message: "У вас не достаточно прав доступа" });
      }
      request.user = decodedToken;
      next();
    } catch (error) {
      response.status(401).json({ message: "Пользователь не авторизован" });
    }
  };
}

export default CheckRoleMiddleware;
