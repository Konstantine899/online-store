import { Router } from "express";
import { userRouter } from "modules/User";
import { deviceRouter } from "modules/Device";
import { deviceBrandRouter } from "modules/DeviceBrand";
import { deviceTypeRouter } from "modules/DeviceType";

const router = Router();
router.use("/User", userRouter);
router.use("/type", deviceTypeRouter);
router.use("/brand", deviceBrandRouter);
router.use("/Device", deviceRouter);

export { router };
