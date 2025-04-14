import AnimatedText from "@/components/animations/AnimatedText";
import CustomShapeBorderButton from "@/components/buttons/CustomShapeBorderButton";
import CustomShapeButton from "@/components/buttons/CustomShapeButton";
import CSRAvatar from "@/components/csrAvatar/CSRAvatar";
import FAQSection from "@/components/faq";
import ProjectShowcase from "@/components/projectShowcase";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import { CgQuote } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { FiArrowDownLeft } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { LuArrowUpRight } from "react-icons/lu";
import { MdOutlineArrowForward } from "react-icons/md";
import farhanMasum from "../../public//testimonials/farhan_masum.webp";
import mustafaMehedi from "../../public//testimonials/mehedi.webp";
import blogCover2 from "../../public/blogs/meta-marketing-2025-cover.webp";
import blogCover1 from "../../public/blogs/seo-vs-aeo-2025-blog-cover.webp";
import groupPhoto from "../../public/old-garage.webp";
import annaKitchen from "../../public/partners/anna_khan_kitchen.webp";
import elevate from "../../public/partners/elevate.webp";
import indigo from "../../public/partners/indigo_company.webp";
import interAidLogo from "../../public/partners/interaid.webp";
import kickOffLogo from "../../public/partners/kick-off.webp";
import moonStudio from "../../public/partners/moon_studio.webp";
import oxw from "../../public/partners/okw.webp";
import puppetbrushLogo from "../../public/partners/puppetbrush.webp";
import qahafLogo from "../../public/partners/qahaf.webp";
import sikderFoundationLogo from "../../public/partners/sikder_foundation.webp";
import sweetCakes from "../../public/partners/sweet_cakes.webp";
import travel from "../../public/partners/travel.webp";
import streetSigns from "../../public/street_signs.webp";
import { default as azizulHoque } from "../../public/testimonials/azizul.webp";
import rakibShikdar from "../../public/testimonials/rakib.webp";

function TestimonialCard({ image, name, position, company, review }) {
  return (
    <div className="w-[500px] p-5 rounded text-lightSecondary  flex flex-col-reverse gap-3 overflow-hidden">
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
      <div className="text-lg font-light leading-tight lg:indent-20">
        {review}
      </div>
    </div>
  );
}

function TestimonialCard2({ image, name, position, company, review }) {
  return (
    <div className="w-[500px] p-5 rounded text-lightSecondary flex flex-col-reverse gap-3 overflow-hidden">
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
      <div className="text-lg font-light leading-tight lg:indent-20">
        {review}
      </div>
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
      <div className="px-4 lg:px-0 lg:ps-5 lg:pe-20 py-5 group-hover:py-8 lg:group-hover:py-10 duration-[350ms]  relative overflow-hidden">
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

function MoreBlogCard({ cover, title = "", forwardTo, date }) {
  const truncatedTitle = title.length > 80 ? title.slice(0, 80) + "..." : title;
  return (
    <div className="w-full flex flex-col gap-3 p-5 bg-black rounded">
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
      <p className="text-sm">{date}</p>
      <Link href={forwardTo} className="group">
        <div className="w-full flex flex-row gap-5 justify-between">
          <div className="text-xl lg:text-2xl text-lightPrimary group-hover:underline underline-offset-4 duration-500">
            {truncatedTitle}
          </div>
          <div className="text-2xl lg:text-4xl">
            <MdOutlineArrowForward className="group-hover:-rotate-45 duration-500 text-accentColor font-light" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.devionark.com/" />
      </Head>
      <main className="font-poppins">
        {/* Landing Section */}

        {/* <div className="w-full pt-5 lg:pt-10 relative font-light text-lightSecondary">
          <div className="w-full h-full flex flex-col justify-end gap-7 lg:gap-10">
            <div className="w-full flex justify-end items-end px-4 lg:px-20">
              <div className="w-full lg:w-[75%] pb-5">
                <h1 className="text-lightPrimary font-bold font-oswald leading-[1.10] text-4xl lg:text-7xl uppercase">
                  Transforming your ideas into{" "}
                  <span className="text-accentColor ">digital reality</span>.
                </h1>
              </div>
            </div>
            <div className="w-full flex flex-col-reverse lg:flex-row gap-5 lg:gap-0 lg:border-b lg:border-t border-lightSecondary/30">
              <div className="w-full lg:w-[55%] flex flex-col py-10 gap-5">
                <div className=" flex flex-col gap-5 px-4 lg:px-0 lg:ps-20 lg:pe-20">
                  <div className="w-full flex flex-col justify-start items-start gap-3 lg:gap-3">
                    <CSRAvatar />
                    <div className="overflow-hidden font-light lg:text-sm leading-tight">
                      <span className="inline-block">
                        We have{" "}
                        <span className="text-lightPrimary">
                          12+ satisfied clients
                        </span>{" "}
                        all around the world.
                      </span>
                    </div>
                  </div>
                  <p className=" text-lightPrimary font-light text-base lg:indent-20">
                    Got a game-changing idea but unsure how to bring it to life?
                    We&apos;re here to bridge that gap. As one of the best
                    tech-driven digital marketing agencies in Bangladesh, we
                    don&apos;t just code – we craft digital solutions that drive
                    sales, simplify workflows, and make your brand
                    unforgettable. Let&apos;s turn your ‘what if&apos; into
                    ‘what&apos;s next.
                  </p>
                </div>
                <div className=" h-full flex items-center px-4 lg:px-0 lg:ps-20 lg:pe-5">
                  <CustomShapeButton
                    forwardTo="/contact"
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
              </div>
              <div className="w-full lg:w-[45%] flex lg:border-l border-lightSecondary/30 overflow-hidden relative">
                <div className="w-full aspect-video relative overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    loop
                    muted
                    autoPlay
                    playsInline
                  >
                    <source src="https://res.cloudinary.com/de8g5laai/video/upload/v1741025624/devion_ark_showreel_2024_ronun7_wbst4z.webm" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="w-full pt-5 pb-10 lg:pt-10 lg:pb-20 relative font-light text-lightSecondary">
          <div className="w-full flex flex-col gap-7 lg:gap-10 px-4 lg:px-20">
            <div className="w-full flex flex-col gap-10">
              <div className="w-full lg:w-[75%]">
                <h1 className="text-lightPrimary font-bold font-oswald leading-[1.10] text-4xl lg:text-7xl uppercase">
                  Transforming your ideas into{" "}
                  <span className="text-accentColor ">digital reality</span>.
                </h1>
              </div>
              <div className="h-full flex flex-row gap-5 items-center">
                <CustomShapeButton
                  forwardTo="/contact"
                  label="Get Started"
                  textStyle="text-lg font-normal text-darkPrimary"
                  paddingX="ps-[10px] pe-[20px]"
                  paddingY="py-[14px]"
                  fontGap="gap-2"
                  backgroundColor="bg-lightPrimary"
                  hoverBgColor="bg-accentColor"
                  icon={
                    <FiArrowDownLeft className="text-xl text-darkPrimary rotate-45 group-hover:rotate-90 transition duration-[350ms]" />
                  }
                />
                <CustomShapeBorderButton
                  text="About Us"
                  forwardTo="/about"
                  bg="bg-lightPrimary"
                  bg2="bg-darkPrimary"
                  padd="ps-[10px] pe-[20px] py-[13px]"
                  textColor="text-lightPrimary"
                />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <div className="w-full lg:w-[40%] flex flex-col gap-5">
                <div className=" flex flex-col gap-5">
                  <div className="w-full flex flex-col justify-start items-start gap-3 lg:gap-3">
                    <CSRAvatar />
                    <div className="overflow-hidden font-light text-lg lg:text-sm leading-tight">
                      <span className="inline-block">
                        We have{" "}
                        <span className="text-lightPrimary">
                          12+ satisfied clients
                        </span>{" "}
                        all around the world.
                      </span>
                    </div>
                  </div>
                  <p className=" text-lightPrimary font-light text-lg lg:text-sm lg:indent-20">
                    Got a game-changing idea but unsure how to bring it to life?
                    We&apos;re here to bridge that gap. As one of the best
                    tech-driven digital marketing agencies in Bangladesh, we
                    don&apos;t just code – we craft digital solutions that drive
                    sales, simplify workflows, and make your brand
                    unforgettable. Let&apos;s turn your ‘what if&apos; into
                    ‘what&apos;s next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex overflow-hidden relative">
          <div className="w-full aspect-video relative overflow-hidden">
            <video
              className="w-full h-full object-cover"
              loop
              muted
              autoPlay
              playsInline
            >
              <source src="https://res.cloudinary.com/de8g5laai/video/upload/v1741025624/devion_ark_showreel_2024_ronun7_wbst4z.webm" />
            </video>
          </div>
        </div>

        {/* Who We Are Section */}

        <div className="w-full bg-darkPrimary relative font-light text-lightSecondary py-20 lg:py-40">
          <div className="flex flex-col-reverse">
            <div className="w-full flex px-4 lg:px-20 lg:justify-end relative z-[5]">
              <div className="w-full lg:w-[80%] flex flex-col gap-5 lg:gap-16">
                <p className="text-lg lg:text-3xl lg:leading-[1.3] text-lightSecondary font-normal indent-20 lg:indent-52">
                  We&apos;re more than a digital service provider company in
                  Bangladesh – we&apos;re your business growth partners.
                  Specializing in custom software development, website
                  solutions, and data-driven digital marketing services, we
                  empower businesses across Dhaka and beyond to outrank
                  competitors, streamline operations, and connect with their
                  audience. Whether you're a startup or an enterprise.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Services Section */}

        <div className="bg-darkPrimary relative font-light text-lightSecondary">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
            <div className="w-full lg:w-[40%] lg:border-b border-lightSecondary/30">
              <div className="flex flex-col">
                <div className="w-full aspect-[9/11] relative overflow-hidden">
                  <Image
                    placeholder="blur"
                    src={streetSigns}
                    alt="street signs saying one way"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-4 py-16 lg:py-10">
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

                    <div className="flex flex-col gap-7">
                      <p className="text-lg lg:text-base lg:indent-28">
                        At Devion Ark, we&apos;re your one-stop digital
                        transformation partner in Bangladesh, blending technical
                        expertise with strategic vision. Whether you need custom
                        software development to automate workflows, a
                        mobile-first website to dominate local search rankings,
                        or data-driven digital marketing services to amplify
                        your brand, we craft solutions that align with your
                        unique goals. Recognized among the best digital
                        marketing agencies in Bangladesh, our holistic approach
                        ensures every project — from code to campaigns — drives
                        growth, visibility, and measurable ROI. No rigid
                        templates, no guesswork — just results tailored to your
                        business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[60%] border border-lightSecondary/30">
              <div className="flex flex-col divide-y-[1px] divide-lightSecondary/30 border-b border-lightSecondary/30">
                <div className="">
                  <ServiceCard
                    forwardTo="/services#custom-software-solutions"
                    serviceTitle="Custom Software Solutions"
                  />
                </div>
                <div>
                  <ServiceCard
                    forwardTo="/services#website-development"
                    serviceTitle="Website Development"
                  />
                </div>

                <div>
                  <ServiceCard
                    forwardTo="/services#social-media-marketing"
                    serviceTitle="Social Media Marketing"
                  />
                </div>
                <div>
                  <ServiceCard
                    forwardTo="/services#search-engine-marketing"
                    serviceTitle="Search Engine Marketing"
                  />
                </div>
                <div className="">
                  <ServiceCard
                    forwardTo="/services#search-engine-optimization"
                    serviceTitle="Search Engine Optimization"
                  />
                </div>
                <div>
                  <ServiceCard
                    forwardTo="/services#business-consultancy"
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
            <div className="w-full flex lg:w-[25%] px-4 lg:px-7 py-10 lg:py-20 border-x border-lightSecondary/30">
              <div className="w-full flex flex-row lg:flex-col justify-between text-base lg:text-lg uppercase items-center lg:items-start gap-5">
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
            <div className="w-full lg:w-[55%] px-4 lg:px-7 py-0 lg:py-20 border-x border-lightSecondary/30 lg:border-x-0">
              <div className="w-full flex flex-col gap-5 lg:gap-10">
                <h2 className="text-lightPrimary font-oswald leading-[1.10] text-4xl lg:text-5xl font-medium">
                  Crafting{" "}
                  <span className="text-accentColor ">creative solutions</span>{" "}
                  at all scales.
                </h2>
                <p className="text-lg lg:indent-40">
                  From startups to nationwide enterprises, our work speaks for
                  itself. We&apos;ve engineered an intuitive e-commerce platform
                  for sportswear brands, boosting sales by 150% through
                  SEO-friendly web development, and built a custom CRM system
                  that automated 70% of manual tasks for real estate
                  professionals. Our strategic social media campaigns
                  transformed a local retailer&apos;s online presence, tripling
                  engagement, while targeted SEO strategies helped a tech
                  startup dominate Google rankings. Every project – whether
                  custom software, websites, or digital marketing services –
                  reflects our commitment to turning challenges into growth.
                  These aren&apos;t just case studies; they&apos;re blueprints
                  for what we can achieve together.
                </p>
              </div>
            </div>
            <div className="w-full flex lg:w-[20%] px-4 lg:px-7 py-10 lg:py-20 border-x  border-lightSecondary/30">
              <div className="w-full h-full flex justify-end lg:items-end">
                <div>
                  <CustomShapeButton
                    forwardTo="/case-studies"
                    label="View All"
                    textStyle="text-lg font-normal text-darkPrimary"
                    paddingX="ps-[10px] pe-[20px]"
                    paddingY="py-[14px]"
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
                    We relied on them for software development, and they
                    exceeded expectations with flawless, reliable solutions.
                    Their rigorous testing ensured a smooth launch with zero
                    downtime—simply outstanding and amazing!
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
        <div className="w-full px-4 lg:px-20 py-10 lg:py-20 gap-10 lg:gap-20 flex flex-col bg-darkSecondary">
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
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
            <MoreBlogCard
              title="SEO vs AEO in 2025: The Future of Search Engine Optimization"
              forwardTo="/blogs/seo-vs-aeo-in-2025-the-future-of-search-engine-optimization"
              date="14 December, 2024"
              cover={blogCover1}
            />
            <MoreBlogCard
              title="Meta Marketing Best Practices for 2025: Achieve Over 150%
                  Business Growth"
              forwardTo="/blogs/meta-marketing-best-practices-for-2025"
              date="30 November, 2024"
              cover={blogCover2}
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
    </>
  );
}
