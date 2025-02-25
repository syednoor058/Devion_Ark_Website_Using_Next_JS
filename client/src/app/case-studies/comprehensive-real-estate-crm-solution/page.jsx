import AnimatedLetter from "@/components/animations/AnimatedLetter";
import ImageSlider from "@/components/slider/ImageSlider";
import { Avatar } from "@mui/material";
import Image from "next/image";
import { BsDatabaseCheck, BsRobot } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { LiaStoreAltSolid } from "react-icons/lia";
import sikderFoundationLogo from "../../../../public/partners/sikder_foundation.png";
import dataOptm2 from "../../../../public/projects/comprehensive_crm_system/data-opt-2.jpg";
import dataOptm1 from "../../../../public/projects/comprehensive_crm_system/data-optm-1.jpg";
import performanceImg from "../../../../public/projects/comprehensive_crm_system/performance.jpg";
import projectBackground from "../../../../public/projects/comprehensive_crm_system/project-background.jpg";
import scaleDev1 from "../../../../public/projects/comprehensive_crm_system/scale-dev-1.jpg";
import scaleDev2 from "../../../../public/projects/comprehensive_crm_system/scale-dev-2.png";
import slider1 from "../../../../public/projects/comprehensive_crm_system/slider-1.jpg";
import slider2 from "../../../../public/projects/comprehensive_crm_system/slider-2.jpg";
import slider3 from "../../../../public/projects/comprehensive_crm_system/slider-3.jpg";

export const metadata = {
  title: "Real Estate CRM Case Study - Advanced Solutions by Devion Ark",
  description:
    "Discover how our cutting-edge CRM system revolutionized real estate management. This case study details streamlined inventory management, integrated customer data, and scalable project workflows that empower real estate success.",
};

function ComprehensiveRealEstateCRMProject() {
  return (
    <main className="font-poppins">
      {/* Landing Section  */}

      <div className="w-full min-h-[calc(100vh-60px)] bg-darkPrimary flex items-end pt-10 lg:pt-20 text-lightSecondary font-light">
        <div className="flex flex-col gap-10 lg:gap-16">
          <div className="w-full px-4 lg:px-20">
            <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16">
              <div className="w-full lg:lg:w-[70%] flex flex-col gap-10">
                <h1 className="w-full text-lightPrimary text-4xl lg:text-7xl font-semibold font-oswald leading-tight">
                  Comprehensive real estate{" "}
                  <span className="text-accentColor font-bold leading-tight">
                    CRM
                  </span>{" "}
                  solution
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
                        <p>Sikder Foundation LTD</p>
                      </div>
                      <div>
                        <p>Automation Software, CRM System</p>
                      </div>
                      <div>
                        <p>3 Months 19 Days</p>
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
          <div className="w-full flex justify-end px-4 lg:px-20">
            <div className="w-full lg:w-[40%]">
              <p className=" text-xl lg:text-lg font-light lg:leading-normal">
                A powerful CRM system for real estate professionals, providing
                automated lead management, property listing organization, client
                follow-ups, and in-depth analytics to streamline operations.
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
                <source src="https://res.cloudinary.com/de8g5laai/video/upload/v1739689633/crm_software_promo_video_sdysuq.mp4" />
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
                  Sikder Foundation Limited is emerging as one of the fast
                  growing{" "}
                  <span className="text-accentColor">real estate company</span>{" "}
                  established in 2007 with the vision to delivery the best
                  quality, un-parallel commitment, unique{" "}
                  <span className="text-accentColor">architectural design</span>{" "}
                  & ultimate comfort to our valued customers in today and the
                  days to come.
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
                    Inventory Management
                  </div>
                  <div className="font-light  px-3 py-2 rounded-full bg-darkSecondary text-lightPrimary">
                    Customer Data Handling
                  </div>
                  <div className="font-light   px-3 py-2 rounded-full bg-darkSecondary text-lightPrimary">
                    Project Management
                  </div>
                  <div className="font-light  px-3 py-2 rounded-full bg-darkSecondary text-lightPrimary">
                    Employee Management
                  </div>
                  <div className="font-light  px-3 py-2 rounded-full bg-darkSecondary text-lightPrimary">
                    Authentication
                  </div>
                  <div className="font-light  px-3 py-2 rounded-full bg-darkSecondary text-lightPrimary">
                    Role-based Access
                  </div>
                  <div className="font-light   px-3 py-2 rounded-full bg-darkSecondary text-lightPrimary">
                    Product Listing & Catelog
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
                  130%
                </div>
              </div>
              <div className="text-2xl leading-none font-medium text-lightPrimary">
                <h4 className="leading-tight">Operational efficiency</h4>
              </div>
              <div className="font-light text-lightSecondary">
                <p>
                  Our CRM centralizes property listings from multiple data
                  sources, ensuring agents always have access to accurate and
                  up-to-date information.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex">
                <div className="block rounded-2xl text-accentColor text-4xl lg:text-6xl font-bold font-oswald">
                  25%
                </div>
              </div>
              <div className="text-2xl leading-none font-medium text-lightPrimary">
                <h4 className="leading-tight">Increased conversion rate</h4>
              </div>
              <div className=" font-light text-lightSecondary">
                <p>
                  Gain a 360-degree view of your customers with our advanced
                  data analytics. Our system captures and organizes client
                  insights.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex">
                <div className="block rounded-2xl text-accentColor text-4xl lg:text-6xl font-bold font-oswald">
                  37%
                </div>
              </div>
              <div className="text-2xl leading-none font-medium text-lightPrimary">
                <h4 className="leading-tight">Higher customer retention</h4>
              </div>
              <div className=" font-light text-lightSecondary">
                <p>
                  Streamline your operations with automated processes that
                  handle task scheduling, project tracking, and real-time
                  reporting.
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
                Our client, a prominent real estate firm, was facing growing
                challenges with managing property listings, client data, and
                project workflows using outdated and disjointed systems. They
                needed a comprehensive solution that could centralize inventory,
                streamline customer interactions, and provide real-time insights
                into ongoing projects. In response, we developed a robust CRM
                system tailored specifically for the real estate industry,
                designed to unify data streams and empower their team to work
                more efficiently.
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
                A major pain point for our client was the chaotic handling of
                vast amounts of data—from detailed property listings to complex
                customer records. Our CRM system introduces a centralized data
                management framework that ensures all critical information is
                organized, accurate, and easily accessible. By employing
                advanced data structuring and validation methods, we reduced
                redundancy, minimized errors, and significantly improved data
                integrity. This optimization not only streamlined operations but
                also laid a solid foundation for informed decision-making and
                effective reporting.
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
              <h4 className="leading-tight">
                Unified inventory management system
              </h4>
            </div>
            <div className="font-light text-lightSecondary">
              <p>
                Our CRM centralizes property listings from multiple data
                sources, ensuring agents always have access to accurate and
                up-to-date information.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex">
              <div className="p-5 block rounded-2xl bg-darkSecondary text-accentColor text-4xl">
                <BsDatabaseCheck />
              </div>
            </div>
            <div className="text-2xl leading-none font-medium text-lightPrimary">
              <h4 className="leading-tight">
                Comprehensive Client Data Insights
              </h4>
            </div>
            <div className=" font-light text-lightSecondary">
              <p>
                Gain a 360-degree view of your customers with our advanced data
                analytics. Our system captures and organizes client insights.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex">
              <div className="p-5 block rounded-2xl bg-darkSecondary text-accentColor text-4xl">
                <BsRobot />
              </div>
            </div>
            <div className="text-2xl leading-none font-medium text-lightPrimary">
              <h4 className="leading-tight">
                Automated Workflow and Reporting
              </h4>
            </div>
            <div className=" font-light text-lightSecondary">
              <p>
                Streamline your operations with automated processes that handle
                task scheduling, project tracking, and real-time reporting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Desc Section 2  */}
      <div className="w-full px-5 lg:px-20 py-10 lg:py-20 bg-black flex flex-col ">
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 pb-10 lg:pb-20">
          <div className="w-full lg:w-[50%] flex flex-col gap-5">
            <div className="w-full text-lightPrimary font-medium font-oswald text-4xl lg:text-5xl">
              <h2 className="leading-tight">Enhanced performance</h2>
            </div>
            <div className="font-light text-base lg:text-xl text-lightSecondary">
              <p>
                Performance is key in any dynamic CRM system. Our solution was
                built with a focus on speed and responsiveness. We implemented
                efficient data retrieval techniques, caching mechanisms, and
                optimized query handling to ensure that users experience minimal
                lag even during peak usage. The result is a fluid, user-friendly
                interface that allows real estate professionals to access and
                update information in real time, thereby enhancing overall
                productivity. This performance upgrade directly contributes to
                smoother operations and a better user experience across the
                board.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <div className="w-full rounded-sm overflow-hidden relative">
              <Image
                placeholder="blur"
                src={performanceImg}
                alt="crm system performance enhance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 pt-10 lg:pt-20">
          <div className="w-full lg:w-[50%] flex flex-col gap-5">
            <div className="w-full text-lightPrimary font-medium font-oswald text-4xl lg:text-5xl">
              <h2 className="leading-tight">Scalable development</h2>
            </div>
            <div className="font-light text-base lg:text-xl text-lightSecondary">
              <p>
                Anticipating the future growth of our client’s business,
                scalability was a core component of our development strategy.
                The CRM system was architected using a modular approach,
                enabling seamless integration of additional features and
                handling of increased data volumes as the business expands.
                Whether it&apos;s accommodating a larger inventory or
                integrating new marketing channels, our scalable design ensures
                that the system evolves alongside the company&apos;s needs. This
                forward-thinking approach guarantees that the CRM remains a
                valuable asset well into the future, without requiring a
                complete overhaul as demands grow.
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
                  "Working with Devion Ark transformed our real estate
                  operations. Their CRM streamlined our inventory and client
                  management, drastically reducing errors and boosting
                  conversions. Automated workflows and real-time reporting
                  empowered our team to make smart, data-driven decisions. We
                  highly recommend Devion Ark for driving success in our
                  business."
                </p>
              </div>
              <div className="w-full flex flex-col lg:flex-row-reverse gap-5 items-center justify-between">
                <div className="hidden lg:inline-flex lg:w-[200px] overflow-hidden relative">
                  <Image
                    placeholder="blur"
                    src={sikderFoundationLogo}
                    alt="sikder foundation logo"
                    className="w-full"
                  />
                </div>
                <div className="w-full flex flex-row items-center gap-3">
                  <Avatar
                    alt="Md Azizul Hoque"
                    src="/testimonials/azizul.webp"
                    sx={{ width: 60, height: 60 }}
                  />
                  <div className="flex flex-col leading-none text-lg gap-2">
                    <h3 className="font-bold text-lightPrimary">
                      Md Farhan Sikder
                    </h3>
                    <p className="text-sm font-light">
                      Cheif Executive Officer
                    </p>
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
                  <Avatar
                    alt="Syed Shaeduzzaman Noor"
                    src="/owners/syed_shaeduzzaman_noor.png"
                    sx={{ width: 68, height: 68 }}
                  />
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
                <div className="flex flex-col gap-3">
                  <div className="inline-flex w-fit text-xl px-5 py-2 rounded-full bg-darkPrimary text-lightPrimary group">
                    <a href="" className="flex flex-row gap-5 items-center ">
                      <span>
                        <AnimatedLetter text="LinkedIn" />
                      </span>
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className=" inline-flex w-fit text-xl px-5 py-2 rounded-full border border-darkPrimary text-darkPrimary group">
                    <a href="" className="flex flex-row gap-5 items-center ">
                      <span>
                        <AnimatedLetter text="Whatsapp" />
                      </span>
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ComprehensiveRealEstateCRMProject;
