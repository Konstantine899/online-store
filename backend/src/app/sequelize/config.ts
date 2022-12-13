import { Sequelize } from "sequelize";
import { QueryOptions } from "sequelize/types/dialects/abstract/query-interface";

const sequelizeConnection = new Sequelize(
  DB.NAME, // имя БД
  DB.USER, // имя пользователя
  DB.PASSWORD, // пароль
  {
    dialect: "mysql",
    host: DB.HOST,
    port: DB.PORT,
    logging: DB.DB_LOG ? console.log : false, // логирую в консоль только в development режиме
  }
);

export function openConnection(options?: QueryOptions) {
  console.log("Открыть подключение");
  return sequelizeConnection.authenticate(options);
}

export function closeConnection() {
  return sequelizeConnection.close();
}

export default sequelizeConnection;
