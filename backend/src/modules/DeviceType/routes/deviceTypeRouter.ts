import { Router } from "express";
import DeviceTypeController from "../controllers/deviceTypeController";

const deviceTypeRouter = Router();

deviceTypeRouter.post("/create", DeviceTypeController.create);
deviceTypeRouter.get("/all", DeviceTypeController.getAll);
deviceTypeRouter.delete("/delete", DeviceTypeController.remove);
deviceTypeRouter.patch('/update', DeviceTypeController.update)

export { deviceTypeRouter };
