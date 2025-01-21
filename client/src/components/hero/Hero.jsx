"use client";
import CircleType from "circletype";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import { LiaCompressArrowsAltSolid } from "react-icons/lia";
import { LuMouse } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

function hero() {
  useEffect(() => {
    const circleType = new CircleType(
      document.getElementById("hero-rotated-text")
    );
    circleType.radius(80);
  }, []);

  return (
    <div
      id="hero-div"
      className="flex flex-col gap-7 leading-none w-full h-[90vh] pt-10 overflow-hidden relative"
    >
      <div className="w-full absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[2] flex justify-center items-center">
        <div
          id="hero-img"
          className="w-[20%] aspect-video relative rounded overflow-hidden"
        >
          <Image
            src="/cover.jpg"
            alt="hero cover image"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-[20%] aspect-square absolute right-20 top-10">
        <div className="w-full h-full relative">
          <div
            id="hero-rotated-text"
            className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
          >
            {" "}
            Welcome To A World Of Possibilities . Where Creativity Meets
            Curiosity .{" "}
          </div>
          <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-8xl">
            <LiaCompressArrowsAltSolid />
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-20 flex flex-row gap-5 items-center">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-5 items-center">
            <h3 className="text-5xl uppercase font-medium text-nowrap">
              Transforming your ideas into
            </h3>
            <div className="w-16 h-[2px] bg-lightSecondary"></div>
          </div>
          <div className="flex flex-row gap-14">
            <div className="text-accentColor text-[5vw]">
              <FaStarOfLife />
            </div>
            <h1
              className={`uppercase font-extrabold text-[200px] text-lightPrimary leading-[.7] font-oswald z-[1]`}
            >
              Digital
            </h1>
          </div>
        </div>
      </div>

      <div className="px-5 lg:px-20 flex flex-row gap-7 justify-between"></div>
      <div className="px-5 lg:px-20 flex flex-col-reverse lg:flex-row gap-7 items-center">
        <div className="w-full lg:w-[30%]">
          <p className="font-light leading-tight">
            Driven by innovation and client-focused solutions, we elevate brands
            with seamless digital experiences. From tailored software design to
            strategic digital marketing, our team brings expertise to every
            phase of your project.
          </p>
        </div>
        <h1 className="w-[70%] text-end uppercase font-extrabold text-[200px] text-accentColor leading-none z-[3] font-oswald">
          Reality
        </h1>
      </div>

      <div className="px-5 lg:px-20 flex flex-row gap-3 justify-between font-light ">
        <div>&copy; 2024 - 2025</div>
        <div className="flex flex-row gap-2 items-center">
          <span>
            <LuMouse />
          </span>
          Scroll down to explore
        </div>
        <div>All rights reserved by Devion Ark</div>
      </div>
    </div>
  );
}

export default hero;
