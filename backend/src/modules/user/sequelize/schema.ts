import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ timestamps: true, freezeTableName: true })
export class User extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number | undefined;
  @Column({ type: DataType.STRING, unique: true }) email: string | undefined;
  @Column({ type: DataType.STRING }) password: string | undefined;
  @Column({ type: DataType.STRING, defaultValue: "USER" })
  role: string | undefined;
}
