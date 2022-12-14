import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "app/sequelize/config";
import { Device_type } from "modules/DeviceType";
import { DeviceBrand } from "modules/DeviceBrand";

export interface ITypeBrand {
  id: number;
}
//ITypeBrandInput это тип объекта передаваемый в sequelize
export interface ITypeBrandInput extends Optional<ITypeBrand, "id"> {}

// Определяет возвращаемый объект из БД в методах create, update, findOne
export interface ITypeBrandOutput extends Required<ITypeBrand> {}

export class TypeBrand
  extends Model<ITypeBrand, ITypeBrandInput>
  implements ITypeBrand
{
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

// Device_type.belongsToMany(DeviceBrand, {
//   through: TypeBrand,
//   foreignKey: "brandId",
// });
// DeviceBrand.belongsToMany(Device_type, {
//   through: TypeBrand,
//   foreignKey: "typeId",
// });
