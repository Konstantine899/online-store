import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import { Device } from "modules/device";
import {Device_brand} from "modules/device_brand";
import {Type_brand} from "modules/type_brand";

@Table({ timestamps: true, freezeTableName: true })
export class Device_type extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number | undefined;
  @Column({ type: DataType.STRING, unique: true, allowNull: false }) name:
    | string
    | undefined;
  @HasMany(() => Device, "deviceTypeId") devices: Device[] | undefined;
  @BelongsToMany(() => Device_brand, () => Type_brand)
  brands: Device_brand[] | undefined;
}
