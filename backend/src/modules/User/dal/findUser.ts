import { IUser, IUserOutput, User } from "modules/User";

interface IPayload {
  email?: string;
}

export const findUser = async (payload: IPayload): Promise<IUserOutput> => {
  const { email } = payload;
  let user;
  if (email) {
    user = await User.findOne({ where: { email } });
  }
  return user as IUser;
};
