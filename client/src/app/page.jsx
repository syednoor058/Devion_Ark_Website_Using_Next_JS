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
import groupPhoto from "../../public/about/old-garage.jpg";
import blogCover from "../../public/blogs_cover/seo-vs-aeo-2025-blog-cover.jpg";
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
import streetSigns from "../../public/street_signs.jpg";
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

function ServiceCard({ serviceTitle, forwardTo }) {
  return (
    <Link href={forwardTo} className="w-full group  ">
      <div className="px-4 lg:px-0 lg:ps-5 lg:pe-20 py-4 lg:py-5 group-hover:py-8 lg:group-hover:py-10 duration-[350ms]  relative overflow-hidden">
        <div className="flex flex-row gap-5 justify-between items-center relative z-[3]">
          <span>
            <LuArrowUpRight className="text-xl lg:text-4xl rotate-45 text-accentColor group-hover:text-darkPrimary group-hover:rotate-0 transition duration-[350ms]" />
          </span>
          <h3 className="text-xl lg:text-4xl inline-block uppercase font-medium text-lightPrimary">
            <AnimatedText text={serviceTitle} hoverText="text-darkPrimary" />
          </h3>
        </div>
        <div className="w-full h-full absolute bg-lightPrimary inset-0 z-[1] -translate-y-full group-hover:translate-y-0 transition duration-[350ms]"></div>
      </div>
    </Link>
  );
}

function MoreBlogCard({ cover, title, date, forwardTo }) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <div className="w-full overflow-hidden relative rounded-sm">
          <Image
            placeholder="blur"
            src={cover}
            alt={title}
            className="w-full object-cover"
          />
        </div>
        <div className="w-full h-[1px] bg-gray-500"></div>
      </div>
      <div>
        <p className="font-light text-base lg:text-lg text-lightSecondary">
          {date}
        </p>
      </div>
      <Link href={forwardTo} className="group">
        <div className="w-full flex flex-row gap-5 justify-between">
          <div className="text-xl lg:text-3xl text-lightPrimary group-hover:underline underline-offset-4 duration-500 leading-tight">
            {title}
          </div>
          <div className="text-3xl lg:text-5xl">
            <LuArrowUpRight className="rotate-45 group-hover:rotate-0 duration-500 text-accentColor font-light" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <main className="font-roboto">
      {/* Landing Section */}

      <div className="w-full h-full bg-darkPrimary pt-10 relative font-light text-lightSecondary pb-10 lg:pb-20">
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-end items-end px-4 lg:px-20">
            <div className="w-full lg:w-[58%] pb-5">
              <h1 className="text-lightPrimary font-bold font-oswald leading-[1.10] text-3xl lg:text-5xl uppercase">
                Transforming your ideas <br /> into{" "}
                <span className="text-accentColor ">digital reality</span>.
              </h1>
            </div>
          </div>
          <div className="w-full flex flex-col-reverse lg:flex-row gap-5 lg:gap-0 border-b lg:border-t border-lightSecondary/30">
            <div className="w-full lg:w-[43%] flex flex-col">
              <div className="py-5 lg:py-10 flex flex-col gap-5 px-4 lg:px-0 lg:ps-20 lg:pe-10">
                <div className="w-full flex flex-row items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-accentColor flex justify-center items-center text-darkPrimary font-semibold">
                    RH
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
            </div>
            <div className="w-full lg:w-[57%] flex lg:border-l border-lightSecondary/30 overflow-hidden relative">
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
          </div>
        </div>
      </div>

      {/* Who We Are Section */}

      <div className="w-full lg:h-screen bg-darkPrimary relative font-light text-lightSecondary py-10 lg:py-20">
        <div className="relative z-[3] flex flex-col lg:flex-row  justify-between px-4 lg:px-20">
          <div className="w-full lg:w-[40%] flex flex-col gap-5 lg:gap-16">
            <p className="text-2xl lg:text-4xl text-lightPrimary font-medium">
              We are more than just a service provider — we are your{" "}
              <span className="text-accentColor ">strategic partner</span>. Our
              mission is to empower your business with tailored{" "}
              <span className="text-accentColor ">digital solutions</span> that
              drive growth, enhance visibility, and maximize impact.
            </p>
            <div>
              <CustomShapeButton
                label="Learn More"
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
          </div>
          <div className="w-full h-full lg:absolute top-0 left-0 inset-0 flex justify-center items-center -z-[1]">
            <div className="flex w-full lg:w-auto h-auto lg:h-full aspect-square relative overflow-hidden bg-[url(https://res.cloudinary.com/de8g5laai/image/upload/v1739692170/metal_glitch_opwjsp.gif)] bg-no-repeat bg-contain lg:translate-x-[12%]"></div>
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
                  <span className="text-lightPrimary ">
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

      {/* Our Services Section */}

      <div className="bg-darkPrimary relative font-light text-lightSecondary">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[40%] border-b border-lightSecondary/30">
            <div className="flex flex-col">
              <div className="w-full aspect-[9/11] relative overflow-hidden">
                <Image
                  placeholder="blur"
                  src={streetSigns}
                  alt="street signs saying one way"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-4 py-5 lg:py-10">
                <div className="w-full flex flex-col gap-5">
                  <div className="flex overflow-hidden">
                    <div className="text-sm uppercase text-lightPrimary font-light ps-3 pe-5 py-2 rounded-full border border-accentColor">
                      <p className="flex flex-row gap-2 items-center">
                        <span>
                          <GoDotFill className="text-xs" />
                        </span>
                        Our Services
                      </p>
                    </div>
                  </div>

                  <p className="text-lg lg:text-base">
                    We specialise in developing solutions that help your
                    business prosper in the digital age. From intuitive software
                    to attractive websites to strategic marketing and flawless
                    testing, we match technology with business objectives. Our
                    comprehensive approach guarantees that every project we do
                    promotes development, increases visibility, and delivers
                    long-term value.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[60%] lg:border border-lightSecondary/30">
            <div className="flex flex-col">
              <div className="">
                <ServiceCard
                  forwardTo=""
                  serviceTitle="Custom Software Solutions"
                />
              </div>
              <div className="border-t border-lightSecondary/30">
                <ServiceCard forwardTo="" serviceTitle="Website Development" />
              </div>
              <div className="border-t border-lightSecondary/30">
                <ServiceCard
                  forwardTo=""
                  serviceTitle="Search Engine Optimization"
                />
              </div>
              <div className="border-t border-lightSecondary/30">
                <ServiceCard
                  forwardTo=""
                  serviceTitle="Social Media Marketing"
                />
              </div>
              <div className="border-t border-lightSecondary/30">
                <ServiceCard
                  forwardTo=""
                  serviceTitle="Search Engine Marketing"
                />
              </div>
              <div className="border-y border-lightSecondary/30">
                <ServiceCard
                  forwardTo=""
                  serviceTitle="Business Consultation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section  */}

      <div className="w-full overflow-hidden relative">
        <Image
          placeholder="blur"
          src={groupPhoto}
          alt="a hiker hiking mountain"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Showcase Section */}

      <div className="bg-darkPrimary flex flex-col leading-none w-full h-full relative font-light text-lightSecondary">
        <div className="flex flex-col lg:flex-row px-4 lg:px-5">
          <div className="w-full flex lg:w-[25%] px-4 lg:px-7 py-5 lg:py-20 border-x border-lightSecondary/30">
            <div className="w-full flex flex-row lg:flex-col justify-between text-base lg:text-lg uppercase">
              <div className="flex overflow-hidden">
                <div className="text-sm uppercase text-lightPrimary font-light ps-3 pe-5 py-2 rounded-full border border-accentColor">
                  <p className="flex flex-row gap-2 items-center">
                    <span>
                      <GoDotFill className="text-xs" />
                    </span>
                    Case Studies
                  </p>
                </div>
              </div>
              <p className="whitespace-nowrap">+{"  "}Featured Works</p>
            </div>
          </div>
          <div className="w-full lg:w-[55%] px-4 lg:px-7 py-5 lg:py-20 border-x border-lightSecondary/30 lg:border-x-0">
            <div className="w-full flex flex-col gap-5 lg:gap-10">
              <h2 className="text-lightPrimary font-oswald leading-[1.10] text-4xl lg:text-5xl font-medium">
                Crafting{" "}
                <span className="text-accentColor ">creative solutions</span> at
                all scales.
              </h2>
              <p className="text-xl lg:text-lg">
                See how we've turned challenges into opportunities and ideas
                into impactful solutions. Our case studies showcase real-world
                examples of how we've helped businesses grow, optimize
                operations, and achieve their goals. Each story reflects our
                commitment to innovation, collaboration, and delivering
                measurable results.
              </p>
            </div>
          </div>
          <div className="w-full flex lg:w-[20%] px-4 lg:px-7 py-5 lg:py-20 border-x  border-lightSecondary/30">
            <div className="w-full flex flex-row lg:flex-col justify-between items-end">
              <div className="w-[30%] lg:w-full flex lg:justify-end">
                <div className="w-full lg:w-[50%] aspect-square rounded-full flex justify-center items-center relative text-lightPrimary">
                  <CircularTextAnimation
                    text="evion Ark . Devion Ark . Devion Ark . D"
                    radius="40"
                    textColor="text-lightPrimary"
                  />
                  <div className="text-xl absolute w-full h-full top-0 left-0 flex justify-center items-center text-lightPrimary">
                    <GoDotFill />
                  </div>
                </div>
              </div>
              <div>
                <CustomShapeButton
                  label="View All"
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
            </div>
          </div>
        </div>
        <ProjectShowcase />
      </div>

      {/* Partners Section */}

      <div className="bg-darkPrimary py-10 lg:py-20 flex flex-col gap-10 lg:gap-16 leading-none w-full h-full lg:px-20 relative border-y-0 border-t lg:border-y border-lightSecondary/30">
        <div className="w-[1px] h-full hidden lg:flex flex-1 absolute bg-lightSecondary/30 top-0"></div>
        <div className="w-[1px] h-full hidden lg:flex flex-1 absolute bg-lightSecondary/30 top-0 left-[50%]"></div>
        <div className="w-[1px] h-full hidden lg:flex flex-1 absolute bg-lightSecondary/30 top-0 right-20 "></div>
        <h2 className="w-full lg:w-[50%] text-lightPrimary font-medium text-4xl lg:text-5xl font-oswald leading-[1.10] px-4">
          The <span className="text-accentColor ">brands</span> we&apos;ve
          partnered with
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-6 relative px-3 lg:px-0">
          <div className="w-full h-full absolute top-0 flex flex-col justify-between">
            <div className="w-full h-[1px] bg-lightSecondary/30"></div>
            <div className="w-full h-[1px] bg-lightSecondary/30"></div>
            <div className="w-full h-[1px] bg-lightSecondary/30"></div>
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

      {/* Testimonial Section */}

      <div className="w-full min-h-[15vh] pb-0 lg:pb-10 bg-black overflow-x-hidden">
        <div className="w-full h-full flex flex-col lg:gap-20 justify-between">
          <div className="w-full h-full ps-4 lg:ps-20 flex flex-row  relative border-b border-lightSecondary/30">
            <h2 className="pt-16 lg:pt-40 text-nowrap font-bold text-accentColor font-inter text-[14vw] lg:text-[14.5vw] leading-none text-center border-l-[1px] border-r-[1px] border-lightSecondary/30 pb-5 lg:pb-0">
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
            <div className="border-b border-lightSecondary/30 flex flex-col gap-5 px-4 py-5">
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
            <div className="border-b border-lightSecondary/30 flex flex-col gap-5 px-5 py-5">
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
            <div className="border-b border-lightSecondary/30 flex flex-col gap-5 px-5 py-5">
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
            <div className="border-b border-lightSecondary/30 flex flex-col gap-5 px-5 py-5">
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

      {/* More Blogs */}
      <div className="w-full px-4 lg:px-20 py-10 lg:py-20 gap-10 flex flex-col bg-darkSecondary">
        <div className="flex overflow-hidden">
          <div className="text-sm uppercase text-lightPrimary font-light ps-3 pe-5 py-2 rounded-full border border-accentColor">
            <p className="flex flex-row gap-2 items-center">
              <span>
                <GoDotFill className="text-xs" />
              </span>
              Latest News
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <MoreBlogCard
            title="SEO vs AEO in 2025: The Future of Search Engine Optimization"
            forwardTo="/blogs/seo-vs-aeo-in-2025-the-future-of-search-engine-optimization"
            date="14 December, 2024"
            cover={blogCover}
          />
        </div>
      </div>

      {/* FAQ Section */}

      <div className="w-full font-light text-lightSecondary text-base lg:text-lg py-10 lg:py-20 px-4 lg:px-20 bg-darkPrimary">
        <div className="flex flex-col gap-10">
          <div className="w-full flex flex-col-reverse lg:flex-row gap-10 justify-between">
            <div className="w-full lg:w-[80%] flex flex-col gap-2 text-4xl lg:text-6xl font-medium font-oswald text-lightPrimary leading-[1.10]">
              <h2>Have doubts?</h2>
              <h2>
                We&apos;re here to{" "}
                <span className=" text-accentColor">answer</span> all.
              </h2>
            </div>
            <div className="w-full h-full lg:w-[20%] flex lg:justify-end items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-dashed border-lightSecondary/30 bg-darkSecondary flex justify-center items-center leading-none">
                06
              </div>
              <div className="flex overflow-hidden">
                <div className="text-sm uppercase text-lightPrimary font-light ps-3 pe-5 py-2 rounded-full border border-accentColor">
                  <p className="flex flex-row gap-2 items-center">
                    <span>
                      <GoDotFill className="text-xs" />
                    </span>
                    FAQ
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex lg:justify-end">
            <div className="w-full lg:w-[70%]">
              <FAQSection />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
