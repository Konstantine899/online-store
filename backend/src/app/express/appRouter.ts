import { Router } from "express";
import { userRouter } from "modules/User";
import { deviceRouter } from "modules/Device";
import { deviceBrandRouter } from "modules/DeviceBrand";
import { deviceTypeRouter } from "modules/DeviceType";

const router = Router();
router.use("/user", userRouter);
router.use("/type", deviceTypeRouter);
router.use("/brand", deviceBrandRouter);
router.use("/device", deviceRouter);

export { router };
