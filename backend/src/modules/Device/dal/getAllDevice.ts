import { Device } from "modules/Device";

interface IProps {
  deviceBrandId?: number;
  deviceTypeId?: number;
}

export const getAllDevice = async (payload: IProps): Promise<Device[]> => {
  const { deviceTypeId, deviceBrandId } = payload;
  let devices;
  if (!deviceTypeId && !deviceBrandId) devices = await Device.findAll();
  if (deviceTypeId && !deviceBrandId)
    devices = await Device.findAll({ where: { deviceTypeId } });
  if (!deviceTypeId && deviceBrandId)
    devices = await Device.findAll({ where: { deviceBrandId } });
  if (deviceTypeId && deviceBrandId)
    devices = await Device.findAll({ where: { deviceTypeId, deviceBrandId } });
  return devices as Device[];
};
