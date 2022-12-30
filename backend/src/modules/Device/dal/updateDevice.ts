import { Device, IDevice, IDeviceInput, IDeviceOutput } from "modules/Device";

export const updateDevice = async (
  id: number,
  payload: Partial<IDeviceInput>
): Promise<IDeviceOutput> => {
  const device = await Device.findByPk(id);
  return (device as Device).update(payload);
};
