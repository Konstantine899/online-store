// Схема девайса в корзине

import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Basket } from "modules/basket";
import { Device } from "modules/device";

@Table({ timestamps: true, freezeTableName: true })
export class Basket_device extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number | undefined;
  @BelongsTo(() => Basket, "basketId") basket: Basket | undefined;
  @BelongsTo(() => Device, "deviceId") device: Device | undefined;
}
