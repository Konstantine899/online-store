import {
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { Basket } from "modules/basket";
import { Rating } from "modules/rating";

@Table({ timestamps: true, freezeTableName: true })
export class User extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number | undefined;
  @Column({ type: DataType.STRING, unique: true }) email: string | undefined;
  @Column({ type: DataType.STRING }) password: string | undefined;
  @Column({ type: DataType.STRING, defaultValue: "USER" })
  role: string | undefined;
  @HasOne(() => Basket, "userId") basket: Basket | undefined;
  @HasMany(() => Rating, "userId") ratings: Rating[] | undefined;
}
