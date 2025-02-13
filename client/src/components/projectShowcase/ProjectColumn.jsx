import gsap from "gsap";
import { useEffect, useRef } from "react";
import { IoBookOutline } from "react-icons/io5";
import ActionButton from "../buttons/ActionButton";
function ProjectColumn({
  caption,
  title,
  forward,
  video,
  projectNum,
  activeCard,
  setActiveCard,
}) {
  const projectCard = useRef(null);
  const videoRef = useRef(null);

  const projectCardHover = useRef(null);
  useEffect(() => {
    const projectContainer = projectCard.current;
    const projectHoverComponent = projectCardHover.current;
    const videoComponent = videoRef.current;

    if (activeCard === projectNum) {
      videoComponent.play();
    } else {
      videoComponent.pause();
      videoComponent.currentTime = 0;
    }

    if (!projectContainer || activeCard !== projectNum) return;

    const handleMouseEnter = () => {
      gsap.to(projectHoverComponent, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(projectHoverComponent, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
      });
    };

    const handleMouseMove = (event) => {
      const rect = projectContainer.getBoundingClientRect();
      const x = event.clientX - rect.left - 70; // Mouse X relative to the component
      const y = event.clientY - rect.top - 70; // Mouse Y relative to the component

      gsap.to(projectHoverComponent, {
        left: x,
        top: y,
        scale: 1,
        opacity: 1,
        duration: 0.5,
      });
    };

    projectContainer.addEventListener("mouseenter", handleMouseEnter);
    projectContainer.addEventListener("mouseleave", handleMouseLeave);
    projectContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      projectContainer.removeEventListener("mouseenter", handleMouseEnter);
      projectContainer.removeEventListener("mouseleave", handleMouseLeave);
      projectContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, [activeCard, projectNum]);
  return (
    <div
      ref={projectCard}
      onClick={() => setActiveCard(projectNum)}
      className={`relative border-r border-darkSecondary px-5 pt-5 flex flex-col gap-5 justify-between items-center cursor-pointer overflow-hidden ${
        activeCard === projectNum
          ? "w-[150rem] transform origin-left"
          : "w-[60rem]"
      }`}
      style={{
        transition: "width 0.64s cubic-bezier(0.255, 0.655, 0.02, 0.995)",
      }}
    >
      <div
        className={`absolute left-0 top-0 w-full h-screen z-[1] ${
          activeCard === projectNum ? "opacity-100" : "opacity-50"
        }`}
        style={{
          transition: "opacity 1.2s cubic-bezier(0.255, 0.655, 0.02, 0.995)",
        }}
      >
        <div className={`w-full h-full overflow-hidden relative`}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video} />
          </video>
        </div>
      </div>

      <div
        className={`w-full ${
          activeCard === projectNum ? "text-base" : "text-sm"
        } text-darkPrimary z-[2]`}
      >
        {caption}
      </div>
      <div className="w-full z-[2] flex flex-col gap-7 justify-center items-center">
        <h2
          className={`font-oswald font-bold ${
            activeCard === projectNum ? "text-5xl" : "text-2xl"
          }  text-darkPrimary text-center duration-500`}
        >
          {title}
        </h2>
      </div>
      <div
        className={`w-full h-full z-[2] ${
          activeCard === projectNum ? "flex" : "hidden"
        } justify-center items-center`}
      >
        <div className="w-full flex justify-center">
          <div className="w-full flex justify-center">
            <ActionButton
              forwardTo=""
              label="Learn More"
              labelColor="text-darkPrimary font-semibold"
              labelHoverColor="group-hover:text-lightPrimary"
              bgColor="bg-darkPrimary"
              labelSize="text-lg"
              borderColor="border-darkPrimary"
              iconColor="text-lightPrimary"
              iconSize="text-2xl"
              icon={<IoBookOutline />}
            />
          </div>
        </div>
      </div>

      <div className="w-full text-darkPrimary text-[250px] font-light z-[2] leading-none text-center font-poppins">
        {projectNum}
      </div>

      <div
        ref={projectCardHover}
        className="w-[25%] aspect-square bg-accentColor bg-opacity-60 rounded-full absolute top-0 left-0 z-[1] opacity-0 scale-0 p-2"
      ></div>
    </div>
  );
}

export default ProjectColumn;
