import { Router } from "express";

const deviceBrandRouter = Router();
deviceBrandRouter.post("/");
deviceBrandRouter.get("/", (request, response) =>{
    response.json({message: 'Страница Brand '})
});

export { deviceBrandRouter };