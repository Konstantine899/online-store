import {
  DeviceBrand,
  IDeviceBrandInput,
  IDeviceBrandOutput,
} from "../model/schema";

export const updateDeviceBrand = async (
  id: number,
  payload: Partial<IDeviceBrandInput>
): Promise<IDeviceBrandOutput> => {
  const deviceBrand = await DeviceBrand.findByPk(id);
  return (deviceBrand as DeviceBrand).update(payload);
};
