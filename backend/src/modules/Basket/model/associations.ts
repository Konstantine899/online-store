import { BasketDevice } from "modules/BasketDevice";
import { Basket } from "./schema";

export async function basketAssociations() {
  try {
    await Basket.hasMany(BasketDevice, {
      foreignKey: { name: "basketId", allowNull: false, field: "basket_id" },
    });
    await BasketDevice.belongsTo(Basket);
  } catch (error) {
    console.log(error);
  }
}
