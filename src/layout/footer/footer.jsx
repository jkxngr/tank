import React from "react";
import map from "../../assets/img/map.png";
import { Button } from "../../components/button/button";
import { RightWhiteIcon } from "../../assets/icon/right-white-icon";
import { RightIcon } from "../../assets/icon/right-icon";
import { TopIcon } from "../../assets/icon/top-icon";
import { TestDriveIcon } from "../../assets/icon/test-drive-icon";
import { SettingsIcon } from "../../assets/icon/settings-icon";
import { LocationIcon } from "../../assets/icon/location-icon";
export const Footer = () => {
  return (
    <div className="bg-thamarBlack">
      <div className="container pt-20">
        <div className="bg-map pt-[307px] pb-[28px] bg-no-repeat px-7">
          <div className="p-5 bg-satinDeepBlack rounded-xl flex justify-between items-center">
            <div className="max-w-[325px]">
              <p className="text-sm font-light text-aircraftGrey">Адрес</p>
              <p className="text-white text-[20px] font-medium">
                Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
              </p>
            </div>
            <div>
              <p className="text-sm font-light text-aircraftGrey">Телефон</p>
              <p className="font-medium text-xl text-white">
                +7 (999) 999-99-99
              </p>
              <p className="before:contents-['.'] before:w-2 before:h-2 before:bg-green-600 before:block before:rounded-full text-aircraftGrey font-light text-sm flex items-center gap-1  ">
                Мы на связи
              </p>
            </div>
            <div className="max-w-[157px]">
              <p className="text-sm font-light text-aircraftGrey">
                Режим работы
              </p>
              <p className="text-white text-[20px] font-medium">
                Ежедневно с 09:00 до 21:00
              </p>
            </div>
            <Button variant="primary" rightIcon={<RightIcon />}>
              Заказать звонок
            </Button>
          </div>
        </div>
        <div>
          <div className="flex gap-2.5 items-center mt-24">
            <p className="text-base font-medium text-white ">Дисклеймер</p>
            <TopIcon />
          </div>
          <p className="text-base font-light text-aircraftGrey mt-[30px] border-b border-aircraftGrey pb-14">
            TANK 300 за 3 799 000руб с учетом поддержек. Цена на модель TANK
            (ТЭНК) 300 в комплектации Adventure (Эдвенчер) с двигателем 2,0T
            4WD, 2023 года производства, цвет автомобиля: белый, с учетом выгоды
            по трейд-ин 300 000 рублей. В трейд-ин принимаются автомобили с
            пробегом со сроком владения и регистрации (постановки на учет) в
            органах ГИБДД не менее 6 месяцев (в отношении автомобилей бренда
            TANK, Haval, Great Wall – 3 месяца) до сдачи автомобиля в трейд-ин.
            В качестве документов, подтверждающих срок владения сдаваемого в
            трейд-ин автомобиля, собственнику необходимо предоставить копию ПТС
            или СТС или карточку учета ТС из ГИБДД с печатью и подписью.
            Подробности уточняйте у менеджеров отдела продаж TANK АВТОРУСЬ.
            Предложение ограничено, не является офертой и действует с
            01.04.2024г. <br /> <br /> TANK 500 за 5 349 000 руб с учетом
            поддержек. Цена на модель TANK (ТЭНК) 500 в комплектации Adventure
            (Эдвенчер) с двигателем 3,0T 4WD, 2023 года производства, цвет
            автомобиля: белый, с учетом прямой выгоды в 950 000 рублей.
            Подробности уточняйте у менеджеров отдела продаж TANK АВТОРУСЬ.
            Предложение ограничено, не является офертой и действует с
            01.04.2024г.
          </p>
        </div>
        <div className="flex justify-between py-14">
          <div>
            <p className="text-base font-medium text-white">
              АВТОРУСЬ TANK Лосиный Остров
            </p>
            <p className="text-sm font-light text-aircraftGrey">
              Официальный дилер
            </p>
          </div>
          <div className="flex gap-10">
            <div>
              <p className="font-medium text-xl text-white">
                +7 (999) 999-99-99
              </p>
              <p className="before:contents-['.'] before:w-2 before:h-2 before:bg-green-600 before:block before:rounded-full text-aircraftGrey font-light text-sm flex items-center gap-1  ">
                Мы на связи
              </p>
            </div>
            <Button variant="primary" rightIcon={<RightIcon />}>
              Заказать звонок
            </Button>
          </div>
        </div>
        <div className="flex justify-between  items-center py-3">
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
        </div >
          <div className="border-b border-aircraftGrey pb-14 mt-10">
            <p className="text-sm font-light text-aircraftGrey">
              Официальный дилер
            </p>
            <p className="text-base font-light text-white">ООО А АВТОРУСЬ МЫТИЩИ | ОГРН - 1147746695161, ИНН - 7728881903</p>
          </div>
          <div className="flex justify-between py-5">
            <p className="text-base font-light text-aircraftGrey">© 2024, АВТОРУСЬ ТАНК</p>
            <div className="flex gap-14">
              <p className="text-base font-light text-aircraftGrey">Правовая информация</p>
              <p className="text-base font-light text-aircraftGrey">Условия акции</p>
            </div>
          </div>
      </div>
    </div>
  );
};
