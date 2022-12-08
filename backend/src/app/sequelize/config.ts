import { Sequelize } from "sequelize-typescript";
import { User } from "modules/user";
import { Basket } from "modules/basket";
import { Basket_device } from "modules/basket_device";
import { Device } from "modules/device";
import { Device_type } from "modules/device_type";
import { Device_brand } from "modules/device_brand";
import { Rating } from "modules/rating";
import { Device_info } from "modules/device_info";
import { Type_brand } from "modules/type_brand";
import {SyncOptions} from "sequelize/types/sequelize";
import {QueryOptions} from "sequelize/types/dialects/abstract/query-interface";

export const config = new Sequelize(
  DB.NAME, // имя БД
  DB.USER, // имя пользователя
  DB.PASSWORD, // пароль
  {
    dialect: "mysql",
    host: DB.HOST,
    port: DB.PORT,
    logging: DB.DB_LOG ? console.log : false, // логирую в консоль только в development режиме
    models: [
      User,
      Basket,
      Basket_device,
      Device,
      Device_type,
      Device_brand,
      Rating,
      Device_info,
      Type_brand,
    ],
  }
);

export function openConnection(options?: QueryOptions) {
  return config.authenticate(options);
}

export function closeConnection() {
  return config.close();
}

export function synchronizationWithDataBase(options?: SyncOptions) {
  return config.sync(options);
}
