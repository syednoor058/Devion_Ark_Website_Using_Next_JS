import CircularTextAnimation from "@/components/animations/CircularTextAnimation";
import FAQSection from "@/components/faq";
import ProjectShowcase from "@/components/projectShowcase";
import { Avatar, AvatarGroup } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import { CgQuote } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { FiArrowDownLeft } from "react-icons/fi";
import { GoArrowUpRight, GoDotFill } from "react-icons/go";
import { LuMouse } from "react-icons/lu";
import annaKitchen from "../../public/partners/anna_khan_kitchen.png";
import elevate from "../../public/partners/elevate.png";
import indigo from "../../public/partners/indigo_company.png";
import interAidLogo from "../../public/partners/interaid.png";
import kickOffLogo from "../../public/partners/kick-off.png";
import moonStudio from "../../public/partners/moon_studio.png";
import oxw from "../../public/partners/okw.png";
import puppetbrushLogo from "../../public/partners/puppetbrush.png";
import qahafLogo from "../../public/partners/qahaf.png";
import sikderFoundationLogo from "../../public/partners/sikder_foundation.png";
import sweetCakes from "../../public/partners/sweet_cakes.png";
import travel from "../../public/partners/travel.png";

function TestimonialCard({ image, name, position, company, review }) {
  return (
    <div className="w-[400px] aspect-video p-5 rounded text-lightSecondary  flex flex-col-reverse gap-3 overflow-hidden">
      <div className="flex flex-row-reverse gap-5 justify-between items-start">
        <div className="flex flex-row-reverse gap-5 items-center">
          <div>
            <div className="w-16 aspect-square rounded-full overflow-hidden relative">
              <Image src={image} alt={name} fill className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <div className="text-lightPrimary uppercase font-medium leading-none">
              {name}
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs font-light leading-none text-end">
                {company}
              </div>
              <div className="text-xs font-light leading-none text-end">
                {position}
              </div>
            </div>
          </div>
        </div>
        <div className="text-6xl">
          <BiSolidQuoteLeft />
        </div>
      </div>
      <div className="flex flex-row gap-[2px] text-yellow-500">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="text-sm font-light leading-tight">{review}</div>
    </div>
  );
}

function TestimonialCard2({ image, name, position, company, review }) {
  return (
    <div className="w-[400px] aspect-video p-5 rounded text-lightSecondary flex flex-col-reverse gap-3 overflow-hidden">
      <div className="flex flex-row gap-5 justify-between items-start">
        <div className="flex flex-row gap-5 items-center">
          <div>
            <div className="w-16 aspect-square rounded-full overflow-hidden relative">
              <Image src={image} alt={name} fill className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lightPrimary uppercase font-medium leading-none">
              {name}
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs font-light leading-none">{company}</div>
              <div className="text-xs font-light leading-none">{position}</div>
            </div>
          </div>
        </div>
        <div className="text-6xl">
          <BiSolidQuoteRight />
        </div>
      </div>
      <div className="w-full flex flex-row gap-[2px] text-yellow-500 justify-end">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="text-sm font-light leading-tight text-end">{review}</div>
    </div>
  );
}

function PartnersCard({ brandImg, brandAlt }) {
  return (
    <div className="w-full h-full border border-lightSecondary border-opacity-15">
      <Image
        src={brandImg}
        alt={brandAlt}
        className="w-full h-full object-fill"
      />
    </div>
  );
}

function ServiceCard({ serviceIndex, serviceTitle, background, forwardTo }) {
  return (
    <div className="w-full h-full border-x border-b border-gray-800 text-lightPrimary  px-4 lg:px-7 py-5 hover:py-10 lg:hover:py-20 lg:py-10 duration-500 bg-darkPrimary relative group">
      <div className="w-full h-full absolute top-0 left-0 overflow-hidden z-[2]">
        <div className="w-full h-full relative -translate-x-full group-hover:translate-x-0 duration-500">
          <video
            className="w-full h-full object-cover object-center opacity-50"
            autoPlay
            loop
            muted
          >
            <source src={background} />
          </video>
        </div>
      </div>
      <div className="w-full flex flex-row gap-10 justify-between items-center z-[11]">
        <div className="w-full flex flex-row items-center gap-7 relative z-[11]">
          <p className="w-[5%] lg:w-[8%] font-bold text-[7vw] lg:text-[3.5vw] leading-none text-accentColor font-oswald hidden lg:inline-block">
            {serviceIndex}
          </p>
          <h2 className="text-[7vw] lg:text-[3.5vw] font-oswald font-bold uppercase leading-tight">
            {serviceTitle}
          </h2>
        </div>
        <Link href={forwardTo} className="text-[7vw] lg:text-[5vw] z-[11]">
          <GoArrowUpRight />
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="font-roboto">
      {/* Landing Section */}

      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col pb-10 pt-5 gap-5">
          <div className="w-full flex flex-col px-5 lg:px-20">
            <div className="uppercase font-oswald font-bold text-[6vw] lg:text-5xl leading-none">
              <h1>Transforming your ideas into</h1>
            </div>
            <div className="uppercase font-oswald font-bold text-[25vw] lg:text-[12.5vw] text-lightPrimary leading-none">
              <h1>
                <span className="text-accentColor">Digital</span> Reality
              </h1>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-5 justify-between items-end px-0 lg:px-20">
            <div className="w-full lg:w-[50%] h-full flex flex-row items-end px-5 lg:px-0">
              <p className="pt-0 lg:pt-4 font-light leading-tight text-[5vw] lg:text-[2.5vw]">
                We Deliver Data-Backed SEO, Social Media Campaigns, and Business
                Software Designed to Scale Your Revenue.
              </p>
            </div>
            <div className="w-full lg:w-[35%] flex flex-col gap-3 rounded-sm">
              <div className="w-full aspect-video overflow-hidden relative rounded-sm">
                <video className="w-full" loop muted autoPlay>
                  <source src="/videos/devion_ark_showreel_2024.mp4" />
                </video>
              </div>
              <div className="w-full flex flex-col items-end text-sm font-light px-5 lg:px-0">
                <div className="w-full text-start lg:text-end">
                  Devion Ark Digital Solutions
                </div>
                <div className="w-full text-start lg:text-end">
                  Showreel (2023-2024)
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-20 hidden lg:flex flex-row justify-between gap-5 font-light pt-10">
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

      {/* Partners Section */}

      <div className="bg-darkSecondary py-10 lg:py-20 flex flex-col gap-5 leading-none w-full h-full lg:px-20 relative">
        <div className="w-[1px] h-full hidden lg:flex flex-1 absolute bg-lightSecondary top-0 bg-opacity-15"></div>
        <div className="w-[1px] h-full hidden lg:flex flex-1 absolute bg-lightSecondary top-0 left-[50%] bg-opacity-15"></div>
        <div className="w-[1px] h-full hidden lg:flex flex-1 absolute bg-lightSecondary top-0 right-20 bg-opacity-15"></div>
        <h2 className="w-full lg:w-[50%] text-lightPrimary font-bold text-[8vw] lg:text-[3.5vw] uppercase font-oswald px-3 lg:px-0 leading-tight">
          <span className="text-accentColor">Brands</span> we&apos;ve partnered
          with{" "}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-6 mt-3 lg:mt-7 relative px-3 lg:px-0">
          <div className="w-full h-full absolute top-0 flex flex-col justify-between">
            <div className="w-full h-[1px] bg-lightSecondary bg-opacity-25"></div>
            <div className="w-full h-[1px] bg-lightSecondary bg-opacity-25"></div>
            <div className="w-full h-[1px] bg-lightSecondary bg-opacity-25"></div>
          </div>
          <PartnersCard brandImg={interAidLogo} brandAlt="interaid_logo" />
          <PartnersCard
            brandImg={sikderFoundationLogo}
            brandAlt="sikder_foundation_logo"
          />
          <PartnersCard brandImg={kickOffLogo} brandAlt="kick_off_logo" />
          <PartnersCard
            brandImg={puppetbrushLogo}
            brandAlt="puppetbrush_logo"
          />
          <PartnersCard brandImg={qahafLogo} brandAlt="qahaf_logo" />
          <PartnersCard brandImg={sweetCakes} brandAlt="sweet_cakes_logo" />
          <PartnersCard brandImg={travel} brandAlt="travel_logo" />
          <PartnersCard
            brandImg={annaKitchen}
            brandAlt="ananna_khan_kitchen_logo"
          />
          <PartnersCard brandImg={indigo} brandAlt="indigo_company_logo" />
          <PartnersCard brandImg={moonStudio} brandAlt="moon_studio_logo" />
          <PartnersCard brandImg={oxw} brandAlt="olivia_walker_logo" />
          <PartnersCard brandImg={elevate} brandAlt="elevate_logo" />
        </div>
      </div>

      {/* Who We Are Section */}

      <div
        className={`w-full px-5 sm:px-7 lg:px-10 xl:px-20 py-10 lg:py-20 bg-[url('/backgrounds/bg-zig-zag.svg')] bg-fit relative overflow-hidden`}
      >
        <div className="flex flex-col lg:flex-row gap-7 lg:gap-20 relative z-[5]">
          <div className="w-full lg:w-[65%] flex flex-col gap-5 lg:gap-10">
            <div className="flex flex-row gap-2 items-center overflow-hidden">
              <div className="uppercase font-semibold text-sm sm:text-lg overflow-hidden">
                <span id="who-we-are" className="inline-block">
                  Who We Are
                </span>
              </div>
              <div
                id="who-bar"
                className="w-[2px] h-4 lg:h-7 bg-accentColor"
              ></div>
            </div>
            <div className="flex flex-col gap-2 uppercase font-titleFont text-lightTitleText">
              <h2 className="text-[8vw] lg:text-[4vw] leading-tight overflow-hidden font-medium font-oswald">
                <span id="who-title-1" className="inline-block">
                  Empowering your Business to Reach{" "}
                  <span id="who-title-3" className="inline-block font-bold">
                    New <span className="text-accentColor">heights</span>!
                  </span>
                </span>
              </h2>
              <div className="w-full hidden lg:flex justify-start lg:justify-end"></div>
            </div>
          </div>
          <div className="w-full lg:w-[35%] flex flex-col gap-7 lg:gap-20 justify-end">
            <div className="w-full flex flex-col justify-start items-start gap-3">
              <AvatarGroup>
                <Avatar
                  alt="Md Azizul Hoque"
                  src="/testimonials/azizul.webp"
                  sx={{ width: 56, height: 56 }}
                />

                <Avatar
                  alt="Syed Mustafa Mehedi"
                  src="/testimonials/mehedi.webp"
                  sx={{
                    width: 56,
                    height: 56,
                  }}
                />

                <Avatar
                  alt="Rakib Shikder"
                  src="/testimonials/rakib.webp"
                  sx={{ width: 56, height: 56 }}
                />
                <Avatar
                  alt="Kazi Farhan Masum"
                  src="/testimonials/farhan_masum.webp"
                  sx={{ width: 56, height: 56 }}
                />
                <Avatar sx={{ width: 56, height: 56, bgcolor: "#414141" }}>
                  8+
                </Avatar>
              </AvatarGroup>
              <div className="overflow-hidden font-light">
                <span id="who-subdesc" className="inline-block">
                  We have{" "}
                  <span className="font-medium underline underline-offset-4 text-lightTitleText">
                    12+ satisfied clients
                  </span>{" "}
                  all around the world.
                </span>
              </div>
            </div>
            <div className="text-base lg:text-lg overflow-hidden font-light leading-tight">
              <span id="who-desc" className="inline-block">
                We are more than just a service provider — we are your strategic
                partner. Our mission is to empower your business with tailored
                digital solutions that drive growth, enhance visibility, and
                maximize impact.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}

      <div className="w-full px-5 lg:px-20 py-10 lg:py-20 bg-black">
        <div className="w-full flex flex-col gap-10">
          <div className="w-full text-lightPrimary font-bold font-oswald text-[8vw] lg:text-[5.5vw] flex flex-col pb-5 border-b-dashed-custom leading-none border-b border-lightSecondary border-dashed">
            <h3>Portfolio</h3>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
            <div className="w-full rounded-xl bg-accentColor p-5">
              <div className="w-full flex flex-col gap-3">
                <div className="font-bold font-oswald text-7xl  text-darkPrimary">
                  3+
                </div>
                <div className="font-light text-darkSecondary text-lg">
                  <p>Years of transformative expertise</p>
                </div>
              </div>
            </div>
            <div className="w-full rounded-xl bg-accentColor p-5">
              <div className="w-full flex flex-col gap-3">
                <div className="font-bold font-oswald text-7xl text-darkPrimary">
                  20+
                </div>
                <div className="font-light text-darkSecondary">
                  <p>Cutting-edge projects delivered</p>
                </div>
              </div>
            </div>
            <div className="w-full rounded-xl bg-accentColor p-5">
              <div className="w-full flex flex-col gap-3">
                <div className="font-bold font-oswald text-7xl text-darkPrimary">
                  12+
                </div>
                <div className="font-light text-darkSecondary">
                  <p>Happy clients worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}

      <div className="w-full py-10 lg:py-20 flex flex-col bg-darkPrimary gap-5 lg:gap-10 relative overflow-hidden">
        <div className="w-full h-full flex flex-row justify-between absolute top-0 z-[1] overflow-hidden px-5 lg:px-20">
          <div className="w-[1px] h-full bg-gray-800"></div>
          <div className="w-[1px] h-full bg-gray-800"></div>
          <div className="w-[1px] h-full bg-gray-800"></div>
          <div className="w-[1px] h-full bg-gray-800"></div>
        </div>
        <div className="flex flex-col gap-5 lg:gap-10 z-[2]">
          <div className="flex flex-row gap-2 items-center px-5 lg:px-20">
            <div className="uppercase font-semibold text-sm lg:text-lg overflow-hidden">
              <p id="who-we-are" className="inline-block">
                Our Services
              </p>
            </div>
            <div
              id="who-bar"
              className="w-[2px] h-5 lg:h-7 bg-accentColor"
            ></div>
          </div>
          <h2 className="px-5 lg:px-20 text-[8vw] lg:text-[5.5vw] font-oswald uppercase text-lightPrimary leading-tight font-medium">
            The Solutions that drive <br />
            <span className="text-accentColor font-bold">Your Success</span>
          </h2>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-start px-5 sm:px-7 lg:px-10 xl:px-20 gap-7 z-[2]">
          <div className="w-full sm:w-[60%] xl:w-[40%] text-base lg:text-lg font-light overflow-hidden leading-tight">
            <span
              id="what-we-do-desc"
              className="block overflow-hidden  backdrop-blur-[1px] py-3 bg-darkPrimary"
            >
              We specialise in developing solutions that help your business
              prosper in the digital age. From intuitive software to attractive
              websites to strategic marketing and flawless testing, we match
              technology with business objectives. Our comprehensive approach
              guarantees that every project we do promotes development,
              increases visibility, and delivers long-term value.
            </span>
          </div>
          <div className="w-full sm:w-[40%] lg:w-[60%] flex flex-row gap-5 items-center justify-end">
            <div className="text-7xl lg:text-9xl xl:text-[200px] leading-none font-thin text-accentColor overflow-hidden">
              <span id="growth-rate" className="inline-block font-poppins">
                1.5
                <span className="text-5xl lg:text-7xl xl:text-9xl font-medium">
                  X
                </span>
              </span>
            </div>
            <div className="uppercase">Average Growth rate</div>
          </div>
        </div>

        <div className="px-5 lg:px-20 z-[2]">
          <div className="border-t border-gray-800 flex flex-col">
            <ServiceCard
              serviceIndex="01"
              serviceTitle="Software System Development"
              forwardTo=""
              background="/services/software_development_background.mp4"
            />
            <ServiceCard
              serviceIndex="02"
              serviceTitle="Modern Website Development"
              forwardTo=""
              background="/services/web_development_background.mp4"
            />
            <ServiceCard
              serviceIndex="03"
              serviceTitle="Social Media Marketing (SMM)"
              forwardTo=""
              background="/services/social_media_marketing_background.mp4"
            />
            <ServiceCard
              serviceIndex="04"
              serviceTitle="Search Engine Marketing (SEM)"
              forwardTo=""
              background="/services/search_engine_marketing_background.mp4"
            />
            <ServiceCard
              serviceIndex="05"
              serviceTitle="Search Engine Optimization"
              forwardTo=""
              background="/services/seo_background.mp4"
            />
            <ServiceCard
              serviceIndex="06"
              serviceTitle="Business Consultation"
              forwardTo=""
              background="/services/business_consult_background.mp4"
            />
          </div>
        </div>
      </div>

      {/* Project Showcase Section */}

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
              <CircularTextAnimation
                text="evion Ark . Devion Ark . Devion Ark . D"
                radius="40"
                textColor="text-lightPrimary"
              />
              <div className="text-xl absolute w-full h-full top-0 left-0 flex justify-center items-center text-lightPrimary">
                <GoDotFill />
              </div>
            </div>
            <p className="w-full text-lg font-light overflow-hidden pt-5 leading-tight">
              See how we&apos;ve turned challenges into opportunities and ideas
              into impactful solutions. Our case studies showcase real-world
              examples of how we&apos;ve helped businesses grow, optimize
              operations, and achieve their goals. Each story reflects our
              commitment to innovation, collaboration, and delivering measurable
              results.
            </p>
          </div>
        </div>
        <ProjectShowcase />
      </div>

      {/* Testimonial Section */}

      <div className="w-full min-h-[15vh] pb-0 lg:pb-10 bg-black overflow-x-hidden">
        <div className="w-full h-full flex flex-col lg:gap-20 justify-between">
          <div className="w-full h-full ps-5 lg:ps-20 flex flex-row  relative border-b border-gray-700">
            <h2 className="pt-16 lg:pt-40 text-nowrap font-bold text-accentColor font-inter text-[14vw] lg:text-[14.5vw] leading-none text-center border-l-[1px] border-r-[1px] border-gray-700 pb-5 lg:pb-0">
              Clients talk
            </h2>

            <div className="w-full h-full flex items-start">
              <div className="w-full aspect-square bg-lightPrimary text-darkPrimary text-[7vw] lg:text-[5vw] flex justify-center items-center">
                <FiArrowDownLeft />
              </div>
            </div>
          </div>
          <div className="w-full hidden lg:flex flex-col gap-5">
            <div className="w-full">
              <Marquee autoFill={true} pauseOnClick={true}>
                <div className="flex mx-[10px]">
                  <TestimonialCard
                    image="/testimonials/mehedi.webp"
                    name="Syed Mustafa Mehedi"
                    position="Founder & CEO"
                    company="QAHAF"
                    review="With their SEO expertise and digital marketing campaigns, we saw a 200% increase in website traffic within the first quarter. They transformed our online presence and positioned us as an authority in our industry."
                  />
                </div>
                <div className="flex mx-[10px]">
                  <TestimonialCard
                    image="/testimonials/farhan_masum.webp"
                    name="Kazi Farhan Masum"
                    position="Founder & CEO"
                    company="PuppetBrush Digital Solutions"
                    review="Our business grew faster than we imagined after partnering with this agency. They showed obedient behavior and a work friendly attitude. They were always willing to offer their assistance. I wish them every success in their future endeavors."
                  />
                </div>
                <div className="flex mx-[10px]">
                  <TestimonialCard
                    image="/testimonials/rakib.webp"
                    name="Rakib Shikdar"
                    position="Founder & CEO"
                    company="Kick-off The Jersey Galleria"
                    review="They developed an E-commerce web application for my jersey business! The most loveble thing is they actually can understand what clients want and their requirments! Totally satisfied with their works! Their services are highly recommended!"
                  />
                </div>
                <div className="flex mx-[10px]">
                  <TestimonialCard
                    image="/testimonials/azizul.webp"
                    name="MD Azizul Hoque"
                    position="Founder & CEO"
                    company="InterAiD"
                    review="We relied on them for software development, and they exceeded expectations with flawless, reliable solutions. Their rigorous testing ensured a smooth launch with zero downtime—simply outstanding and amazing!"
                  />
                </div>
              </Marquee>
            </div>
            <div className="w-full">
              <Marquee autoFill={true} pauseOnClick={true} direction="right">
                <div className="flex mx-[10px]">
                  <TestimonialCard2
                    image="/testimonials/mehedi.webp"
                    name="Syed Mustafa Mehedi"
                    position="Founder & CEO"
                    company="QAHAF"
                    review="With their SEO expertise and digital marketing campaigns, we saw a 200% increase in website traffic within the first quarter. They transformed our online presence and positioned us as an authority in our industry."
                  />
                </div>
                <div className="flex mx-[10px]">
                  <TestimonialCard2
                    image="/testimonials/farhan_masum.webp"
                    name="Kazi Farhan Masum"
                    position="Founder & CEO"
                    company="PuppetBrush Digital Solutions"
                    review="Our business grew faster than we imagined after partnering with this agency. They showed obedient behavior and a work friendly attitude. They were always willing to offer their assistance. I wish them every success in their future endeavors."
                  />
                </div>
                <div className="flex mx-[10px]">
                  <TestimonialCard2
                    image="/testimonials/rakib.webp"
                    name="Rakib Shikdar"
                    position="Founder & CEO"
                    company="Kick-off The Jersey Galleria"
                    review="They developed an E-commerce web application for my jersey business! The most loveble thing is they actually can understand what clients want and their requirments! Totally satisfied with their works! Their services are highly recommended!"
                  />
                </div>
                <div className="flex mx-[10px]">
                  <TestimonialCard2
                    image="/testimonials/azizul.webp"
                    name="MD Azizul Hoque"
                    position="Founder & CEO"
                    company="InterAiD"
                    review="We relied on them for software development, and they exceeded expectations with flawless, reliable solutions. Their rigorous testing ensured a smooth launch with zero downtime—simply outstanding and amazing!"
                  />
                </div>
              </Marquee>
            </div>
          </div>
          <div className="flex lg:hidden flex-col">
            <div className="border-b border-gray-800 flex flex-col gap-5 px-5 py-5">
              <div className="flex flex-row gap-2">
                <p className=" font-light leading-tight">
                  With their SEO expertise and digital marketing campaigns, we
                  saw a 200% increase in website traffic within the first
                  quarter. They transformed our online presence and positioned
                  us as an authority in our industry.
                </p>
                <div className="text-2xl text-lightPrimary">
                  <CgQuote />
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex flex-col gap-2 items-end">
                  <div className="uppercase text-lightPrimary leading-none">
                    Syed Mustafa Mehedi
                  </div>
                  <div className="flex flex-col gap-1 text-xs font-light leading-none text-end">
                    <div>QAHAF</div>
                    <div>Founder & CEO</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-800 flex flex-col gap-5 px-5 py-5">
              <div className="flex flex-row-reverse items-start gap-2">
                <p className="font-light leading-tight text-end">
                  Our business grew faster than we imagined after partnering
                  with this agency. They showed obedient behavior and a work
                  friendly attitude. They were always willing to offer their
                  assistance. I wish them every success in their future
                  endeavors.
                </p>
                <div className="text-2xl text-lightPrimary ">
                  <CgQuote />
                </div>
              </div>
              <div className="w-full flex justify-start">
                <div className="flex flex-col gap-2">
                  <div className="uppercase text-lightPrimary leading-none">
                    Kazi Farhan Masum
                  </div>
                  <div className="flex flex-col gap-1 text-xs font-light leading-none">
                    <div>PuppetBrush</div>
                    <div>Founder & CEO</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-800 flex flex-col gap-5 px-5 py-5">
              <div className="flex flex-row gap-2">
                <p className="font-light leading-tight">
                  They developed an E-commerce web application for my jersey
                  business! The most loveble thing is they actually can
                  understand what clients want and their requirments! Totally
                  satisfied with their works! Their services are highly
                  recommended!
                </p>
                <div className="text-2xl text-lightPrimary">
                  <CgQuote />
                </div>
              </div>
              <div className="w-full flex justify-end">
                <div className="flex flex-col gap-2 items-end">
                  <div className="uppercase text-lightPrimary leading-none">
                    Rakib Shikder
                  </div>
                  <div className="flex flex-col gap-1 text-xs font-light leading-none text-end">
                    <div>Kick-off - The Jersey Galleria</div>
                    <div>Founder & CEO</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-800 flex flex-col gap-5 px-5 py-5">
              <div className="flex flex-row-reverse items-start gap-2">
                <p className="font-light leading-tight text-end">
                  We relied on them for software development, and they exceeded
                  expectations with flawless, reliable solutions. Their rigorous
                  testing ensured a smooth launch with zero downtime—simply
                  outstanding and amazing!
                </p>
                <div className="text-2xl text-lightPrimary  rotate-">
                  <CgQuote />
                </div>
              </div>
              <div className="w-full flex justify-start">
                <div className="flex flex-col gap-2">
                  <div className="uppercase text-lightPrimary leading-none">
                    Md. Azizul Hoque
                  </div>
                  <div className="flex flex-col gap-1 text-xs font-light leading-none">
                    <div>InterAiD</div>
                    <div>Founder & CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}

      <div className="w-full text-lightSecondary bg-darkSecondary relative overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[40%] flex flex-col">
            <div className="w-full uppercase font-oswald text-[8vw] lg:text-[3.5vw] font-bold flex flex-col gap-2 ps-5 lg:ps-20 pe-5 lg:pe-10 leading-none text-darkSecondary bg-lightPrimary py-5 lg:py-20">
              Frequently Asked{" "}
              <span className="text-accentColor">Questions</span>
              <span>(FAQ)</span>
            </div>
            <div className="w-full aspect-video hidden lg:inline-block bg-black"></div>
          </div>
          <FAQSection />
        </div>
      </div>
    </main>
  );
}
