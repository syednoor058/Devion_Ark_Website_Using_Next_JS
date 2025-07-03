"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import {
  default as logo,
  default as logoMobile,
} from "../../../public/logos/logo.png";
import TextAnimation from "../animations/TextAnimation";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import ButtonOutline from "../buttons/ButtonOutline";
import MenuIcon from "../menuIcon/MenuIcon";

function Navbar() {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Blogs", path: "/blogs" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { label: "Facebook", url: "/" },
    { label: "LinkedIn", url: "/" },
    { label: "Instagram", url: "/" },
    { label: "Whatsapp", url: "/" },
  ];
  const pathname = usePathname(); // Get the current path
  const [menuExpand, setMenuExpand] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestY) => {
    const prevY = scrollY.getPrevious();
    // console.log(latestY, prevY);
    if (latestY > prevY && latestY > 25 && !menuExpand) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-120%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      className={`w-full sticky left-0 top-0 z-[1000] bg-transparent`}
    >
      {/* Pc Navbar  */}

      <div className="w-full hidden lg:flex relative bg-white">
        <div
          className={`w-full h-full flex flex-row gap-5 justify-between items-center px-20 z-[1002] py-5 bg-transparent`}
        >
          <div className="w-full flex flex-row justify-start items-center z-[1003] gap-20 ">
            <Link
              href="/"
              className={`w-auto h-7 relative z-[1003] overflow-hidden`}
            >
              <Image
                src={logo}
                alt="devion_ark_logo"
                className="w-full h-full object-cover"
              />
            </Link>
            <div className="flex flex-row gap-3 items-center  font-normal text-sm mix-blend-difference">
              <div>
                <GoDotFill />
              </div>
              <p className="flex flex-col whitespace-nowrap leading-none">
                <span>Rewrite the Rules</span>
                <span>of Digital.</span>
              </p>
            </div>
          </div>
          <div
            className={`w-full flex flex-row justify-end items-center  z-[1003]`}
          >
            <div className=" flex flex-row gap-5 items-center px-10">
              {navLinks.map((navLink, index) => (
                <Link href={navLink.path} key={index}>
                  <div
                    className={`${
                      pathname === navLink.path
                        ? "text-accentColor"
                        : "text-[#1d1e20]"
                    } text-sm font-normal leading-none duration-[350ms] whitespace-nowrap uppercase`}
                  >
                    <TextAnimation
                      text={navLink.label}
                      hoverText={`${
                        pathname === navLink.path
                          ? "text-accentColor"
                          : "text-[#1d1e20]"
                      }`}
                    />
                  </div>
                </Link>
              ))}
            </div>
            <div>
              <div className="w-full flex justify-end">
                <div className="w-full flex justify-end">
                  <ButtonOutline
                    label="Get A Quote"
                    forwardTo="/contact"
                    textStyle="text-sm text-accentColor"
                    paddingX="ps-4 pe-3"
                    paddingY="py-2"
                    fontGap="gap-2"
                    icon={
                      <FiArrowRight className="text-base text-accentColor  group-hover:-rotate-45 transition duration-[350ms]" />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}

      <div className="w-full flex lg:hidden relative ">
        <div
          className={`w-full h-full flex flex-row gap-5 justify-between items-center py-4  z-[1002] bg-white`}
        >
          <div className="flex justify-center items-center px-5 z-[1003]">
            <div className="w-full relative">
              <Link href="/">
                <Image
                  src={logoMobile}
                  alt="devion_ark_logo"
                  className="w-auto h-6 object-cover"
                />
              </Link>
            </div>
          </div>
          <div className="w-[15%] flex justify-center items-center text-2xl z-[1003]">
            <div
              className="text-neutral-600 cursor-pointer"
              onClick={() => setMenuExpand((prevMenuExpand) => !prevMenuExpand)}
            >
              <MenuIcon expand={menuExpand} />
            </div>
          </div>
        </div>
        <div
          className={`w-[65%] h-screen overflow-x-hidden overflow-y-auto fixed bg-white top-0 left-0 shadow-2xl transform ${
            menuExpand ? "translate-x-0" : "-translate-x-full"
          } duration-1000 ease-in-out z-[999]`}
        >
          <div className="w-full h-full pt-20 flex flex-col gap-10 justify-between z-[1001]">
            <div className="w-full h-full flex flex-col gap-3">
              {navLinks.map((navLink, index) => (
                <Link
                  href={navLink.path}
                  key={index}
                  onClick={() => setMenuExpand(false)}
                  className="px-5 border-b border-neutral-200 pb-2 text-sm"
                >
                  <div
                    className={`w-full ${
                      pathname === navLink.path ? "text-accentColor" : ""
                    }  duration-500 uppercase leading-none`}
                  >
                    <TextAnimation text={navLink.label} />
                  </div>
                </Link>
              ))}

              <div className="w-full px-4 mt-2">
                <ButtonOutline
                  label="Get A Quote"
                  forwardTo="/contact"
                  textStyle="text-sm text-accentColor"
                  paddingX="ps-4 pe-3"
                  paddingY="py-2"
                  fontGap="gap-2"
                  icon={
                    <FiArrowRight className="text-base text-accentColor group-hover:-rotate-45  transition duration-[350ms]" />
                  }
                />
              </div>
            </div>
            <div className="w-full flex flex-row justify-center gap-5 text-sm  py-5 px-4">
              <a
                href="https://www.facebook.com/devion.ark/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-neutral-600 text-neutral-600 hover:text-accentColor2 transition-all duration-300 ease-in-out"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/devion-ark/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-neutral-600 text-neutral-600 hover:text-accentColor2 transition-all duration-300 ease-in-out"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/devionark/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-neutral-600 text-neutral-600 hover:text-accentColor2 transition-all duration-300 ease-in-out"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/8801782734573"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-neutral-600 text-neutral-600 hover:text-accentColor2 transition-all duration-300 ease-in-out"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
