import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "app/sequelize/config";

interface IBasket_device {
  id: number;
}

export class Basket_device
  extends Model<IBasket_device>
  implements IBasket_device
{
  public id!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Basket_device.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    freezeTableName: true,
    modelName: "basket_device",
    paranoid: true,
  }
);
