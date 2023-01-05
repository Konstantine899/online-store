import { Router } from "express";
import DeviceController from "../controller/device.controller";
import CheckRoleMiddleware, {
  RoleUser,
} from "shared/middleware/CheckRoleMiddleware";
import FilePayloadExist from "shared/middleware/FilePayloadExist";
import FileSizeLimiter from "shared/middleware/FileSizeLimiter";
import FileExtLimiter from "shared/middleware/FileExtLimiter";

const deviceRouter = Router();

deviceRouter.post(
  "/create",
  CheckRoleMiddleware(RoleUser.ADMIN), // Проверка роли пользователя
  FilePayloadExist,
  FileSizeLimiter,
  FileExtLimiter([".jpg", ".png", ".jpeg"]),
  DeviceController.create
);
deviceRouter.get("/all", DeviceController.getAll);
deviceRouter.get("/one", DeviceController.getOne);

deviceRouter.patch(
  "/update",
  CheckRoleMiddleware(RoleUser.ADMIN), // Проверка роли пользователя
  FilePayloadExist,
  FileSizeLimiter,
  FileExtLimiter([".jpg", ".png", ".jpeg"]),
  DeviceController.update
);
deviceRouter.delete(
  "/delete",
  CheckRoleMiddleware(RoleUser.ADMIN), // Проверка роли пользователя
  DeviceController.remove
);

export { deviceRouter };
