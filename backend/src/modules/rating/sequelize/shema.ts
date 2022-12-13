import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "app/sequelize/config";

interface IRating {
  id: number;
  name: string;
}

export class Rating extends Model<IRating> implements IRating {
  public id!: number;
  public name!: string;
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Rating.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    freezeTableName: true,
    modelName: "rating",
    paranoid: true,
  }
);
