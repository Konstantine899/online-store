import { User } from "modules/User";
import { SyncOptions } from "sequelize/types/sequelize";
import { Basket } from "modules/Basket";
import { BasketDevice } from "modules/BasketDevice";
import { Device } from "modules/Device";
import { DeviceBrand } from "modules/DeviceBrand";
import { DeviceInfo } from "modules/DeviceInfo";
import { Device_type } from "modules/DeviceType";
import { Rating } from "modules/Rating";
import { TypeBrand } from "modules/TypeBrand";

const dbInit = (options: SyncOptions) => {
  User.sync(options);
  Basket.sync(options);
  BasketDevice.sync(options);
  Device.sync(options);
  DeviceBrand.sync(options);
  DeviceInfo.sync(options);
  Device_type.sync(options);
  Rating.sync(options);
  TypeBrand.sync(options);
};
export default dbInit;
