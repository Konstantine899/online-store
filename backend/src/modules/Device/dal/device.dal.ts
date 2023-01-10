import { Device, IDeviceInput, IDeviceOutput } from "../device.model";
import { IFilters } from "./device.types";
import { DeviceInfo } from "modules/DeviceInfo";

export const createDevice = async (
  payload: IDeviceInput
): Promise<IDeviceOutput> => {
  return await Device.create(payload);
};

export const deleteDeviceById = async (id: number): Promise<number> => {
  return await Device.destroy({ where: { id } });
};

export const getDeviceById = async (
  id: number
): Promise<IDeviceOutput | null> => {
  return await Device.findOne({
    where: { id },
    include: [{ model: DeviceInfo, as: "info" }], // включая информацию с модели info
  });
};

export const updateDevice = async (
  id: number,
  payload: Partial<IDeviceInput>
): Promise<IDeviceOutput> => {
  const device = await Device.findByPk(id);
  if (!device) throw new Error(`Устройство не найдено`);
  return (device as Device).update(payload);
};

export const getAllDevices = async (
  filters: IFilters
): Promise<IDeviceOutput[]> => {
  const { limit, offset, deviceBrandId, deviceTypeId } = filters;

  let devices!: IDeviceOutput[];

  if (!deviceTypeId || !deviceBrandId) {
    devices = (await Device.findAndCountAll({
      offset,
      limit,
    })) as unknown as IDeviceOutput[];
  }

  if (!deviceTypeId && deviceBrandId)
    devices = (await Device.findAndCountAll({
      where: { deviceBrandId },
      offset,
      limit,
    })) as unknown as IDeviceOutput[];

  if (deviceTypeId && !deviceBrandId)
    devices = (await Device.findAndCountAll({
      where: { deviceTypeId },
      offset,
      limit,
    })) as unknown as IDeviceOutput[];

  if (deviceTypeId && deviceBrandId)
    devices = (await Device.findAndCountAll({
      where: { deviceTypeId, deviceBrandId },
      offset,
      limit,
    })) as unknown as IDeviceOutput[];

  return devices;
};
