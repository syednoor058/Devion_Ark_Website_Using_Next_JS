"use client";

import { useEffect, useRef } from "react";
import annaKitchen from "../../../public/partners/anna_khan_kitchen.png";
import elevate from "../../../public/partners/elevate.png";
import indigo from "../../../public/partners/indigo_company.png";
import interAidLogo from "../../../public/partners/interaid.png";
import kickOffLogo from "../../../public/partners/kick-off.png";
import moonStudio from "../../../public/partners/moon_studio.png";
import oxw from "../../../public/partners/okw.png";
import puppetbrushLogo from "../../../public/partners/puppetbrush.png";
import qahafLogo from "../../../public/partners/qahaf.png";
import sikderFoundationLogo from "../../../public/partners/sikder_foundation.png";
import sweetCakes from "../../../public/partners/sweet_cakes.png";
import travel from "../../../public/partners/travel.png";
import PartnersCard from "./PartnersCard";

function Partners() {
  const partnersLogoContainer = useRef(null);
  useEffect(() => {}, []);
  return (
    <div className="bg-darkSecondary py-10 lg:py-20 flex flex-col gap-5 leading-none w-screen h-full lg:px-20 relative">
      <div className="w-[1px] h-full hidden lg:flex flex-1 absolute bg-lightSecondary top-0 bg-opacity-15"></div>
      <div className="w-[1px] h-full hidden lg:flex flex-1 absolute bg-lightSecondary top-0 left-[50%] bg-opacity-15"></div>
      <div className="w-[1px] h-full hidden lg:flex flex-1 absolute bg-lightSecondary top-0 right-20 bg-opacity-15"></div>
      <h2 className="w-full lg:w-[50%] text-lightPrimary font-bold text-[7vw] lg:text-[3.5vw] uppercase font-oswald px-3 lg:px-0 leading-tight">
        <span className="text-accentColor">Brands</span> we&apos;ve partnered
        with{" "}
      </h2>
      <div
        ref={partnersLogoContainer}
        className="grid grid-cols-2 lg:grid-cols-6 mt-3 lg:mt-7 relative px-3 lg:px-0"
      >
        <div className="w-full h-full absolute top-0 flex flex-col justify-between">
          <div className="w-full h-[1px] bg-lightSecondary bg-opacity-25"></div>
          <div className="w-full h-[1px] bg-lightSecondary bg-opacity-25"></div>
          <div className="w-full h-[1px] bg-lightSecondary bg-opacity-25"></div>
        </div>
        <PartnersCard brandImg={interAidLogo} brandAlt="interaid_logo" />
        <PartnersCard
          brandImg={sikderFoundationLogo}
          brandAlt="sikder_foundation_logo"
        />
        <PartnersCard brandImg={kickOffLogo} brandAlt="kick_off_logo" />
        <PartnersCard brandImg={puppetbrushLogo} brandAlt="puppetbrush_logo" />
        <PartnersCard brandImg={qahafLogo} brandAlt="qahaf_logo" />
        <PartnersCard brandImg={sweetCakes} brandAlt="sweet_cakes_logo" />
        <PartnersCard brandImg={travel} brandAlt="travel_logo" />
        <PartnersCard
          brandImg={annaKitchen}
          brandAlt="ananna_khan_kitchen_logo"
        />
        <PartnersCard brandImg={indigo} brandAlt="indigo_company_logo" />
        <PartnersCard brandImg={moonStudio} brandAlt="moon_studio_logo" />
        <PartnersCard brandImg={oxw} brandAlt="olivia_walker_logo" />
        <PartnersCard brandImg={elevate} brandAlt="elevate_logo" />
      </div>
    </div>
  );
}

export default Partners;
