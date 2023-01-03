import { Router } from "express";
import DeviceTypeController from "../controllers/deviceTypeController";
import CheckRoleMiddleware, {
  RoleUser,
} from "shared/middleware/CheckRoleMiddleware";

const deviceTypeRouter = Router();

deviceTypeRouter.post(
  "/create",
  CheckRoleMiddleware(RoleUser.ADMIN), // Проверка роли пользователя
  DeviceTypeController.create
);

deviceTypeRouter.get("/all", DeviceTypeController.getAll);

deviceTypeRouter.delete(
  "/delete",
  CheckRoleMiddleware(RoleUser.ADMIN), // Проверка роли пользователя
  DeviceTypeController.remove
);

deviceTypeRouter.patch(
  "/update",
  CheckRoleMiddleware(RoleUser.ADMIN), // Проверка роли пользователя
  DeviceTypeController.update
);

export { deviceTypeRouter };
