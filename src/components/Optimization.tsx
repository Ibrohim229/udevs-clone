import React from "react";
import Image from "next/image";
import desktop from "../../public/desktop-be2444bb4c87961054714533a5d5a728.png";
import { infrastructure } from "../../data";
import { useTranslations } from "next-intl";

const Optimization = () => {
  const t = useTranslations("Optimization");
  return (
    <div
      id="optimization"
      className="flex flex-col gap-14 px-5 lg:px-16 pt-10 md:pt-28 lg:pb-14 pb-8 bg_secondary_color"
    >
      <h1 className="primary_color text-3xl font-semibold md:text-5xl">
        {t("title")}
      </h1>
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <Image
          src={desktop}
          alt="img"
          className="w-full h-full sm:w-[27rem] lg:w-[33rem]"
        />
        <div className="flex flex-col gap-8 lg:pl-8">
          <p className="text-lg lg:text-xl">{t("subtitle")}</p>
          <div className="grid grid-cols-3 gap-2">
            {infrastructure.map((item) => (
              <div
                key={item.id}
                className="bg_third_color flex flex-col gap-4 pl-3 py-3 pr-2 rounded-lg"
              >
                <img src={item.icon} alt="icon" width={40} />
                <p className="text-[14px] font-medium sm:text-base">
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

export default Optimization;
