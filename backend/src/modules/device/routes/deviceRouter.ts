import { Router } from "express";

const deviceRouter = Router();
deviceRouter.get("/", (request, response) => {
  response.json({ message: "Страница device" });
  deviceRouter.post("/");
    deviceRouter.get('/:id');
});

export { deviceRouter };