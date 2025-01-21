import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

function ProjectColumn({
  caption,
  title,
  forward,
  image,
  projectNum,
  activeCard,
  setActiveCard,
}) {
  const projectCard = useRef(null);
  const projectCardHover = useRef(null);
  useEffect(() => {
    const projectContainer = projectCard.current;
    const projectHoverComponent = projectCardHover.current;

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

    // if (activeCard === projectNum) {
    //   handleMouseEnter();
    // } else {
    //   handleMouseLeave();
    // }

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
      className={`relative border-r border-darkSecondary px-5 pt-5 flex flex-col justify-between items-center cursor-pointer overflow-hidden ${
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
          <Image
            src={image}
            alt="ecommerce web application"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full text-sm h-[15%] text-darkPrimary z-[2]">
        {caption}
      </div>
      <div className="w-full h-[30%] z-[2] flex flex-col gap-7 justify-center items-center">
        <h2 className="font-oswald font-bold text-3xl text-darkPrimary text-center">
          {title}
        </h2>
      </div>
      <div
        className={`w-full h-[15%] z-[2] ${
          activeCard === projectNum ? "flex" : "hidden"
        } justify-center items-center`}
      >
        <Link href={forward} className="">
          <div className="inline-flex overflow-hidden relative border-[2px] border-darkPrimary group">
            <span className="px-8 py-3 text-darkPrimary group-hover:text-lightPrimary duration-500 z-[2] ">
              Learn More
            </span>
            <div className="w-full h-full bg-darkPrimary absolute top-0 left-0 -translate-x-full group-hover:translate-x-0 duration-500 z-[1] "></div>
          </div>
        </Link>
      </div>

      <div className="w-full h-[40%] text-darkPrimary text-[250px] font-light z-[2] leading-none text-center">
        {projectNum}
      </div>

      <div
        ref={projectCardHover}
        className="w-[25%] aspect-square bg-accentColor bg-opacity-60 rounded-full absolute top-0 left-0 z-[1] opacity-0 scale-0"
      ></div>
    </div>
  );
}

export default ProjectColumn;
