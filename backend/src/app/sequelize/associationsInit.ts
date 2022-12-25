import { userAssociations } from "modules/User";
import { typeBrandAssociations } from "modules/TypeBrand";
import { deviceTypeAssociations } from "modules/DeviceType";
import { deviceBrandAssociations } from "modules/DeviceBrand";
import { deviceAssociations } from "modules/Device";
import { basketAssociations } from "modules/Basket";

export async function associationsInit() {
  try {
    await userAssociations();
    await typeBrandAssociations();
    await deviceTypeAssociations();
    await deviceBrandAssociations();
    await deviceAssociations();
    await basketAssociations();
  } catch (error) {
    console.log(error);
  }
}
