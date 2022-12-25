import { Rating } from "modules/Rating";
import { Device } from "./schema";
import { BasketDevice } from "modules/BasketDevice";
import { DeviceInfo } from "modules/DeviceInfo";

export async function deviceAssociations() {
  try {
    await Device.hasMany(Rating, {
      foreignKey: { name: "deviceId", allowNull: false, field: "device_id" },
    });
    await Rating.belongsTo(Device);

    await Device.hasMany(BasketDevice, {
      foreignKey: { name: "deviceId", allowNull: false, field: "device_id" },
    });
    await BasketDevice.belongsTo(Device);

    await Device.hasMany(DeviceInfo, {
      foreignKey: { name: "deviceId", allowNull: false, field: "device_id" },
    });
    await DeviceInfo.belongsTo(Device);
  } catch (error) {
    console.log(error);
  }
}
