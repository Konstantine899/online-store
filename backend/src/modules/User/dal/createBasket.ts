import { Basket, IBasket } from "modules/Basket";

export const createBasket = async (id: number): Promise<IBasket> => {
  return await Basket.create({ userId: id });
};
