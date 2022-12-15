import {
  DeviceType,
  IDeviceTypeInput,
  IDeviceTypeOutput,
} from "../model/schema";

export const createDeviceType = async (
  payload: IDeviceTypeInput
): Promise<IDeviceTypeOutput> => {
  return await DeviceType.create(payload);
};

export const getAllDevicesTypes = async (): Promise<IDeviceTypeOutput[]> => {
  return await DeviceType.findAll();
};

export const deleteByIdDeviceType = async (
  id: number
): Promise<IDeviceTypeOutput[]> => {
  await DeviceType.destroy({
    where: { id },
  });
  return await DeviceType.findAll();
};
