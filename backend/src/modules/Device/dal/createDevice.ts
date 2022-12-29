import { Device, IDeviceInput, IDeviceOutput } from "modules/Device";

export const createDevice = async (
  payload: IDeviceInput
): Promise<IDeviceOutput> => {
  return await Device.create(payload);
};
