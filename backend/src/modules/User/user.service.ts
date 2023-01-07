import * as UserDal from "./dal/user.dal";
import { IBasket } from "modules/Basket";
import { ICreateUserPayload } from "modules/User/dal/user.types";
import { IUserOutput } from "modules/User/user.model";

export const createBasket = async (id: number): Promise<IBasket> => {
  return await UserDal.createBasket(id);
};

export const createUser = async (
  payload: ICreateUserPayload
): Promise<IUserOutput> => {
  return await UserDal.createUser(payload);
};

export const findUserByEmail = async (
  email: string
): Promise<IUserOutput | null> => {
  return await UserDal.findUserByEmail(email);
};

export const removalUserEmail = async (email: string): Promise<boolean> => {
  return await UserDal.removalUserEmail(email);
};

export const userEmailVerification = async (email: string) => {
  return await UserDal.userEmailVerification(email);
};
