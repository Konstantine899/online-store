import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "modules/user";
import { Device } from "modules/device";

@Table({ timestamps: true, freezeTableName: true })
export class Rating extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number | undefined;
  @Column({ type: DataType.STRING, allowNull: false }) name: string | undefined;
  @BelongsTo(() => User, "userId") user: User | undefined;
  @BelongsTo(() => Device, "deviceId") device: Device | undefined;
}
