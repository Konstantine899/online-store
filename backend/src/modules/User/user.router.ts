import { Router } from "express";
import UserController from "./user.controller";
import AuthMiddleware from "shared/middleware/AuthMiddleware";
import CheckRoleMiddleware, {
  RoleUser,
} from "shared/middleware/CheckRoleMiddleware";

const userRouter = Router();

userRouter.post("/registration", UserController.registration);
userRouter.post("/login", UserController.login);
userRouter.get("/auth", AuthMiddleware, UserController.check);

userRouter.delete(
  "/delete/:id([0-9]+)",
  CheckRoleMiddleware(RoleUser.ADMIN),
  UserController.removeUserById
);

userRouter.get(
  "/all",
  AuthMiddleware,
  CheckRoleMiddleware(RoleUser.ADMIN),
  UserController.getAll
);

userRouter.get(
  "/one/:id([0-9]+)",
  AuthMiddleware,
  CheckRoleMiddleware(RoleUser.ADMIN),
  UserController.getUserById
);

export { userRouter };
