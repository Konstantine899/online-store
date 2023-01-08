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

export class DeviceType
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

DeviceType.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { name: "name", msg: "Такой тип устройства уже существует" },
    },
  },

  {
    timestamps: true,
    sequelize: sequelizeConnection,
    freezeTableName: true,
    modelName: "device_type",
    indexes: [{ name: "device_type", fields: ["id", "name"] }],
  }
);

DeviceType.hasMany(Device);
Device.belongsTo(DeviceType);
