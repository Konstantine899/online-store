import {
  DeviceBrand,
  IDeviceBrandInput,
  IDeviceBrandOutput,
} from "modules/DeviceBrand/device-brand.model";

export const createDeviceBrand = async (
  payload: IDeviceBrandInput
): Promise<IDeviceBrandOutput> => {
  return await DeviceBrand.create(payload);
};

export const getAllDevicesBrands = async (): Promise<IDeviceBrandOutput[]> => {
  return await DeviceBrand.findAll();
};

export const removeDeviceBrandById = async (id: number): Promise<boolean> => {
  const brand = await DeviceBrand.destroy({ where: { id } });
  return !!brand;
};

export const updateDeviceBrand = async (
  id: number,
  payload: Partial<IDeviceBrandInput>
): Promise<IDeviceBrandOutput> => {
  const deviceBrand = await DeviceBrand.findByPk(id);
  return (deviceBrand as DeviceBrand).update(payload);
};
