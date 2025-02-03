"use client";
import { LuMouse } from "react-icons/lu";

function LandingSection() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col pb-10 pt-5 gap-5">
        <div className="w-full flex flex-col px-5 lg:px-20">
          <div className="uppercase font-oswald font-bold text-[6vw] lg:text-5xl leading-none">
            <h1>Transforming your ideas into</h1>
          </div>
          <div className="uppercase font-oswald font-bold text-[25vw] lg:text-[12.5vw] text-lightPrimary leading-none">
            <h1>
              <span className="text-accentColor">Digital</span> Reality
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-5 justify-between items-end px-0 lg:px-20">
          <div className="w-full lg:w-[50%] h-full flex flex-row items-end px-5 lg:px-0">
            <p className="pt-0 lg:pt-4 font-light leading-tight text-[5vw] lg:text-[2.5vw]">
              We Deliver Data-Backed SEO, Social Media Campaigns, and Business
              Software Designed to Scale Your Revenue.
            </p>
          </div>
          <div className="w-full lg:w-[35%] flex flex-col gap-3 rounded-sm">
            <div className="w-full aspect-video overflow-hidden relative rounded-sm">
              <video className="w-full" loop muted autoPlay>
                <source src="/videos/devion_ark_showreel_2024.mp4" />
              </video>
            </div>
            <div className="w-full flex flex-col items-end text-sm font-light px-5 lg:px-0">
              <div className="w-full text-start lg:text-end">
                Devion Ark Digital Solutions
              </div>
              <div className="w-full text-start lg:text-end">
                Showreel (2023-2024)
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-20 hidden lg:flex flex-row justify-between gap-5 font-light pt-10">
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
