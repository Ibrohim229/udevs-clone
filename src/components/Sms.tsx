import React from "react";
import Image from "next/image";
import smsIcon from "../../public/sms2.svg";
import logo from "../../public/smsLogo.svg";
import smsImage from "../../public/smsuz_app-c123f9db0e8dfe776a6f738a4df62c68.png";
import { works } from "../../data";
import { useTranslations } from "next-intl";

const Sms = () => {
  const t = useTranslations("Sms");
  return (
    <div
      id="sms"
      className="flex flex-col gap-8 px-5 lg:px-16  pt-10 pb-8 md:pt-20 lg:pb-14"
    >
      <div className="flex flex-col gap-5 ">
        <Image src={logo} alt="logo" className="w-56" />
        <div className="flex gap-3 justify-center py-3 bg-[#4473e533] rounded-full w-[10rem] items-center">
          <Image src={smsIcon} alt="icon" className="w-5" />
          <p className="primary_color text-base">{t("goal")}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:flex-row-reverse md:justify-between md:items-center">
        <Image
          src={smsImage}
          alt="img"
          className="w-80 h-full md:w-[17rem]  lg:w-[26rem] flex-shrink-0"
        />
        <div className="flex flex-col gap-5 md:pr-10">
          <p className="text-lg lg:text-xl lg:leading-10">{t("desc")}</p>
          <h1 className="text-xl font-semibold lg:text-2xl">{t("subtitle")}</h1>

          <div className="grid grid-cols-3 gap-2">
            {works.map((item) => {
              if (item.id <= 3) {
                return (
                  <div
                    key={item.id}
                    className="bg_third_color flex flex-col gap-4 px-3 py-2 rounded-lg"
                  >
                    <img src={item.icon} alt="icon" width={40} />
                    <p className="text-xs font-medium sm:text-base">
                      {item.title}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sms;
