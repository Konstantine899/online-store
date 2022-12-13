import { User } from "modules/user";
import { SyncOptions } from "sequelize/types/sequelize";
import { Basket } from "modules/basket";
import { Basket_device } from "modules/basket_device";
import { Device } from "modules/device";
import { Device_brand } from "modules/device_brand";
import { Device_info } from "modules/device_info";
import { Device_type } from "modules/device_type";
import { Rating } from "modules/rating";
import { TypeBrand } from "modules/type_brand/sequalize/schema";

const dbInit = (options: SyncOptions) => {
  User.sync(options);
  Basket.sync(options);
  Basket_device.sync(options);
  Device.sync(options);
  Device_brand.sync(options);
  Device_info.sync(options);
  Device_type.sync(options);
  Rating.sync(options);
  TypeBrand.sync(options);
};
export default dbInit;
