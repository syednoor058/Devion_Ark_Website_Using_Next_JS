"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function AutoSlider({ components }) {
  return (
    <Carousel
      autoPlay
      showArrows={false}
      showThumbs={false}
      infiniteLoop
      showIndicators={false}
      stopOnHover
      showStatus={false}
    >
      {components.map((comp, i) => (
        <Link
          href={comp.forwardTo}
          key={i}
          className="w-full aspect-square overflow-hidden relative group rounded-sm"
        >
          <Image
            src={comp.img}
            alt={comp.title}
            className="w-full h-full object-cover"
          />
          <div className="w-full aspect-square flex absolute inset-0 z-[3] p-2">
            <div className="w-full h-full flex flex-col justify-between">
              <div className="w-full flex justify-end">
                <div>
                  <FiArrowUpRight className="text-4xl text-lightPrimary group-hover:text-accentColor transition duration-[350ms]" />
                </div>
              </div>
              <div className="text-lightPrimary font-normal text-base text-start">
                {" "}
                {comp.title}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Carousel>
  );
}
export default AutoSlider;
