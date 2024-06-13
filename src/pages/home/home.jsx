import React from "react";
import { Button } from "../../components/button/button";
import { RightIcon } from "../../assets/icon/right-icon";
import { OfficialIcon } from "../../assets/icon/official-icon";
import { TimeIcon } from "../../assets/icon/time-icon";
import { CheckedIcon } from "../../assets/icon/checked-icon";
import tank300 from "../../assets/img/tank300.png";
import tank500 from "../../assets/img/tank500.png";
import tank300Big from "../../assets/img/tank300Big.png";
import tank3001 from "../../assets/img/tank3001.png";
import tank3002 from "../../assets/img/tank3002.png";
import tank3003 from "../../assets/img/tank3003.png";
import tank3004 from "../../assets/img/tank3004.png";
import tank3005 from "../../assets/img/tank3005.png";
import tank500Big from "../../assets/img/tank500Big.png";
import tank5001 from "../../assets/img/tank5001.png";
import tank5002 from "../../assets/img/tank5002.png";
import tank5003 from "../../assets/img/tank5003.png";
import tank5004 from "../../assets/img/tank5004.png";
import tank5005 from "../../assets/img/tank5005.png";
import cardImage from "../../assets/img/card-image.png";
import seller from "../../assets/img/seller.png";
import map from "../../assets/img/map.png";

import tradein from "../../assets/img/tradein.png";
import { WarningIcon } from "../../assets/icon/warning-icon";
import { RightWhiteIcon } from "../../assets/icon/right-white-icon";
import { ChecklistIcon } from "../../assets/icon/checklist-icon";
import { NoteIcon } from "../../assets/icon/note-icon";
import { PercentageIcon } from "../../assets/icon/percentage-icon";
import { ServiceIcon } from "../../assets/icon/service-icon";
import { TagIcon } from "../../assets/icon/tag-icon";
import { PrizeIcon } from "../../assets/icon/prize-icon";
export const Home = () => {
  return (
    <div className="bg-thamarBlack">
      <div className="bg-heroBg bg-cover bg-center ">
        <div className="container pt-[179px] pb-[279px] ">
          <h1 className="text-white max-w-[450px] mb-10  text-[28px] font-medium ">
            Улучшим любые условия <br />
            <span className="text-[60px] font-bold">TANK 500</span> <br />
            Осталось всего 5 автомобилей!
          </h1>
          <Button variant="primary" rightIcon={<RightIcon />}>
            Получить предложение
          </Button>
        </div>
      </div>
      <div className="container ">
        <div className="flex gap-24 bg-charlestoneGreen py-5 mt-5 justify-center rounded-[10px]">
          <p className="text-[30px] font-medium text-white uppercase max-w-[318px] pl-12">
            Срок действия спецпредложения:
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex flex-col items-center w-24 h-24 py-3 text-white rounded-full border-4 border-pastelOrange">
              <span className="text-3xl font-bold">3</span>
              <span>дня</span>
            </div>
            <span className="text-[39px] font-bold text-white">:</span>
            <div className="flex flex-col items-center w-24 h-24 py-3 text-white rounded-full border-4 border-pastelOrange">
              <span className="text-3xl font-bold">06</span>
              <span>часов</span>
            </div>
            <span className="text-[39px] font-bold text-white">:</span>

            <div className="flex flex-col items-center w-24 h-24 py-3 text-white rounded-full border-4 border-pastelOrange">
              <span className="text-3xl font-bold">14</span>
              <span>минут</span>
            </div>
            <span className="text-[39px] font-bold text-white">:</span>
            <div className="flex flex-col items-center w-24 h-24 py-3 text-white rounded-full border-4 border-pastelOrange">
              <span className="text-3xl font-bold">55</span>
              <span>секунд</span>
            </div>
          </div>
          <div className="my-auto pr-12">
            <Button variant="primary" rightIcon={<RightIcon />}>
              Узнать цену с выгодами
            </Button>
          </div>
        </div>
        <div className=" grid grid-cols-3 mt-16">
          <div className="flex max-w-[416px] p-5 gap-5 border-[1px] border-aircraftGrey rounded-[10px]">
            <OfficialIcon />
            <div>
              <h3 className="text-white text-xl font-bold uppercase mb-2">
                Официальный дилер
              </h3>
              <p className="text-base font-light text-white">
                Гарантируем высокое качество обслуживания.
              </p>
            </div>
          </div>
          <div className="flex max-w-[416px] p-5 gap-5 border-[1px] border-aircraftGrey rounded-[10px]">
            <TimeIcon />
            <div>
              <h3 className="text-white text-xl font-bold uppercase mb-2">
                ПОКУПКА АВТО ЗА 1 ДЕНЬ
              </h3>
              <p className="text-base font-light text-white">
                Удобный процесс покупки, включая оформление всех документов.
              </p>
            </div>
          </div>
          <div className="flex max-w-[416px] p-5 gap-5 border-[1px] border-aircraftGrey rounded-[10px]">
            <CheckedIcon />
            <div>
              <h3 className="text-white text-xl font-bold uppercase mb-2">
                ВСЕ КОМПЛЕКТАЦИИ <br /> В НАЛИЧИИ
              </h3>
              <p className="text-base font-light text-white">
                Широкий выбор комплектаций, с полным пакетом документов
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-white text-[40px] font-bold text-center mt-24 mb-10">
            ЗАБРОНИРУЙТЕ Автомобиль СЕГОДНЯ И ПОЛУЧИТЕ ДОПОЛНИТЕЛЬНУЮ ВЫГОДУ 100
            000 ₽
          </h2>
          <div className="flex gap-6 justify-center pb-14">
            <div className="text-center">
              <img src={tank300} alt="" />
              <p className="text-white text-base font-medium">TANK 300</p>
            </div>
            <div className="text-center">
              <img src={tank500} alt="" />
              <p className="text-white text-base font-medium">TANK 500</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-satinDeepBlack py-20">
        <div className="container">
          <div className="flex justify-between">
            <div>
              <p className="text-xl text-pastelOrange font-medium">
                Только в АВТОРУСЬ!
              </p>
              <p className="text-white text-[40px] font-bold my-3">TANK 300</p>
              <p className="text-white text-[30px] font-medium max-w-[321px] uppercase">
                Выгода по Trade-In до 450 000 ₽
              </p>
              <div className="bg-ferrariRed flex py-[6px] px-[10px] mt-[6px] mb-10 gap-2 items-center max-w-[264px] rounded-xl">
                <WarningIcon />
                <p className="text-white whitespace-nowrap text-sm font-medium">
                  Ограниченное предложение!
                </p>
                <WarningIcon />
              </div>
              <div className="flex flex-col gap-3 max-w-[410px]">
                <Button variant="secondary" rightIcon={<RightIcon />}>
                  Узнать стоимость по акции
                </Button>
                <Button variant="nocolor" rightIcon={<RightWhiteIcon />}>
                  Тест-драйв
                </Button>
                <Button variant="nocolor" rightIcon={<RightWhiteIcon />}>
                  Рассчитать кредит
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-between gap-5 ">
              <img src={tank300Big} alt="Car" />
              <div className="absolute top-16 right-16 transform rotate-12 bg-orange-500  px-4 py-2 rounded-md shadow-md">
                <p className="font-medium text-center text-base">Осталось</p>
                <p className="font-medium text-center text-base">
                  5 автомобилей
                </p>
                <p className="font-medium text-center text-base">
                  по спец цене
                </p>
              </div>
              <div className=" flex flex-col space-y-2">
                <div className="w-6 h-6 rounded-full bg-red-600 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-red-400 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-black border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-white border-2 border-white"></div>
              </div>
            </div>
          </div>
          <div className="mt-[30px] grid grid-cols-4">
            <div className="flex items-center gap-[14px] bg-thamarBlack max-w-[306px] rounded-[10px] py-[11px] pl-[14px] pr-[65px]">
              <ChecklistIcon />
              <p className="text-base font-medium text-white">
                Автомобили в наличии с ПТС
              </p>
            </div>
            <div className="flex items-center gap-[14px] bg-thamarBlack max-w-[306px] rounded-[10px] py-[11px] pl-[14px] pr-[65px]">
              <ServiceIcon />
              <p className="text-base font-medium text-white">
                Сервисная поддержка до 5 лет / 150 000 км
              </p>
            </div>
            <div className="flex items-center gap-[14px] bg-thamarBlack max-w-[306px] rounded-[10px] py-[11px] pl-[14px] pr-[65px]">
              <NoteIcon />
              <p className="text-base font-medium text-white">
                Улучшим любое предложение
              </p>
            </div>
            <div className="flex items-center gap-[14px] bg-thamarBlack max-w-[306px] rounded-[10px] py-[11px] pl-[14px] pr-[65px]">
              <PercentageIcon />
              <p className="text-base font-medium text-white">Кредит 0,01% </p>
            </div>
          </div>
          <div className="grid grid-cols-5 mt-[30px]">
            <img src={tank3001} alt="" />
            <img src={tank3002} alt="" />
            <img src={tank3003} alt="" />
            <img src={tank3004} alt="" />
            <img src={tank3005} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-charlestoneGreen py-20">
        <div className="container">
          <div className="flex justify-between">
            <div className="relative flex items-center justify-between gap-5 ">
              <div className=" flex flex-col space-y-2">
                <div className="w-6 h-6 rounded-full bg-red-600 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-red-400 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-black border-2 border-white"></div>
                <div className="w-6 h-6 rounded-full bg-white border-2 border-white"></div>
              </div>
              <img src={tank500Big} alt="Car" />
              <div className="absolute top-16 right-16 transform rotate-12 bg-orange-500  px-4 py-2 rounded-md shadow-md">
                <p className="font-medium text-center text-base">Осталось</p>
                <p className="font-medium text-center text-base">
                  5 автомобилей
                </p>
                <p className="font-medium text-center text-base">
                  по спец цене
                </p>
              </div>
            </div>
            <div>
              <p className="text-xl text-pastelOrange font-medium">
                Только в АВТОРУСЬ!
              </p>
              <p className="text-white text-[40px] font-bold my-2">TANK 500</p>
              <p className="text-white text-[30px] font-medium max-w-[321px] uppercase">
                Выгода до 700 000 ₽
              </p>
              <div className="bg-ferrariRed flex py-[6px] px-[10px] mt-[6px] mb-10 gap-2 items-center max-w-[264px] rounded-xl">
                <WarningIcon />
                <p className="text-white whitespace-nowrap text-sm font-medium">
                  Ограниченное предложение!
                </p>
                <WarningIcon />
              </div>
              <div className="flex flex-col gap-3 max-w-[410px]">
                <Button variant="secondary" rightIcon={<RightIcon />}>
                  Узнать стоимость по акции
                </Button>
                <Button variant="nocolor" rightIcon={<RightWhiteIcon />}>
                  Тест-драйв
                </Button>
                <Button variant="nocolor" rightIcon={<RightWhiteIcon />}>
                  Рассчитать кредит
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-[30px] grid mr-0 grid-cols-4">
            <div className="flex items-center gap-[14px] bg-thamarBlack max-w-[306px] rounded-[10px] py-[11px] pl-[14px] pr-[65px]">
              <ChecklistIcon />
              <p className="text-base font-medium text-white">
                Автомобили в наличии с ПТС
              </p>
            </div>
            <div className="flex items-center gap-[14px] bg-thamarBlack max-w-[306px] rounded-[10px] py-[11px] pl-[14px] pr-[65px]">
              <ServiceIcon />
              <p className="text-base font-medium text-white">
                Сервисная поддержка до 5 лет / 150 000 км
              </p>
            </div>
            <div className="flex items-center gap-[14px] bg-thamarBlack max-w-[306px] rounded-[10px] py-[11px] pl-[14px] pr-[65px]">
              <NoteIcon />
              <p className="text-base font-medium text-white">
                Улучшим любое предложение
              </p>
            </div>
            <div className="flex items-center gap-[14px] bg-thamarBlack max-w-[306px] rounded-[10px] py-[11px] pl-[14px] pr-[65px]">
              <PercentageIcon />
              <p className="text-base font-medium text-white">Кредит 0,01% </p>
            </div>
          </div>
          <div className="grid grid-cols-5 mt-[30px]">
            <img src={tank5001} alt="" />
            <img src={tank5002} alt="" />
            <img src={tank5003} alt="" />
            <img src={tank5004} alt="" />
            <img src={tank5005} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="text-white text-[40px] font-bold pt-24 text-center ">
          ПОДБЕРИТЕ КОМПЛЕКТАЦИЮ
        </h2>
        <div>
          <div className="flex items-center justify-center">
            <form className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-screen-lg">
              <div className="flex flex-col max-w-[416px] w-full">
                <label className="text-aircraftGrey mb-2 text-sm font-light">
                  Модель
                </label>
                <select className="w-full max-w-[416px]  bg-charlestoneGreen  text-white border border-aircraftGrey rounded-lg px-4 py-2">
                  <option value="" disabled>
                    Выберите модель
                  </option>
                  <option value="model1">Model 1</option>
                  <option value="model2">Model 2</option>
                </select>
              </div>
              <div className="flex flex-col max-w-[416px] w-full">
                <label className="text-aircraftGrey mb-2 text-sm font-light">
                  Комплектация
                </label>
                <select className="w-full max-w-[416px] bg-charlestoneGreen text-white border border-aircraftGrey rounded-lg px-4 py-2">
                  <option value="" disabled>
                    Выберите комплектацию
                  </option>
                  <option value="config1">Config 1</option>
                  <option value="config2">Config 2</option>
                </select>
              </div>
              <div className="flex flex-col max-w-[416px] w-full">
                <label className="text-aircraftGrey mb-2 text-sm font-light">
                  Двигатель
                </label>
                <select className="w-full max-w-[416px] bg-charlestoneGreen text-white border border-aircraftGrey rounded-lg px-4 py-2">
                  <option value="" disabled>
                    Выберите двигатель
                  </option>
                  <option value="engine1">Engine 1</option>
                  <option value="engine2">Engine 2</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className=" flex mt-10 items-center border border-aircraftGrey rounded-xl">
            <img src={cardImage} alt="" />
            <div>
              <div>
                <div className="flex justify-between gap-[250px]">
                  <div>
                    <p className="text-[30px] font-bold text-white">TANK 300</p>
                    <p className="text-aircraftGrey text-base font-light mb-[34px]">
                      2.0 л. Бензин, Полный, Автоматическая
                    </p>
                    <p className=" text-[24px] font-bold line-through text-white">
                      3 649 000 ₽
                    </p>
                  </div>
                  <div className="max-w-[320px] w-full flex flex-col gap-3">
                    <Button variant="card" rightIcon={<RightIcon />}>
                      Узнать стоимость по акции
                    </Button>
                    <Button variant="nocolor" rightIcon={<RightWhiteIcon />}>
                      Тест-драйв
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 mt-7">
                <div className="flex  items-center gap-2.5">
                  <TagIcon />
                  <p className="text-balance text-white font-medium">
                    Выгода по Trade-in до 450 000 ₽
                  </p>
                </div>
                <div className=" flex items-center gap-2.5">
                  <PrizeIcon />
                  <p className="text-balance text-white font-medium">
                    Керамическое покрытие в подарок!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex mt-3 items-center border border-aircraftGrey rounded-xl">
            <img src={cardImage} alt="" />
            <div>
              <div>
                <div className="flex justify-between gap-[250px]">
                  <div>
                    <p className="text-[30px] font-bold text-white">TANK 300</p>
                    <p className="text-aircraftGrey text-base font-light mb-[34px]">
                      2.0 л. Бензин, Полный, Автоматическая
                    </p>
                    <p className=" text-[24px] font-bold line-through text-white">
                      3 649 000 ₽
                    </p>
                  </div>
                  <div className="max-w-[320px] w-full flex flex-col gap-3">
                    <Button variant="card" rightIcon={<RightIcon />}>
                      Узнать стоимость по акции
                    </Button>
                    <Button variant="nocolor" rightIcon={<RightWhiteIcon />}>
                      Тест-драйв
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 mt-7">
                <div className="flex  items-center gap-2.5">
                  <TagIcon />
                  <p className="text-balance text-white font-medium">
                    Выгода по Trade-in до 450 000 ₽
                  </p>
                </div>
                <div className=" flex items-center gap-2.5">
                  <PrizeIcon />
                  <p className="text-balance text-white font-medium">
                    Керамическое покрытие в подарок!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex mt-3 items-center border border-aircraftGrey rounded-xl">
            <img src={cardImage} alt="" />
            <div>
              <div>
                <div className="flex justify-between gap-[250px]">
                  <div>
                    <p className="text-[30px] font-bold text-white">TANK 300</p>
                    <p className="text-aircraftGrey text-base font-light mb-[34px]">
                      2.0 л. Бензин, Полный, Автоматическая
                    </p>
                    <p className=" text-[24px] font-bold line-through text-white">
                      3 649 000 ₽
                    </p>
                  </div>
                  <div className="max-w-[320px] w-full flex flex-col gap-3">
                    <Button variant="card" rightIcon={<RightIcon />}>
                      Узнать стоимость по акции
                    </Button>
                    <Button variant="nocolor" rightIcon={<RightWhiteIcon />}>
                      Тест-драйв
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 mt-7">
                <div className="flex  items-center gap-2.5">
                  <TagIcon />
                  <p className="text-balance text-white font-medium">
                    Выгода по Trade-in до 450 000 ₽
                  </p>
                </div>
                <div className=" flex items-center gap-2.5">
                  <PrizeIcon />
                  <p className="text-balance text-white font-medium">
                    Керамическое покрытие в подарок!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="text-sm flex  font-medium py-[14px] px-[30px] text-white mt-10 w-[155px]  mx-auto whitespace-nowrap border border-aircraftGrey rounded-xl">
            Загрузить еще
          </button>
          <div className="mt-[140px] flex gap-10 items-center pb-20">
            <img src={tradein} alt="" />
            <div>
              <p className="mb-10  text-[40px] font-bold text-white">
                ОБМЕН ПО TRADE-IN НА ВЫГОДНЫХ УСЛОВИЯХ
              </p>
              <Button variant="primary" rightIcon={<RightIcon />}>
                Отправить заявку{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-credit bg-no-repeat bg-center">
        <div className="container py-20">
          <div>
            <h2 className="text-white max-w-[364px] mb-3 uppercase text-[40px] font-bold  bg-cover">
              Оставьте заявку на кредит
            </h2>
            <p className="text-balance font-light text-white mb-10">
              и получите одобрение за 1 день!
            </p>
            <div className="flex items-end gap-6">
              <form action="">
                <label
                  htmlFor=""
                  className="text-aircraftGrey text-sm font-light max-w-[300px] w-full"
                >
                  Телефон
                </label>
                <br />
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="+7 (___) ___-__-__"
                  className="bg-charlestoneGreen border-aircraftGrey border py-[14px] mt-2 px-5 rounded-xl max-w-[300px] w-full"
                />
              </form>

              <Button variant="primary" rightIcon={<RightIcon />}>
                Отправить заявку
              </Button>
            </div>
            <form action="" className="flex items-center gap-2 mt-3">
              <input type="checkbox" />
              <label htmlFor="" className="text-xs text-white font-light">
                Согласен на обработку персональных данных.
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" bg-satinDeepBlack p-10 rounded-xl flex justify-between items-center">
          <div>
            <h2 className="text-white text-[30px] font-bold max-w-[550px] mb-10 uppercase">
              Индивидуальное предложение для корпоративных клиентов
            </h2>
            <Button variant="primary" rightIcon={<RightIcon />}>
              Отправить заявку
            </Button>
          </div>
          <div className="flex items-center gap-5">
            <img src={seller} alt="" className="" />
            <div>
              <p className="text-white text-[24px] font-bold uppercase mb-2">
                Татьяна Санникова
              </p>
              <p className="text-aircraftGrey max-w-[171px] text-[16px] font-light">
                Отдел корпоративных продаж АВТОРУСЬ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
