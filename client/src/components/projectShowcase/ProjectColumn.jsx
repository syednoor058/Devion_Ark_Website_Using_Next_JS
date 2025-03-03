import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
function ProjectColumn({
  caption,
  title1,
  title2,
  forward = "",
  img,
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
      className={`h-full relative border-r border-darkSecondary px-5 py-5 flex flex-col gap-5 justify-between items-center cursor-pointer overflow-hidden ${
        activeCard === projectNum
          ? "w-[100rem] transform origin-left"
          : "w-[60rem]"
      } group`}
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
            placeholder="blur"
            src={img}
            alt={title2}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="h-full flex flex-col justify-between items-center gap-10">
        <div
          className={`w-full h-[20%] text-sm text-darkSecondary z-[2] text-center`}
        >
          {caption}
        </div>
        <div className="w-full h-[40%] flex flex-col gap-10">
          <div className="w-full z-[2] flex flex-col gap-7 justify-center items-center uppercase font-oswald">
            <h2
              className={`w-full font-medium text-4xl  text-darkSecondary text-center duration-500 flex flex-col gap-1`}
            >
              <span>{title1}</span>
              <span>{title2}</span>
            </h2>
          </div>

          <div className={`z-[2] flex justify-center items-center`}>
            <Link
              href={forward}
              className={`${activeCard === projectNum ? "flex" : "hidden"}`}
            >
              <FiArrowUpRight
                className={`text-6xl text-darkSecondary  rotate-45  transition duration-[350ms] ${
                  activeCard === projectNum && "group-hover:rotate-0"
                }`}
              />
            </Link>
          </div>
        </div>

        <div className="w-full h-[40%] text-darkSecondary text-[250px] font-semibold z-[2] leading-none text-center flex items-end justify-center font-baumans">
          {projectNum}
        </div>
      </div>

      <div
        ref={projectCardHover}
        className="w-[25%] aspect-square bg-accentColor bg-opacity-60 rounded-full absolute top-0 left-0 z-[1] opacity-0 scale-0 p-2"
      ></div>
    </div>
  );
}

export default ProjectColumn;
