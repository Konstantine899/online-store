import { Router } from "express";
import CheckRoleMiddleware, {
  RoleUser,
} from "shared/middleware/CheckRoleMiddleware";
import DeviceTypeController from "./device-type.controller";

const deviceTypeRouter = Router();

deviceTypeRouter.post(
  "/create",
  CheckRoleMiddleware(RoleUser.ADMIN), // Проверка роли пользователя
  DeviceTypeController.create
);

deviceTypeRouter.get("/all", DeviceTypeController.getAll);

deviceTypeRouter.delete(
  "/delete/:id([0-9]+)",
  CheckRoleMiddleware(RoleUser.ADMIN), // Проверка роли пользователя
  DeviceTypeController.remove
);

deviceTypeRouter.patch(
  "/update/:id([0-9]+)",
  CheckRoleMiddleware(RoleUser.ADMIN), // Проверка роли пользователя
  DeviceTypeController.update
);

export { deviceTypeRouter };
