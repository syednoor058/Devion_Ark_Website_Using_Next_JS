"use client";
import { VscArrowSmallUp } from "react-icons/vsc";
import CircularTextAnimation from "../animations/CircularTextAnimation";

function SendToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      onClick={scrollToTop}
      className="w-16 h-16 rounded-full bg-accentColor fixed bottom-5 left-5 z-[2000] hidden lg:flex justify-center items-center text-darkPrimary cursor-pointer"
    >
      <div className="w-full h-full flex justify-center items-center relative">
        <CircularTextAnimation
          text="croll. top. scroll. top. s"
          radius={10}
          textColor="text-darkPrimary"
          fontSize="text-[10px]"
        />
        <div className="w-full h-full absolute flex justify-center items-center">
          <VscArrowSmallUp className=" text-darkPrimary" />
        </div>
      </div>
    </div>
  );
}

export default SendToTop;
