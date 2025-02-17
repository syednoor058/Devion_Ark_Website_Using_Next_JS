"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiArrowDownLeft } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { MdOutlineArrowForward } from "react-icons/md";
import blogCover from "../../../public/blogs_cover/seo-vs-aeo-2025-blog-cover.jpg";
import {
  default as darkLogoMobile,
  default as logo,
} from "../../../public/footer_logo.png";
import AnimatedLetter from "../animations/AnimatedLetter";
import CustomShapeButton from "../buttons/CustomShapeButton";
import MenuIcon from "../menuIcon/MenuIcon";

function MoreBlogCard({ cover, title, forwardTo }) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <div className="w-full overflow-hidden relative rounded-sm">
          <Image
            placeholder="blur"
            src={cover}
            alt={title}
            className="w-full object-cover"
          />
        </div>
        <div className="w-full h-[1px] bg-gray-500"></div>
      </div>
      <Link href={forwardTo} className="group">
        <div className="w-full flex flex-row gap-5 justify-between">
          <div className="text-2xl text-lightPrimary group-hover:underline underline-offset-4 duration-[350ms]">
            {title}
          </div>
          <div className="text-2xl lg:text-4xl">
            <MdOutlineArrowForward className="group-hover:-rotate-45 duration-500 text-accentColor font-light" />
          </div>
        </div>
      </Link>
    </div>
  );
}

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
    { label: "Twitter", url: "/" },
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
      className={`w-full sticky left-0 top-0 z-[1000] bg-darkPrimary`}
    >
      <div className="w-full hidden lg:flex relative">
        <div
          className={`w-full h-full flex flex-row gap-5 justify-between items-center px-20 z-[1002] py-3 bg-darkPrimary`}
        >
          <div className="w-full flex flex-row justify-start items-center text-lightSecondary z-[1003] gap-10">
            <Link href="/" className={`w-full relative z-[1003]`}>
              <Image
                placeholder="blur"
                src={logo}
                alt="devion_ark_logo"
                className="w-auto h-5 object-fit"
              />
            </Link>
            <div className="flex flex-row gap-3 items-center text-lightPrimary font-normal text-sm">
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
            className={`w-full flex flex-row justify-end items-center text-lightSecondary z-[1003]`}
          >
            <div
              className=" flex flex-row gap-1 items-center px-10 cursor-pointer group"
              onClick={() => setMenuExpand((prevMenu) => !prevMenu)}
            >
              <div>
                <MenuIcon expand={menuExpand} />
              </div>
              <div className="font-normal text-base">
                <AnimatedLetter text="Menu" hoverText="text-lightPrimary" />
              </div>
            </div>
            <div>
              <div className="w-full flex justify-end">
                <div className="w-full flex justify-end">
                  <CustomShapeButton
                    label="Let's Talk"
                    bend="10px"
                    textStyle="text-sm font-normal text-darkPrimary"
                    hoverText="text-darkPrimary"
                    backgroundColor="bg-lightPrimary"
                    hoverBgColor="bg-accentColor"
                    paddingX="ps-2 pe-4"
                    paddingY="py-2"
                    fontGap="gap-1"
                    icon={
                      <FiArrowDownLeft className="text-base text-darkPrimary rotate-45 group-hover:rotate-90 transition duration-[350ms]" />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`w-full h-screen overflow-hidden bg-darkPrimary fixed top-0 left-0 transform ${
            menuExpand ? "translate-y-0" : "-translate-y-full"
          } duration-1000 ease-in-out`}
        >
          <div className="w-full h-full flex flex-col justify-between gap-10 pt-14 text-lightSecondary">
            <div className="w-full h-full flex flex-row gap-10 justify-between px-20 mt-10">
              <div className="w-[45%] flex items-end">
                <div className="w-full flex flex-col gap-5">
                  <div className="flex overflow-hidden">
                    <div className="text-sm uppercase text-lightPrimary font-light ps-3 pe-5 py-2 rounded-full border border-accentColor">
                      <p className="flex flex-row gap-2 items-center">
                        <span>
                          <GoDotFill className="text-xs" />
                        </span>
                        Latest News
                      </p>
                    </div>
                  </div>
                  <div className="w-full">
                    <MoreBlogCard
                      title="How much does it cost to design a website"
                      forwardTo=""
                      cover={blogCover}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[35%] h-full flex items-end ps-10">
                <div className="flex flex-col gap-1">
                  {navLinks.map((navLink, index) => (
                    <Link
                      href={navLink.path}
                      key={index}
                      onClick={() => setMenuExpand(false)}
                    >
                      <div
                        className={`w-full ${
                          pathname === navLink.path
                            ? "text-accentColor"
                            : "text-lightSecondary"
                        } text-5xl font-medium font-oswald leading-none duration-[350ms] whitespace-nowrap uppercase`}
                      >
                        <AnimatedLetter
                          text={navLink.label}
                          hoverText={`${
                            pathname === navLink.path
                              ? "text-accentColor"
                              : "text-lightPrimary"
                          }`}
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="w-[20%]">
                <div className="flex flex-col items-end gap-1">
                  {socialLinks.map((social, index) => (
                    <a href={social.url} key={index}>
                      <div
                        className={`w-full text-lightSecondary text-base font-medium leading-none duration-[350ms] whitespace-nowrap uppercase`}
                      >
                        <AnimatedLetter
                          text={social.label}
                          hoverText="text-lightPrimary"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full px-20 py-10">
              <div className="flex flex-row gap-20">
                <div className="flex flex-col gap-3 leading-none">
                  <p className="text-lightPrimary whitespace-nowrap">
                    Devion Ark Digital Solutions
                  </p>
                  <p>&copy; 2022-2025</p>
                </div>
                <div className="flex flex-col gap-3 leading-none">
                  <p>info@devionark.com</p>
                  <p>+880 1782 734573</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}

      <div className="w-full flex lg:hidden relative">
        <div
          className={`w-full h-full flex flex-row gap-5 justify-between items-center py-4  z-[1002] bg-darkPrimary`}
        >
          <div className="flex justify-center items-center px-5 z-[1003]">
            <div className="w-full relative">
              <Link href="/">
                <Image
                  placeholder="blur"
                  src={darkLogoMobile}
                  alt="devion_ark_logo"
                  className="w-auto h-4 object-cover"
                />
              </Link>
            </div>
          </div>
          <div className="w-[15%] flex justify-center items-center text-2xl z-[1003]">
            <div
              className="text-lightPrimary cursor-pointer"
              onClick={() => setMenuExpand((prevMenuExpand) => !prevMenuExpand)}
            >
              <MenuIcon expand={menuExpand} />
            </div>
          </div>
        </div>
        <div
          className={`w-full h-screen overflow-x-hidden overflow-y-auto bg-darkPrimary fixed top-0 left-0 transform ${
            menuExpand ? "translate-y-0" : "-translate-y-full"
          } duration-1000 ease-in-out z-[999]`}
        >
          <div className="w-full h-full pt-20 flex flex-col gap-10 justify-between z-[1001]">
            <div className="w-full h-full flex flex-col justify-end gap-2 px-5">
              {navLinks.map((navLink, index) => (
                <Link
                  href={navLink.path}
                  key={index}
                  onClick={() => setMenuExpand(false)}
                >
                  <div
                    className={`w-full ${
                      pathname === navLink.path
                        ? "text-accentColor"
                        : "text-lightSecondary hover:text-lightPrimary"
                    }  duration-500 text-3xl font-bold uppercase font-oswald leading-none`}
                  >
                    <AnimatedLetter text={navLink.label} />
                  </div>
                </Link>
              ))}
            </div>
            <div className="w-full flex flex-row gap-5 justify-between text-sm font-light py-5 px-4">
              <div>
                <p>&copy; 202-2025</p>
              </div>
              <div className="text-lightPrimary uppercase font-normal">
                <p>
                  Devion <span className="text-accentColor">Ark</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
