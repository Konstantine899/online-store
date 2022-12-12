import { Router } from "express";
import { userRouter } from "modules/user";
import { deviceRouter } from "modules/device";
import { deviceBrandRouter } from "modules/device_brand";
import { deviceTypeRouter } from "modules/device_type";

const router = Router();
router.use("/user", userRouter);
router.use("/type", deviceTypeRouter);
router.use("/brand", deviceBrandRouter);
router.use("/device", deviceRouter);

export { router };
