import { Router } from "express";
import CheckRoleMiddleware, {
  RoleUser,
} from "shared/middleware/CheckRoleMiddleware";
import DeviceBrandController from "./device-brand.controller";

const deviceBrandRouter = Router();

deviceBrandRouter.post(
  "/create",
  CheckRoleMiddleware(RoleUser.ADMIN), // Проверка роли пользователя
  DeviceBrandController.create
);

deviceBrandRouter.get("/all", DeviceBrandController.getAll);

deviceBrandRouter.delete(
  "/delete",
  CheckRoleMiddleware(RoleUser.ADMIN), // Проверка роли пользователя
  DeviceBrandController.remove
);
deviceBrandRouter.patch(
  "/update",
  CheckRoleMiddleware(RoleUser.ADMIN), // Проверка роли пользователя
  DeviceBrandController.update
);

export { deviceBrandRouter };
