import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "app/sequelize/config";
import { BasketDevice } from "modules/BasketDevice";

export interface IBasket {
  id: number;
}

//IBasketInput это тип объекта передаваемый в sequelize
export interface IBasketInput extends Optional<IBasket, "id"> {}

// Определяет возвращаемый объект из БД в методах create, update, findOne
export interface IBasketOutput extends Required<IBasket> {}

export class Basket extends Model<IBasket, IBasketInput> implements IBasket {
  public id!: number;
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Basket.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    freezeTableName: true,
    tableName: "basket",
    paranoid: true,
  }
);

//Ассоциации
// Basket.hasMany(BasketDevice, { foreignKey: "basketId" });
// BasketDevice.belongsTo(Basket, { foreignKey: "basketDeviceId" });
