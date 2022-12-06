//Модель Корзины
import {
  BelongsTo,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "modules/user";
import { Basket_device } from "modules/basket_device";

@Table({ timestamps: true, freezeTableName: true })
export class Basket extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number | undefined;
  @BelongsTo(() => User, "userId") user: User | undefined;
  @HasMany(() => Basket_device, "basketId") basket_devices:
    | Basket_device[]
    | undefined;
}
