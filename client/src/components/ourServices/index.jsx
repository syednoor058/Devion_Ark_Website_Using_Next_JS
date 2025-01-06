import ServiceCard from "./ServiceCard";
import { serviceData } from "./serviceData";

function OurServices() {
  return (
    <div className="pt-20 flex flex-col bg-darkSecondary gap-10 relative">
      <div className="w-full flex flex-row justify-between absolute top-0 z-[1]">
        <div className="w-[1px] h-screen bg-lightSecondary bg-opacity-15"></div>
        <div className="w-[1px] h-screen bg-lightSecondary bg-opacity-15"></div>
        <div className="w-[1px] h-screen bg-lightSecondary bg-opacity-15"></div>
        <div className="w-[1px] h-screen bg-lightSecondary bg-opacity-15"></div>
        <div className="w-[1px] h-screen bg-lightSecondary bg-opacity-15"></div>
      </div>
      <div className="flex flex-col gap-5 z-[2]">
        <div className="flex flex-row gap-2 items-center px-20">
          <div className="uppercase font-semibold text-lg overflow-hidden">
            <p id="who-we-are" className="inline-block">
              Our Services
            </p>
          </div>
          <div id="who-bar" className="w-[2px] h-7 bg-accentColor"></div>
        </div>
        <h2 className="px-20 text-6xl font-inter uppercase text-lightPrimary leading-none font-medium">
          The Solutions that drive <br />
          <span className="text-accentColor font-bold">Your Success</span>
        </h2>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-start px-5 sm:px-7 lg:px-10 xl:px-20 gap-7 z-[2] backdrop-blur-[1px]">
        <div className="w-full sm:w-[60%] xl:w-[40%] text-sm lg:text-base font-light overflow-hidden">
          <span id="what-we-do-desc" className="block overflow-hidden">
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
      <div
        className="relative w-full min-h-screen flex flex-col z-[2]"
        // style={{ height: `calc(${serviceData.length * 120}px)` }}
      >
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default OurServices;
