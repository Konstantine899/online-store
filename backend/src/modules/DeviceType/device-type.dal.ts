import {
  DeviceType,
  IDeviceTypeInput,
  IDeviceTypeOutput,
} from "./device-type.model";

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
  return await (deviceType as DeviceType).update(payload);
};

export const deleteDeviceType = async (id: number): Promise<boolean> => {
  const type = await DeviceType.destroy({
    where: { id },
  });
  return !!type;
};
