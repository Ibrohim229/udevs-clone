"use client";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { TextField } from "@mui/material";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };
  return (
    <div
      id="contact"
      className="flex flex-col gap-7 px-5 lg:px-16 pt-10 pb-8 md:pt-16 lg:pb-14"
    >
      <h1 className="primary_color text-3xl font-semibold md:text-5xl">
        {t("title")}
      </h1>
      <div className="flex flex-col gap-5 md:px-14 lg:px-16 pb-8 md:py-12 lg:pb-14 md:shadow-[0px_0px_20px_1px_rgba(34,60,80,0.2)] md:rounded-xl">
        <h1 className="text-xl font-semibold">{t("subtitle")}</h1>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-start">
          <form
            className="flex flex-col gap-5 items-center md:items-start md:w-1/2"
            onSubmit={handleSubmit}
          >
            <TextField
              label={t("name")}
              variant="outlined"
              size="medium"
              color="primary"
              className="w-full"
              required
            />
            <TextField
              label={t("email")}
              variant="outlined"
              size="medium"
              color="primary"
              className="w-full"
              required
            />
            <TextField
              label={t("project")}
              variant="outlined"
              size="medium"
              color="primary"
              className="w-full"
              InputProps={{
                sx: { height: 100, alignItems: "flex-start" }, // Adjust the height as needed
              }}
            />
            <button
              type="submit"
              className="px-5 py-2 bg_primary_color text-white w-3/5 text-lg font-medium rounded-lg active:opacity-85 transition-all"
            >
              {t("sendBtn")}
            </button>
          </form>
          <div className="flex flex-col gap-6 md:pl-10">
            <div className="flex gap-4 items-center">
              <IoLocationOutline
                size={27}
                className="flex-shrink-0 primary_color"
              />
              <a
                href="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor"
                className="text-base"
              >
                Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <FiPhone size={23} className="flex-shrink-0 primary_color" />
              <a href="tel:+998336600999" className="text-base">
                +998336600999
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <MdOutlineMail
                size={25}
                className="flex-shrink-0 primary_color"
              />
              <a href="mailto:azizbek.b@udevs.io" className="text-base">
                azizbek.b&#64;udevs.io
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <FaTelegramPlane
                size={24}
                className="flex-shrink-0 primary_color"
              />
              <a
                href="https://t.me/azizbekbakhodirov"
                className="text-base primary_color font-semibold"
              >
                t.me/azizbekbakhodirov
              </a>
            </div>
            <div className="md:flex flex-col hidden gap-7">
              <div className="flex items-center gap-5">
                <FaYoutube
                  className="primary_color hover:text-red-600 cursor-pointer  transition-all"
                  size={27}
                />
                <FaInstagram
                  className="primary_color hover:text-pink-600 cursor-pointer transition-all"
                  size={27}
                />
                <IoLogoFacebook
                  className="primary_color hover:text-blue-600 cursor-pointer  transition-all"
                  size={27}
                />
                <FaTwitter
                  className="primary_color hover:text-blue-500 cursor-pointer transition-all"
                  size={27}
                />
              </div>
              <iframe
                src="https://yandex.com/map-widget/v1/-/CDSBbZNl"
                height={250}
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
