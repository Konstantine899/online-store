import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "app/sequelize/config";
import { DeviceInfo, IDeviceInfoInput } from "modules/DeviceInfo";
import { Rating } from "modules/Rating";

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  info?: IDeviceInfoInput;
  deviceTypeId?: number;
  deviceBrandId?: number;
  limit?: number;
  page?: number;
}

// IDeviceInput это тип объекта передаваемый в sequelize
export type IDeviceInput = Optional<
  IDevice,
  "id" | "name" | "price" | "rating" | "img"
>;
// Определяет возвращаемый объект из БД в методах create, update, findOne
export type IDeviceOutput = Required<IDevice>;

export class Device extends Model<IDevice, IDeviceInput> implements IDevice {
  public id!: number;
  public name!: string;
  public price!: number;
  public rating!: number;
  public img!: string;
  public info!: IDeviceInfoInput;
  public deviceTypeId!: number;
  public deviceBrandId!: number;
  public limit!: number;
  public page!: number;

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
    indexes: [{ name: "device", fields: ["name", "price", "rating", "img"] }],
  }
);

Device.hasMany(Rating, {
  foreignKey: { name: "deviceId", allowNull: false, field: "device_id" },
});
Rating.belongsTo(Device);

Device.hasMany(DeviceInfo, {
  /* as: "info" псевдоним,
     по которому получаю данные из таблицы DeviceInfo,
      которые использую в Device при получении конкретного device по id */
  as: "info",
  foreignKey: { name: "deviceId", allowNull: false, field: "device_id" },
});
DeviceInfo.belongsTo(Device);
