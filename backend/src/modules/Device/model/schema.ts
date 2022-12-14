import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "app/sequelize/config";
import { Rating } from "modules/Rating";
import { BasketDevice } from "modules/BasketDevice";
import { DeviceInfo } from "modules/DeviceInfo";

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
}

// IDeviceInput это тип объекта передаваемый в sequelize
export interface IDeviceInput
  extends Optional<IDevice, "id" | "name" | "price" | "rating" | "img"> {}

// Определяет возвращаемый объект из БД в методах create, update, findOne
export interface IDeviceOutput extends Required<IDevice> {}

export class Device extends Model<IDevice, IDeviceInput> implements IDevice {
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

// Device.hasMany(Rating, { foreignKey: "ratingId" });
// Rating.belongsTo(Device, { foreignKey: "deviceId" });
//
// Device.hasMany(BasketDevice, { foreignKey: "basketId" });
// BasketDevice.belongsTo(Device, { foreignKey: "deviceId" });
//
// Device.hasMany(DeviceInfo, { foreignKey: "deviceInfoId" });
// DeviceInfo.belongsTo(Device, { foreignKey: "deviceId" });
