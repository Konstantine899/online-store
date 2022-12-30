import { Device, IDeviceOutput } from "modules/Device";

export const removeDevice = async (id: number): Promise<IDeviceOutput[]> => {
  await Device.destroy({ where: { id } });
  return await Device.findAll();
};