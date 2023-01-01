import { DeviceBrand } from "../model/schema";
import { IDeviceTypeOutput } from "modules/DeviceType/model/schema";

export const removeDeviceBrand = async (
  id: number
): Promise<IDeviceTypeOutput[]> => {
  await DeviceBrand.destroy({ where: { id } });
  return await DeviceBrand.findAll();
};
