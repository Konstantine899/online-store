import * as DeviceTypeDal from "./device-type.dal";
import { IDeviceTypeInput, IDeviceTypeOutput } from "./device-type.model";

export const create = async (
  payload: IDeviceTypeInput
): Promise<IDeviceTypeOutput> => {
  return await DeviceTypeDal.createDeviceType(payload);
};

export const getAll = async (): Promise<IDeviceTypeOutput[]> => {
  return await DeviceTypeDal.getAllDevicesTypes();
};

export const getById = async (
  id: number
): Promise<IDeviceTypeOutput | null> => {
  return await DeviceTypeDal.getOneDeviceType(id);
};

export const update = async (
  id: number,
  payload: Partial<IDeviceTypeInput>
): Promise<IDeviceTypeOutput> => {
  return await DeviceTypeDal.updateDeviceType(id, payload);
};

export const deleteById = async (id: number): Promise<number> => {
  return await DeviceTypeDal.deleteDeviceType(id);
};
