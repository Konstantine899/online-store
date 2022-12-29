import { Router } from "express";
import DeviceController from "../controllers/deviceController";
import filePayloadExist from "shared/middleware/filePayloadExist";
import fileExtLimiter from "shared/middleware/fileExtLimiter";

const deviceRouter = Router();

deviceRouter.post("/create", filePayloadExist, fileExtLimiter(["jpg", "png", "jpeg"]), DeviceController.create);
deviceRouter.get("/all", DeviceController.getAll);
deviceRouter.get("/:id", DeviceController.getOne);
deviceRouter.delete("/delete", DeviceController.removeDeviceById);

export { deviceRouter };
