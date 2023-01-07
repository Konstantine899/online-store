import { IUserOutput, User } from "../user.model";
import { ICreateUserPayload } from "./user.types";
import { Basket, IBasket } from "modules/Basket";

export const createBasket = async (id: number): Promise<IBasket> => {
  return await Basket.create({ userId: id });
};
export const createUser = async (
  payload: ICreateUserPayload
): Promise<IUserOutput> => {
  const { email, role, hashPassword } = payload;
  return await User.create({ email, role, password: hashPassword });
};

export const findUserByEmail = async (
  email: string
): Promise<IUserOutput | null> => {
  return await User.findOne({ where: { email } });
};

export const removalUserEmail = async (email: string): Promise<boolean> => {
  const result = await User.destroy({ where: { email } });
  return !!result;
};
export const userEmailVerification = async (email: string) => {
  return await User.findOne({ where: { email } });
};
