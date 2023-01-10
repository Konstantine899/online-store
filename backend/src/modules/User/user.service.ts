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

export const findUsers = async (): Promise<IUserOutput[]> => {
  return await UserDal.getAllUsers();
};

export const findUserById = async (id: number): Promise<IUserOutput | null> => {
  return await UserDal.findUserById(id);
};

export const findUserByEmail = async (
  email: string
): Promise<IUserOutput | null> => {
  return await UserDal.findUserByEmail(email);
};

export const userEmailVerification = async (email: string) => {
  return await UserDal.userEmailVerification(email);
};

export const removeUserById = async (id: number): Promise<number> => {
  return await UserDal.removeUserById(id);
};
