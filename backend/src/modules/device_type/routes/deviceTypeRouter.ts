import { Router } from "express";

const deviceTypeRouter = Router();
deviceTypeRouter.get("/", (request, response) => {
  response.json({ message: "Страница Type" });
});
deviceTypeRouter.post("/");

export { deviceTypeRouter };