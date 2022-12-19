import { DeviceBrand, IDeviceBrandOutput } from "modules/DeviceBrand";

export const getAllDeviceBrand = async (): Promise<IDeviceBrandOutput[]> => {
  return await DeviceBrand.findAll();
};