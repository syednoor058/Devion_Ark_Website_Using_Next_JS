"use client";
import { useEffect, useState } from "react";
import { MdWork } from "react-icons/md";
import ProjectColumn from "./ProjectColumn";
import ProjectMobileColumn from "./ProjectMobileColumn";

const ProjectShowcase = () => {
  const [activeCard, setActiveCard] = useState("1");
  useEffect(() => {
    console.log(activeCard);
  }, [activeCard]);
  return (
    <div className="w-full bg-darkSecondary flex flex-col">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between relative overflow-hidden">
        <div className="w-full lg:w-[60%] flex flex-col gap-5 lg:gap-10 ps-5 lg:ps-20 pe-5 lg:pe-10 border-r border-gray-700 py-10 lg:py-20">
          <div className="flex flex-row gap-2 items-center">
            <div className="uppercase font-semibold text-sm lg:text-lg overflow-hidden">
              <p id="who-we-are" className="inline-block">
                Case Studies
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
        <div className="w-full lg:w-[40%] flex flex-col">
          <div className="w-28 aspect-square bg-lightPrimary flex justify-center items-center text-6xl text-darkPrimary">
            <MdWork />
          </div>
          <p className="w-full text-sm lg:text-base font-light overflow-hidden ps-5 lg:ps-10 border-t border-gray-700 pe-5 lg:pe-20 py-5 lg:py-10">
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
            caption="Sportswear E-Commerce Web Application, was built using MERN (MongoDB, Express JS, React, Node JS) Stack."
            title="E-commerce Web Application"
            image="/projects/shop.jpg"
            forward=""
            projectNum="1"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
          <ProjectColumn
            caption="Sportswear E-Commerce Web Application"
            title="Real Estate CRM System"
            image="/projects/real_estate.jpg"
            forward=""
            projectNum="2"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
          <ProjectColumn
            caption="Sportswear E-Commerce Web Application"
            title="Social Media Growth"
            image="/projects/smm.jpg"
            forward=""
            projectNum="3"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
          <ProjectColumn
            caption="Sportswear E-Commerce Web Application"
            title="Search Engine Optimization"
            image="/projects/seo.jpg"
            forward=""
            projectNum="4"
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
        </div>
        <div className="w-full h-full flex lg:hidden flex-col ">
          <ProjectMobileColumn
            caption="Sportswear E-Commerce Web Application, was built using MERN (MongoDB, Express JS, React, Node JS) Stack."
            title="E-commerce Web Application"
            image="/projects/shop.jpg"
            forward=""
            projectNum="1"
          />
          <ProjectMobileColumn
            caption="Sportswear E-Commerce Web Application"
            title="Real Estate CRM System"
            image="/projects/real_estate.jpg"
            forward=""
            projectNum="2"
          />
          <ProjectMobileColumn
            caption="Sportswear E-Commerce Web Application"
            title="Social Media Growth"
            image="/projects/smm.jpg"
            forward=""
            projectNum="3"
          />
          <ProjectMobileColumn
            caption="Sportswear E-Commerce Web Application"
            title="Search Engine Optimization"
            image="/projects/seo.jpg"
            forward=""
            projectNum="4"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
