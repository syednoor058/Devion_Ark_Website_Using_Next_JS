import ActionButton from "@/components/buttons/ActionButton";
import { LuArrowUpRight } from "react-icons/lu";
function ServiceLandingSection() {
  return (
    <div className="w-full h-full relative">
      <div className="w-full flex flex-col gap-5 px-5 lg:px-20 pb-10 lg:pb-20 pt-5 lg:pt-10">
        <div className="w-full flex flex-col font-oswald font-bold uppercase text-center lg:text-end ">
          <div className="w-full text-lightSecondary leading-tight lg:leading-none text-[5.5vw] lg:text-[5vw] ">
            <h1 className="">Empowering Your Business with</h1>
          </div>
          <div className="w-full leading-none text-lightPrimary text-[14vw] lg:text-[8vw]">
            <h1>
              Cutting-Edge{" "}
              <span className="text-accentColor text-[18vw] lg:text-[8vw]">
                Solutions
              </span>
            </h1>
          </div>
        </div>
        <div className="w-full">
          <p className="w-full lg:w-[50%] text-[5vw] lg:text-[2vw] font-light text-lightSecondary leading-tight lg:pt-5">
            We craft tailored digital experiences-driving measurable growth,
            ensuring your business stands out in today&apos;s competitive online
            landscape."
          </p>
        </div>
        <div className="w-full flex justify-end">
          <div className="w-full lg:w-[50%] flex justify-start lg:justify-end">
            <ActionButton
              forwardTo=""
              label="Get Started"
              labelColor="text-lightPrimary group-hover:text-darkPrimary"
              bgColor="bg-lightPrimary"
              labelSize="text-2xl"
              borderColor="border-lightPrimary"
              iconColor="text-darkPrimary"
              iconSize="text-4xl"
              icon={<LuArrowUpRight />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceLandingSection;
