import ActionButton from "@/components/buttons/ActionButton";
import { Avatar } from "@mui/material";
import Image from "next/image";
import { BsDatabaseCheck, BsRobot } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { LiaStoreAltSolid } from "react-icons/lia";
import sikderFoundationLogo from "../../../../public/partners/sikder_foundation.png";
import projectImg3 from "../../../../public/projects/comprehensive_crm_system/crm_enhanced_performance.jpg";
import projectImg2 from "../../../../public/projects/comprehensive_crm_system/crm_optimize_data.jpg";
import projectImg1 from "../../../../public/projects/comprehensive_crm_system/crm_project_background.jpg";
import projectImg4 from "../../../../public/projects/comprehensive_crm_system/crm_sclable_product.jpg";

export const metadata = {
  title: "Real Estate CRM Case Study - Advanced Solutions by Devion Ark",
  description:
    "Discover how our cutting-edge CRM system revolutionized real estate management. This case study details streamlined inventory management, integrated customer data, and scalable project workflows that empower real estate success.",
};

function ComprehensiveRealEstateCRMProject() {
  return (
    <>
      {/* Landing Section  */}
      <div className="w-full pt-5 pb-10 lg:pb-20 px-5 lg:px-20 bg-darkPrimary text-lightSecondary">
        <div className="w-full flex flex-col gap-10">
          <div className="text-lightPrimary font-oswald font-bold text-[7vw] lg:text-[5.5vw]">
            <h1 className="leading-tight uppercase">
              Empowering <span className="text-accentColor">real estate</span>{" "}
              success through innovative{" "}
              <span className="text-accentColor">CRM systems</span>
            </h1>
          </div>
          <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-end gap-10 lg:gap-20">
            <div className="w-full lg:w-[65%] flex flex-col gap-10 text-nowrap">
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-16">
                <div className="flex flex-row lg:flex-col gap-1 lg:gap-2 font-light justify-between text-sm lg:text-base">
                  <div>Client</div>
                  <div className="text-lightPrimary">Sikder Foundation LTD</div>
                </div>
                <div className="flex flex-row lg:flex-col gap-1 lg:gap-2 font-light justify-between text-sm lg:text-base">
                  <div>Category</div>
                  <div className="text-lightPrimary">
                    Automation Software, CRM System
                  </div>
                </div>
                <div className="flex flex-row lg:flex-col gap-1 lg:gap-2 font-light justify-between text-sm lg:text-base">
                  <div>Timeframe</div>
                  <div className="text-lightPrimary">3 Months 19 Days</div>
                </div>
              </div>
              <div className="w-full flex justify-start">
                <div className="w-full flex justify-start">
                  <ActionButton
                    forwardTo=""
                    label="Visit Website"
                    labelSize="text-2xl"
                    labelColor="text-lightPrimary group-hover:text-darkPrimary"
                    borderColor="border-lightPrimary"
                    bgColor="bg-lightPrimary"
                    iconColor="text-darkPrimary"
                    iconSize="text-4xl"
                    icon={<FaEarthAmericas />}
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[35%] flex flex-col gap-3">
              <div className="w-full aspect-video overflow-hidden relative rounded-sm">
                <video
                  className="w-full object-cover"
                  loop
                  autoPlay
                  muted
                  playsInline
                >
                  <source src="/videos/crm_software_promo_video.mp4" />
                </video>
              </div>
              <div className="w-full flex flex-col items-end text-sm font-light">
                <div className="w-full text-start lg:text-end">
                  Comprehensive CRM System Solutions
                </div>
                <div className="w-full text-start lg:text-end">
                  Showreel (2024-2025)
                </div>
              </div>
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
              <p className="font-bold text-[7vw] lg:text-[2.5vw] text-accentColor font-oswald leading-tight">
                Sikder Foundation Limited is emerging as one of the fast growing
                real estate company established in 2007 with the vision to
                delivery the best quality, un-parallel commitment, unique
                architectural design & ultimate comfort to our valued customers
                in today and the days to come.
              </p>
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
          <div className="w-full text-lightPrimary font-bold font-oswald text-[8vw] lg:text-[5.5vw] flex flex-col gap-5 leading-none">
            <h3>Impact</h3>
            <div className="w-full h-[1px] bg-lightSecondary"></div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
            <div className="w-full rounded-xl bg-darkPrimary p-5">
              <div className="w-full flex flex-col gap-3">
                <div className="font-bold font-oswald text-7xl  text-accentColor">
                  130%
                </div>
                <div className="font-light text-lightSecondary text-lg">
                  <p>Operational efficiency</p>
                </div>
              </div>
            </div>
            <div className="w-full rounded-xl bg-darkPrimary p-5">
              <div className="w-full flex flex-col gap-3">
                <div className="font-bold font-oswald text-7xl text-accentColor">
                  25%
                </div>
                <div className="font-light text-lightSecondary">
                  <p>Increased conversion rate</p>
                </div>
              </div>
            </div>
            <div className="w-full rounded-xl bg-darkPrimary p-5">
              <div className="w-full flex flex-col gap-3">
                <div className="font-bold font-oswald text-7xl text-accentColor">
                  37%
                </div>
                <div className="font-light text-lightSecondary">
                  <p>Higher customer retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Desc Section 1  */}
      <div className="w-full px-5 lg:px-20 py-10 lg:py-20 bg-black flex flex-col gap-10 lg:gap-20">
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 ">
          <div className="w-full lg:w-[50%] flex flex-col gap-5">
            <div className="w-full text-lightPrimary font-bold font-oswald text-[8vw] lg:text-[5.5vw] leading-tight uppercase">
              <h3>Project Background</h3>
            </div>
            <div className="font-light text-base text-lightSecondary">
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
            <div className="w-full rounded-xl lg:rounded-2xl overflow-hidden relative">
              <Image
                placeholder="blur"
                src={projectImg1}
                alt="crm system project background"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 ">
          <div className="w-full lg:w-[50%] flex flex-col gap-5">
            <div className="w-full text-lightPrimary font-bold font-oswald text-[8vw] lg:text-[5.5vw] leading-tight uppercase">
              <h3>Optimized Data Management</h3>
            </div>
            <div className="font-light text-base text-lightSecondary">
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
          <div className="w-full lg:w-[50%]">
            <div className="w-full rounded-xl lg:rounded-2xl overflow-hidden relative">
              <Image
                placeholder="blur"
                src={projectImg2}
                alt="crm system optimized data"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features  */}
      <div className="w-full px-5 lg:px-20 py-10 lg:py-20 bg-black flex flex-col gap-10 lg:gap-20">
        <div className="w-full text-lightPrimary font-bold font-oswald text-[8vw] lg:text-[5.5vw] leading-none uppercase">
          <h3>Features</h3>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex">
              <div className="p-5 block rounded-2xl bg-darkSecondary text-accentColor text-4xl">
                <LiaStoreAltSolid />
              </div>
            </div>
            <div className="font-oswald text-2xl leading-none font-semibold text-lightPrimary">
              <h4>Unified inventory management</h4>
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
            <div className="font-oswald text-2xl leading-none font-semibold text-lightPrimary">
              <h4>Comprehensive Client Data Insights</h4>
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
            <div className="font-oswald text-2xl leading-none font-semibold text-lightPrimary">
              <h4>Automated Workflow and Reporting</h4>
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
      <div className="w-full px-5 lg:px-20 py-10 lg:py-20 bg-black flex flex-col gap-10 lg:gap-20">
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 ">
          <div className="w-full lg:w-[50%] flex flex-col gap-5">
            <div className="w-full text-lightPrimary font-bold font-oswald text-[8vw] lg:text-[5.5vw] leading-tight uppercase">
              <h3>Enhanced Performance</h3>
            </div>
            <div className="font-light text-base text-lightSecondary">
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
            <div className="w-full rounded-xl lg:rounded-2xl overflow-hidden relative">
              <Image
                placeholder="blur"
                src={projectImg3}
                alt="crm system performance enhance"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 ">
          <div className="w-full lg:w-[50%] flex flex-col gap-5">
            <div className="w-full text-lightPrimary font-bold font-oswald text-[8vw] lg:text-[5.5vw] leading-tight uppercase">
              <h3>Scalable Development</h3>
            </div>
            <div className="font-light text-base text-lightSecondary">
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
          <div className="w-full lg:w-[50%]">
            <div className="w-full rounded-xl lg:rounded-2xl overflow-hidden relative">
              <Image
                placeholder="blur"
                src={projectImg4}
                alt="crm system scalable product"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial  */}
      <div className="w-full h-full px-5 lg:px-20 py-10 lg:py-20 bg-black">
        <div className="w-full h-full flex flex-col lg:flex-row gap-10 items-stretch">
          <div className="w-full flex lg:w-[60%] rounded-2xl bg-darkSecondary p-5 text-lightSecondary">
            <div className="w-full h-full flex flex-col gap-5 lg:gap-10 justify-between">
              <div className="font-light text-2xl lg:text-3xl">
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
                  <div className="flex flex-col leading-none text-lg">
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
          <div className="w-full lg:w-[40%] flex rounded-2xl bg-accentColor p-5">
            <div className="flex flex-col gap-10">
              <div className="font-bold font-oswald text-darkPrimary leading-none text-[8vw] lg:text-[4vw]">
                <h5>Let&apos;s build something amazing together!</h5>
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
                  <div className="flex flex-col leading-none">
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
                  <div className="inline-flex w-fit text-xl lg:text-2xl px-5 lg:px-10 py-2 lg:py-4 rounded-full bg-darkPrimary text-lightPrimary">
                    <a className="flex flex-row gap-5 items-center">
                      LinkedIn
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className=" inline-flex w-fit text-xl lg:text-2xl px-5 lg:px-10 py-2 lg:py-4 rounded-full border border-darkPrimary text-darkPrimary">
                    <a className="flex flex-row gap-5 items-center">
                      Whatsapp
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComprehensiveRealEstateCRMProject;
