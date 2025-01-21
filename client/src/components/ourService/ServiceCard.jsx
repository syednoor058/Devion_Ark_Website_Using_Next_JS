import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import CallToActionsButton from "../buttons/CallToActionsButton";

function ServiceCard({
  index,
  title,
  desc,
  features,
  image,
  bgcolor,
  titlecolor,
  textcolor,
  barcolor,
}) {
  return (
    <div
      className={`w-full lg:h-full px-5 py-10 lg:px-10 ${bgcolor} ${textcolor}`}
    >
      <div className="w-full h-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 lg:gap-16">
        <div className="w-full lg:w-[40%] lg:h-full flex flex-col gap-5 lg:gap-10 lg:justify-between">
          <div className="flex flex-col gap-7">
            <div className="flex">
              <div className="px-10 py-2 rounded-full bg-accentColor bg-opacity-10 border border-accentColor text-accentColor font-light text-sm lg:text-base">
                Service 0{index}
              </div>
            </div>
            <h3
              className={`font-oswald text-3xl lg:text-4xl font-semibold text-lightPrimary uppercase ${titlecolor}`}
            >
              {title}
            </h3>
          </div>
          <div className="hidden lg:flex w-0 lg:w-full overflow-hidden relative">
            <div className="w-full aspect-video relative">
              <Image
                src={image}
                alt="software_development_image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[60%] h-full flex flex-col justify-between gap-5 lg:gap-10">
          <div className="flex flex-col gap-10">
            <div className="font-light text-sm lg:text-base">{desc}</div>
            <div className="grid grid-cols-2 gap-5 lg:gap-10">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={`flex flex-row gap-3 border-t-[0.5px] ${barcolor} pt-2 font-light leading-tight text-xs lg:text-sm`}
                >
                  <span className="text-accentColor">0{i + 1}</span> {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <CallToActionsButton
              forwardTo=""
              label="Learn More"
              icon={<GoArrowUpRight />}
              btnColor="bg-lightPrimary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
