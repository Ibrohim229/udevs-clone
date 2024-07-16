"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import logo from "../../public/download.svg";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { portfolio, servicesNav } from "../../data";
import eng from "../../public/navbar/eng.svg";
import rus from "../../public/navbar/rus.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";

const saveScrollPosition = () => {
  sessionStorage.setItem("scrollPosition", window.scrollY.toString());
};

const restoreScrollPosition = () => {
  const scrollPosition = sessionStorage.getItem("scrollPosition");
  if (scrollPosition) {
    window.scrollTo(0, parseInt(scrollPosition, 10));
  }
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  const t = useTranslations("Navbar");
  const hero = useTranslations("Hero");

  useEffect(() => {
    restoreScrollPosition();
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 h-[100vh] w-full lg:hidden flex flex-col justify-between py-6 px-6 bg-[#f4f7ff] transition-transform duration-300 ease-in-out ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ right: 0, zIndex: 1000 }}
      >
        <div className="flex justify-between">
          <Image src={logo} alt="logo" className="w-24" />
          <IoClose
            size={25}
            onClick={() => setToggle((prev) => !prev)}
            color="#1b5bf7"
            className="cursor-pointer"
          />
        </div>
        <ul className="list-none flex flex-col items-center text-3xl font-semibold gap-4">
          <li>
            <a href="#mobile_apps" onClick={() => setToggle((prev) => !prev)}>
              {t("navItem3")}
            </a>
          </li>
          <li>
            <a href="#clients" onClick={() => setToggle((prev) => !prev)}>
              {t("navItem5")}
            </a>
          </li>
          <li>
            <a href="#command" onClick={() => setToggle((prev) => !prev)}>
              {t("navItem2")}
            </a>
          </li>
        </ul>
        <div className="flex flex-col gap-10 items-center pb-5">
          <a
            href="#contact"
            className="w-full sm:w-2/3"
            onClick={() => setToggle((prev) => !prev)}
          >
            <button className="px-5 py-[14px] bg-[#1b5bf7] text-white w-full text-lg font-medium rounded-lg">
              {t("contactBtn")}
            </button>
          </a>

          <div className="flex gap-3">
            <div className="flex justify-center items-center rounded-full w-10 h-10 bg-[#1b5bf7]">
              <FaInstagram size={23} color="white" />
            </div>
            <div className="flex justify-center items-center rounded-full w-10 h-10 bg-[#1b5bf7]">
              <FaTwitter size={23} color="white" />
            </div>
            <div className="flex justify-center items-center rounded-full w-10 h-10 bg-[#1b5bf7]">
              <FaYoutube size={23} color="white" />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-0 w-full bg-white flex justify-between lg:px-16 px-6 gap-5 py-4 items-center transition-transform border-b-[1px] border-gray-300 z-50">
        <div className="flex-shrink-0">
          <a href="#hero">
            <Image src={logo} alt="logo" className="w-24" />
          </a>
        </div>

        <div className="flex gap-7 items-center lg:hidden">
          <div className="flex gap-5 ">
            <Link href="/en" className="w-full">
              <Image
                src={eng}
                alt="eng"
                width={20}
                className="cursor-pointer"
                onClick={saveScrollPosition}
              />
            </Link>
            <Link href="/ru" className="w-full">
              <Image
                src={rus}
                alt="rus"
                width={20}
                className="cursor-pointer"
                onClick={saveScrollPosition}
              />
            </Link>
          </div>
          <RxHamburgerMenu
            size={25}
            color="#1b5bf7"
            onClick={() => setToggle((prev) => !prev)}
            className=" cursor-pointer"
          />
        </div>

        <div className="lg:flex md:gap-5 lg:gap-6 items-center hidden">
          <ul className="list-none flex md:gap-5 lg:gap-8 font-semibold md:text-sm">
            <li className="cursor-pointer">
              <a href="#direction">{t("navItem1")}</a>
            </li>
            <li className="cursor-pointer">
              <a href="#command">{t("navItem2")}</a>
            </li>
            <div
              className="relative flex flex-col items-center transition-all"
              onMouseEnter={() => setShowServices((prev) => !prev)}
              onMouseLeave={() => setShowServices((prev) => !prev)}
            >
              <li className="flex items-center cursor-pointer">
                <a href="#mobile_apps">{t("navItem3")}</a>{" "}
                <MdArrowDropDown size={20} />
              </li>
              {showServices && (
                <div className="absolute top-full flex flex-col gap-4 py-5 w-72 items-start justify-center bg-white rounded-lg shadow-md">
                  {servicesNav.map((item) => (
                    <div
                      className="cursor-pointer flex items-center gap-7  transition-all hover:bg-[#1b5bf7] hover:text-white w-full px-5 py-2"
                      key={item.id}
                    >
                      <img src={item.icon} alt="icon" />
                      <p className="text-sm font-normal">
                        {(item.id == 1 && hero("subtitle1")) ||
                          (item.id == 2 && hero("subtitle2")) ||
                          (item.id == 3 && hero("subtitle3")) ||
                          (item.id == 4 && hero("subtitle4")) ||
                          (item.id == 5 && hero("subtitle5"))}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <li className="cursor-pointer">
              <a href="#tools">{t("navItem4")}</a>
            </li>
            <li className="cursor-pointer">
              <a href="#clients">{t("navItem5")}</a>
            </li>
            <div
              className="relative flex flex-col items-center transition-all"
              onMouseEnter={() => setShowPortfolio((prev) => !prev)}
              onMouseLeave={() => setShowPortfolio((prev) => !prev)}
            >
              <li className="flex items-center cursor-pointer">
                <a href="#delever">{t("navItem6")}</a>{" "}
                <MdArrowDropDown size={20} />
              </li>
              {showPortfolio && (
                <div className="absolute top-full flex flex-col gap-4 py-5 w-72 items-start justify-center bg-white rounded-lg shadow-md">
                  {portfolio.map((item) => (
                    <div
                      className="cursor-pointer flex items-center gap-7  transition-all hover:bg-[#1b5bf7] hover:text-white w-full px-5 py-2"
                      key={item.id}
                    >
                      <img src={item.icon} alt="icon" />
                      <p className="text-sm font-normal">{item.title}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              className="relative flex flex-col items-center transition-all"
              onMouseEnter={() => setShowLanguage((prev) => !prev)}
              onMouseLeave={() => setShowLanguage((prev) => !prev)}
            >
              <li className="flex items-center cursor-pointer">
                {t("navItem7")} <MdArrowDropDown size={20} />
              </li>
              {showLanguage && (
                <div className="absolute top-full flex flex-col gap-2 py-4 w-32 items-start justify-center bg-white rounded-lg shadow-md">
                  <Link href="/en" className="w-full">
                    <div
                      onClick={saveScrollPosition}
                      className="cursor-pointer flex items-center gap-4  transition-all hover:bg-[#1b5bf7] hover:text-white w-full px-5 py-2"
                    >
                      <Image src={eng} alt="eng" width={20} />
                      <p className="text-sm">Eng</p>
                    </div>
                  </Link>
                  <Link href="/ru" className="w-full">
                    <div
                      onClick={saveScrollPosition}
                      className="cursor-pointer flex items-center gap-4  transition-all hover:bg-[#1b5bf7] hover:text-white w-full px-5 py-2"
                    >
                      <Image src={rus} alt="rus" width={20} />
                      <p className="text-sm">Рус</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </ul>
          <a href="#contact">
            <button className="px-5 py-2 bg-[#1b5bf7] text-white text-sm font-bold rounded-lg">
              {t("contactBtn")}
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
