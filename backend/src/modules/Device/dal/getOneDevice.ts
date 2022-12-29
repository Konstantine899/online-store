import { Device, IDeviceOutput } from "modules/Device";

export const getOneDevice = async (id: number): Promise<IDeviceOutput> => {
  const result = await Device.findOne({ where: { id } });
  return result as Device;
};
