import React from "react";
import Image from "next/image";
import mobileImage from "../../public/mobile_dev-6180df87085fd146c501a19e6156fbd2.png";
import { platforms, technologies } from "../../data";
import { useTranslations } from "next-intl";

const MobileApps = () => {
  const t = useTranslations("MobileApps");
  return (
    <div
      id="mobile_apps"
      className="flex flex-col px-5 pt-10 md:pt-28 gap-16 pb-8 lg:py-20 lg:px-16"
    >
      <h1 className="primary_color text-3xl md:text-5xl font-semibold">
        {t("title")}
      </h1>
      <div className="flex flex-col gap-5 md:flex-row-reverse">
        <Image
          src={mobileImage}
          alt="team"
          className="w-full h-full sm:w-[30rem] md:w-[50rem]"
        />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-7 items-start">
            <p className="text-lg lg:text-xl lg:leading-10">{t("subtitle")}</p>
            <div className="grid grid-cols-3 gap-3">
              {platforms.map((platform) => (
                <div
                  key={platform.id}
                  className="bg_secondary_color flex flex-col gap-4 px-3 pt-3 pb-4 rounded-lg "
                >
                  <img src={platform.icon} alt="icon" width={40} />
                  <p className="text-start text-[13px] font-medium sm:text-base">
                    {platform.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-semibold">{t("technologies")}</h1>
            <div className="flex gap-6">
              {technologies.map((item) => {
                if (item.id <= 3) {
                  return (
                    <div
                      className="flex flex-col gap-2 items-center"
                      key={item.id}
                    >
                      <img src={item.icon} alt="icon" width={44} />
                      <p className="text-lg font-medium">{item.title}</p>
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

export default MobileApps;
