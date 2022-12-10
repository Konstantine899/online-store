import { Router } from "express";
import DeviceTypeController from "../controllers/deviceTypeController";

const deviceTypeRouter = Router();

deviceTypeRouter.post("/", DeviceTypeController.create);
deviceTypeRouter.get("/", DeviceTypeController.getAll);

export { deviceTypeRouter };
