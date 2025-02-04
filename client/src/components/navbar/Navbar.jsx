"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiFillInstagram, AiOutlineTikTok } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { IoMdMail, IoMdPin } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import logo from "../../../public/dark_mode_logo.png";
import darkLogoMobile from "../../../public/dark_mode_logo_mobile.png";
import CallToActionsButton from "../buttons/CallToActionsButton";
import MenuIcon from "../menuIcon/MenuIcon";

function AddressInfo({ icon, title, value }) {
  return (
    <div className="w-full flex flex-row gap-5 font-light leading-none">
      <div className="w-[25%] flex flex-row gap-2">
        <span>{icon}</span>
        {title}:
      </div>
      <div className="w-[75%] leading-tight">{value}</div>
    </div>
  );
}

function Navbar() {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Blog", path: "/blog" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];
  const pathname = usePathname(); // Get the current path
  const [menuExpand, setMenuExpand] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestY) => {
    const prevY = scrollY.getPrevious();
    // console.log(latestY, prevY);
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
      className={`sticky top-0 z-[1000] ${bgColor}`}
    >
      <div className="w-full hidden lg:flex relative">
        <div
          className={`w-full h-full flex flex-row gap-5 justify-between items-center ${
            bgColor === "bg-transparent" ? "bg-darkPrimary" : "bg-black"
          } px-20 z-[1002] py-[5px]`}
        >
          <div className={`relative z-[1003]`}>
            <Image
              src={logo}
              alt="devion_ark_logo"
              className="w-auto h-14 object-fill"
            />
          </div>
          <div
            className={`flex flex-row justify-end items-center text-lightSecondary z-[1003]`}
          >
            <div
              className="flex flex-row gap-2 items-center px-10 cursor-pointer"
              onClick={() => setMenuExpand((prevMenu) => !prevMenu)}
            >
              <div>
                <MenuIcon expand={menuExpand} />
              </div>
              <div className="font-oswald font-semibold  uppercase text-lg">
                Menu
              </div>
            </div>
            <div className="ps-10 border-l border-lightSecondary">
              <CallToActionsButton
                forwardTo=""
                label="Get A Quote"
                icon={<HiMiniArrowUpRight />}
                btnColor="bg-accentColor"
              />
            </div>
          </div>
        </div>

        <div
          className={`w-full h-screen overflow-hidden ${
            bgColor === "bg-transparent" ? "bg-darkPrimary" : "bg-black"
          } fixed top-0 left-0 transform ${
            menuExpand ? "translate-y-0" : "-translate-y-full"
          } duration-1000 ease-in-out`}
        >
          <div className="w-full h-full flex flex-col gap-10 pt-14">
            <div className="w-full h-[80%] flex flex-row gap-20 mt-10">
              <div className="w-[50%] h-full ps-20 flex flex-col gap-2">
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
                      } hover:tracking-widest text-[4.5vw] font-bold uppercase font-oswald leading-none duration-500`}
                    >
                      {navLink.label}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="w-[50%] h-full pe-20 flex items-end text-sm">
                <div className="w-full h-full flex flex-col justify-end gap-5">
                  <div className="w-full h-full flex flex-row gap-20">
                    <div className="flex flex-col gap-2 text-nowrap">
                      <div className="font-bold uppercase text-lightPrimary">
                        Resources
                      </div>
                      <div>Privacy Policy</div>
                      <div>Terms Of Use</div>
                      <div>Cookies Policy</div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <AddressInfo
                        icon={<IoMdMail />}
                        title="Email"
                        value="info@devionark.com"
                      />
                      <AddressInfo
                        icon={<MdPhone />}
                        title="Phone"
                        value="+8801782734573"
                      />
                      <AddressInfo
                        icon={<IoMdPin />}
                        title="Address"
                        value="Holding No. 08, Tootpare Central Rd, Khulna Sadar, Khulna-9100, Bangladesh"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="relative w-full aspect-[4.3478/1]">
                      <Image
                        src="/nav_expand_logo.png"
                        alt="devion-ark-logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full h-[20%] flex flex-col justify-end gap-2">
              <div className="w-full h-[1px] bg-gray-700 "></div>
              <div className="w-full flex flex-row gap-10 items-center py-5 px-20 justify-between">
                <div className="font-semibold text-lightPrimary">Links:</div>
                <div className="flex flex-row items-center gap-2">
                  <span>
                    <FaFacebookF />
                  </span>
                  Facebook
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span>
                    <AiFillInstagram />
                  </span>
                  Instagram
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span>
                    <FaLinkedinIn />
                  </span>
                  LinkedIn
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span>
                    <FaYoutube />
                  </span>
                  YouTube
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span>
                    <FaXTwitter />
                  </span>
                  Twitter (X)
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span>
                    <AiOutlineTikTok />
                  </span>
                  Tiktok
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex lg:hidden relative">
        <div
          className={`w-full h-full flex flex-row gap-5 justify-between items-center py-4  z-[1002] ${
            bgColor === "bg-transparent" ? "bg-darkPrimary" : "bg-black"
          }`}
        >
          <div className="w-[15%] flex justify-center items-center border-r border-lightSecondary text-2xl z-[1003]">
            <div
              className="text-lightPrimary cursor-pointer"
              onClick={() => setMenuExpand((prevMenuExpand) => !prevMenuExpand)}
            >
              <MenuIcon expand={menuExpand} />
            </div>
          </div>
          <div className="w-[50%] flex justify-center items-center px-5 z-[1003]">
            <div className="w-full relative">
              <Image
                src={darkLogoMobile}
                alt="devion_ark_logo"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="w-[15%]  flex justify-center items-center border-l border-lightSecondary text-2xl text-lightPrimary z-[1003]">
            <div>
              <BiSupport />
            </div>
          </div>
        </div>
        <div
          className={`w-screen h-screen overflow-x-hidden overflow-y-auto ${
            bgColor === "bg-transparent" ? "bg-darkPrimary" : "bg-black"
          } fixed top-0 left-0 transform ${
            menuExpand ? "translate-y-0" : "-translate-y-full"
          } duration-1000 ease-in-out z-[999]`}
        >
          <div className="w-full h-full pt-20 flex flex-col gap-10 justify-between z-[1001]">
            <div className="w-full flex flex-col gap-2 px-5">
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
                    }  duration-500 text-[14vw] font-bold uppercase font-oswald leading-none`}
                  >
                    {navLink.label}
                  </div>
                </Link>
              ))}
            </div>
            <div className="w-full ps-5 pe-10">
              <div className="w-full h-[1px] bg-gray-800"></div>
              <div className=" w-full flex flex-row gap-2 justify-between py-5 text-lg">
                <FaFacebookF />
                <FaLinkedinIn />
                <FaYoutube />
                <FaXTwitter />
                <AiFillInstagram />
                <AiOutlineTikTok />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
