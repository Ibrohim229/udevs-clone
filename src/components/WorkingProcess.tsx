import React, { useTransition } from "react";
import { workingProcess } from "../../data";
import { useTranslations } from "next-intl";

const WorkingProcess = () => {
  const t = useTranslations("WorkingProcess");
  return (
    <div className="flex flex-col gap-14 md:gap-16 px-5 lg:px-16 pt-10 pb-8 md:pt-16 lg:pb-14">
      <h1 className="primary_color text-3xl font-semibold md:text-5xl">
        {t("title")}
      </h1>
      <div className="flex flex-col md:flex-row md:gap-10 gap-7">
        {workingProcess.map((item) => (
          <div className="flex gap-7 md:flex-col items-center" key={item.id}>
            <img src={item.icon} alt="icon" className="w-14 lg:w-16" />
            <div className="flex flex-col gap-1 md:items-center">
              <h2 className="text-lg font-semibold md:text-xl">
                {(item.id == 1 && t("work1")) ||
                  (item.id == 2 && t("work2")) ||
                  (item.id == 3 && t("work3")) ||
                  (item.id == 4 && t("work4")) ||
                  (item.id == 5 && t("work5"))}
              </h2>
              <p className="text-base md:text-center ">
                {(item.id == 1 && t("subtitle1")) ||
                  (item.id == 2 && t("subtitle2")) ||
                  (item.id == 3 && t("subtitle3")) ||
                  (item.id == 4 && t("subtitle4")) ||
                  (item.id == 5 && t("subtitle5"))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingProcess;
