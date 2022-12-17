import {
  DeviceType,
  IDeviceTypeInput,
  IDeviceTypeOutput,
} from "../model/schema";
import ApiError from "shared/api/ApiError/ApiError";

export const createDeviceType = async (
  payload: IDeviceTypeInput
): Promise<IDeviceTypeOutput> => {
  return await DeviceType.create(payload);
};

export const getAllDevicesTypes = async (): Promise<IDeviceTypeOutput[]> => {
  return await DeviceType.findAll();
};

export const updateDeviceType = async (
  id: number,
  payload: Partial<IDeviceTypeInput>
): Promise<IDeviceTypeOutput> => {
  const deviceType = await DeviceType.findByPk(id);
  const updateDeviceType = await (deviceType as DeviceType).update(payload);
  return updateDeviceType;
};

export const deleteDeviceType = async (
  id: number
): Promise<IDeviceTypeOutput[]> => {
  await DeviceType.destroy({
    where: { id },
  });
  return await DeviceType.findAll();
};
