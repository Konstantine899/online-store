import { Router } from "express";
import DeviceController from "../controllers/deviceController";

const deviceRouter = Router();

deviceRouter.post("/create", DeviceController.create);
deviceRouter.get("/all", DeviceController.getAll);
deviceRouter.get("/:id", DeviceController.getOne);
deviceRouter.delete("/delete", DeviceController.removeDeviceById);

export { deviceRouter };
