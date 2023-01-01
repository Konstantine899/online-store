import {
  DeviceBrand,
  IDeviceBrandInput,
  IDeviceBrandOutput,
} from "../model/schema";

export const createDeviceBrand = async (
  payload: IDeviceBrandInput
): Promise<IDeviceBrandOutput> => {
  return await DeviceBrand.create(payload);
};
