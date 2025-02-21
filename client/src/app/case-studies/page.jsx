import AnimatedLetter from "@/components/animations/AnimatedLetter";
import CustomShapeButton from "@/components/buttons/CustomShapeButton";
import Image from "next/image";
import Link from "next/link";
import { FiArrowDownLeft } from "react-icons/fi";
import cover from "../../../public/projects/case-study-cover.jpg";

export const metadata = {
  title: "Case Studies - Real Digital Transformation Success | Devion Ark",
  description:
    "Explore our case studies to see how Devion Ark has transformed businesses with innovative IT solutions. Discover real success stories in custom software, digital marketing, and web development that drive measurable growth.",
};

function ProjectCard({
  title,
  desc,
  features,
  video,
  reverse = "0",
  forwardTo = "",
}) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-7 lg:gap-10">
        <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-20">
          <div className="w-full lg:w-[55%] text-2xl lg:text-5xl font-normal text-lightPrimary">
            <h2>{title}</h2>
          </div>
          <div className="w-full h-full lg:w-[45%] flex flex-wrap gap-2 lg:gap-3 text-xs lg:text-base leading-none text-lightSecondary">
            {features.map((feature, i) => (
              <p
                key={i}
                className="inline-flex items-center justify-center h-[28px] lg:h-[34px] px-2 lg:px-3 py-1 m-0 whitespace-nowrap rounded-full border border-accentColor leading-none"
              >
                {feature}
              </p>
            ))}
          </div>
        </div>
        <div
          className={`flex flex-col ${
            reverse === "0" ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-10 lg:gap-20 lg:items-stretch`}
        >
          <div className="w-full lg:w-[45%] flex flex-col gap-5 lg:gap-10">
            <div className="text-base lg:text-xl font-normal">
              <p>{desc}</p>
            </div>
            <div>
              <div className="w-full h-full flex">
                <CustomShapeButton
                  label="Learn More"
                  forwardTo={forwardTo}
                  textStyle="text-lg font-normal text-darkPrimary"
                  hoverText="text-darkPrimary"
                  backgroundColor="bg-lightPrimary"
                  hoverBgColor="bg-accentColor"
                  paddingX="ps-4 pe-8"
                  paddingY="py-4"
                  fontGap="gap-2"
                  icon={
                    <FiArrowDownLeft className="text-lg text-darkPrimary rotate-45 group-hover:rotate-90 transition duration-[350ms]" />
                  }
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[55%] flex justify-between gap-5">
            <div className="w-full aspect-video relative overflow-hidden rounded p-3 bg-darkSecondary">
              <video
                className="w-full h-full object-cover"
                loop
                muted
                autoPlay
                playsInline
              >
                <source src={video} />
              </video>
            </div>
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

      <div className="w-full min-h-[calc(100vh-64px)] bg-darkPrimary px-4 lg:px-20 flex items-end py-10 lg:py-20 text-lightSecondary font-light">
        <div className="w-full flex flex-col gap-10 lg:gap-20 justify-end">
          <div className="w-full flex flex-col lg:flex-row justify-between">
            <div className="lg:w-[25%] hidden lg:flex flex-row gap-10">
              <div className="flex flex-col gap-2 text-base">
                <div className="whitespace-nowrap">
                  <AnimatedLetter
                    text="Real Estate"
                    hoverText="text-accentColor"
                  />
                </div>
                <div className="whitespace-nowrap">
                  <AnimatedLetter
                    text="Education"
                    hoverText="text-accentColor"
                  />
                </div>
                <div className="whitespace-nowrap">
                  <AnimatedLetter
                    text="Clothing"
                    hoverText="text-accentColor"
                  />
                </div>
                <div className="whitespace-nowrap">
                  <AnimatedLetter
                    text="E-commerce"
                    hoverText="text-accentColor"
                  />
                </div>
                <div className="whitespace-nowrap">
                  <AnimatedLetter
                    text="Cats Food"
                    hoverText="text-accentColor"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 text-base ">
                <AnimatedLetter text="Dev Tools" hoverText="text-accentColor" />
                <AnimatedLetter
                  text="Documentation"
                  hoverText="text-accentColor"
                />
                <AnimatedLetter
                  text="References"
                  hoverText="text-accentColor"
                />
                <AnimatedLetter text="Tutorials" hoverText="text-accentColor" />
              </div>
            </div>
            <div className="w-full lg:w-[70%] ">
              <div className="w-full flex flex-col gap-5 lg:gap-10">
                <div className="text-lightPrimary text-4xl lg:text-7xl font-medium font-oswald">
                  <h1 className="leading-[1.10]">
                    Blueprints of Innovation:{" "}
                    <span className="text-accentColor italic font-bold uppercase">
                      Case Studies
                    </span>
                  </h1>
                </div>
                <div className="w-full flex flex-row gap-10 items-center">
                  <div>
                    <CustomShapeButton
                      label="Get Started"
                      textStyle="text-lg font-normal text-darkPrimary"
                      paddingX="ps-4 pe-8"
                      paddingY="py-4"
                      fontGap="gap-2"
                      backgroundColor="bg-lightPrimary"
                      hoverBgColor="bg-accentColor"
                      icon={
                        <FiArrowDownLeft className="text-xl text-darkPrimary rotate-45 group-hover:rotate-90 transition duration-[350ms]" />
                      }
                    />
                  </div>
                  <div>
                    <Link
                      href="/about"
                      className="text-lightPrimary text-lg font-normal"
                    >
                      <AnimatedLetter
                        text="About Us"
                        hoverText="text-accentColor"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-full">
              <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between">
                <div className="w-full lg:w-[60%] text-lg lg:text-2xl font-normal text-lightSecondary lg:pt-5 lg:border-t border-lightSecondary/30">
                  <p className="lg:leading-relaxed">
                    Explore our curated collection of real-world success stories
                    where innovation meets impact. Our case studies highlight
                    transformative projects in software development, digital
                    marketing, responsive web design, and SEO optimization.
                  </p>
                </div>
                <div className="w-full h-full lg:w-[40%] p-2 rounded bg-darkSecondary">
                  <div className="w-full h-full flex flex-col gap-3">
                    <div className="w-full aspect-video relative overflow-hidden rounded-sm">
                      <video
                        className="w-full h-full object-cover"
                        loop
                        muted
                        autoPlay
                        playsInline
                      >
                        <source src="https://res.cloudinary.com/de8g5laai/video/upload/v1739689640/devion_ark_showreel_2024_ronun7.mp4" />
                      </video>
                    </div>
                    <div className="text-base font-light">
                      <p>Showreel 2022-2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cover Image  */}

      <div className="w-full aspect-[1.33/1] lg:aspect-auto overflow-hidden relative">
        <Image
          placeholder="blur"
          src={cover}
          alt="two friends are sitting infront a laptop"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Introduction Section  */}

      <div className="w-full px-4 lg:px-20 py-10 lg:py-20 flex justify-end font-light text-lightSecondary bg-darkPrimary">
        <div className="w-[80%] flex flex-col gap-10 lg:gap-20">
          <div className="w-full flex lg:justify-end">
            <div className="w-full lg:w-[85%] text-3xl lg:text-6xl  text-lightPrimary font-medium">
              <h1 className="leading-[1.15]">
                Proven results,{" "}
                <span className="leading-[1.15] italic text-accentColor">
                  real stories
                </span>
                : how we&apos;ve helped businesses thrive
              </h1>
            </div>
          </div>
          <div className="w-full lg:w-[90%] flex flex-col gap-5 lg:gap-10 text-base lg:text-3xl lg:text-end font-normal">
            <p>
              Every business has a unique story, but they all share one thing in
              common: the need for results. At Devion Ark, we&apos;ve partnered
              with startups, enterprises, and innovators across industries to
              turn challenges into opportunities. From skyrocketing e-commerce
              sales to streamlining complex workflows, our case studies are more
              than numbers — they&apos;re blueprints for success.
            </p>
            <p>
              Ready to see how we can transform your business? Dive into the
              stories below.
            </p>
          </div>
        </div>
      </div>

      {/* Project List Section */}

      <div className="w-full flex flex-col px-4 lg:px-20 bg-black">
        <div className="py-10 lg:py-20 border-b border-lightSecondary/30">
          <ProjectCard
            forwardTo="/case-studies/comprehensive-real-estate-crm-solution"
            video="https://res.cloudinary.com/de8g5laai/video/upload/v1739689633/crm_software_promo_video_sdysuq.mp4"
            title="Comprehensive Real Estate CRM Solution"
            desc="A powerful CRM system for real estate professionals, providing automated lead management, property listing organization, client follow-ups, and in-depth analytics to streamline operations."
            features={[
              "CRM System",
              "Custom Software",
              "Inventory Management",
              "Leads Storage",
              "Employee Assign",
              "Project Handle",
              "Real Estate",
            ]}
          />
        </div>
        <div className="py-10 lg:py-20">
          <ProjectCard
            reverse="1"
            video="https://res.cloudinary.com/de8g5laai/video/upload/v1739988780/sportswear_ecommerce_promo_video_fmbpaj.mp4"
            title="Dynamic Sportswear E-Commerce Platform"
            desc="An intuitive and scalable e-commerce website tailored for sportswear businesses. Features include user-friendly navigation, secure checkout, product filtering, and real-time inventory tracking."
            features={[
              "E-commerce",
              "Product List",
              "Track Order",
              "Customer Solutions",
              "Dynamic Category",
              "Data Security",
            ]}
          />
        </div>
      </div>
    </main>
  );
}

export default CaseStudies;
