import { IDeviceTypeOutput } from "modules/DeviceType/model/schema";
import { DeviceBrand } from "modules/DeviceBrand";

export const removeDeviceBrand = async (
  id: number
): Promise<IDeviceTypeOutput[]> => {
  await DeviceBrand.destroy({ where: { id } });
  return await DeviceBrand.findAll();
};