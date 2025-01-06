"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import logo from "../../../public/dark_mode_logo.png";
import CallToActionsButton from "../buttons/CallToActionsButton";

function Navbar() {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Blog", path: "/blog" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];
  const [hidden, setHidden] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [topMargin, setTopMargin] = useState("top-0");
  const [navShadow, setNavShadow] = useState("drop-shadow-none");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestY) => {
    const prevY = scrollY.getPrevious();
    if (latestY > prevY && latestY > 60) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latestY > 60) {
      setBgColor("bg-black");
    } else {
      setBgColor("bg-transparent");
    }
    if (latestY > 60) {
      setTopMargin("top-2");
    } else {
      setTopMargin("top-0");
    }
    if (latestY > 60) {
      setNavShadow("drop-shadow-lg");
    } else {
      setNavShadow("drop-shadow-none");
    }
    console.log(latestY);
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
      className={`flex flex-row gap-5 justify-between items-center mx-10 px-10 sticky ${topMargin} ${navShadow} z-[1000] py-[5px] ${bgColor} rounded-3xl`}
    >
      <div className="">
        <Image
          src={logo}
          alt="devion_ark_logo"
          className="w-auto h-14 object-fill"
        />
      </div>
      <div className="">
        <div className="flex flex-row items-center justify-end gap-7">
          {navLinks.map((navLink, index) => (
            <Link href={navLink.path} key={index}>
              {navLink.label}
            </Link>
          ))}
          <div className="ml-7">
            <CallToActionsButton
              forwardTo="/"
              label="Get a quote"
              icon={<GoArrowUpRight />}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
