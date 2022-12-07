import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import { Device } from "modules/device";
import {Device_type} from "modules/device_type";
import {Type_brand} from "modules/type_brand";

@Table({ timestamps: true, freezeTableName: true })
export class Device_brand extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number | undefined;
  @Column({ type: DataType.STRING, unique: true, allowNull: false }) name:
    | string
    | undefined;
  @HasMany(() => Device, "deviceBrandId") devices: Device[] | undefined;
  @BelongsToMany(() => Device_type, () => Type_brand)
  types: Device_type[] | undefined;}
