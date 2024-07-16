"use client";
import React from "react";
import { services } from "../../data";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("Services");
  return (
    <div
      id="direction"
      className="flex flex-col gap-12 pt-14 md:pt-28 pb-10 md:pb-28 items-center lg:items-start px-5 lg:px-16"
    >
      <h1 className="text-3xl font-semibold text-[#1b5bf7] md:text-5xl ">
        {t("title")}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full sm:gap-5 gap-3 lg:gap-7 ">
        {services.map((service) => (
          <div
            className="bg_secondary_color flex flex-col gap-8 px-5 pt-8 pb-5 rounded-lg lg:h-52"
            key={service.id}
          >
            <img src={service.icon} alt="icon" width={40} />
            <p className="text-start text-sm font-medium sm:text-xl">
              {(service.id == 1 && t("service1")) ||
                (service.id == 2 && t("service2")) ||
                (service.id == 3 && t("service3")) ||
                (service.id == 4 && t("service4")) ||
                (service.id == 5 && t("service5")) ||
                (service.id == 6 && t("service6"))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
