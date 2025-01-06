"use client";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa6";
import { LuMouse } from "react-icons/lu";

function hero() {
  return (
    <div className="flex flex-col gap-7 leading-none w-full pt-16 pb-10">
      <div className="w-full px-5 lg:px-20 flex flex-row gap-5 justify-between">
        <div className="flex flex-row gap-5 items-center">
          <h3 className="text-[3vw] uppercase font-semibold text-nowrap">
            Transforming your ideas into
          </h3>
          <div className="w-20 h-[2px] bg-lightSecondary"></div>
        </div>
      </div>
      <div className="px-5 lg:px-20 flex flex-row gap-7">
        <div className="text-accentColor text-[5vw]">
          <FaStarOfLife />
        </div>
        <h1
          className={`uppercase font-extrabold text-[13vw] text-lightPrimary leading-[.7] font-inter`}
        >
          Digital
        </h1>

        <Image
          src="/cover.jpg"
          width={250}
          height={13}
          className="ml-5 object-cover rounded-full overflow-hidden"
        />
      </div>
      <div className="px-5 lg:px-20 flex flex-col-reverse lg:flex-row gap-7 items-center">
        <div className="w-full lg:w-[25%]">
          <p className="font-light text-sm">
            Driven by innovation and client-focused solutions, we elevate brands
            with seamless digital experiences. From tailored software design to
            strategic digital marketing, our team brings expertise to every
            phase of your project.
          </p>
        </div>
        <h1 className="uppercase font-extrabold text-[13vw] text-accentColor leading-none font-inter">
          Reality
        </h1>
      </div>

      <div className="px-5 lg:px-20 flex flex-row gap-3 justify-between font-light pt-5">
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
