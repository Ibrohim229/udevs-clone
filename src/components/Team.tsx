"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import teamImage from "../../public/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg";
import CountUp from "react-countup";
import { useTranslations } from "next-intl";

const Team = () => {
  const [showPlus, setShowPlus] = useState(false);
  const t = useTranslations("Team");

  return (
    <div
      id="command"
      className="flex flex-col px-5 lg:px-16 lg:pb-14  gap-10 bg_secondary_color py-14 md:py-20"
    >
      <h1 className="primary_color text-3xl font-semibold md:text-5xl">
        {t("title")}
      </h1>

      <div className="flex flex-col gap-16 md:flex-row-reverse ">
        <div>
          <Image
            src={teamImage}
            alt="team"
            className="w-full h-full sm:w-96 md:w-[60rem]"
          />
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-lg lg:leading-10 lg:text-xl">{t("subtitle")}</p>
          <div className="flex flex-col gap-5">
            <h1 className="primary_color text-6xl font-semibold">
              <CountUp
                start={0}
                end={100}
                duration={3}
                onEnd={() => setShowPlus(true)}
              />
              {showPlus && <span className="transition-all">&#43;</span>}
            </h1>
            <h1 className="text-2xl font-semibold">{t("smallText")}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
