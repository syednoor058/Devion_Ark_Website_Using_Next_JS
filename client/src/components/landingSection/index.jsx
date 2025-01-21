"use client";
import CircleType from "circletype";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { ImPause2 } from "react-icons/im";
import { LuMouse } from "react-icons/lu";
import heroImg from "../../../public/cover.jpg";

function LandingSection() {
  useEffect(() => {
    const circleType = new CircleType(
      document.getElementById("hero-rotated-text")
    );
    const circleTypeMobile = new CircleType(
      document.getElementById("hero-rotated-text-mobile")
    );
    circleType.radius(80);
    circleTypeMobile.radius(20);
  }, []);
  return (
    <div className=" w-full h-full lg:min-h-[90vh] flex flex-col">
      <div className="w-full h-full flex flex-row border-b border-gray-700">
        <div className="w-full lg:w-[75%] border-r border-gray-700">
          <div className="w-full flex flex-col">
            <div className="flex flex-row gap-5 items-center py-3 ps-5 pe-5 lg:py-5 lg:ps-20 lg:pe-5 border-b border-gray-700 ">
              <h3 className="text-[5vw] lg:text-[4vw] uppercase font-medium lg:text-nowrap overflow-hidden leading-none w-full text-center lg:text-start ">
                Transforming your ideas into
              </h3>
            </div>

            <div className="w-full flex flex-row justify-center lg:justify-end leading-none">
              <div className="p-5 border-r border-gray-700">
                <motion.div
                  className="text-accentColor text-[12vw] lg:text-[7vw]"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  }}
                >
                  <FaStarOfLife />
                </motion.div>
              </div>
              <div className="">
                <h1
                  className={`uppercase font-extrabold text-[18vw] lg:text-[15vw] text-lightPrimary leading-[.7] font-oswald pt-5 pb-6 lg:pt-7 lg:pb-12 ps-3 lg:ps-5 pe-5 lg:pe-10 overflow-hidden`}
                >
                  <span className="inline-block">Digital</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-[25%] justify-center items-start p-5 bg-lightPrimary text-darkPrimary">
          <div className="w-full h-full relative flex justify-center items-center font-medium">
            <motion.div
              id="hero-rotated-text"
              className="text-2xl font-medium"
              animate={{ rotate: 360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            >
              elcome To The World Full Of Possibilities . W
            </motion.div>
            <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-3xl">
              <GoDotFill />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col-reverse lg:flex-row ">
        <div className="w-full lg:w-[40%] h-full ">
          <div className="h-full aspect-video relative">
            <Image
              src={heroImg}
              alt="hero-cover-image"
              fill
              placeholder="blur"
              className="object-cover"
            />
            <div className="absolute right-0 bottom-0 w-10 lg:w-16 aspect-square bg-lightPrimary z-[5] flex justify-center items-center text-darkPrimary text-xl lg:text-3xl cursor-pointer">
              <ImPause2 />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[60%] flex flex-row items-center justify-between">
          {" "}
          <h1 className="uppercase font-extrabold text-[18vw] lg:text-[16vw] text-accentColor leading-[.7] font-oswald pt-5 pb-6 lg:pb-10 ps-3 lg:ps-10 pe-5 overflow-hidden">
            <span className="inline-block">Reality</span>
          </h1>
          <div className="w-[30%] aspect-square flex lg:hidden justify-center items-start p-3 bg-lightPrimary text-darkPrimary">
            <div className="w-full h-full relative flex justify-center items-center font-medium">
              <motion.div
                id="hero-rotated-text-mobile"
                className="text-[9px] font-light leading-none"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
              >
                elcome To The World Full Of Possibilities . W
              </motion.div>
              <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                <GoDotFill />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full hidden lg:flex flex-row  justify-between font-light border-y border-gray-700">
        <div className="w-[33%] py-5 ps-10 pe-5">&copy; 2024 - 2025</div>
        <div className="w-[34%] py-5 px-10 flex flex-row gap-2 justify-center items-center border-x border-gray-700">
          <span>
            <LuMouse />
          </span>
          Scroll down to explore
        </div>
        <div className="w-[33%] py-5 ps-5 pe-10 text-end">
          All rights reserved by Devion Ark
        </div>
      </div>
    </div>
  );
}

export default LandingSection;
