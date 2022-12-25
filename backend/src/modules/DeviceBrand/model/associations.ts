import { Device } from "modules/Device";
import { DeviceBrand } from "./schema";

export async function deviceBrandAssociations() {
  try {
    await DeviceBrand.hasMany(Device, {
      foreignKey: {
        name: "deviceBrandId",
        allowNull: false,
        field: "device_type_id",
      },
    });
    await Device.belongsTo(DeviceBrand);
  } catch (error) {
    console.log(error);
  }
}
