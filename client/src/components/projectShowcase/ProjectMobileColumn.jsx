import { FiArrowDownLeft } from "react-icons/fi";
import CustomShapeButton from "../buttons/CustomShapeButton";

function ProjectMobileColumn({ caption, video, title, forward, projectNum }) {
  return (
    <div className="w-full h-screen relative text-darkPrimary border-b border-black">
      <div className="w-full h-full absolute top-0 left-0 z-[1]">
        <div className="w-full h-full overflow-hidden relative z-[1]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video} />
          </video>
        </div>
      </div>
      <div className="p-5 w-full h-full flex flex-col justify-between gap-5 ">
        <div className="w-full z-[5] text-base">{caption}</div>
        <div className="w-full text-center flex justify-center items-center z-[5] text-3xl lg:text-5xl font-oswald leading-tight font-bold">
          {title}
        </div>
        <div className="w-full flex justify-center z-[5]">
          <div className="w-full flex justify-center">
            <div className="w-full flex justify-center">
              <CustomShapeButton
                forwardTo={forward}
                label="Learn More"
                textStyle="text-lg font-normal text-lightPrimary"
                hoverText="text-darkPrimary"
                paddingX="ps-4 pe-6"
                paddingY="py-4"
                fontGap="gap-2"
                backgroundColor="bg-darkPrimary"
                hoverBgColor="bg-accentColor"
                icon={
                  <FiArrowDownLeft className="text-xl text-lightPrimary group-hover:text-darkPrimary rotate-45 group-hover:rotate-90 transition duration-[350ms]" />
                }
              />
            </div>
          </div>
        </div>
        <div className="w-full text-center flex justify-center items-end z-[5] text-[50vw] leading-none font-poppins">
          {projectNum}
        </div>
      </div>
    </div>
  );
}

export default ProjectMobileColumn;
