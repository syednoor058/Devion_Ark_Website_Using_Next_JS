import TextAnimation from "@/components/animations/TextAnimation";
import CustomShapeButton from "@/components/buttons/CustomShapeButton";
import CSRAvatar from "@/components/csrAvatar/CSRAvatar";
import FAQSection from "@/components/faq";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { AiFillProject } from "react-icons/ai";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import { CgQuote } from "react-icons/cg";
import { FaGlobeAmericas, FaStar } from "react-icons/fa";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { MdKeyboardArrowRight, MdOutlineArrowForward } from "react-icons/md";
import farhanMasum from "../../public//testimonials/farhan_masum.webp";
import mustafaMehedi from "../../public//testimonials/mehedi.webp";
import blogCover2 from "../../public/blogs/meta-marketing-2025-cover.webp";
import blogCover1 from "../../public/blogs/seo-vs-aeo-2025-blog-cover.webp";
import heroSectionImg from "../../public/hero_section_image.png";
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
import ecommerceWebImg from "../../public/projects/ecommerce_web_img.png";
import realEstateProjectImg from "../../public/projects/real_estate_background_grid.png";
import seeMoreImg from "../../public/projects/see_more_img.png";
import customeSoftwareIcon from "../../public/services/icons/code.png";
import businessConsultancyIcon from "../../public/services/icons/conversation.png";
import seoIcon from "../../public/services/icons/seo.png";
import marketingIcon from "../../public/services/icons/social-media (1).png";
import socialMediaIcon from "../../public/services/icons/social-media.png";
import websiteDesignIcon from "../../public/services/icons/web-design.png";
import serviceBackgroundImg from "../../public/services/service_background.png";
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

function ServiceCard2({ serviceTitle, forwardTo, serviceIcon, serviceDesc }) {
  return (
    <div
      className="w-full p-7 text-darkSecondary bg-lightPrimary hover:bg-accentColor2 hover:text-lightPrimary lg:hover:scale-105 transition-all duration-[350ms] group"
      style={{
        clipPath: `polygon(40px 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, calc(100% - 40px) 100%, 40px 100%, 0px 100%, 0px 0px)`,
      }}
    >
      <div className="w-full h-full flex flex-col justify-between gap-5">
        <div className="w-full flex flex-col gap-7">
          <div className="w-[60px] aspect-square relative overflow-hidden">
            <Image
              placeholder="blur"
              src={serviceIcon}
              alt="hero section image"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-[27px] lg:text-2xl font-semibold leading-tight text-accentColor2 group-hover:text-lightPrimary">
              {serviceTitle}
            </h4>
            <p className=" font-light text-base lg:text-sm leading-[1.2]">
              {serviceDesc}
            </p>
          </div>
        </div>
        <div>
          <Link href={forwardTo} className="flex">
            <div
              className="flex flex-row items-center gap-2 ps-5 pe-2 py-2 rounded-sm bg-accentColor2 group-hover:bg-lightPrimary
             text-lightPrimary group-hover:text-darkSecondary transition-all duration-[350px]"
            >
              <span>Learn More</span>
              <MdKeyboardArrowRight className="text-xl" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function MoreBlogCard({ cover, title = "", forwardTo, date }) {
  const truncatedTitle = title.length > 80 ? title.slice(0, 80) + "..." : title;
  return (
    <div className="w-full flex flex-col gap-5 p-5 bg-black/80 hover:bg-accentColor2 lg:hover:scale-105 transition-all duration-[350ms] rounded-md justify-between group">
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
          <div className="w-full h-[1px] bg-gray-500 group-hover:bg-lightPrimary transition-all duration-[200ms]"></div>
        </div>
        <p className="text-sm text-gray-500 group-hover:text-lightPrimary transition-all duration-[200ms]">
          {date}
        </p>
      </div>
      <Link href={forwardTo} className="group">
        <div className="w-full flex flex-row gap-5 justify-between">
          <div className="text-xl lg:text-lg text-lightPrimary group-hover:underline underline-offset-4 duration-500">
            {truncatedTitle}
          </div>
          <div className="text-2xl">
            <MdOutlineArrowForward className="group-hover:-rotate-45 duration-500 text-accentColor group-hover:text-lightPrimary transition-all font-light" />
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

        <div className="w-full lg:min-h-screen pt-10 pb-20 lg:pt-10 lg:pb-20 relative font-light text-lightSecondary px-4 lg:px-20 flex justify-center items-center">
          <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
            <div className="w-full lg:w-[55%]">
              <div className="w-full flex flex-col gap-16 lg:gap-16">
                <div className="w-full flex flex-col gap-6 lg:gap-10">
                  <div className="w-full">
                    <h1 className="text-lightPrimary font-bold font-oswald leading-[1.2] text-4xl lg:text-6xl">
                      Transforming your ideas into{" "}
                      <span className="text-accentColor ">digital reality</span>
                      .
                    </h1>
                  </div>
                  <div className="h-full flex flex-row gap-5 items-center">
                    <CustomShapeButton
                      forwardTo="/contact"
                      label="Get Started"
                      textStyle="text-base font-light text-lightPrimary"
                      paddingX="ps-4 pe-6"
                      paddingY="py-5"
                      fontGap="gap-2"
                      backgroundColor="bg-accentColor"
                      hoverBgColor="bg-accentColor2"
                      icon={
                        <FiArrowDownLeft className="text-lg text-lightPrimary rotate-45 group-hover:rotate-90 transition duration-[350ms]" />
                      }
                    />
                    <div className="flex">
                      <Link
                        href="/about"
                        className="flex flex-row gap-2 items-center text-accentColor hover:text-accentColor2 ps-5 pe-3 py-[19px] border border-accentColor hover:border-accentColor2 group"
                      >
                        <span>
                          <TextAnimation
                            text="About us"
                            hoverText="text-accentColor2"
                          />
                        </span>
                        <MdKeyboardArrowRight className="text-xl" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full flex">
                  <div className="w-full flex flex-col gap-5">
                    <div className=" flex flex-col gap-5">
                      <div className="w-full flex flex-col justify-start items-start gap-3 lg:gap-3">
                        <CSRAvatar />
                        <div className="overflow-hidden font-light text-lg lg:text-sm leading-tight">
                          <span className="inline-block">
                            We have{" "}
                            <span className="text-accentColor font-bold">
                              12+ satisfied clients
                            </span>{" "}
                            all around the world.
                          </span>
                        </div>
                      </div>
                      <p className=" text-lightSecondary font-light text-lg lg:text-sm">
                        Got a game-changing idea but unsure how to bring it to
                        life? We&apos;re here to bridge that gap. As one of the
                        best tech-driven digital marketing agencies in
                        Bangladesh, we don&apos;t just code – we craft digital
                        solutions that drive sales, simplify workflows, and make
                        your brand unforgettable. Let&apos;s turn your ‘what
                        if&apos; into ‘what&apos;s next.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[45%]">
              <div className="w-full relative overflow-hidden">
                <Image
                  placeholder="blur"
                  src={heroSectionImg}
                  alt="hero section image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
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

        {/* What We Do Section */}

        <div className="w-full bg-darkPrimary relative font-light text-lightSecondary pt-10 pb-7 lg:pt-40 lg:pb-20">
          <div className="flex flex-col-reverse">
            <div className="w-full flex flex-col gap-10 px-4 lg:px-20 justify-center items-center relative z-[5]">
              <div className="w-full flex flex-col gap-5 lg:text-center">
                <div className="w-full flex flex-col gap-5 justify-center lg:items-center">
                  <div className="flex overflow-hidden">
                    <div className="text-sm uppercase text-lightPrimary font-light ps-3 pe-5 py-2 rounded-full border border-accentColor">
                      <h3 className="flex flex-row gap-2 items-center">
                        <span>
                          <GoDotFill className="text-xs" />
                        </span>
                        What We Do
                      </h3>
                    </div>
                  </div>
                </div>
                <h2 className="font-oswald text-4xl lg:text-6xl font-semibold leading-[1.2] text-lightPrimary">
                  It's not who we are{" "}
                  <span className="text-accentColor">underneath</span>,<br></br>{" "}
                  It's what we do that{" "}
                  <span className="text-accentColor">defines</span> us.
                </h2>
              </div>
              <div className="w-full lg:w-[80%] flex flex-col gap-5 lg:gap-16 lg:text-center">
                <p className="text-lg lg:text-xl lg:leading-[1.3] text-lightSecondary font-light">
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

        <div className="w-full bg-darkPrimary relative font-light text-lightSecondary pb-20 lg:pb-40 lg:px-20">
          <div className="w-full px-4 lg:px-20 lg:py-20 rounded-lg lg:bg-darkSecondary relative overflow-hidden">
            <div className="w-full h-full absolute z-[2] top-0 left-0 opacity-40">
              <div className="w-full h-full relative overflow-hidden">
                <Image
                  placeholder="blur"
                  src={serviceBackgroundImg}
                  alt="service background image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 relative z-[5]">
              <ServiceCard2
                serviceTitle="Custome Software Solution"
                serviceDesc="Every business has unique needs. Custom software solutions improve efficiency, automate workflows, and solve specific challenges."
                forwardTo="/services#custom-software-solutions"
                serviceIcon={customeSoftwareIcon}
              />
              <ServiceCard2
                serviceTitle="Website Design"
                serviceDesc="Every business has unique needs. Custom software solutions improve efficiency, automate workflows, and solve specific challenges."
                forwardTo="/services#website-development"
                serviceIcon={websiteDesignIcon}
              />
              <ServiceCard2
                serviceTitle="Social Media Marketing"
                serviceDesc="Every business has unique needs. Custom software solutions improve efficiency, automate workflows, and solve specific challenges."
                forwardTo="/services#social-media-marketing"
                serviceIcon={socialMediaIcon}
              />
              <ServiceCard2
                serviceTitle="Search Engine Marketing"
                serviceDesc="Every business has unique needs. Custom software solutions improve efficiency, automate workflows, and solve specific challenges."
                forwardTo="/services#search-engine-marketing"
                serviceIcon={marketingIcon}
              />
              <ServiceCard2
                serviceTitle="Search Engine Optimization"
                serviceDesc="Every business has unique needs. Custom software solutions improve efficiency, automate workflows, and solve specific challenges."
                forwardTo="/services#search-engine-optimization"
                serviceIcon={seoIcon}
              />
              <ServiceCard2
                serviceTitle="Business Consultancy"
                serviceDesc="Every business has unique needs. Custom software solutions improve efficiency, automate workflows, and solve specific challenges."
                forwardTo="/services#business-consultancy"
                serviceIcon={businessConsultancyIcon}
              />
            </div>
          </div>
        </div>

        {/* Testimonial Section */}

        <div className="w-full min-h-[15vh] pb-0 lg:pb-10 bg-darkPrimary overflow-x-hidden border-y border-lightSecondary/30">
          <div className="w-full h-full flex flex-col lg:gap-20 justify-between">
            <div className="w-full h-full ps-4 lg:ps-20 flex flex-row  relative border-b border-lightSecondary/30">
              <h2 className="pt-16 lg:pt-40 text-nowrap font-bold text-accentColor2 font-inter text-[12vw] lg:text-[14.5vw] leading-none text-center border-l-[1px] border-r-[1px] border-lightSecondary/30 pb-5 lg:pb-0">
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

        {/* Project Showcase Section */}

        <div className="w-full bg-darkPrimary relative font-light text-lightSecondary pt-10 pb-7 lg:pt-40 lg:pb-20">
          <div className="flex flex-col-reverse">
            <div className="w-full flex flex-col gap-10 px-4 lg:px-20 justify-center items-center relative z-[5]">
              <div className="w-full flex flex-col gap-5 lg:text-center">
                <div className="w-full flex flex-col gap-5 justify-center lg:items-center">
                  <div className="flex overflow-hidden">
                    <div className="text-sm uppercase text-lightPrimary font-light ps-3 pe-5 py-2 rounded-full border border-accentColor">
                      <h3 className="flex flex-row gap-2 items-center">
                        <span>
                          <GoDotFill className="text-xs" />
                        </span>
                        Featured Projects
                      </h3>
                    </div>
                  </div>
                </div>
                <h2 className="font-oswald text-4xl lg:text-6xl font-semibold leading-[1.2] text-lightPrimary">
                  Crafting{" "}
                  <span className="text-accentColor">creative solutions</span>{" "}
                  at all scales.
                </h2>
              </div>
              <div className="w-full lg:w-[80%] flex flex-col gap-5 lg:gap-16 lg:text-center">
                <p className="text-lg lg:text-xl lg:leading-[1.3] text-lightSecondary font-light">
                  From startups to nationwide enterprises, our work speaks for
                  itself. We've engineered an intuitive e-commerce platform for
                  sportswear brands, boosting sales by 150% through SEO-friendly
                  web development, and built a custom CRM system that automated
                  70% of manual tasks for real estate professionals. Our
                  strategic social media campaigns transformed a local
                  retailer's online presence, tripling engagement, while
                  targeted SEO strategies helped a tech startup dominate Google
                  rankings.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-darkPrimary relative font-light text-lightSecondary px-4 pb-20 lg:pb-40 lg:px-20">
          <div className="w-full flex flex-col gap-5 lg:gap-7">
            <div className="w-full h-full rounded-2xl bg-black flex flex-col lg:flex-row lg:gap-10 overflow-hidden">
              <div className="w-full lg:w-[60%] px-5 pt-10 lg:px-10 lg:pt-10 lg:pb-10 flex items-center">
                <div className="w-full flex flex-col gap-5 lg:gap-10">
                  <div className=" flex">
                    <p className="px-6 py-2 bg-accentColor2 text-lightPrimary font-light rounded-full">
                      Custom Software Solutions
                    </p>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-semibold text-lightPrimary leading-[1.2]">
                    All-In-One Real Estate Management System
                  </h3>
                  <p className="text-base font-light text-lightSecondary/60">
                    Automated lead management for a Dhaka agency, slashing
                    manual tasks by 70% with our custom software development
                    expertise.
                  </p>
                  <Link
                    href="/contact"
                    className="flex flex-row gap-2 items-center text-accentColor2"
                  >
                    <span>Start now</span>
                    <MdKeyboardArrowRight className="text-xl" />
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-[40%] pt-10">
                <div className="w-full relative overflow-hidden">
                  <Image
                    placeholder="blur"
                    src={realEstateProjectImg}
                    alt="real estate management project"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-7 ">
              <div className="w-full lg:w-[70%] rounded-md bg-[#1f1346] overflow-hidden">
                <div className="w-full flex flex-col lg:flex-row gap-10">
                  <div className="w-full lg:w-[65%] px-5 pt-10 lg:px-10 lg:pt-10 lg:pb-10">
                    <div className="w-full flex flex-col gap-5 lg:gap-10">
                      <div className=" flex">
                        <p className="px-6 py-2 bg-[#2f1c6a] text-accentColor font-light rounded-full">
                          E-commerce Web Application
                        </p>
                      </div>
                      <h3 className="text-3xl font-semibold text-lightPrimary leading-[1.2]">
                        Sportswear E-commerce Web Application
                      </h3>
                      <p className="text-base font-light text-lightSecondary/60">
                        Automated lead management for a Dhaka agency, slashing
                        manual tasks by 70% with our custom software development
                        expertise.
                      </p>
                      <Link
                        href="/contact"
                        className="flex flex-row gap-2 items-center text-accentColor"
                      >
                        <span>Start now</span>
                        <MdKeyboardArrowRight className="text-xl" />
                      </Link>
                    </div>
                  </div>
                  <div className="w-full lg:w-[35%] pt-10 flex items-end">
                    <div className="w-full relative overflow-hidden">
                      <Image
                        placeholder="blur"
                        src={ecommerceWebImg}
                        alt="ecommerce web application project"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[30%] flex bg-[#8c85ff] rounded-md px-5 pt-10 pb-10 lg:px-10 lg:pt-10 lg:pb-10 text-lightPrimary relative overflow-hidden">
                <div className="w-full h-full absolute z-[2] bottom-0 left-0">
                  <div className="w-full h-full flex items-end">
                    <div className="w-[50%]">
                      <div className="w-full relative overflow-hidden">
                        <Image
                          placeholder="blur"
                          src={seeMoreImg}
                          alt="see more bg img"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-20 justify-between relative z-[5]">
                  <div className="w-full flex gap-10 justify-between items-center">
                    <div className="flex p-2 rounded-md bg-accentColor2 ">
                      <FaGlobeAmericas className="text-xl" />
                    </div>
                    <div className="flex">
                      <FiArrowUpRight className="text-3xl" />
                    </div>
                  </div>
                  <div className="text-xl font-normal leading-[1.2]">
                    Find a project that will help your business stand out.
                  </div>
                  <div className="w-full flex justify-center">
                    <Link
                      href="/case-studies"
                      className="flex flex-row gap-2 px-3 py-2 bg-lightPrimary rounded-sm"
                    >
                      <AiFillProject className="text-xl text-green-400" />
                      <span className="text-sm font-normal text-darkSecondary">
                        See all our projects
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Blogs */}
        <div className="w-full px-4 lg:px-20 gap-7 lg:gap-20 flex flex-col bg-darkPrimary">
          <div className="w-full flex flex-col gap-10">
            <div className="w-full flex flex-col gap-5">
              <div className="w-full flex flex-col gap-5 justify-center">
                <div className="flex overflow-hidden">
                  <div className="text-sm uppercase text-lightPrimary font-light ps-3 pe-5 py-2 rounded-full border border-accentColor">
                    <h3 className="flex flex-row gap-2 items-center">
                      <span>
                        <GoDotFill className="text-xs" />
                      </span>
                      Latest News
                    </h3>
                  </div>
                </div>
              </div>
              <h2 className="font-oswald text-4xl lg:text-6xl font-semibold leading-[1.2] text-lightPrimary">
                Always keep <span className="text-accentColor">up-to-date</span>
                .
              </h2>
            </div>
            <div className="w-full flex flex-col gap-5 lg:gap-16">
              <p className="text-lg lg:text-xl lg:leading-[1.3] text-lightSecondary font-light">
                Welcome to the Devion Ark Blog, your resource for cutting-edge
                trends, expert tips, and actionable strategies in digital
                transformation. Here, we share real-world success stories and
                industry insights that empower you to drive growth and enhance
                your online presence.
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7">
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
            <MoreBlogCard
              title="SEO vs AEO in 2025: The Future of Search Engine Optimization"
              forwardTo="/blogs/seo-vs-aeo-in-2025-the-future-of-search-engine-optimization"
              date="14 December, 2024"
              cover={blogCover1}
            />
          </div>
        </div>

        {/* FAQ Section */}

        <div className="w-full font-light text-lightSecondary text-base lg:text-lg pt-20 pb-10 lg:pb-20 lg:pt-40 px-4 lg:px-20 bg-darkPrimary">
          <div className="flex flex-col gap-10 lg:gap-20">
            <div className="w-full flex flex-col-reverse lg:flex-row gap-10 justify-between">
              <div className="w-full lg:w-[80%] flex flex-col gap-2 leading-[1.10]">
                <h2 className="font-oswald text-4xl lg:text-6xl font-semibold leading-[1.2] text-lightPrimary">
                  Have doubts?
                </h2>
                <h2 className="font-oswald text-4xl lg:text-6xl font-semibold leading-[1.2] text-lightPrimary">
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
