import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "app/sequelize/config";
import { Device } from "modules/device";

interface IDeviceBrand {
  id: number;
  name: string;
}

export class Device_brand extends Model<IDeviceBrand> implements IDeviceBrand {
  public id!: number;
  public name!: string;
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Device_brand.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    freezeTableName: true,
    paranoid: true,
  }
);

// Ассоциации
Device_brand.hasMany(Device, { foreignKey: "brandId" });
Device.belongsTo(Device_brand);
