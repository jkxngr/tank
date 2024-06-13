import React from "react";
import { Logo } from "../../assets/icon/logo";
import { LocationIcon } from "../../assets/icon/location-icon";
import { SettingsIcon } from "../../assets/icon/settings-icon";
import { TestDriveIcon } from "../../assets/icon/test-drive-icon";
import { Button } from "../../components/button/button";
import { PhoneIcon } from "../../assets/icon/phone-icon";
export const Header = () => {
  return (
    <div className="container flex gap-8 items-center">
      <div className="py-3">
        <Logo />
      </div>
      <div className="w-full max-w-[1208px]">
        <div className="flex justify-between  items-center border-b-[1px] border-woodCarcoal py-3">
          <div className="flex gap-[6px]">
            <LocationIcon />
            <p className="text-aircraftGrey font-medium text-sm">
              Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
            </p>
          </div>
          <div className="flex gap-10">
            <div className="flex gap-[6px] items-center">
              <SettingsIcon />
              <p className="font-medium text-white text-sm">
                Записаться на сервис
              </p>
            </div>
            <div className="flex gap-[6px] items-center">
              <TestDriveIcon />
              <p className="font-medium text-white text-sm">Тест-драйв </p>
            </div>
          </div>
        </div>
        <div className="py-3 flex justify-between">
          <div className="flex items-center">
            <p className="text-white text-[30px] font-bold  border-r-[1px] border-woodCarcoal pr-5">
              АВТОРУСЬ TANK
            </p>
            <p className="text-white text-[18px] font-light pl-5">
              Официальный дилер
            </p>
          </div>
          <div className="flex gap-10">
            <div className=" ">
              <p className="font-medium text-xl text-white">
                +7 (999) 999-99-99
              </p>
              <p className="before:contents-['.'] before:w-2 before:h-2 before:bg-green-600 before:block before:rounded-full text-aircraftGrey font-light text-sm flex items-center gap-1 ml-[80px] ">
                Мы на связи
              </p>
            </div>
            <Button variant="primary" leftIcon={<PhoneIcon />}>
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
