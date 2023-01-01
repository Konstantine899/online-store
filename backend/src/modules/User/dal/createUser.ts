import { IUserOutput, User } from "modules/User";

interface IPayload {
  email: string;
  role: string;
  hashPassword: string;
}

export const createUser = async (payload: IPayload): Promise<IUserOutput> => {
  const { email, role, hashPassword } = payload;
  return await User.create({ email, role, password: hashPassword });
};
