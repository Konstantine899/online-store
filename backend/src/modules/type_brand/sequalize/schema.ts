// // Модель связующей таблицы Many-to-Many
// import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
// import {Device_type} from "modules/device_type";
// import {Device_brand} from "modules/device_brand";
//
// @Table({timestamps: true, freezeTableName: true})
// export class Type_brand extends Model{
//     @ForeignKey(() => Device_type)
//     @Column
//     "deviceTypeId" : string
//
//     @ForeignKey(() => Device_brand)
//     @Column
//     "deviceBrandId" : string
// }

import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "app/sequelize/config";
import { Device_type } from "modules/device_type";
import { Device_brand } from "modules/device_brand";

interface ITypeBrand {
  id: number;
}

export class TypeBrand extends Model<ITypeBrand> implements ITypeBrand {
  public id!: number;
}

TypeBrand.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    freezeTableName: true,
    modelName: "type_brand",
    paranoid: true,
  }
);

Device_type.belongsToMany(Device_brand, {
  through: TypeBrand,
  foreignKey: "typeId",
});
Device_brand.belongsToMany(Device_type, {
  through: TypeBrand,
  foreignKey: "brandId",
});
