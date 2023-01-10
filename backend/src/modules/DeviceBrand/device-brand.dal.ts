import {
  DeviceBrand,
  IDeviceBrandInput,
  IDeviceBrandOutput,
} from "./device-brand.model";

export const createDeviceBrand = async (
  payload: IDeviceBrandInput
): Promise<IDeviceBrandOutput> => {
  return await DeviceBrand.create(payload);
};

export const getAllDevicesBrands = async (): Promise<IDeviceBrandOutput[]> => {
  return await DeviceBrand.findAll();
};
export const getOneDeviceBrand = async (
  id: number
): Promise<IDeviceBrandOutput | null> => {
  return await DeviceBrand.findOne({ where: { id } });
};

export const removeDeviceBrandById = async (id: number): Promise<number> => {
  return await DeviceBrand.destroy({ where: { id } });
};

export const updateDeviceBrand = async (
  id: number,
  payload: Partial<IDeviceBrandInput>
): Promise<IDeviceBrandOutput> => {
  const deviceBrand = await DeviceBrand.findByPk(id);
  return (deviceBrand as DeviceBrand).update(payload);
};
