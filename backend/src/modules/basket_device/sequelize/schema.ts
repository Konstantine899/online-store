// Схема девайса в корзине

import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ timestamps: true, freezeTableName: true })
export class Basket_device extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number | undefined;
}
