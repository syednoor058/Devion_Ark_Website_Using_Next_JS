"use client";

import { useEffect, useRef, useState } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

function ServiceCard({ title, description, index }) {
  const cardRef = useRef(null);
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (cardRef.current) {
        const { top } = cardRef.current.getBoundingClientRect();
        const offset = Math.max(0, Math.min(index * 120, top));
        setTopOffset(offset);
      }
    };

    console.log(index, index * 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`px-10 py-10 border-t border-lightSecondary border-opacity-15 bg-darkSecondary sticky leading-tight top-0`}
      // style={{
      //   top: `calc(${index * 120}px)`,
      // }} // Dynamic top value using inline style
    >
      <div className="flex flex-row gap-10 ">
        <div className="w-[5%] text-6xl font-extralight font-roboto text-accentColor">
          0{index + 1}
        </div>
        <div className="w-[30%] text-lightPrimary font-inter font-bold text-3xl uppercase">
          {title}
        </div>
        <ul className="w-[30%] flex flex-col gap-2">
          {description.map((descItem, idx) => (
            <li key={idx} className="font-light">
              <div className="flex flex-row gap-2">
                <span className="text-accentColor pt-[2px]">
                  <FaRegDotCircle />
                </span>
                {descItem}
              </div>
            </li>
          ))}
        </ul>
        <div className="w-[30%] aspect-video bg-lightSecondary"></div>
        <div className="w-[5%] text-6xl">
          <GoArrowUpRight />
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
