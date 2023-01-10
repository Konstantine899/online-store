import { Router } from "express";
import DeviceBrandController from "./device-brand.controller";
import CheckRoleMiddleware, {
  RoleUser,
} from "shared/middleware/CheckRoleMiddleware";

const deviceBrandRouter = Router();

deviceBrandRouter.post(
  "/create",
  CheckRoleMiddleware(RoleUser.ADMIN), // Проверка роли пользователя
  DeviceBrandController.create
);

deviceBrandRouter.get("/all", DeviceBrandController.getAll);

deviceBrandRouter.get("/one/:id([0-9]+)", DeviceBrandController.getOne);

deviceBrandRouter.delete(
  "/delete/:id([0-9]+)",
  CheckRoleMiddleware(RoleUser.ADMIN), // Проверка роли пользователя
  DeviceBrandController.remove
);
deviceBrandRouter.patch(
  "/update/:id([0-9]+)",
  CheckRoleMiddleware(RoleUser.ADMIN), // Проверка роли пользователя
  DeviceBrandController.update
);

export { deviceBrandRouter };
