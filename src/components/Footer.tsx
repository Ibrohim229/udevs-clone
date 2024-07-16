import React, { useTransition } from "react";
import logo from "../../public/download.svg";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const nav = useTranslations("Navbar");
  const hero = useTranslations("Hero");
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center bg_secondary_color gap-14 px-5 lg:px-16 pt-10 pb-8 md:pt-16 lg:pb-14">
      <Image src={logo} alt="logo" className="w-28" />
      <div className="grid grid-cols-2 md:grid-cols-3 md:justify-between gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-lg font-semibold">{t("aboutUs")}</h1>
          <ul className=" list-none flex flex-col gap-2">
            <li className="primary_color cursor-pointer hover:underline">
              <a href="#direction">{nav("navItem1")}</a>
            </li>
            <li className="primary_color cursor-pointer hover:underline">
              <a href="#command">{nav("navItem2")}</a>
            </li>
            <li className="primary_color cursor-pointer hover:underline">
              <a href="#tools">{nav("navItem4")}</a>
            </li>
            <li className="primary_color cursor-pointer hover:underline">
              <a href="#clients">{nav("navItem5")}</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-lg font-semibold">{nav("navItem6")}</h1>
          <ul className=" list-none flex flex-col gap-2">
            <li className="primary_color cursor-pointer hover:underline">
              <a href="#delever">Delever</a>
            </li>
            <li className="primary_color cursor-pointer hover:underline">
              <a href="#sms">Sms.uz</a>
            </li>
            <li className="primary_color cursor-pointer hover:underline">
              <a href="#goodzone">Goodzone</a>
            </li>
            <li className="primary_color cursor-pointer hover:underline">
              <a href="#iman">Iman</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-lg font-semibold">{nav("navItem3")}</h1>
          <ul className=" list-none flex flex-col gap-2">
            <li className="primary_color cursor-pointer hover:underline">
              <a href="#mobile_apps">{hero("subtitle1")}</a>
            </li>
            <li className="primary_color cursor-pointer hover:underline">
              <a href="#erp">{hero("subtitle2")}</a>
            </li>
            <li className="primary_color cursor-pointer hover:underline">
              <a href="#design">{hero("subtitle3")}</a>
            </li>
            <li className="primary_color cursor-pointer hover:underline">
              <a href="#consulting">{hero("subtitle4")}</a>
            </li>
            <li className="primary_color cursor-pointer hover:underline">
              <a href="#consulting">{hero("subtitle5")}</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="hidden md:block md:w-full h-[1.3px] opacity-35 bg_primary_color" />
      <div className="flex flex-col md:flex-row md:justify-between md:w-full gap-5 items-center">
        <div className="flex gap-3">
          <div className="flex justify-center items-center rounded-full w-7 h-7 md:w-9 md:h-9 bg-[#1b5bf7]">
            <FaInstagram size={17} color="white" />
          </div>
          <div className="flex justify-center items-center rounded-full w-7 h-7 md:w-9 md:h-9 bg-[#1b5bf7]">
            <FaTwitter size={17} color="white" />
          </div>
          <div className="flex justify-center items-center rounded-full w-7 h-7 md:w-9 md:h-9 bg-[#1b5bf7]">
            <FaYoutube size={17} color="white" />
          </div>
        </div>
        <p className="text-sm primary_color md:text-base">
          &#169; {year} Udevs. {t("copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
