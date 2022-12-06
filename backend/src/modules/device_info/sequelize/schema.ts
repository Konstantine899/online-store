import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ timestamps: true, freezeTableName: true })
export class Device_info extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number | undefined;
  @Column({ type: DataType.STRING, allowNull: false }) title:
    | string
    | undefined;
  @Column({ type: DataType.STRING, allowNull: false }) description:
    | string
    | undefined;
}
