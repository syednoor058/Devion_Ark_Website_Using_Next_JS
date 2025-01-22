"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";

function ServiceCard({ serviceIndex, serviceTitle, image, forwardTo }) {
  const serviceCard = useRef(null);
  const serviceCardHover = useRef(null);
  useEffect(() => {
    const serviceContainer = serviceCard.current;
    const serviceHoverComponent = serviceCardHover.current;

    if (!serviceContainer) return;

    const handleMouseEnter = () => {
      gsap.to(serviceHoverComponent, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(serviceHoverComponent, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
      });
    };

    const handleMouseMove = (event) => {
      const rect = serviceContainer.getBoundingClientRect();
      const x = event.clientX - rect.left; // Mouse X relative to the component
      const y = event.clientY - rect.top - 20; // Mouse Y relative to the component

      gsap.to(serviceHoverComponent, {
        left: x,
        top: y,
        scale: 1,
        opacity: 1,
        duration: 0.5,
      });
    };

    serviceContainer.addEventListener("mouseenter", handleMouseEnter);
    serviceContainer.addEventListener("mouseleave", handleMouseLeave);
    serviceContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      serviceContainer.removeEventListener("mouseenter", handleMouseEnter);
      serviceContainer.removeEventListener("mouseleave", handleMouseLeave);
      serviceContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="w-full h-full border-b border-gray-700 text-lightPrimary  px-4 lg:px-7">
      <div className="w-full flex flex-row gap-10 justify-between items-center bg-darkPrimary">
        <div
          ref={serviceCard}
          className="w-full flex flex-row items-center gap-7 py-5 lg:py-10 relative"
        >
          <p className="w-[5%] lg:w-[8%] font-light text-[5vw] lg:text-[3.5vw] leading-none text-accentColor">
            {serviceIndex}
          </p>
          <h2 className="text-[5vw] lg:text-[3.5vw] font-oswald font-bold uppercase leading-tight">
            {serviceTitle}
          </h2>
          <div
            ref={serviceCardHover}
            className="w-[30%] lg:w-[15%] h-full top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] absolute opacity-0 scale-0 z-[10]"
          >
            <div className="w-full aspect-[5/6] overflow-hidden relative rotate-12">
              <Image
                src={image}
                alt={serviceTitle + " service image"}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <Link href={forwardTo} className="text-[7vw] lg:text-[5vw] z-[11]">
          <GoArrowUpRight />
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
