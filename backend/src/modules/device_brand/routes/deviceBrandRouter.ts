import { Router } from "express";
import DeviceBrandController from "../controllers/deviceBrandController";

const deviceBrandRouter = Router();
deviceBrandRouter.post("/", DeviceBrandController.create);
deviceBrandRouter.get("/", DeviceBrandController.getAll);

export { deviceBrandRouter };
