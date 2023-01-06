import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "app/sequelize/config";

export interface IBasketDevice {
  id: number;
}

//IBasketDeviceInput это тип объекта передаваемый в sequelize
export interface IBasketDeviceInput extends Optional<IBasketDevice, "id"> {}

// Определяет возвращаемый объект из БД в методах create, update, findOne
export interface IBasketDeviceOutput extends Required<IBasketDevice> {}

export class BasketDeviceModel
  extends Model<IBasketDevice, IBasketDeviceInput>
  implements IBasketDevice
{
  public id!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

BasketDeviceModel.init(
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
