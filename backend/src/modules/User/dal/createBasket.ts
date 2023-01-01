import { Basket } from "modules/Basket";

export const createBasket = async (id: number) => {
  return await Basket.create({ userId: id });
};
