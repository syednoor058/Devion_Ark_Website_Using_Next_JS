"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiSupport } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";

import logo from "../../../public/dark_mode_logo.png";
import darkLogoMobile from "../../../public/dark_mode_logo_mobile.png";
import logoMobile from "../../../public/expand_menu_logo.png";

function Navbar() {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Blog", path: "/blog" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];
  const [menuExpand, setMenuExpand] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [topMargin, setTopMargin] = useState("top-0");
  const [navShadow, setNavShadow] = useState("drop-shadow-none");
  const { scrollY } = useScroll();

  // useEffect(() => {
  //   console.log(menuExpand);
  // }, [menuExpand]);

  useMotionValueEvent(scrollY, "change", (latestY) => {
    const prevY = scrollY.getPrevious();
    if (latestY > prevY && latestY > 25 && !menuExpand) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latestY > 25) {
      setBgColor("bg-black");
    } else {
      setBgColor("bg-transparent");
    }
    if (latestY > 25) {
      setTopMargin("top-0");
    } else {
      setTopMargin("top-0");
    }
    if (latestY > 25) {
      setNavShadow("drop-shadow-lg");
    } else {
      setNavShadow("drop-shadow-none");
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
      className={` sticky ${topMargin} ${navShadow} z-[1000]  ${bgColor}`}
    >
      <div className="w-full hidden lg:flex flex-row gap-5 justify-between items-center px-20 py-[5px]">
        <div className="relative">
          <Image
            src={logo}
            alt="devion_ark_logo"
            className="w-auto h-14 object-fill"
          />
        </div>
        {/* <div className="">
          <div className="flex flex-row items-center justify-end gap-7">
            {navLinks.map((navLink, index) => (
              <Link href={navLink.path} key={index}>
                {navLink.label}
              </Link>
            ))}
            <div className="ml-7">
              <CallToActionsButton
                forwardTo="/"
                label="Get A Quote"
                icon={<GoArrowUpRight />}
                btnColor="bg-accentColor"
              />
            </div>
          </div>
        </div> */}
        <div className="flex flex-row justify-end items-center text-lightSecondary">
          <div className="flex flex-row gap-2 items-center px-10">
            <div className="text-xl">
              <HiOutlineMenuAlt4 />
            </div>
            <div className="font-oswald font-semibold  uppercase text-lg">Menu</div>
          </div>
          <div className="ps-10 border-l border-lightSecondary text-xl">
            <BiSupport />
          </div>
        </div>
      </div>

      <div className="w-full lg:hidden flex flex-row gap-5 justify-between items-center px-5 py-[3px]">
        <div className="w-[15%] flex justify-start items-center border-r border-lightSecondary text-lg">
          <div
            className="text-lightPrimary cursor-pointer"
            onClick={() => setMenuExpand((prevMenuExpand) => !prevMenuExpand)}
          >
            <MdOutlineMenu />
          </div>
        </div>
        <div className="w-[70%] flex justify-center items-center">
          <div className="relative">
            <Image
              src={darkLogoMobile}
              alt="devion_ark_logo"
              className="w-auto h-12 object-fill"
            />
          </div>
        </div>
        <div className="w-[15%]  flex justify-end items-center border-l border-lightSecondary text-lg text-lightPrimary">
          <div>
            <BiSupport />
          </div>
        </div>
        <div
          className={`w-screen h-screen overflow-hidden bg-accentColor fixed top-0 left-0 transform ${
            menuExpand ? "translate-x-0" : "-translate-x-full"
          } duration-1000`}
        >
          <div className="w-full h-full flex flex-col">
            <div className="w-full lg:hidden flex flex-row justify-between items-center ps-5 pe-10 text-darkPrimary border-b border-lightPrimary">
              <div className="w-[15%] h-full flex justify-start items-center border-r border-lightPrimary text-lg py-5">
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    setMenuExpand((prevMenuExpand) => !prevMenuExpand)
                  }
                >
                  <IoMdClose />
                </div>
              </div>
              <div className="w-[70%] flex justify-center items-center py-[3px]"></div>
              <div className="w-[15%] h-full flex justify-end items-center border-l border-lightPrimary text-lg py-5">
                <div>
                  <BiSupport />
                </div>
              </div>
            </div>
            <div className="w-full ps-5 pe-10 py-3 relative border-b border-lightPrimary">
              <Image
                src={logoMobile}
                alt="devion_ark_logo_mobile"
                className="w-full h-auto object-fill"
              />
            </div>
            <div className="w-full flex flex-row  justify-between ps-5 pe-10 text-darkPrimary border-b border-lightPrimary ">
              <div className="w-[15%] border-r border-lightPrimary"></div>
              <div className="w-[70%] flex flex-col font-oswald">
                {navLinks.map((navLink, index) => (
                  <Link href={navLink.path} key={index}>
                    <div
                      className={`w-full px-3 py-3 ${
                        index === navLinks.length - 1
                          ? "border-none"
                          : "border-b"
                      } border-lightPrimary hover:bg-darkPrimary hover:text-lightPrimary duration-500 text-[9vw] font-bold uppercase text-center`}
                    >
                      {navLink.label}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="w-[15%] border-l border-lightPrimary"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
