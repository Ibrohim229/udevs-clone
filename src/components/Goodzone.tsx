import React from "react";
import logo from "../../public/goodzoneLogo.png";
import Image from "next/image";
import commerceIcon from "../../public/commerce2.svg";
import goodzoneImage from "../../public/goodzone_app-deb2ced5c71cc717322a0f87cfe94652.png";
import { works } from "../../data";
import { useTranslations } from "next-intl";

const Goodzone = () => {
  const t = useTranslations("Goodzone");
  return (
    <div
      id="goodzone"
      className="flex flex-col gap-8 px-5 lg:px-16 pt-10 pb-8 md:pt-20 lg:pb-14"
    >
      <div className="flex flex-col gap-5">
        <Image src={logo} alt="logo" className="w-56" />
        <div className="flex gap-3 justify-center py-3 bg-[#ff572233] rounded-full w-40 items-center">
          <Image src={commerceIcon} alt="icon" className="w-5" />
          <p className="text-[#FF5722] text-base">{t("goal")}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
        <Image
          src={goodzoneImage}
          alt="img"
          className="w-80 h-full md:w-[17rem]  lg:w-[26rem] flex-shrink-0"
        />
        <div className="flex flex-col gap-5 md:pl-10">
          <p className="text-lg lg:text-xl lg:leading-10">{t("desc")}</p>
          <h1 className="text-xl font-semibold lg:text-2xl">{t("subtitle")}</h1>

          <div className="grid grid-cols-3 gap-2">
            {works.map((item) => (
              <div
                key={item.id}
                className="bg_third_color flex flex-col gap-4 px-3 py-2 rounded-lg"
              >
                <img src={item.icon} alt="icon" width={40} />
                <p className="text-xs font-medium sm:text-base">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goodzone;
