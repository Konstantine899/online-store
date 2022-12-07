import {closeConnection, openConnection, synchronizationWithDataBase} from "shared/sequelize/config";

export const start = async () => {
  try {
    await openConnection();
    await synchronizationWithDataBase({force: true,alter: true})
    await closeConnection()
  } catch (error) {
    console.log(error);
  }
};
start();
