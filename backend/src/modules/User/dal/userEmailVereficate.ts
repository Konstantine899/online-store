import { User } from "modules/User";

export const userEmailVereficate = async (email: string) => {
  return await User.findOne({ where: { email } });
};
