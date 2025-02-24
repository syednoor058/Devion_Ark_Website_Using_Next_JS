"use client";

import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowForward } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function BlogSlider({ components }) {
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
        <div key={i} className="w-full">
          <div className="w-full h-full flex flex-col justify-between gap-5 group">
            <div className="w-full h-auto relative overflow-hidden rounded-sm">
              <Image
                placeholder="blur"
                src={comp.img}
                alt={comp.title}
                className="w-full h-full overflow-hidden"
              />
            </div>
            <Link href={comp.forwardTo} className="flex flex-row gap-5">
              <p className="text-lightPrimary leading-tight text-start">
                {comp.title}
              </p>
              <span>
                <MdOutlineArrowForward className="text-4xl group-hover:-rotate-45 duration-500 text-accentColor font-light" />
              </span>
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
export default BlogSlider;
