import React, { useTransition } from "react";
import desktop from "../../public/desktop-be2444bb4c87961054714533a5d5a728.png";
import Image from "next/image";
import { ITsystems } from "../../data";
import { useTranslations } from "next-intl";
const ErpSystems = () => {
  const t = useTranslations("ERP");
  return (
    <div
      id="erp"
      className="flex flex-col gap-16 px-5 bg_secondary_color pt-10 md:pt-28 pb-12 lg:px-16"
    >
      <h1 className="primary_color text-3xl font-semibold md:text-5xl">
        {t("title")}
      </h1>
      <div className="flex flex-col gap-6 md:items-center md:flex-row md:justify-between ">
        <Image
          src={desktop}
          alt="desktop"
          className="w-full h-full md:w-[30rem] sm:w-[27rem]"
        />
        <div className="flex flex-col gap-8 lg:pl-8">
          <p className="text-lg lg:text-xl">{t("subtitle")}</p>

          <div className="grid grid-cols-3 gap-2">
            {ITsystems.map((item) => (
              <div
                key={item.id}
                className="bg_third_color flex flex-col gap-4 pl-3 py-3 rounded-lg"
              >
                <img src={item.icon} alt="icon" width={40} />
                <p className="text-[14px] font-medium sm:text-base ">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErpSystems;
