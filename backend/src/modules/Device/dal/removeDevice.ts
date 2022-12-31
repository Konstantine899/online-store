import { Device } from "modules/Device";

export const removeDevice = async (id: number): Promise<Device[]> => {
  await Device.destroy({ where: { id } });
  return await Device.findAll();
};
