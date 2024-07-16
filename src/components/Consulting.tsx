import React from "react";
import Image from "next/image";
import consulting from "../../public/consulting-41b53d1dd307a65f09f8017660a0304c.svg";
import { qualifications } from "../../data";
import { useTranslations } from "next-intl";

const Consulting = () => {
  const t = useTranslations("Consulting");
  return (
    <div
      id="consulting"
      className="flex flex-col gap-14 px-5 lg:px-16 pt-10 pb-8 md:pt-28 lg:pb-14"
    >
      <h1 className="primary_color text-3xl font-semibold md:text-5xl">
        {t("title")}
      </h1>
      <div className="flex flex-col gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          src={consulting}
          alt="img"
          className="w-full h-full sm:w-[21rem] lg:w-[30rem]"
        />
        <div className="flex flex-col gap-8">
          <p className="text-lg lg:text-xl">{t("subtitle")}</p>
          <div className="grid grid-cols-3 gap-2">
            {qualifications.map((item) => (
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
        </div>
      </div>
    </div>
  );
};

export default Consulting;
