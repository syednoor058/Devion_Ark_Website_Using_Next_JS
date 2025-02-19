"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function AutoSlider({ components }) {
  var settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
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
          <div className="w-full h-full absolute inset-0 z-[3] p-2">
            <div className="w-full h-full flex flex-col justify-between">
              <div className="w-full flex justify-end">
                <div>
                  <FiArrowUpRight className="text-4xl text-lightPrimary group-hover:text-accentColor transition duration-[350ms]" />
                </div>
              </div>
              <div className="text-lightPrimary font-normal text-base">
                {" "}
                {comp.title}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Slider>
  );
}
export default AutoSlider;
