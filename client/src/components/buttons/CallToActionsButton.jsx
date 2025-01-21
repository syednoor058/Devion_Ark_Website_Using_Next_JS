"use client";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

function CallToActionsButton({ forwardTo, label, icon, btnColor }) {
  const labelRef = useRef(null);
  useEffect(() => {
    function splitTextFunction() {
      const labelTag = labelRef.current;
      if (!labelTag) return;

      // Reset inner HTML to original label text (to avoid duplicating spans)
      const labelText = label;
      const splittedText = labelText.split("");
      const clutter = splittedText
        .map((char) =>
          char === " "
            ? `<span class="inline-block">&nbsp;</span>`
            : `<span class="inline-block">${char}</span>`
        )
        .join("");

      labelTag.innerHTML = clutter;
    }

    splitTextFunction();

    // Add hover animation
    const handleHover = () => {
      const spans = labelRef.current.querySelectorAll("span");

      // Reset span positions for each hover
      gsap.set(spans, { y: 100 });

      gsap.to(spans, {
        y: 0,
        duration: 0.3,
        stagger: 0.02,
        ease: "power4.out",
      });
    };

    const button = labelRef.current.parentElement; // Get the button wrapper
    button.addEventListener("mouseenter", handleHover);

    return () => {
      button.removeEventListener("mouseenter", handleHover);
    };
  }, [label]);
  return (
    <Link href={forwardTo}>
      <div className="w-[164px] h-10 flex text-darkSecondary relative overflow-hidden group">
        <div className="h-full flex flex-row justify-center items-center capitalize absolute z-[3] -left-[32px] group-hover:left-0 duration-500 ease-in-out">
          <div
            className={`w-8 aspect-square flex justify-center items-center ${btnColor} rounded-full scale-0 group-hover:scale-100 transition duration-500 ease-in-out`}
          >
            {icon}
          </div>
          <div className={`py-[10px] ${btnColor} rounded-full px-5 `}>
            <div
              ref={labelRef}
              className="text-nowrap overflow-hidden leading-none"
              style={{ textTransform: "none" }}
            >
              {label}
            </div>
          </div>
          <div
            className={`w-8 aspect-square flex justify-center items-center ${btnColor} rounded-full group-hover:scale-0 transition duration-500 ease-in-out`}
          >
            {icon}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CallToActionsButton;
