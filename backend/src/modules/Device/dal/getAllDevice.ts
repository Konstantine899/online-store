import { Device } from "../model/schema";

interface IProps {
  offset: number;
  limit: number;
  deviceBrandId?: number;
  deviceTypeId?: number;
}

export const getAllDevice = async (payload: IProps): Promise<Device[]> => {
  const { deviceTypeId, deviceBrandId, offset, limit } = payload;

  let devices;

  if (!deviceTypeId && !deviceBrandId)
    devices = await Device.findAndCountAll({ offset, limit });

  if (deviceTypeId && !deviceBrandId)
    devices = await Device.findAndCountAll({
      where: { deviceTypeId },
      offset,
      limit,
    });

  if (!deviceTypeId && deviceBrandId)
    devices = await Device.findAndCountAll({
      where: { deviceBrandId },
      offset,
      limit,
    });

  if (deviceTypeId && deviceBrandId)
    devices = await Device.findAndCountAll({
      where: { deviceTypeId, deviceBrandId },
      offset,
      limit,
    });

  return devices as unknown as Device[];
};
