import jwt from "jsonwebtoken";

interface IPayload {
  id: number;
  email: string;
  role: string;
}

export const generateToken = (payload: IPayload): string => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
};
