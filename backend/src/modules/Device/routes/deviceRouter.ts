import { Router } from "express";
import DeviceController from "../controllers/deviceController";
import filePayloadExist from "shared/middleware/filePayloadExist";
import fileExtLimiter from "shared/middleware/fileExtLimiter";
import fileSizeLimiter from "shared/middleware/fileSizeLimiter";

const deviceRouter = Router();

deviceRouter.post(
  "/create",
  filePayloadExist,
  fileSizeLimiter,
  fileExtLimiter(["jpg", "png", "jpeg"]),
  DeviceController.create
);
deviceRouter.get("/all", DeviceController.getAll);
deviceRouter.get("/one", DeviceController.getOne);
deviceRouter.patch(
  "/update",
  filePayloadExist,
  fileSizeLimiter,
  // fileExtLimiter(["jpg", "png", "jpeg"]),
  DeviceController.update
);
deviceRouter.delete("/delete", DeviceController.removeDeviceById);

export { deviceRouter };
