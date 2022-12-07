import {
  closeConnection,
  openConnection,
  synchronizationWithDataBase,
} from "shared/sequelize/config";
import { listen } from "shared/express/listen";
import express, { Express } from "express";
import { useSoftware } from "shared/express/useSoftware";

const app = express();

useSoftware(app);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Все работает!!!!' });
});

export const start = async (app: Express) => {
  try {
    await openConnection();
    await synchronizationWithDataBase({ force: true, alter: true });
    await listen(app);
  } catch (error) {
    console.log(error);
  }
};
start(app);
