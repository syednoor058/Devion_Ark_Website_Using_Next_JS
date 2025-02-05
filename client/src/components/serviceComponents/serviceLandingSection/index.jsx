import ActionButton from "@/components/buttons/ActionButton";

function ServiceLandingSection() {
  return (
    <div className="w-screen h-full relative">
      <div className="w-full flex flex-col gap-5 px-5 lg:px-20 pb-10 lg:pb-20 pt-5 lg:pt-10">
        <div className="w-full flex flex-col font-oswald font-bold uppercase text-center lg:text-end">
          <div className=" text-lightSecondary leading-tight lg:leading-none text-[5.5vw] lg:text-[5vw]">
            <h1>Empowering Your Business with</h1>
          </div>
          <div className="leading-tight lg:leading-none text-lightPrimary text-[8vw]">
            <h1>
              Cutting-Edge <span className="text-accentColor">Solutions</span>
            </h1>
          </div>
        </div>
        <div className="w-full">
          <p className="w-full lg:w-[50%] text-[4vw] lg:text-[2vw] font-light text-lightSecondary leading-tight lg:pt-5">
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
              labelColor="text-lightPrimary"
              labelHoverColor="text-darkPrimary"
              bgColor="bg-lightPrimary"
              labelSize="text-2xl"
              borderColor="border-lightPrimary"
              iconColor="text-darkPrimary"
              iconSize="text-4xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceLandingSection;
