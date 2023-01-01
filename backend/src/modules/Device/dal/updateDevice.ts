import { Device, IDeviceInput } from "../model/schema";

export const updateDevice = async (
  id: number,
  payload: Partial<IDeviceInput>
): Promise<Device> => {
  const device = await Device.findByPk(id);
  return (device as Device).update(payload);
};
