import { DeviceBrand, IDeviceBrandOutput } from "../model/schema";

export const getAllDeviceBrand = async (): Promise<IDeviceBrandOutput[]> => {
  return await DeviceBrand.findAll();
};
