import * as DeviceBrandDal from "./device-brand.dal";
import { IDeviceBrandInput, IDeviceBrandOutput } from "./device-brand.model";

export const create = async (
  payload: IDeviceBrandInput
): Promise<IDeviceBrandOutput> => {
  return await DeviceBrandDal.createDeviceBrand(payload);
};

export const getAll = async (): Promise<IDeviceBrandOutput[]> => {
  return await DeviceBrandDal.getAllDevicesBrands();
};

export const deleteById = async (id: number): Promise<boolean> => {
  return await DeviceBrandDal.removeDeviceBrandById(id);
};

export const update = async (
  id: number,
  payload: Partial<IDeviceBrandInput>
): Promise<IDeviceBrandOutput> => {
  return await DeviceBrandDal.updateDeviceBrand(id, payload);
};
