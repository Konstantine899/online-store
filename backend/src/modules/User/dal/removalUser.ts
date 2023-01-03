import { User } from "modules/User";

interface IPayload {
  email?: string;
}

export const removalUser = async (payload: IPayload): Promise<void> => {
  const { email } = payload;
  if (email) {
    await User.destroy({ where: { email } });
  }
};
