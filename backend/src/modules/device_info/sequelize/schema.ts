import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "app/sequelize/config";

interface IDeviceInfo {
  id: number;
  title: string;
  description: string;
}

export class Device_info extends Model<IDeviceInfo> implements IDeviceInfo {
  public id!: number;
  public title!: string;
  public description!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Device_info.init(
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
    paranoid: true,
  }
);
