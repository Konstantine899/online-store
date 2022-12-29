import { Device, IDeviceOutput } from "modules/Device";

export const getAllDevice = async (): Promise<IDeviceOutput[]> => {
  return await Device.findAll();
};
