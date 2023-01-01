import { Device } from "modules/Device";
import { DeviceInfo } from "modules/DeviceInfo";

export const getOneDevice = async (id: number): Promise<Device> => {
  const result = await Device.findOne({
    where: { id },
    include: [
      { model: DeviceInfo, as: "info" },
    ] /*Включая подгружаю модель DeviceInfo, и получаю необходимые данные по псевдониму info
     который указывал в ассоциациях моделей Device и DeviceInfo*/,
  });
  return result as Device;
};
