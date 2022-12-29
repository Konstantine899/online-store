import { openConnection } from "app/sequelize/config";
import express, { Express } from "express";
import { useSoftware } from "app/express/useSoftware";
import { router } from "app/express/appRouter";
import ErrorHandlingMiddleware from "shared/middleware/ErrorHandlingMiddleware";
import modelInit from "app/sequelize/modelInit";

const app = express();

useSoftware(app);

app.use("/shop", router);

app.use(ErrorHandlingMiddleware); // не забывай что обработчик ошибок идет всегда последним

export const start = async (app: Express) => {
  try {
    await openConnection();
    await modelInit({ alter: true, force: false });
    app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start(app);
