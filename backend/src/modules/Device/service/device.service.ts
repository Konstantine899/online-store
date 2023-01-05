import * as DeviceDal from "../dal/device.dal";
import { IDeviceInput, IDeviceOutput } from "../model/device.model";
import { IFilters } from "../dal/device.types";

export const create = async (payload: IDeviceInput): Promise<IDeviceOutput> => {
  return await DeviceDal.createDevice(payload);
};

export const update = async (
  id: number,
  payload: Partial<IDeviceInput>
): Promise<IDeviceOutput> => {
  return await DeviceDal.updateDevice(id, payload);
};

export const getById = async (id: number): Promise<IDeviceOutput | null> => {
  return await DeviceDal.getDeviceById(id);
};

export const deleteById = async (id: number): Promise<boolean> => {
  return await DeviceDal.deleteDeviceById(id);
};

export const getAll = async (filters: IFilters): Promise<IDeviceOutput[]> => {
  return await DeviceDal.getAllDevices(filters);
};
