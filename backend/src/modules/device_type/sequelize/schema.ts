import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ timestamps: true, freezeTableName: true })
export class Device_type extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number | undefined;
  @Column({ type: DataType.STRING, unique: true, allowNull: false }) name:
    | string
    | undefined;
}
