import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "app/sequelize/config";

export interface IRating {
  id: number;
  name: string;
}

//IRatingInput это тип объекта передаваемый в sequelize
export interface IRatingInput extends Optional<IRating, "id" | "name"> {}

// Определяет возвращаемый объект из БД в методах create, update, findOne
export interface IRatingOutput extends Required<IRating> {}

export class Rating extends Model<IRating, IRatingInput> implements IRating {
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
  }
);
