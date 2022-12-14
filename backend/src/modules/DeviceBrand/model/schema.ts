import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "app/sequelize/config";
import { Device } from "modules/Device";

export interface IDeviceBrand {
  id: number;
  name: string;
}

//IDeviceBrandInput
export interface IDeviceBrandInput
  extends Optional<IDeviceBrand, "id" | "name"> {}

// Определяет возвращаемый объект из БД в методах create, update, findOne
export interface IDeviceBrandOutput extends Required<IDeviceBrand> {}

export class DeviceBrand
  extends Model<IDeviceBrand, IDeviceBrandInput>
  implements IDeviceBrand
{
  public id!: number;
  public name!: string;
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

DeviceBrand.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    freezeTableName: true,
    modelName: "device_brand",
    paranoid: true,
  }
);

// Ассоциации
DeviceBrand.hasMany(Device, {
  foreignKey: { name: "deviceBrandId", allowNull: false },
});
Device.belongsTo(DeviceBrand, {
  foreignKey: { name: "deviceBrandId", allowNull: false },
});
