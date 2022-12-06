import { initialization } from "./shared/sequelize/initialization";
import { listen } from "./shared/express/listen";

export const start = async () => {
  await initialization();
  await listen();
};
start();
