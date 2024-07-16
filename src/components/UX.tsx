import React from "react";
import mobileImage from "../../public/mobile_dev-6180df87085fd146c501a19e6156fbd2.png";
import Image from "next/image";
import { design, technologies } from "../../data";
import { useTranslations } from "next-intl";
const UX = () => {
  const t = useTranslations("UX");
  return (
    <div
      id="design"
      className="flex flex-col gap-14 px-5 lg:px-16 pt-10 pb-8 md:pt-28 lg:pb-14"
    >
      <h1 className="primary_color text-3xl font-semibold md:text-5xl">
        {t("title")}
      </h1>
      <div className="flex flex-col gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          src={mobileImage}
          alt="img"
          className="w-full h-full sm:w-[27rem] md:w-[30rem]"
        />
        <div className="flex flex-col gap-8">
          <p className="text-lg lg:text-xl">{t("subtitle")}</p>
          <div className="grid grid-cols-3 gap-2">
            {design.map((item) => (
              <div
                key={item.id}
                className="bg_third_color flex flex-col gap-4 pl-3 py-3 rounded-lg"
              >
                <img src={item.icon} alt="icon" width={40} />
                <p className="text-[14px] font-medium sm:text-base">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-semibold">{t("technologies")}</h1>
            <div className="flex gap-6 items-end ">
              {technologies.map((item) => {
                if (item.id > 3) {
                  return (
                    <div
                      className="flex flex-col gap-2 items-center "
                      key={item.id}
                    >
                      <img
                        src={item.icon}
                        alt="icon"
                        className={`${item.id === 6 ? "w-10" : "w-12"}`}
                      />
                      <p className="text-lg font-medium ">{item.title}</p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UX;
