"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/download.svg";
import hero from "../../public/hero-304cdf863047286a47c1e063154824d8.svg";
import { TypeAnimation } from "react-type-animation";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <div
      id="hero"
      className="flex flex-col gap-14 items-center pt-24 px-5 sm:px-8 lg:px-16 lg:flex-row lg:justify-between"
    >
      <div className="flex flex-col items-center lg:items-start gap-5 md:gap-7 pt-16">
        <div>
          <Image src={logo} alt="logo" className="w-28 md:w-40 lg:w-64" />
        </div>

        <h1 className="text-2xl text-gray-800 font-semibold sm:text-2xl md:text-start text-center md:text-4xl">
          {t("title")}
        </h1>
        <h1 className=" text-2xl sm:text-xl text-[#1b5bf7] font-semibold md:text-start text-center md:text-3xl">
          <TypeAnimation
            sequence={[
              t("subtitle1"),
              2000,
              t("subtitle2"),
              2000,
              t("subtitle3"),
              2000,
              t("subtitle4"),
              2000,
              t("subtitle5"),
              2000,
            ]}
            wrapper="span"
            speed={25}
            repeat={Infinity}
          />
        </h1>
        <a href="#contact">
          <button className="px-24 hidden md:block py-[14px] bg-[#1b5bf7] text-white text-lg font-medium rounded-lg">
            {t("contactBtn")}
          </button>
        </a>
      </div>

      <div className="flex-shrink-0">
        <Image src={hero} alt="hero" className="w-full h-full md:w-[27rem] " />
      </div>
    </div>
  );
};

export default Hero;
