"use client";
import Image from "next/image";
import { CgQuote } from "react-icons/cg";
import { IoPause } from "react-icons/io5";
import { LuMouse } from "react-icons/lu";
import { VscScreenFull } from "react-icons/vsc";

function LandingSection() {
  return (
    <div className="w-full">
      <div className="w-full h-full flex flex-col-reverse lg:flex-col pb-10 lg:pb-0 pt-5 gap-5 lg:gap-0">
        <div className="w-full px-5 lg:px-16">
          <div className="w-full lg:w-[40%] flex flex-row items-start">
            <span className="hidden lg:flex lg:text-6xl">
              <CgQuote />
            </span>
            <p className="pt-0 lg:pt-4 font-light leading-tight text-sm">
              Driven by innovation and client-focused solutions, we elevate
              brands with seamless digital experiences. From tailored software
              design to strategic digital marketing, our team brings expertise
              to every phase of your project.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end px-0 lg:px-10">
          <div className="w-full lg:w-[25%] flex flex-col px-3 pt-3 rounded-sm bg-darkSecondary">
            <div className="w-full aspect-video overflow-hidden relative rounded-sm">
              <Image
                src="/cover.jpg"
                alt="cover-image"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full flex justify-between text-sm font-light">
              <div className="w-[50%] flex flex-row gap-1 justify-center items-center py-3 border-r bg-transparent border-lightSecondary/40 cursor-pointer hover:bg-gradient-to-l hover:from-black hover:to-darkSecondary duration-1000 transform">
                <span className="text-lg">
                  <IoPause />
                </span>
                Pause
              </div>
              <div className="w-[50%] flex flex-row justify-center gap-2 items-center py-3 bg-transparent hover:bg-gradient-to-r cursor-pointer hover:from-black hover:to-darkSecondary duration-1000">
                <span className="text-lg">
                  <VscScreenFull />
                </span>
                Full Screen
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col px-5 lg:px-20">
          <div className="uppercase font-oswald font-bold text-3xl lg:text-5xl leading-none">
            <h1>Transforming your ideas into</h1>
          </div>
          <div className="uppercase font-oswald font-bold text-8xl lg:text-[170px] text-lightPrimary leading-none">
            <h1>
              <span className="text-accentColor">Digital</span> Reality
            </h1>
          </div>
        </div>
        <div className="w-full px-20 hidden lg:flex flex-row justify-between gap-5 py-10 font-light text-sm">
          <div className="w-1/3 flex justify-start items-center">
            &copy;2024-2025
          </div>
          <div className="w-1/3 flex justify-center items-center gap-2">
            <span>
              <LuMouse />
            </span>
            Scroll Down To Explore
          </div>
          <div className="w-1/3 flex justify-end items-center">
            All Rights Reserved By Devion Ark
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingSection;
