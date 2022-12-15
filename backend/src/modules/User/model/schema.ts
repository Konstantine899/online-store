import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "app/sequelize/config";
import { Basket } from "modules/Basket";
import { Rating } from "modules/Rating";

export interface IUser {
  id: number;
  email: string;
  password: string;
  role: string;
}

//IUserInput это тип объекта передаваемый в sequelize
export interface IUserInput
  extends Optional<IUser, "id" | "email" | "password" | "role"> {}

// Определяет возвращаемый объект из БД в методах create, update, findOne
export interface IUserOutput extends Required<IUser> {}

export class User extends Model<IUser, IUserInput> implements IUser {
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
User.hasOne(Basket, {
  foreignKey: { name: "userId", allowNull: false, field: "user_id" },
});
Basket.belongsTo(User, {
  foreignKey: { name: "userId", allowNull: false, field: "user_id" },
});

User.hasMany(Rating, {
  foreignKey: { name: "userId", allowNull: false, field: "user_id" },
});
Rating.belongsTo(User, {
  foreignKey: { name: "userId", allowNull: false, field: "user_id" },
});
