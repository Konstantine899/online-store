// Модель device
import {
  BelongsTo,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Device_type } from "modules/device_type";
import { Device_brand } from "modules/device_brand";
import { Rating } from "modules/rating";
import { Basket_device } from "modules/basket_device";
import { Device_info } from "modules/device_info";

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
  @BelongsTo(() => Device_type, "deviceTypeId") device_type:
    | Device_type
    | undefined;
  @BelongsTo(() => Device_brand, "deviceBrandId") device_brand:
    | Device_brand
    | undefined;
  @HasMany(() => Rating, "deviceId") ratings: Rating[] | undefined;
  @HasMany(() => Basket_device, "deviceId") basket_devices:
    | Basket_device[]
    | undefined;
  @HasMany(() => Device_info, "deviceId") device_info:
    | Device_info[]
    | undefined;
}
