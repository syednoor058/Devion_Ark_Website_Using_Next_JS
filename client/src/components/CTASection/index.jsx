import { BiSolidMessageAltError } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import CustomShapeButton from "../buttons/CustomShapeButton";

function CTASection() {
  return (
    <div className="w-full h-full bg-accentColor text-darkSecondary font-light text-base lg:text-lg px-4 lg:px-20 py-10 lg:py-20">
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="w-full lg:w-[70%]">
          <div className="flex flex-col gap-10 lg:gap-10">
            <div className="flex">
              <div className="text-sm uppercase text-darkSecondary font-light ps-3 pe-5 py-2 rounded-full border border-lightPrimary">
                <p className="flex flex-row gap-2 items-center">
                  <span>
                    <GoDotFill className="text-xs" />
                  </span>
                  Get in touch
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-4xl lg:text-6xl font-semibold text-darkPrimary font-oswald leading-[1.10]">
              <h2 className="text-bold">
                Let&apos;s build your{" "}
                <span className="text-lightPrimary italic">digital legacy</span>
                .
              </h2>
            </div>
            <p className="lg:pt-10">
              Whether you&apos;re a startup hungry for visibility or an
              enterprise ready to scale, Devion Ark crafts tailored strategies
              that deliver. With 3+ years of proven excellence, 20+ projects
              mastered, and a 87% client retention rate, we don&apos;t just meet
              expectations — we shatter them.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[30%]">
          <div className="flex flex-col-reverse lg:flex-col gap-10 lg:gap-20">
            <div className="w-full flex flex-row gap-4">
              <div className="pt-2 text-darkSecondary">
                <BiSolidMessageAltError className="text-lg" />
              </div>
              <div className="flex flex-col gap-3">
                <p>
                  Control your spendings! You choose the services you wish to
                  grow business for.
                </p>
                <p>Talk to us to learn more!</p>
              </div>
            </div>
            <div>
              <CustomShapeButton
                label="Book A Call"
                paddingX="ps-4 pe-8"
                paddingY="py-4"
                fontGap="gap-3"
                textStyle="text-lg font-light text-lightPrimary"
                icon={
                  <FaPhone className="text-base text-lightPrimary group-hover:text-darkPrimary group-hover:rotate-90 duration-[350ms]" />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTASection;
