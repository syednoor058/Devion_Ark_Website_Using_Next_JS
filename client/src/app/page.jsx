import AnimatedText from "@/components/animations/AnimatedText";
import CircularTextAnimation from "@/components/animations/CircularTextAnimation";
import CustomShapeButton from "@/components/buttons/CustomShapeButton";
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
import { GoDotFill } from "react-icons/go";
import { LuArrowUpRight } from "react-icons/lu";
import farhanMasum from "../../public//testimonials/farhan_masum.webp";
import mustafaMehedi from "../../public//testimonials/mehedi.webp";
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
import azizulHoque from "../../public/testimonials/azizul.webp";
import rakibShikdar from "../../public/testimonials/rakib.webp";

function TestimonialCard({ image, name, position, company, review }) {
  return (
    <div className="w-[400px] aspect-video p-5 rounded text-lightSecondary  flex flex-col-reverse gap-3 overflow-hidden">
      <div className="flex flex-row-reverse gap-5 justify-between items-start">
        <div className="flex flex-row-reverse gap-5 items-center">
          <div>
            <div className="w-16 aspect-square rounded-full overflow-hidden relative">
              <Image
                placeholder="blur"
                src={image}
                alt={name}
                className="object-cover"
              />
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
              <Image
                placeholder="blur"
                src={image}
                alt={name}
                className="object-cover"
              />
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
        placeholder="blur"
        src={brandImg}
        alt={brandAlt}
        className="w-full h-full object-fill"
      />
    </div>
  );
}

function ServiceCard({ serviceIndex, serviceTitle, forwardTo }) {
  return (
    <div className="w-full h-full border-x border-b border-gray-800 text-lightPrimary  px-4 lg:px-7 py-5 hover:py-10 lg:hover:py-20 lg:py-10 duration-500 bg-darkPrimary relative group">
      <div className="w-full flex flex-row gap-10 justify-between items-center z-[11]">
        <div className="w-full flex flex-row items-center gap-7 relative z-[11]">
          <p className="w-[5%] lg:w-[8%] font-bold text-[7vw] lg:text-[3.5vw] leading-none text-accentColor font-oswald hidden lg:inline-block">
            {serviceIndex}
          </p>
          <h2 className="text-[7vw] lg:text-[3.5vw] font-oswald font-bold uppercase leading-tight">
            <AnimatedText text={serviceTitle} />
          </h2>
        </div>
        <Link
          href={forwardTo}
          className="text-[7vw] lg:text-[5vw] z-[11] rotate-45 group-hover:rotate-0 duration-500 group-hover:text-accentColor"
        >
          <LuArrowUpRight />
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="font-roboto">
      {/* Landing Section */}

      <div className="w-full h-full bg-darkPrimary bg-gradient-to-t from-darkSecondary to-transparent bg-blend-normal pt-20 lg:pt-16 relative font-light text-lightSecondary pb-10 lg:pb-20">
        <div className="w-full flex flex-col">
          <div className="w-full lg:h-[30vh] flex justify-end items-end px-4 lg:px-20">
            <div className="w-full lg:w-[58%] pb-5">
              <h1 className="text-lightPrimary font-oswald leading-[1.10]  uppercase text-4xl lg:text-6xl">
                Transforming your ideas <br /> into{" "}
                <span className="text-accentColor italic font-bold">
                  digital reality
                </span>
                .
              </h1>
            </div>
          </div>
          <div className="w-full flex flex-col-reverse lg:flex-row gap-5 lg:gap-0 border-b lg:border-t border-lightSecondary/30">
            <div className="w-full lg:w-[43%] flex flex-col">
              <div className="py-5 lg:py-10 flex flex-col gap-5 px-4 lg:px-0 lg:ps-20 lg:pe-10">
                <div className="w-full flex flex-row items-center gap-5">
                  <div className="p-3 aspect-square rounded-full bg-lightPrimary flex justify-center items-center text-darkPrimary font-semibold">
                    SF
                  </div>
                  <div className="flex flex-col gap-1 leading-[1.1]">
                    <p className="text-lightPrimary font-semibold">
                      Md Razibul Hassan
                    </p>
                    <p>Head of Business Development, Sikder Foundation</p>
                  </div>
                </div>
                <p className=" text-lightPrimary">
                  &quot;Working with Devion Ark transformed our real estate
                  operations. Their CRM streamlined our inventory and client
                  management, drastically reducing errors and boosting
                  conversions. Automated workflows and real-time reporting
                  empowered our team to make smart, data-driven decisions. We
                  highly recommend Devion Ark for driving success in our
                  business.&quot;
                </p>
              </div>
              <div className="py-5 lg:py-7 h-full flex items-center px-4 lg:px-0 lg:ps-20 lg:pe-5 border-t border-lightSecondary/30">
                <CustomShapeButton
                  label="Case Study"
                  textStyle="text-lg font-normal text-darkPrimary"
                  paddingX="ps-4 pe-5"
                  paddingY="py-4"
                  fontGap="gap-2"
                  backgroundColor="bg-lightPrimary"
                  hoverBgColor="bg-accentColor"
                  icon={
                    <FiArrowDownLeft className="text-xl text-darkPrimary rotate-45 group-hover:rotate-90 transition duration-[350ms]" />
                  }
                />
              </div>
            </div>
            <div className="w-full lg:w-[57%] h-full flex lg:border-l border-lightSecondary/30 overflow-hidden relative">
              <video
                className="w-full h-full object-cover"
                loop
                muted
                autoPlay
                playsInline
              >
                <source src="/videos/devion_ark_showreel_2024.mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-full bg-darkPrimary bg-gradient-to-t from-darkSecondary to-transparent bg-blend-normal pt-16 relative">
        <div className="w-full h-full flex flex-col pb-10 pt-5 gap-10 lg:gap-16 relative z-[3]">
          <h1 className="w-full px-5 lg:px-20 text-center">
            <span className="text-lightPrimary font-oswald text-[7vw] leading-[1.10] text-center uppercase">
              Transforming Your Ideas <br />
              Into{" "}
              <span className="text-accentColor italic font-bold">
                Digital Reality
              </span>
              .
            </span>
          </h1>
          <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between items-end px-0 lg:px-20">
            <div className="w-full lg:w-[50%] h-full flex flex-row items-end px-5 lg:px-0">
              <p className="pt-0 lg:pt-4 font-light leading-tight text-[5vw] lg:text-[2.5vw]">
                We Deliver Data-Backed SEO, Social Media Campaigns, and Business
                Software Designed to Scale Your Revenue.
              </p>
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-5 rounded-sm">
              <div className="w-full aspect-video overflow-hidden relative rounded-sm">
                <video className="w-full" loop muted autoPlay playsInline>
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
      </div> */}

      {/* Who We Are Section */}

      <div className="w-full lg:h-screen bg-darkSecondary relative font-light text-lightSecondary py-10 lg:py-20">
        <div className="relative z-[3] flex flex-col lg:flex-row  justify-between px-4 lg:px-20">
          <div className="w-full lg:w-[40%] flex flex-col gap-5 lg:gap-16">
            <p className="text-xl lg:text-4xl text-lightPrimary font-medium">
              We are more than just a service provider — we are your{" "}
              <span className="text-accentColor italic">strategic partner</span>
              . Our mission is to empower your business with tailored{" "}
              <span className="text-accentColor italic">digital solutions</span>{" "}
              that drive growth, enhance visibility, and maximize impact.
            </p>
            <div>
              <CustomShapeButton
                label="Learn More"
                textStyle="text-lg font-normal text-darkPrimary"
                paddingX="ps-4 pe-5"
                paddingY="py-4"
                fontGap="gap-2"
                backgroundColor="bg-lightPrimary"
                hoverBgColor="bg-accentColor"
                icon={
                  <FiArrowDownLeft className="text-xl text-darkPrimary rotate-45 group-hover:rotate-90 transition duration-[350ms]" />
                }
              />
            </div>
          </div>
          <div className="w-full h-full lg:absolute top-0 left-0 inset-0 flex justify-center items-center -z-[1]">
            <div className="flex w-full lg:w-auto h-auto lg:h-full aspect-square relative overflow-hidden bg-[url(/gif/metal_glitch.gif)] bg-no-repeat bg-contain lg:translate-x-[12%]"></div>
          </div>
          <div className="w-full lg:w-[30%]">
            <div className="w-full flex flex-col justify-start items-start gap-3 lg:gap-5">
              <AvatarGroup>
                <Avatar
                  alt="Md Azizul Hoque"
                  src="/testimonials/azizul.webp"
                  sx={{ width: 48, height: 48 }}
                />

                <Avatar
                  alt="Syed Mustafa Mehedi"
                  src="/testimonials/mehedi.webp"
                  sx={{
                    width: 48,
                    height: 48,
                  }}
                />

                <Avatar
                  alt="Rakib Shikder"
                  src="/testimonials/rakib.webp"
                  sx={{ width: 48, height: 48 }}
                />
                <Avatar
                  alt="Kazi Farhan Masum"
                  src="/testimonials/farhan_masum.webp"
                  sx={{ width: 48, height: 48 }}
                />
                <Avatar sx={{ width: 48, height: 48, bgcolor: "#121212" }}>
                  8+
                </Avatar>
              </AvatarGroup>
              <div className="overflow-hidden font-light">
                <span className="inline-block">
                  We have{" "}
                  <span className="text-lightPrimary italic">
                    12+ satisfied clients
                  </span>{" "}
                  all around the world. We are empowering business to reach new
                  heights.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className={`w-full px-5 sm:px-7 lg:px-10 xl:px-20 py-10 lg:py-20 bg-darkSecondary bg-fit relative overflow-hidden`}
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 relative z-[5]">
          <div className="w-full lg:w-[65%] flex flex-col gap-10 lg:gap-16">
            <div className="flex flex-row gap-2 lg:gap-3 items-stretch overflow-hidden leading-none">
              <h6 className="uppercase font-light text-base sm:text-lg overflow-hidden">
                <span className="inline-block">Who We Are</span>
              </h6>
              <div className="w-[2px] flex bg-accentColor"></div>
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
          <div className="w-full lg:w-[35%] flex flex-col gap-10 lg:gap-16 justify-end">
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
      </div> */}

      {/* Partners Section */}

      <div className="bg-darkSecondary py-10 lg:py-20 flex flex-col gap-10 lg:gap-16 leading-none w-full h-full lg:px-20 relative border-y border-lightSecondary/15">
        <div className="w-[1px] h-full hidden lg:flex flex-1 absolute bg-lightSecondary top-0 bg-opacity-15"></div>
        <div className="w-[1px] h-full hidden lg:flex flex-1 absolute bg-lightSecondary top-0 left-[50%] bg-opacity-15"></div>
        <div className="w-[1px] h-full hidden lg:flex flex-1 absolute bg-lightSecondary top-0 right-20 bg-opacity-15"></div>
        <h2 className="w-full lg:w-[50%] text-lightPrimary font-bold text-[8vw] lg:text-[3.5vw] uppercase font-oswald px-3 lg:px-0 leading-tight">
          <span className="text-accentColor">Brands</span> we&apos;ve partnered
          with{" "}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-6 relative px-3 lg:px-0">
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

      {/* Our Services Section */}

      <div className="w-full py-10 lg:py-20 flex flex-col bg-darkPrimary gap-5 lg:gap-10 relative overflow-hidden">
        <div className="w-full h-full flex flex-row justify-between absolute top-0 z-[1] overflow-hidden px-5 lg:px-20">
          <div className="w-[1px] h-full bg-gray-800"></div>
          <div className="w-[1px] h-full bg-gray-800"></div>
          <div className="w-[1px] h-full bg-gray-800"></div>
          <div className="w-[1px] h-full bg-gray-800"></div>
        </div>
        <div className="flex flex-col gap-10 lg:gap-16 z-[2]">
          <h6 className="flex flex-row gap-2 lg:gap-3 items-stretch overflow-hidden leading-none px-5 lg:px-20">
            <div className="uppercase font-light text-base sm:text-lg overflow-hidden">
              <span className="inline-block">Our Services</span>
            </div>
            <div className="w-[2px] flex bg-accentColor"></div>
          </h6>
          <h2 className="px-5 lg:px-20 text-[7vw] lg:text-[5.5vw] font-oswald uppercase text-lightPrimary leading-tight font-medium flex flex-col">
            <span>The Solutions that drive</span>
            <span className="text-accentColor font-bold">Your Success</span>
          </h2>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-start px-5  lg:px-20 gap-7 z-[2]">
          <p className="w-full lg:w-[40%] text-base lg:text-lg font-light overflow-hidden leading-tight">
            <span className="block overflow-hidden  backdrop-blur-[1px] py-3 bg-darkPrimary">
              We specialise in developing solutions that help your business
              prosper in the digital age. From intuitive software to attractive
              websites to strategic marketing and flawless testing, we match
              technology with business objectives. Our comprehensive approach
              guarantees that every project we do promotes development,
              increases visibility, and delivers long-term value.
            </span>
          </p>
          <div className="w-full lg:w-[60%] flex flex-row gap-5 items-center justify-end">
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
            />
            <ServiceCard
              serviceIndex="02"
              serviceTitle="Modern Website Development"
              forwardTo=""
            />
            <ServiceCard
              serviceIndex="03"
              serviceTitle="Social Media Marketing"
              forwardTo=""
            />
            <ServiceCard
              serviceIndex="04"
              serviceTitle="Search Engine Marketing"
              forwardTo=""
            />
            <ServiceCard
              serviceIndex="05"
              serviceTitle="Search Engine Optimization"
              forwardTo=""
            />
            <ServiceCard
              serviceIndex="06"
              serviceTitle="Business Consultation"
              forwardTo=""
            />
          </div>
        </div>
      </div>

      {/* Project Showcase Section */}

      <div className="w-full bg-black bg-fit flex flex-col">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between relative overflow-hidden gap-10 lg:gap-0 py-10 lg:py-20">
          <div className="w-full lg:w-[60%] flex flex-col gap-10 lg:gap-16 px-5 lg:px-20">
            <div className="flex flex-row gap-2 lg:gap-3 items-stretch overflow-hidden leading-none">
              <h6 className="uppercase font-light text-base sm:text-lg overflow-hidden">
                <span className="inline-block">Case Studies</span>
              </h6>
              <div className="w-[2px] flex bg-accentColor"></div>
            </div>
            <h2 className="w-full text-[10vw] lg:text-[5.5vw] font-oswald uppercase text-lightPrimary leading-none font-bold flex flex-col">
              <span>Our Works In</span>

              <span className="text-accentColor font-extrabold text-[14vw] lg:text-[6.5vw]">
                Action
              </span>
            </h2>
          </div>
          <div className="w-full lg:w-[40%] flex flex-col gap-10 lg:gap-16 items-end ps-5 lg:ps-0 pe-5 lg:pe-20">
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
            <p className="w-full text-lg font-light overflow-hidden leading-tight">
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
                    image={mustafaMehedi}
                    name="Syed Mustafa Mehedi"
                    position="Founder & CEO"
                    company="QAHAF"
                    review="With their SEO expertise and digital marketing campaigns, we saw a 200% increase in website traffic within the first quarter. They transformed our online presence and positioned us as an authority in our industry."
                  />
                </div>
                <div className="flex mx-[10px]">
                  <TestimonialCard
                    image={farhanMasum}
                    name="Kazi Farhan Masum"
                    position="Founder & CEO"
                    company="PuppetBrush Digital Solutions"
                    review="Our business grew faster than we imagined after partnering with this agency. They showed obedient behavior and a work friendly attitude. They were always willing to offer their assistance. I wish them every success in their future endeavors."
                  />
                </div>
                <div className="flex mx-[10px]">
                  <TestimonialCard
                    image={rakibShikdar}
                    name="Rakib Shikdar"
                    position="Founder & CEO"
                    company="Kick-off The Jersey Galleria"
                    review="They developed an E-commerce web application for my jersey business! The most loveble thing is they actually can understand what clients want and their requirments! Totally satisfied with their works! Their services are highly recommended!"
                  />
                </div>
                <div className="flex mx-[10px]">
                  <TestimonialCard
                    image={azizulHoque}
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
                    image={mustafaMehedi}
                    name="Syed Mustafa Mehedi"
                    position="Founder & CEO"
                    company="QAHAF"
                    review="With their SEO expertise and digital marketing campaigns, we saw a 200% increase in website traffic within the first quarter. They transformed our online presence and positioned us as an authority in our industry."
                  />
                </div>
                <div className="flex mx-[10px]">
                  <TestimonialCard2
                    image={farhanMasum}
                    name="Kazi Farhan Masum"
                    position="Founder & CEO"
                    company="PuppetBrush Digital Solutions"
                    review="Our business grew faster than we imagined after partnering with this agency. They showed obedient behavior and a work friendly attitude. They were always willing to offer their assistance. I wish them every success in their future endeavors."
                  />
                </div>
                <div className="flex mx-[10px]">
                  <TestimonialCard2
                    image={rakibShikdar}
                    name="Rakib Shikdar"
                    position="Founder & CEO"
                    company="Kick-off The Jersey Galleria"
                    review="They developed an E-commerce web application for my jersey business! The most loveble thing is they actually can understand what clients want and their requirments! Totally satisfied with their works! Their services are highly recommended!"
                  />
                </div>
                <div className="flex mx-[10px]">
                  <TestimonialCard2
                    image={azizulHoque}
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
          <div className="w-full lg:w-[40%] flex">
            <h2 className="w-full h-full uppercase font-oswald text-[8vw] lg:text-[6vw] font-bold flex flex-col gap-2 ps-5 lg:ps-20 pe-5 lg:pe-10 leading-none text-darkSecondary bg-lightPrimary py-10 lg:py-20">
              Frequently Asked{" "}
              <span className="text-accentColor">Questions</span>
              <span>(FAQ)</span>
            </h2>
          </div>
          <FAQSection />
        </div>
      </div>
    </main>
  );
}
