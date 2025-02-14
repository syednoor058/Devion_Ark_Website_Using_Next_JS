"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosChatboxes, IoMdMail, IoMdPin } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import logo from "../../../public/dark_mode_logo.png";
import darkLogoMobile from "../../../public/dark_mode_logo_mobile.png";
import navExpandLogo from "../../../public/nav_expand_logo.png";
import AnimatedLetter from "../animations/AnimatedLetter";
import CustomShapeButton from "../buttons/CustomShapeButton";
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
    { label: "Blogs", path: "/blogs" },
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
      setBgColor("backdrop-blur-sm");
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
      className={`w-full fixed left-0 top-0 z-[1000] ${bgColor}`}
    >
      <div className="w-full hidden lg:flex relative">
        <div
          className={`w-full h-full flex flex-row gap-5 justify-between items-center ${
            bgColor === "bg-transparent" ? "bg-transparent" : "backdrop-blur-lg"
          } px-20 z-[1002] py-1`}
        >
          <Link href="/" className={`w-full relative z-[1003]`}>
            <Image
              placeholder="blur"
              src={logo}
              alt="devion_ark_logo"
              className="w-auto h-14 object-fit"
            />
          </Link>
          <div
            className={`w-full flex flex-row justify-end items-center text-lightSecondary z-[1003]`}
          >
            <div
              className=" flex flex-row gap-2 items-center px-10 cursor-pointer group"
              onClick={() => setMenuExpand((prevMenu) => !prevMenu)}
            >
              <div>
                <MenuIcon expand={menuExpand} />
              </div>
              <div className="font-normal  uppercase text-lg">
                <AnimatedLetter text="Menu" hoverText="text-lightPrimary" />
              </div>
            </div>
            <div>
              <div className="w-full flex justify-end">
                <div className="w-full flex justify-end">
                  <CustomShapeButton
                    label="Get A Quote"
                    textStyle="text-lg font-normal text-darkPrimary"
                    hoverText="text-darkPrimary"
                    backgroundColor="bg-lightPrimary"
                    hoverBgColor="bg-accentColor"
                    paddingX="ps-4 pe-5"
                    paddingY="py-3"
                    fontGap="gap-2"
                    icon={
                      <IoIosChatboxes className="text-2xl font-darkPrimary" />
                    }
                  />
                </div>
              </div>
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
              <div className="w-[50%] h-full ps-20 flex flex-col">
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
                      } text-[4.5vw] font-bold uppercase font-oswald leading-none duration-500`}
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
              <div className="w-[50%] h-full pe-20 flex items-end text-lg">
                <div className="w-full h-full flex flex-col justify-end gap-5">
                  <div className="w-full h-full flex flex-row gap-20">
                    <div className="flex flex-col gap-2 text-nowrap">
                      <div className="font-bold uppercase text-lightPrimary">
                        Legals
                      </div>
                      <Link href="">
                        <AnimatedLetter
                          text="Privacy Policy"
                          hoverText="text-accentColor"
                        />
                      </Link>
                      <Link href="">
                        <AnimatedLetter
                          text="Terms of Use"
                          hoverText="text-accentColor"
                        />
                      </Link>
                      <Link href="">
                        <AnimatedLetter
                          text="Cookies Policy"
                          hoverText="text-accentColor"
                        />
                      </Link>
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
                        placeholder="blur"
                        src={navExpandLogo}
                        alt="devion-ark-logo"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}

      <div className="w-full flex lg:hidden relative">
        <div
          className={`w-full h-full flex flex-row gap-5 justify-between items-center py-4  z-[1002] ${
            bgColor === "bg-transparent" ? "bg-darkPrimary" : "bg-black"
          }`}
        >
          <div className="w-[50%] flex justify-center items-center px-5 z-[1003]">
            <div className="w-full relative">
              <Link href="/">
                <Image
                  placeholder="blur"
                  src={darkLogoMobile}
                  alt="devion_ark_logo"
                  className="w-full h-auto object-cover"
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
                    }  duration-500 text-[10vw] font-bold uppercase font-oswald leading-none`}
                  >
                    <AnimatedLetter text={navLink.label} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
