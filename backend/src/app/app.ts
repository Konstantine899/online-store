import {
  openConnection,
  synchronizationWithDataBase,
} from "app/sequelize/config";
import express, { Express } from "express";
import { useSoftware } from "app/express/useSoftware";
import { router } from "app/express/appRouter";

const app = express();

useSoftware(app);

app.use("/shop", router);

export const start = async (app: Express) => {
  try {
    await openConnection();
    await synchronizationWithDataBase({ force: true, alter: true });
    app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start(app);
