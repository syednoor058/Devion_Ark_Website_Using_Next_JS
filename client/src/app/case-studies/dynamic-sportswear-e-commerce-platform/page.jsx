import TextAnimation from "@/components/animations/TextAnimation";
import CustomShapeButton from "@/components/buttons/CustomShapeButton";
import ImageSlider from "@/components/slider/ImageSlider";
import Head from "next/head";
import Image from "next/image";
import { BsDatabaseCheck, BsRobot } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiArrowDownLeft } from "react-icons/fi";
import { LiaStoreAltSolid } from "react-icons/lia";
import shaedImg from "../../../../public/owners/syed_shaeduzzaman_noor.png";
import kickOffLogo from "../../../../public/partners/kick-off.png";
import projectBackground from "../../../../public/projects/sportswear_ecommerce/background.jpg";
import mobileFirstImg from "../../../../public/projects/sportswear_ecommerce/mobile-first.jpg";
import dataOptm1 from "../../../../public/projects/sportswear_ecommerce/opt1.jpg";
import dataOptm2 from "../../../../public/projects/sportswear_ecommerce/opt2.jpg";
import scaleDev1 from "../../../../public/projects/sportswear_ecommerce/scale1.jpg";
import scaleDev2 from "../../../../public/projects/sportswear_ecommerce/scale2.jpg";
import slider1 from "../../../../public/projects/sportswear_ecommerce/slider1.jpg";
import slider2 from "../../../../public/projects/sportswear_ecommerce/slider2.jpg";
import slider3 from "../../../../public/projects/sportswear_ecommerce/slider3.jpg";
import rakibImg from "../../../../public/testimonials/rakib.webp";

export const metadata = {
  title:
    "Dynamic Sportswear E-Commerce Platform | Online Products And Sales Management – Devion Ark",
  description:
    "Struggling with outdated e-commerce systems? Explore how our sportswear web app boosted client sales by 150% and 40% lower cart abandonment with admin dashboards, payment gateways & mobile optimization.",
};

function DynamicECommerce() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://www.devionark.com/case-studies/dynamic-sportswear-e-commerce-platform/"
        />
      </Head>
      <main className="font-poppins">
        {/* Landing Section  */}

        <div className="w-full min-h-[calc(100vh-60px)] bg-darkPrimary flex items-end pt-10 lg:pt-20 text-lightSecondary font-light">
          <div className="flex flex-col gap-10 lg:gap-16">
            <div className="w-full px-4 lg:px-20">
              <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16">
                <div className="w-full lg:lg:w-[70%] flex flex-col gap-10">
                  <h1 className="w-full text-lightPrimary text-4xl lg:text-7xl font-semibold font-oswald leading-none">
                    Dynamic sportswear{" "}
                    <span className="text-accentColor font-bold leading-none">
                      e-commerce
                    </span>{" "}
                    platform
                  </h1>
                  <div className="w-full lg:w-[60%] text-base lg:text-lg">
                    <div className="w-full flex flex-row gap-5 justify-between">
                      <div className="flex flex-col gap-2">
                        <div>
                          <p>Vendor</p>
                        </div>
                        <div>
                          <p>Category</p>
                        </div>
                        <div>
                          <p>Timeframe</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 text-lightPrimary">
                        <div>
                          <p>Kick-Off: The Jersey Galleria</p>
                        </div>
                        <div>
                          <p>E-commerce, Online shop</p>
                        </div>
                        <div>
                          <p>1 Months 27 Days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[30%] p-2 bg-darkSecondary rounded aspect-square">
                  <div className="w-full aspect-square overflow-hidden flex justify-center items-center">
                    <ImageSlider images={[slider1, slider2, slider3]} />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-10 justify-between px-4 lg:px-20">
              <div>
                <CustomShapeButton
                  label="Go Back"
                  forwardTo="/case-studies"
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
              <div className="w-full lg:w-[40%]">
                <p className=" text-xl lg:text-lg font-light lg:leading-normal lg:indent-20">
                  A modern e-commerce platform designed to empower a local
                  sportswear business with seamless product management, secure
                  transactions, and a user-friendly shopping experience.
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full aspect-video overflow-hidden relative">
                <video
                  className="w-full h-full object-cover"
                  loop
                  muted
                  autoPlay
                  playsInline
                >
                  <source src="https://res.cloudinary.com/de8g5laai/video/upload/v1739988780/sportswear_ecommerce_promo_video_fmbpaj.mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="w-full  px-5 lg:px-20 py-10 lg:py-20 bg-black">
          <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16">
            <div className="w-full lg:w-[50%]">
              <div className="w-full flex flex-col gap-5 lg:gap-10">
                <div className="font-light text-lightSecondary text-xl">
                  <h3>Overview</h3>
                </div>
                <div className="">
                  <p className="font-medium text-[7vw] lg:text-[2.5vw] text-lightPrimary leading-tight ">
                    Kick-Off, the jersey galleria is a up-growing local{" "}
                    <span className="text-accentColor">sportswear company</span>{" "}
                    established in 2023. Their main business motive is to
                    deliver qualityful and unique sports kits and accessories{" "}
                    <span className="text-accentColor">
                      all over Bangladesh
                    </span>{" "}
                    within a very short period of time and less costs.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[50%]">
              <div className="w-full flex flex-col gap-5 lg:gap-10">
                <div className="w-full flex flex-col gap-5 lg:gap-10">
                  <div className="font-light text-lightSecondary text-xl">
                    <h3>Deliverables</h3>
                  </div>
                  <div className="w-full flex flex-wrap gap-1 lg:gap-2 text-xs lg:text-sm">
                    <div className="font-light  px-3 py-2 rounded-full bg-darkSecondary text-lightPrimary">
                      Admin Dashboard
                    </div>
                    <div className="font-light  px-3 py-2 rounded-full bg-darkSecondary text-lightPrimary">
                      Ordering System
                    </div>
                    <div className="font-light   px-3 py-2 rounded-full bg-darkSecondary text-lightPrimary">
                      Inventory Tracking
                    </div>
                    <div className="font-light  px-3 py-2 rounded-full bg-darkSecondary text-lightPrimary">
                      Data Analytics
                    </div>
                    <div className="font-light  px-3 py-2 rounded-full bg-darkSecondary text-lightPrimary">
                      Authentication
                    </div>
                    <div className="font-light  px-3 py-2 rounded-full bg-darkSecondary text-lightPrimary">
                      Mobile-Responsive Design
                    </div>
                    <div className="font-light   px-3 py-2 rounded-full bg-darkSecondary text-lightPrimary">
                      Data Security
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Section  */}
        <div className="w-full px-5 lg:px-20 py-10 lg:py-20 bg-black">
          <div className="w-full flex flex-col gap-10 lg:gap-16">
            <div className="w-full text-lightPrimary font-bold font-oswald text-4xl lg:text-6xl flex flex-col gap-5 leading-none">
              <h2>Impact</h2>
              <div className="w-full h-[1px] bg-lightSecondary/30"></div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="flex flex-col gap-5">
                <div className="flex">
                  <div className="block text-accentColor text-4xl lg:text-6xl font-bold font-oswald">
                    150%
                  </div>
                </div>
                <div className="text-2xl leading-none font-medium text-lightPrimary">
                  <h4 className="leading-tight">Online sales growth</h4>
                </div>
                <div className="font-light text-lightSecondary">
                  <p>
                    Our platform streamlined product discovery and checkout,
                    driving repeat purchases and customer loyalty.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex">
                  <div className="block rounded-2xl text-accentColor text-4xl lg:text-6xl font-bold font-oswald">
                    40%
                  </div>
                </div>
                <div className="text-2xl leading-none font-medium text-lightPrimary">
                  <h4 className="leading-tight">Reduced cart abandonment</h4>
                </div>
                <div className=" font-light text-lightSecondary">
                  <p>
                    Simplified checkout flow and multiple payment options
                    improved conversion rates.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex">
                  <div className="block rounded-2xl text-accentColor text-4xl lg:text-6xl font-bold font-oswald">
                    90%
                  </div>
                </div>
                <div className="text-2xl leading-none font-medium text-lightPrimary">
                  <h4 className="leading-tight">Faster product updates</h4>
                </div>
                <div className=" font-light text-lightSecondary">
                  <p>
                    Admin tools enabled real-time inventory and pricing
                    adjustments, along with order management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Desc Section 1  */}
        <div className="w-full px-5 lg:px-20 py-10 lg:py-20 bg-black flex flex-col ">
          <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 pb-10 lg:pb-20">
            <div className="w-full lg:w-[50%] flex flex-col gap-10">
              <div className="w-full text-lightPrimary font-medium font-oswald text-4xl lg:text-5xl leading-tight">
                <h2>Project background</h2>
              </div>
              <div className="font-light text-base lg:text-xl text-lightSecondary">
                <p>
                  Our client, a growing local sportswear brand, struggled with
                  outdated systems that couldn&apos;t handle dynamic inventory
                  updates or secure online payments. Their existing platform
                  lacked mobile optimization and real-time analytics, leading to
                  missed sales opportunities. We developed a custom e-commerce
                  solution to modernize their operations and scale their digital
                  presence.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[50%]">
              <div className="w-full rounded-sm overflow-hidden relative">
                <Image
                  placeholder="blur"
                  src={projectBackground}
                  alt="crm system project background"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 pt-10 lg:pt-20">
            <div className="w-full lg:w-[50%] flex flex-col gap-10">
              <div className="w-full text-lightPrimary font-medium font-oswald ">
                <h3 className="text-4xl lg:text-5xl leading-none">
                  Optimized data management
                </h3>
              </div>
              <div className="font-light text-base lg:text-xl text-lightSecondary">
                <p>
                  The client&apos;s existing website relied on manual inventory
                  updates and lacked mobile optimization, leading to
                  inconsistent product displays and a 50% cart abandonment rate.
                  With no real-time analytics or secure payment gateways, they
                  struggled to compete in Dhaka&apos;s fast-paced sportswear
                  market. Our goal was clear: build a future-proof platform that
                  simplified operations while converting browsers into loyal
                  customers.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[50%] flex flex-row gap-5 justify-between">
              <div className="w-auto h-auto rounded-sm overflow-hidden relative">
                <Image
                  placeholder="blur"
                  src={dataOptm1}
                  alt="crm system optimized data"
                  className="w-auto h-auto object-cover"
                />
              </div>
              <div className="w-auto h-auto rounded-sm overflow-hidden relative">
                <Image
                  placeholder="blur"
                  src={dataOptm2}
                  alt="crm system optimized data (2)"
                  className="w-auto h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features  */}
        <div className="w-full px-5 lg:px-20 py-10 lg:py-20 bg-black flex flex-col gap-10 lg:gap-20">
          <div className="w-full text-lightPrimary font-bold font-oswald text-4xl lg:text-6xl flex flex-col gap-5 leading-none">
            <h2>Features</h2>
            <div className="w-full h-[1px] bg-lightSecondary/30"></div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex">
                <div className="p-5 block rounded-2xl bg-darkSecondary text-accentColor text-4xl">
                  <LiaStoreAltSolid />
                </div>
              </div>
              <div className="text-2xl leading-none font-medium text-lightPrimary">
                <h4 className="leading-tight">Dynamic Admin Panel</h4>
              </div>
              <div className="font-light text-lightSecondary">
                <ul className="flex flex-col gap-1 lg:gap-2 ps-5 list-disc">
                  <li>
                    Add/update categories, products, and pricing in real time.
                  </li>
                  <li>Track inventory levels and sales analytics.</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex">
                <div className="p-5 block rounded-2xl bg-darkSecondary text-accentColor text-4xl">
                  <BsDatabaseCheck />
                </div>
              </div>
              <div className="text-2xl leading-none font-medium text-lightPrimary">
                <h4 className="leading-tight">Secure Payment Integration</h4>
              </div>
              <div className=" font-light text-lightSecondary">
                <ul className="flex flex-col gap-1 lg:gap-2 ps-5 list-disc">
                  <li>Razorpay/Stripe gateway for seamless transactions.</li>
                  <li>SSL encryption and PCI compliance.</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex">
                <div className="p-5 block rounded-2xl bg-darkSecondary text-accentColor text-4xl">
                  <BsRobot />
                </div>
              </div>
              <div className="text-2xl leading-none font-medium text-lightPrimary">
                <h4 className="leading-tight">Customer-Centric UI/UX</h4>
              </div>
              <div className=" font-light text-lightSecondary">
                <ul className="flex flex-col gap-1 lg:gap-2 ps-5 list-disc">
                  <li>Mobile-first design with intuitive product filtering.</li>
                  <li>Guest checkout and order tracking.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Image Desc Section 2  */}
        <div className="w-full px-5 lg:px-20 py-10 lg:py-20 bg-black flex flex-col ">
          <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 pb-10 lg:pb-20">
            <div className="w-full lg:w-[50%] flex flex-col gap-5">
              <div className="w-full text-lightPrimary font-medium font-oswald text-4xl lg:text-5xl">
                <h2 className="leading-tight">Mobile-first Sales</h2>
              </div>
              <div className="font-light text-base lg:text-xl text-lightSecondary">
                <p>
                  Recognizing that 78% of Bangladesh&apos;s e-commerce traffic
                  comes from mobile devices, we prioritized responsive design
                  and one-tap checkout flows. The result? A seamless shopping
                  experience across devices, reducing load times by 40% and
                  increasing mobile conversions by 65%. Features like size
                  charts with AR previews and SMS order tracking further bridged
                  the online-offline gap for local buyers.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[50%]">
              <div className="w-full rounded-sm overflow-hidden relative">
                <Image
                  placeholder="blur"
                  src={mobileFirstImg}
                  alt="crm system performance enhance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 pt-10 lg:pt-20">
            <div className="w-full lg:w-[50%] flex flex-col gap-5">
              <div className="w-full text-lightPrimary font-medium font-oswald text-4xl lg:text-5xl">
                <h2 className="leading-tight">Scalable infrastructure </h2>
              </div>
              <div className="font-light text-base lg:text-xl text-lightSecondary">
                <p>
                  During peak seasons like Eid and cricket tournaments, traffic
                  surges threatened the client&apos;s old system. We engineered
                  the platform using React.js and cloud-based microservices,
                  enabling it to handle 5x concurrent users without lag.
                  Automated inventory syncing with local warehouses prevented
                  overselling, while dynamic pricing tools helped capitalize on
                  trending products.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[50%] flex flex-row gap-5 justify-between">
              <div className="w-auto h-auto rounded-sm overflow-hidden relative">
                <Image
                  placeholder="blur"
                  src={scaleDev1}
                  alt="crm system scale development"
                  className="w-auto h-auto object-cover"
                />
              </div>
              <div className="w-auto h-auto rounded-sm overflow-hidden relative">
                <Image
                  placeholder="blur"
                  src={scaleDev2}
                  alt="crm system scale development (2)"
                  className="w-auto h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial  */}
        <div className="w-full h-full px-5 lg:px-20 py-10 lg:py-20 bg-black">
          <div className="w-full h-full flex flex-col lg:flex-row gap-10 items-stretch">
            <div className="w-full flex lg:w-[60%] rounded-lg bg-darkSecondary p-5 text-lightSecondary">
              <div className="w-full h-full flex flex-col gap-10 justify-between items-stretch">
                <div className="font-light text-lg lg:text-xl">
                  <p>
                    "I asked devion ark to develope an E-commerce web
                    application for my soprtswear business! Their effort and
                    dedication really helped me to organize my business in much
                    optimized way. The most loveble thing is they actually can
                    understand what clients want and their requirments! Totally
                    satisfied with their works! Their services are highly
                    recommended!"
                  </p>
                </div>
                <div className="w-full flex flex-col lg:flex-row-reverse gap-5 items-center justify-between">
                  <div className="hidden lg:inline-flex lg:w-[200px] overflow-hidden relative">
                    <Image
                      placeholder="blur"
                      src={kickOffLogo}
                      alt="sikder foundation logo"
                      className="w-full"
                    />
                  </div>
                  <div className="w-full flex flex-row items-center gap-3">
                    <div className="w-[60px] h-[60px] aspect-square rounded-full overflow-hidden relative">
                      <Image
                        alt="rakib shikder"
                        src={rakibImg}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col leading-none text-lg gap-2">
                      <h3 className="font-bold text-lightPrimary">
                        Rakib Shikder
                      </h3>
                      <p className="text-sm font-light">Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[40%] flex rounded-lg bg-lightPrimary p-5">
              <div className="flex flex-col gap-6 lg:gap-10">
                <div className="font-bold font-oswald text-darkPrimary text-3xl lg:text-4xl">
                  <h5 className="leading-none">
                    Let&apos;s build something amazing together!
                  </h5>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-darkSecondary font-light">
                    <p>Project Manager</p>
                  </div>
                  <div className="w-full flex flex-row items-center gap-3">
                    <div className="w-[60px] h-[60px] aspect-square rounded-full overflow-hidden relative">
                      <Image
                        alt="shaed noor"
                        src={shaedImg}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col leading-none gap-2">
                      <h3 className="font-bold text-darkPrimary text-lg leading-none">
                        Syed Shaeduzzaman Noor
                      </h3>
                      <p className="text-sm text-darkSecondary font-light">
                        Cheif Technology Officer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-row gap-5">
                    <a
                      href="https://www.linkedin.com/in/shaednoor/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        className={`inline-block ps-4 pe-8 py-4 text-base font-normal text-lightPrimary bg-darkPrimary duration-[350ms] ease-in-out transition-colors group overflow-hidden relative`}
                        style={{
                          clipPath: `polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, calc(100% - 16px) 100%, 16px 100%, 0px 100%, 0px 0px)`,
                        }}
                      >
                        <div
                          className={`relative z-[5] flex flex-row-reverse gap-3 items-center whitespace-nowrap`}
                        >
                          <span>
                            <TextAnimation text="LinkedIn" />
                          </span>
                          <span>
                            <FaLinkedinIn className=" text-lightPrimary transition duration-[350ms]" />
                          </span>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://www.wa.me/01782734573"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block group"
                    >
                      <div
                        className={`flex bg-darkPrimary p-[1px] overflow-hidden`}
                        style={{
                          clipPath: `polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, calc(100% - 16px) 100%, 16px 100%, 0px 100%, 0px 0px)`,
                        }}
                      >
                        <div
                          className={`ps-4 pe-8 py-[15px] text-base font-normal leading-none flex flex-row gap-2 items-center bg-lightPrimary text-darkPrimary`}
                          style={{
                            clipPath: `polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, calc(100% - 16px) 100%, 16px 100%, 0px 100%, 0px 0px)`,
                          }}
                        >
                          <FaWhatsapp className="" />
                          <TextAnimation text="Whatsapp" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default DynamicECommerce;
