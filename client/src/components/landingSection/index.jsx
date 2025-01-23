"use client";
import CircleType from "circletype";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaStarOfLife } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoIosPause } from "react-icons/io";
import { LuMouse } from "react-icons/lu";
import heroImg from "../../../public/cover.jpg";

function LandingSection() {
  const videoRef = useRef(null);
  const videoHoverRef = useRef(null);
  useEffect(() => {
    const circleType = new CircleType(
      document.getElementById("hero-rotated-text")
    );
    const videoHoverCircleType = new CircleType(
      document.getElementById("video-hover")
    );
    const circleTypeMobile = new CircleType(
      document.getElementById("hero-rotated-text-mobile")
    );
    circleType.radius(80);
    videoHoverCircleType.radius(60);
    circleTypeMobile.radius(20);
  }, []);
  useEffect(() => {
    const videoContainer = videoRef.current;
    const videoHoverContainer = videoHoverRef.current;

    if (!videoContainer) return;

    const handleMouseEnter = () => {
      gsap.to(videoHoverContainer, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(videoHoverContainer, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
      });
    };

    const handleMouseMove = (event) => {
      const rect = videoContainer.getBoundingClientRect();
      const x = event.clientX - rect.left - 70; // Mouse X relative to the component
      const y = event.clientY - rect.top - 70; // Mouse Y relative to the component

      gsap.to(videoHoverContainer, {
        left: x,
        top: y,
        scale: 1,
        opacity: 1,
        duration: 0.5,
      });
    };

    videoContainer.addEventListener("mouseenter", handleMouseEnter);
    videoContainer.addEventListener("mouseleave", handleMouseLeave);
    videoContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      videoContainer.removeEventListener("mouseenter", handleMouseEnter);
      videoContainer.removeEventListener("mouseleave", handleMouseLeave);
      videoContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className=" w-full h-full lg:min-h-[90vh] flex flex-col">
      <div className="w-full h-full flex flex-row border-b border-gray-700">
        <div className="w-full lg:w-[75%] border-r border-gray-700">
          <div className="w-full flex flex-col">
            <div className="flex flex-row gap-5 items-center py-3 ps-5 pe-5 lg:py-5 lg:ps-20 lg:pe-5 border-b border-gray-700 ">
              <h3 className="text-[6vw] lg:text-[5vw] uppercase font-medium lg:text-nowrap overflow-hidden leading-none w-full text-center lg:text-start font-oswald">
                Transforming your ideas into
              </h3>
            </div>

            <div className="w-full flex flex-row justify-start lg:justify-start leading-none">
              <div className="p-5 lg:p-10 border-r border-gray-700 bg-accentColor">
                <motion.div
                  className="text-darkPrimary text-[12vw] lg:text-[10vw]"
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
              <div className="w-full">
                <h1
                  className={`w-full text-center uppercase font-extrabold text-[18vw] lg:text-[15vw] text-lightPrimary leading-[.7] font-oswald pt-5 pb-6 lg:pt-7 lg:pb-12 ps-3 lg:ps-5 pe-5 lg:pe-10 overflow-hidden`}
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
        <div className="w-full lg:w-[40%] h-full font-light p-5 flex flex-row items-start gap-2 lg:gap-4">
          <span className="text-lightPrimary text-[6vw] leading-none">
            <BiSolidQuoteLeft />
          </span>
          <p className="text-sm lg:text-base">
            Driven by innovation and client-focused solutions, we elevate brands
            with seamless digital experiences. From tailored software design to
            strategic digital marketing, our team brings expertise to every
            phase of your project.
          </p>
        </div>
        <div className="w-full lg:w-[60%] flex flex-row items-center justify-between border-b lg:border-b-0 lg:border-l border-gray-700">
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
      <div className="w-full">
        <div
          ref={videoRef}
          className="w-full aspect-video relative overflow-hidden"
        >
          <Image
            src={heroImg}
            alt="hero-cover-image"
            fill
            placeholder="blur"
            className="object-cover"
          />
          <div
            ref={videoHoverRef}
            className="absolute right-0 bottom-0 w-[10%] aspect-square z-[5] hidden xl:flex justify-center items-center text-darkPrimary text-xl lg:text-3xl cursor-pointer"
          >
            <div className="w-full h-full rounded-full bg-lightPrimary flex justify-center items-center relative ">
              <motion.div
                id="video-hover"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
                className="text-base text-darkPrimary"
              >
                lick . Play . Pause . Click. Play . C
              </motion.div>
              <div className="text-darkPrimary absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                <IoIosPause />
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
