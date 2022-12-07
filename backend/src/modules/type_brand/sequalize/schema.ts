// Модель связующей таблицы Many-to-Many
import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {Device_type} from "modules/device_type";
import {Device_brand} from "modules/device_brand";

@Table({timestamps: true, freezeTableName: true})
export class Type_brand extends Model{
    @ForeignKey(() => Device_type)
    @Column
    "deviceTypeId" : string

    @ForeignKey(() => Device_brand)
    @Column
    "deviceBrandId" : string
}
