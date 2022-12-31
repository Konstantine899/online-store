import { Device, IDeviceInput } from "modules/Device";

export const createDevice = async (payload: IDeviceInput): Promise<Device> => {
  return await Device.create(payload);
};
