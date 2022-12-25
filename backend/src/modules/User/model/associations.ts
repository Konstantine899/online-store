// Асоциации
import { Basket } from "modules/Basket";
import { User } from "./schema";
import { Rating } from "modules/Rating";

export async function userAssociations() {
  try {
    await User.hasOne(Basket, {
      foreignKey: { name: "userId", allowNull: false, field: "user_id" },
    });
    await Basket.belongsTo(User, {
      foreignKey: { name: "userId", allowNull: false, field: "user_id" },
    });

    await User.hasMany(Rating, {
      foreignKey: { name: "userId", allowNull: false, field: "user_id" },
    });
    await Rating.belongsTo(User, {
      foreignKey: { name: "userId", allowNull: false, field: "user_id" },
    });
  } catch (error) {
    console.log(error);
  }
}
