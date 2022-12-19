import {
  DeviceBrand,
  IDeviceBrandInput,
  IDeviceBrandOutput,
} from "modules/DeviceBrand";

export const createDeviceBrand = async (
  payload: IDeviceBrandInput
): Promise<IDeviceBrandOutput> => {
  return await DeviceBrand.create(payload);
};
