import { Device } from "modules/Device";

export const getOneDevice = async (id: number): Promise<Device> => {
  const result = await Device.findOne({ where: { id } });
  return result as Device;
};
