import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "app/sequelize/config";
import { Rating } from "modules/rating";
import { Basket_device } from "modules/basket_device";
import { Device_info } from "modules/device_info";

interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

export class Device extends Model<IDevice> implements IDevice {
  public id!: number;
  public name!: string;
  public price!: number;
  public rating!: number;
  public img!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Device.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    img: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    freezeTableName: true,
    modelName: "device",
    paranoid: true,
  }
);

Device.hasMany(Rating, { foreignKey: "deviceId" });
Rating.belongsTo(Device);

Device.hasMany(Basket_device, { foreignKey: "deviceId" });
Basket_device.belongsTo(Device);

Device.hasMany(Device_info, { foreignKey: "deviceId" });
Device_info.belongsTo(Device);
