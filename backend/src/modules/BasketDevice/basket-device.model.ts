import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "app/sequelize/config";
import { Basket } from "modules/Basket";
import { Device } from "modules/Device";

export interface IBasketDevice {
  id: number;
}

//IBasketDeviceInput это тип объекта передаваемый в sequelize
export interface IBasketDeviceInput extends Optional<IBasketDevice, "id"> {}

// Определяет возвращаемый объект из БД в методах create, update, findOne
export interface IBasketDeviceOutput extends Required<IBasketDevice> {}

export class BasketDevice
  extends Model<IBasketDevice, IBasketDeviceInput>
  implements IBasketDevice
{
  public id!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

BasketDevice.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    freezeTableName: true,
    modelName: "basket_device",
  }
);

Basket.belongsToMany(Device, { through: BasketDevice });

Device.belongsToMany(Basket, { through: BasketDevice });
