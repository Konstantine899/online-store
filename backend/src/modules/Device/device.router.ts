import { Router } from "express";
import DeviceController from "./device.controller";
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

deviceRouter.get(
  "/all/deviceTypeId/:deviceTypeId([0-9]+)",
  DeviceController.getAll
);

deviceRouter.get(
  "/all/deviceBrandId/:deviceBrandId([0-9]+)",
  DeviceController.getAll
);

deviceRouter.get(
  "/all/deviceBrandId/:deviceBrandId([0-9]+)/deviceTypeId/:deviceTypeId([0-9]+)",
  DeviceController.getAll
);
deviceRouter.get("/one/:id([0-9]+)", DeviceController.getOne);

deviceRouter.patch(
  "/update/:id([0-9]+)",
  CheckRoleMiddleware(RoleUser.ADMIN), // Проверка роли пользователя
  FilePayloadExist,
  FileSizeLimiter,
  FileExtLimiter([".jpg", ".png", ".jpeg"]),
  DeviceController.update
);
deviceRouter.delete(
  "/delete/:id([0-9]+)",
  CheckRoleMiddleware(RoleUser.ADMIN), // Проверка роли пользователя
  DeviceController.remove
);

export { deviceRouter };
