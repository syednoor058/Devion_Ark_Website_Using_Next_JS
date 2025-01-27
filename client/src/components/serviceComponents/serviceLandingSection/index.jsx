"use client";
import CircleType from "circletype";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { FiArrowDownRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

function ServiceLandingSection() {
  useEffect(() => {
    const circleType = new CircleType(
      document.getElementById("service-hero-rotated-text")
    );

    circleType.radius(70);
  }, []);
  return (
    <div className="w-full h-[calc(100vh-56px)] relative">
      <div className="w-full h-full flex flex-col justify-end border-b border-gray-700">
        <div className="w-full h-full flex flex-row">
          <div className="w-[13%] h-full">
            <div className="w-full h-full bg-lightPrimary">
              <div className="w-full h-full relative flex justify-center items-center text-darkPrimary font-light p-5">
                <motion.div
                  id="service-hero-rotated-text"
                  className=""
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  }}
                >
                  ur Services . Our Services . Our Services . O
                </motion.div>
                <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-3xl">
                  <GoDotFill />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[57%] border-x border-gray-700 p-2 flex justify-end items-end text-7xl">
            <FiArrowDownRight />
          </div>
          <div className="w-[30%] p-5 bg-accentColor text-darkPrimary">
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              possimus labore temporibus ratione itaque nisi non deleniti
              tempore! Deleniti, deserunt. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Pariatur, aspernatur. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Labore, inventore!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi qui
              culpa nulla reprehenderit blanditiis magni nihil.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row border-t border-gray-700">
          <div className="w-[13%]"></div>
          <div className="w-[57%] border-x border-gray-700 px-5 uppercase font-bold text-[13.5vw] font-oswald text-accentColor leading-tight">
            <h1>Services</h1>
          </div>
          <div className="w-[30%] p-5 flex items-end text-xl">6</div>
        </div>
      </div>
    </div>
  );
}

export default ServiceLandingSection;
