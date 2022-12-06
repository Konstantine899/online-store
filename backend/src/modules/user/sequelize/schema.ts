import { Column, DataType, Model, Table } from "sequelize-typescript";

export interface IUser {
  id: number;
}

@Table({ timestamps: true })
export class User extends Model<IUser> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;
  @Column({ type: DataType.STRING, unique: true }) email: string;
  @Column({ type: DataType.STRING }) password: string;
  @Column({ type: DataType.STRING, defaultValue: "USER" }) role: string;
}
