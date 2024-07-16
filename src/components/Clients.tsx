"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { companies } from "../../data";
import "swiper/css";
import "swiper/css/autoplay";
import { useTranslations } from "next-intl";

const Clients = () => {
  const t = useTranslations("Clients");
  return (
    <div
      id="clients"
      className=" flex flex-col gap-8 md:gap-12 pt-10  pb-8 md:pt-20 lg:pb-14 overflow-hidden"
    >
      <h1 className="primary_color text-3xl lg:px-16 px-5 font-semibold md:text-5xl">
        {t("title")}
      </h1>
      <div className="w-[100vw]">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={5000}
        >
          {companies.map((company) => {
            if (company.id <= 7) {
              return (
                <SwiperSlide key={company.id}>
                  <img
                    src={company.image}
                    alt="img"
                    className="w-full h-auto shadow-md md:rounded-[2rem] rounded-xl  mb-5"
                  />
                </SwiperSlide>
              );
            }
          })}
        </Swiper>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: true,
          }}
          speed={5000}
        >
          {companies.map((company) => {
            if (company.id > 7) {
              return (
                <SwiperSlide key={company.id} className="mt-5 md:mt-12">
                  <img
                    src={company.image}
                    alt="img"
                    className="w-full h-auto shadow-md md:rounded-[2rem] rounded-xl mb-5"
                  />
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
