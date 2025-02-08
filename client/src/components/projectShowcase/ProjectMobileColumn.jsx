import { IoBookOutline } from "react-icons/io5";
import ActionButton from "../buttons/ActionButton";

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
              <ActionButton
                forwardTo=""
                label="Learn More"
                labelColor="text-darkPrimary group-hover:text-lightPrimary"
                bgColor="bg-darkPrimary"
                labelSize="text-base"
                borderColor="border-darkPrimary"
                iconColor="text-lightPrimary"
                iconSize="text-xl"
                icon={<IoBookOutline />}
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
