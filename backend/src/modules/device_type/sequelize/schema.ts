import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "app/sequelize/config";
import { Device } from "modules/device";

interface IDevice_type {
  id: number;
  name: string;
}

export class Device_type extends Model<IDevice_type> implements IDevice_type {
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

Device_type.hasMany(Device, { foreignKey: "typeId" });
Device.belongsTo(Device_type);
