import { User } from "modules/User";
import { SyncOptions } from "sequelize/types/sequelize";
import { Basket } from "modules/Basket";
import { BasketDevice } from "modules/BasketDevice";
import { Device } from "modules/Device";
import { DeviceBrand } from "modules/DeviceBrand";
import { DeviceInfo } from "modules/DeviceInfo";
import { DeviceType } from "modules/DeviceType";
import { Rating } from "modules/Rating";
import { TypeBrand } from "modules/TypeBrand";

const modelInit = async (options: SyncOptions) => {
  try {
    await User.sync(options);
    await Basket.sync(options);
    await BasketDevice.sync(options);
    await Device.sync(options);
    await DeviceBrand.sync(options);
    await DeviceInfo.sync(options);
    await DeviceType.sync(options);
    await Rating.sync(options);
    await TypeBrand.sync(options);
  } catch (error) {
    console.log(error);
  }
};
export default modelInit;
