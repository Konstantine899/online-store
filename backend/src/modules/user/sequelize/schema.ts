import { DataTypes, Model } from "sequelize";
import sequelizeConnection from "app/sequelize/config";
import { Basket } from "modules/basket";
import { Rating } from "modules/rating";

interface IUser {
  id: number;
  email: string;
  password: string;
  role: string;
}

export class User extends Model<IUser> implements IUser {
  public id!: number;
  public email!: string;
  public password!: string;
  public role!: string;
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    freezeTableName: true, // имя модели в единственном числе
    modelName: "user",
    paranoid: true,
  }
);

// Асоциации
User.hasOne(Basket, { foreignKey: "userId" });
Basket.belongsTo(User);
User.hasMany(Rating, { foreignKey: "userId" });
Rating.belongsTo(User);
