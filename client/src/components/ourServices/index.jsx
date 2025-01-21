"use client";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

function OurServices() {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
  const [expanded6, setExpanded6] = useState(false);

  const handleExpansion1 = () => {
    setExpanded1((prevExpanded) => !prevExpanded);
  };
  const handleExpansion2 = () => {
    setExpanded2((prevExpanded) => !prevExpanded);
  };
  const handleExpansion3 = () => {
    setExpanded3((prevExpanded) => !prevExpanded);
  };
  const handleExpansion4 = () => {
    setExpanded4((prevExpanded) => !prevExpanded);
  };
  const handleExpansion5 = () => {
    setExpanded5((prevExpanded) => !prevExpanded);
  };
  const handleExpansion6 = () => {
    setExpanded6((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="py-10 lg:py-20 flex flex-col bg-darkPrimary gap-5 lg:gap-10 relative overflow-hidden">
      <div className="w-full h-full flex flex-row justify-between absolute top-0 z-[1] overflow-hidden px-5 lg:px-20">
        <div className="w-[1px] h-full bg-darkSecondary"></div>
        <div className="w-[1px] h-full bg-darkSecondary"></div>
        <div className="w-[1px] h-full bg-darkSecondary"></div>
        <div className="w-[1px] h-full bg-darkSecondary"></div>
        <div className="w-[1px] h-full bg-darkSecondary"></div>
        <div className="w-[1px] h-full bg-darkSecondary"></div>
        {/* <div className="w-[1px] h-screen bg-lightSecondary bg-opacity-15"></div>
        <div className="w-[1px] h-screen bg-lightSecondary bg-opacity-15"></div>
        <div className="w-[1px] h-screen bg-lightSecondary bg-opacity-15"></div>
        <div className="w-[1px] h-screen bg-lightSecondary bg-opacity-15"></div> */}
      </div>
      <div className="flex flex-col gap-5 lg:gap-10 z-[2]">
        <div className="flex flex-row gap-2 items-center px-5 lg:px-20">
          <div className="uppercase font-semibold text-sm lg:text-lg overflow-hidden">
            <p id="who-we-are" className="inline-block">
              Our Services
            </p>
          </div>
          <div id="who-bar" className="w-[2px] h-5 lg:h-7 bg-accentColor"></div>
        </div>
        <h2 className="px-5 lg:px-20 text-[7vw] lg:text-[5.5vw] font-oswald uppercase text-lightPrimary leading-none font-medium">
          The Solutions that drive <br />
          <span className="text-accentColor font-bold">Your Success</span>
        </h2>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-start px-5 sm:px-7 lg:px-10 xl:px-20 gap-7 z-[2]">
        <div className="w-full sm:w-[60%] xl:w-[40%] text-sm lg:text-base font-light overflow-hidden">
          <span
            id="what-we-do-desc"
            className="block overflow-hidden  backdrop-blur-[1px] py-3 bg-darkPrimary"
          >
            We specialise in developing solutions that help your business
            prosper in the digital age. From intuitive software to attractive
            websites to strategic marketing and flawless testing, we match
            technology with business objectives. Our comprehensive approach
            guarantees that every project we do promotes development, increases
            visibility, and delivers long-term value.
          </span>
        </div>
        <div className="w-full sm:w-[40%] lg:w-[60%] flex flex-row gap-5 items-center justify-end">
          <div className="text-7xl lg:text-9xl xl:text-[200px] leading-none font-thin text-accentColor overflow-hidden">
            <span id="growth-rate" className="inline-block">
              1.5
              <span className="text-5xl lg:text-7xl xl:text-9xl font-medium">
                X
              </span>
            </span>
          </div>
          <div className="uppercase">Average Growth rate</div>
        </div>
      </div>

      <div className="px-5 lg:px-20 z-[2]">
        <div className="border-t border-gray-700 flex flex-col">
          <ServiceCard
            serviceIndex="01"
            serviceTitle="Software System Development"
            image="/services/software_development.jpg"
            forwardTo=""
          />
          <ServiceCard
            serviceIndex="02"
            serviceTitle="Modern Website Development"
            image="/services/software_development.jpg"
            forwardTo=""
          />
          <ServiceCard
            serviceIndex="03"
            serviceTitle="Social Media Marketing (SMM)"
            image="/services/software_development.jpg"
            forwardTo=""
          />
          <ServiceCard
            serviceIndex="04"
            serviceTitle="Search Engine Marketing (SEM)"
            image="/services/software_development.jpg"
            forwardTo=""
          />
          <ServiceCard
            serviceIndex="05"
            serviceTitle="Search Engine Optimization"
            image="/services/software_development.jpg"
            forwardTo=""
          />
          <ServiceCard
            serviceIndex="06"
            serviceTitle="Business Consultation"
            image="/services/software_development.jpg"
            forwardTo=""
          />
        </div>
      </div>
    </div>
  );
}

export default OurServices;
