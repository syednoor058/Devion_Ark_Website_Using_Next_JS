import Image from "next/image";
import { BsStars } from "react-icons/bs";
import { IoMdPlay } from "react-icons/io";
import heroImg from "../../../public/hero_sector_image.jpg";

function hero() {
  return (
    <div className="flex flex-col gap-5 leading-none w-full min-h-screen px-5 lg:px-20 relative pt-10 pb-48">
      <div className="w-[70%] aspect-[16/9] overflow-hidden absolute bottom-0 right-0 z-[-1]">
        <div className="relative">
          <Image
            src={heroImg}
            alt="hero_cover_image"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="text-lightPrimary text-[11vw] absolute z-[3] right-5 bottom-5">
            <IoMdPlay />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row gap-5 justify-between">
        <div className="flex flex-row gap-5 items-center">
          <h3 className="text-[3vw] uppercase font-semibold text-nowrap">
            Transforming your ideas into
          </h3>
          <div className="w-20 h-[2px] bg-lightSecondary"></div>
        </div>
        <div className="text-[5vw]">
          <BsStars />
        </div>
      </div>
      <h1 className="uppercase font-extrabold text-[13vw] text-lightPrimary leading-[.7]">
        Digital
      </h1>
      <div className="flex flex-row gap-7 items-center">
        <div className="w-[20%]">
          <p className="font-light">
            Driven by innovation and client-focused solutions, we elevate brands
            with seamless digital experiences. From tailored software design to
            strategic digital marketing, our team brings expertise to every
            phase of your project.
          </p>
        </div>
        <h1 className="uppercase font-extrabold text-[13vw] text-accentColor leading-none">
          Reality
        </h1>
      </div>
      <div className="flex flex-col mt-10 text-sm font-light">
        <div>&copy; 2024 - 2025</div>
        <div>All rights reserved by Devion Ark</div>
      </div>
    </div>
  );
}

export default hero;
