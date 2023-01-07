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
  "/delete",
  CheckRoleMiddleware(RoleUser.ADMIN),
  UserController.remove
);

export { userRouter };
