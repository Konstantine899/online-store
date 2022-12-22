import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "app/sequelize/config";

export interface IDeviceInfo {
  id: number;
  title: string;
  description: string;
}

//IDeviceInfoInput это тип объекта передаваемый в sequelize
export interface IDeviceInfoInput
  extends Optional<IDeviceInfo, "id" | "title" | "description"> {}

// Определяет возвращаемый объект из БД в методах create, update, findOne
export interface IDeviceInfoOutput extends Required<IDeviceInfo> {}

export class DeviceInfo
  extends Model<IDeviceInfo, IDeviceInfoInput>
  implements IDeviceInfo
{
  public id!: number;
  public title!: string;
  public description!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

DeviceInfo.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    freezeTableName: true,
    tableName: "device_info",

  }
);
