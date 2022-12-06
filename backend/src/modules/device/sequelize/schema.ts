// Модель device
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ timestamps: true, freezeTableName: true })
export class Device extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number | undefined;
  @Column({ type: DataType.STRING, unique: true, allowNull: false }) name:
    | string
    | undefined;
  @Column({ type: DataType.INTEGER, allowNull: false }) price:
    | number
    | undefined;
  @Column({ type: DataType.INTEGER, defaultValue: 0 }) rating:
    | number
    | undefined;
  @Column({ type: DataType.STRING, allowNull: false }) img: string | undefined;
}
