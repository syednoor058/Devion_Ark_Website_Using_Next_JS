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
  return (
    <div className="bg-darkSecondary py-20 flex flex-col gap-5 leading-none w-full h-full px-5 lg:px-20 relative">
      <div className="w-[1px] h-full flex-1 absolute bg-lightSecondary top-0 bg-opacity-15"></div>
      <div className="w-[1px] h-full flex-1 absolute bg-lightSecondary top-0 left-[50%] bg-opacity-15"></div>
      <div className="w-[1px] h-full flex-1 absolute bg-lightSecondary top-0 right-20 bg-opacity-15"></div>
      <h2 className="w-[50%] text-lightPrimary font-bold text-[3vw] uppercase font-inter">
        <span className="text-accentColor">Brands</span> we&apos;ve partnered
        with{" "}
      </h2>
      <div className="grid grid-cols-6 mt-7">
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
