import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "app/sequelize/config";
import { Basket_device } from "modules/basket_device";

interface IBascket {
  id: number;
}

export class Basket extends Model<IBascket> implements IBascket {
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
Basket.hasMany(Basket_device, { foreignKey: "basketShopId" });
Basket_device.belongsTo(Basket);
