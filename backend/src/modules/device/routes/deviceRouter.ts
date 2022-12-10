import { Router } from "express";
import DeviceController from "../controllers/deviceController";

const deviceRouter = Router();

deviceRouter.post("/", DeviceController.create);
deviceRouter.get("/", DeviceController.getAll);
deviceRouter.get("/:id", DeviceController.getOne);

export { deviceRouter };
