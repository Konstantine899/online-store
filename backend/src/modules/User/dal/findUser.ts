import { IUserOutput, User } from "modules/User";

export const findUser = async (
  email: string | undefined
): Promise<IUserOutput | null> => {
  return await User.findOne({ where: { email } });
};
