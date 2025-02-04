"use client";
import CircleType from "circletype";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";
import ProjectColumn from "./ProjectColumn";
import ProjectMobileColumn from "./ProjectMobileColumn";

gsap.registerPlugin(ScrollTrigger);

const ProjectShowcase = () => {
  const projectCardDivRef = useRef(null);
  const projectCardTwoRef = useRef(null);
  const projectCardThreeRef = useRef(null);
  const projectCardFourRef = useRef(null);
  const [activeCard, setActiveCard] = useState("1");
  useEffect(() => {
    if (!projectCardDivRef.current) return;

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectCardDivRef.current,
        start: "top top",
        end: "400% bottom",
        pin: true,
        scrub: 1.5,
        // markers: true,
      },
    });

    tl.to(
      projectCardTwoRef.current,
      {
        top: 0,
        ease: "power2.inOut",
      },
      "a"
    )
      .to(
        projectCardThreeRef.current,
        {
          top: "100%",
        },
        "a"
      )
      .to(
        projectCardFourRef.current,
        {
          top: "200%",
        },
        "a"
      )
      .to(
        projectCardThreeRef.current,
        {
          top: 0,
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        projectCardFourRef.current,
        {
          top: "100%",
        },
        "b"
      )
      .to(
        projectCardFourRef.current,
        {
          top: 0,
          ease: "power2.inOut",
        },
        "c"
      );

    return () => tl.revert();
  }, []);

  useEffect(() => {
    const circleType = new CircleType(
      document.getElementById("devion-ark-rotate-text")
    );
    circleType.radius(40);
  }, []);
  return (
    <div className="w-full bg-[url('/backgrounds/bg-wavey-fingerprint.svg')] bg-fit flex flex-col">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between relative overflow-hidden py-10 lg:py-20">
        <div className="w-full lg:w-[60%] flex flex-col gap-5 lg:gap-10 ps-5 lg:ps-20 pe-5 lg:pe-10">
          <div className="flex flex-row gap-2 items-center">
            <div className="uppercase font-semibold text-sm lg:text-lg overflow-hidden">
              <p id="who-we-are" className="inline-block">
                Featured Case Studies
              </p>
            </div>
            <div
              id="case-study-bar"
              className="w-[2px] h-5 lg:h-7 bg-accentColor"
            ></div>
          </div>
          <h2 className="w-full text-[10vw] lg:text-[5.5vw] font-oswald uppercase text-lightPrimary leading-none font-bold">
            Our Works In
            <br />
            <span className="text-accentColor font-extrabold text-[14vw] lg:text-[6.5vw]">
              Action
            </span>
          </h2>
        </div>
        <div className="w-full lg:w-[40%] flex flex-col items-end ps-5 lg:ps-0 pe-5 lg:pe-20">
          <div className="w-[30%] aspect-square rounded-full flex justify-center items-center relative text-lightPrimary">
            <motion.div
              id="devion-ark-rotate-text"
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              className="font-light"
            >
              evion Ark . Devion Ark . Devion Ark . D
            </motion.div>
            <div className="text-xl absolute w-full h-full top-0 left-0 flex justify-center items-center text-lightPrimary">
              <GoDotFill />
            </div>
          </div>
          <p className="w-full text-base lg:text-lg font-light overflow-hidden pt-5 leading-tight">
            See how we&apos;ve turned challenges into opportunities and ideas
            into impactful solutions. Our case studies showcase real-world
            examples of how we&apos;ve helped businesses grow, optimize
            operations, and achieve their goals. Each story reflects our
            commitment to innovation, collaboration, and delivering measurable
            results.
          </p>
        </div>
      </div>
      <div className="w-full lg:h-screen overflow-hidden relative">
        <div className="w-full h-full hidden lg:flex">
          <ProjectColumn
            caption="An intuitive and scalable e-commerce website tailored for sportswear businesses. Features include user-friendly navigation, secure checkout, product filtering, and real-time inventory tracking."
            title="Dynamic Sportswear E-Commerce Platform"
            video="/projects/e-commerce_background.mp4"
            forward=""
            projectNum="1"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
          <ProjectColumn
            caption="A powerful CRM system for real estate professionals, providing automated lead management, property listing organization, client follow-ups, and in-depth analytics to streamline operations."
            title="Comprehensive Real Estate CRM Solution"
            video="/projects/real_estate_background.mp4"
            forward=""
            projectNum="2"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
          <ProjectColumn
            caption="A strategic social media project encompassing content creation, ad campaigns, audience engagement strategies, and performance monitoring to boost online presence."
            title="Advanced Social Media Marketing Toolkit"
            video="/projects/smm_background.mp4"
            forward=""
            projectNum="3"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
          <ProjectColumn
            caption="A strategic social media project encompassing content creation, ad campaigns, audience engagement strategies, and performance monitoring to boost online presence."
            title="Technical Search Engine Optimization"
            video="/projects/seo_background.mp4"
            forward=""
            projectNum="4"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
        </div>
        <div
          ref={projectCardDivRef}
          className="w-full min-h-screen flex lg:hidden flex-col relative"
        >
          <ProjectMobileColumn
            caption="An intuitive and scalable e-commerce web application tailored for sportswear businesses. Features include user-friendly navigation, secure checkout, product filtering, and real-time inventory tracking."
            title="Dynamic Sportswear E-Commerce Platform"
            video="/projects/e-commerce_background.mp4"
            forward=""
            projectNum="1"
          />
          <div
            ref={projectCardTwoRef}
            className="w-full h-screen absolute top-[100%] left-0 z-[10]"
            style={{ top: "100%" }}
          >
            <ProjectMobileColumn
              caption="A powerful CRM system for real estate professionals, providing automated lead management, property listing organization, client follow-ups, and in-depth analytics to streamline operations."
              title="Comprehensive Real Estate CRM Solution"
              video="/projects/real_estate_background.mp4"
              forward=""
              projectNum="2"
            />
          </div>
          <div
            ref={projectCardThreeRef}
            className="w-full h-screen absolute top-[100%] left-0 z-[15]"
            style={{ top: "200%" }}
          >
            <ProjectMobileColumn
              caption="A strategic social media project encompassing content creation, ad campaigns, audience engagement strategies, and performance monitoring to boost online presence."
              title="Advanced Social Media Marketing Toolkit"
              video="/projects/smm_background.mp4"
              forward=""
              projectNum="3"
            />
          </div>
          <div
            ref={projectCardFourRef}
            className="w-full h-screen absolute top-[100%] left-0 z-[20]"
            style={{ top: "300%" }}
          >
            <ProjectMobileColumn
              caption="A robust SEO implementation project focused on keyword research, technical SEO audits, on-page optimization, and content strategy to improve search rankings and organic traffic."
              title="Strategic SEO Optimization Framework"
              video="/projects/seo_background.mp4"
              forward=""
              projectNum="4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
