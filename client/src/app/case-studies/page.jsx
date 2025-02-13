import ActionButton from "@/components/buttons/ActionButton";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { LuMouse } from "react-icons/lu";

export const metadata = {
  title: "Case Studies - Real Digital Transformation Success | Devion Ark",
  description:
    "Explore our case studies to see how Devion Ark has transformed businesses with innovative IT solutions. Discover real success stories in custom software, digital marketing, and web development that drive measurable growth.",
};

function ProjectListCard({
  bgColor,
  projectCategory,
  bodyTextColor,
  video,
  projectTitle,
  titleTextColor,
  projectDesc,
  btnBgColor,
  btnBorderColor,
  btnTextHoverColor,
  forwardTo,
}) {
  return (
    <div className={`w-full rounded ${bgColor} p-5`}>
      <div className="w-full flex flex-col gap-5">
        <div className={`${bodyTextColor} font-light uppercase `}>
          <h5>{projectCategory}</h5>
        </div>
        <div className="w-full aspect-video overflow-hidden relative">
          <video
            className="w-full object-cover"
            loop
            autoPlay
            muted
            playsInline
          >
            <source src={video} />
          </video>
        </div>
        <div
          className={`font-oswald font-semibold uppercase ${titleTextColor} text-[6vw] lg:text-[2.5vw] leading-tight`}
        >
          <h2>{projectTitle}</h2>
        </div>
        <div className={`${bodyTextColor} font-light`}>
          <p>{projectDesc}</p>
        </div>
        <div className="w-full flex">
          <div className="w-full flex">
            <ActionButton
              forwardTo={forwardTo}
              label="Learn More"
              labelColor={`${titleTextColor} group-hover:${btnTextHoverColor}`}
              bgColor={btnBgColor}
              labelSize="text-base"
              borderColor={btnBorderColor}
              iconColor={btnTextHoverColor}
              iconSize="text-xl"
              icon={<IoBookOutline />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudies() {
  return (
    <main className="font-poppins">
      {/* Landing Section */}

      <div className="w-full h-full relative">
        <div className="w-full flex flex-col gap-10 px-5 lg:px-20 pb-10 lg:pb-20 pt-5 lg:pt-10">
          <h1 className="w-full flex flex-col font-oswald font-bold uppercase">
            <span className="w-full text-lightSecondary leading-tight lg:leading-none text-[9vw] lg:text-[7vw] ">
              Blueprints of Innovation:
            </span>
            <span className="w-full leading-none text-lightPrimary text-[18vw] lg:text-[9vw]">
              Our{" "}
              <span className="text-accentColor text-[18vw] lg:text-[10vw]">
                Case Studies
              </span>
            </span>
          </h1>
          <div className="w-full flex justify-end">
            <p className="w-full lg:w-[60%] text-[4.5vw] lg:text-[1.5vw] font-light text-lightSecondary leading-tight lg:pt-5 text-start">
              Explore our curated collection of real-world success stories where
              innovation meets impact. Our case studies highlight transformative
              projects in software development, digital marketing, responsive
              web design, and SEO optimization. Uncover the creative strategies
              and breakthrough solutions that power business growth at Devion
              Ark.
            </p>
          </div>
          <div className="w-full flex justify-start">
            <div className="w-full lg:w-[50%] flex justify-start lg:justify-start">
              <ActionButton
                forwardTo=""
                label="Explore Case Studies"
                labelColor="text-lightPrimary group-hover:text-darkPrimary"
                bgColor="bg-lightPrimary"
                labelSize="text-base lg:text-2xl"
                borderColor="border-lightPrimary"
                iconColor="text-darkPrimary"
                iconSize="text-xl lg:text-4xl"
                icon={<FaEarthAmericas />}
              />
            </div>
          </div>
          <div className="w-full hidden lg:flex flex-row justify-between gap-5 font-light pt-10">
            <div className="w-1/3 flex justify-start items-center">
              &copy;2024-2025
            </div>
            <div className="w-1/3 flex justify-center items-center gap-2">
              <span>
                <LuMouse />
              </span>
              Scroll Down To Explore
            </div>
            <div className="w-1/3 flex justify-end items-center">
              All Rights Reserved By Devion Ark
            </div>
          </div>
        </div>
      </div>

      {/* Project List Section */}

      <div className="w-full px-5 lg:px-20 bg-black py-10 lg:py-20">
        <div className="w-full flex flex-col gap-10 lg:gap-16">
          <div className="w-full text-accentColor font-oswald font-bold uppercase text-start lg:text-center text-[8vw] lg:text-[7vw] leading-tight">
            <h2>Crafting Digital Success</h2>
          </div>
          <div className="w-full h-full">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
              <ProjectListCard
                forwardTo="/case-studies/comprehensive-real-estate-crm-solution"
                bgColor="bg-darkPrimary"
                projectCategory="Custom Software Development"
                bodyTextColor="text-lightSecondary"
                video="/videos/crm_software_promo_video.mp4"
                projectTitle="Comprehensive Real Estate CRM Solution"
                titleTextColor="text-lightPrimary"
                projectDesc="A powerful CRM system for real estate professionals, providing automated lead management, property listing organization, client follow-ups, and in-depth analytics to streamline operations."
                btnBgColor="bg-lightPrimary"
                btnBorderColor="border-lightPrimary"
                btnTextHoverColor="text-darkPrimary"
              />
              <ProjectListCard
                forwardTo=""
                bgColor="bg-lightPrimary"
                projectCategory="Web Application Development"
                bodyTextColor="text-darkSecondary"
                video="/videos/sportswear_ecommerce_promo_video.mp4"
                projectTitle="Dynamic Sportswear E-Commerce Platform"
                titleTextColor="text-darkPrimary"
                projectDesc="An intuitive and scalable e-commerce website tailored for sportswear businesses. Features include user-friendly navigation, secure checkout, product filtering, and real-time inventory tracking.
"
                btnBgColor="bg-darkPrimary"
                btnBorderColor="border-darkPrimary"
                btnTextHoverColor="text-lightPrimary"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CaseStudies;
