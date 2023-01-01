import { Device, IDeviceInput } from "../model/schema";

export const createDevice = async (payload: IDeviceInput): Promise<Device> => {
  return await Device.create(payload);
};
