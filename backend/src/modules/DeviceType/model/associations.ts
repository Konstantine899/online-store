import { Device } from "modules/Device";
import { DeviceType } from "./schema";

export async function deviceTypeAssociations() {
  try {
    await DeviceType.hasMany(Device, {
      foreignKey: {
        name: "deviceTypeId",
        allowNull: false,
        field: "device_type_id",
      },
    });
    await Device.belongsTo(DeviceType);
  } catch (error) {
    console.log(error);
  }
}
