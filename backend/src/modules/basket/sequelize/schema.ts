//Модель Корзины
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ timestamps: true, freezeTableName: true })
export class Basket extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number | undefined;
}
