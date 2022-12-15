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
