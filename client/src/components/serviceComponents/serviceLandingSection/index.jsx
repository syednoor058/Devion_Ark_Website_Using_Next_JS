"use client";
import CircleType from "circletype";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { GoDotFill } from "react-icons/go";

function ServiceLandingSection() {
  useEffect(() => {
    const circleType = new CircleType(
      document.getElementById("service-hero-rotated-text")
    );

    circleType.radius(70);
  }, []);
  return (
    <div className="w-screen h-full relative">
      <div className="w-full h-full flex flex-col justify-end border-b border-gray-700">
        <div className="w-full h-full flex flex-row">
          <div className="w-[13%] bg-lightPrimary">
            <div className="w-full h-full ">
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
          <div className="w-[57%] border-x border-gray-700 p-5 flex justify-end items-end text-7xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 480"
              width="64"
              height="64"
              fill="#999"
            >
              <path d="M240.2 240A240 240 0 0 0 480 0H240a240 240 0 1 0 0 480h240a240 240 0 0 0-239.8-240Z"></path>
            </svg>
            {/* <FiArrowDownRight /> */}
          </div>
          <div className="w-[30%] p-5 bg-accentColor text-darkPrimary">
            <p className="font-light">
              Transform Your Business with Data-Driven Digital Solutions – From
              Skyrocketing Social Media Engagement to Dominating Search
              Rankings. Partner with Devion Ark for Tailored Strategies in SEO,
              Custom Software, and Growth-Focused Marketing That Delivers
              Measurable Results. Ready to Outrank Competitors, Convert Leads,
              and Scale Seamlessly? Let’s Build Your Online Empire.
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
