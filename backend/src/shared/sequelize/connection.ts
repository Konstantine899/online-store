import { Sequelize } from "sequelize-typescript";
import { User } from "modules/user";

export const connection = new Sequelize(
  DB.NAME, // имя БД
  DB.USER, // имя пользователя
  DB.PASSWORD, // пароль
  {
    dialect: "mysql",
    host: DB.HOST,
    port: DB.PORT,
    models: [User],
  }
);
