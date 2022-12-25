import { DeviceType } from "modules/DeviceType";
import { DeviceBrand } from "modules/DeviceBrand";
import { TypeBrand } from "./schema";

export async function typeBrandAssociations() {
  try {
    await DeviceType.belongsToMany(DeviceBrand, {
      through: TypeBrand,
      foreignKey: {
        name: "deviceTypeId",
        allowNull: false,
        field: "device_type_id",
      },
    });
    await DeviceBrand.belongsToMany(DeviceType, {
      through: TypeBrand,
      foreignKey: {
        name: "deviceBrandId",
        allowNull: false,
        field: "device_brand_id",
      },
    });
  } catch (error) {
    console.log(error);
  }
}
