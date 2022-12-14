import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "app/sequelize/config";
import { Device } from "modules/Device";

export interface IDeviceType {
  id: number;
  name: string;
}

//IDeviceTypeInput это тип объекта передаваемый в sequelize
export interface IDeviceTypeInput
  extends Optional<IDeviceType, "id" | "name"> {}

// Определяет возвращаемый объект из БД в методах create, update, findOne
export interface IDeviceTypeOutput extends Required<IDeviceType> {}

export class Device_type
  extends Model<IDeviceType, IDeviceTypeInput>
  implements IDeviceType
{
  public id!: number;
  public name!: string;
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Device_type.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
  },

  {
    timestamps: true,
    sequelize: sequelizeConnection,
    freezeTableName: true,
    modelName: "device_type",
    paranoid: true,
  }
);

//Ассоциации

Device_type.hasMany(Device, { foreignKey: "deviceTypeId" });
Device.belongsTo(Device_type, { foreignKey: "deviceTypeId" });
