import { Router } from "express";
import DeviceBrandController from "../controllers/deviceBrandController";

const deviceBrandRouter = Router();
deviceBrandRouter.post("/create", DeviceBrandController.create);
deviceBrandRouter.get("/all", DeviceBrandController.getAll);
deviceBrandRouter.delete(
  "/delete",
  DeviceBrandController.removeDeviceBrandById
);

export { deviceBrandRouter };