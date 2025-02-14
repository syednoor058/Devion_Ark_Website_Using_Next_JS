import LottieAnimation from "@/components/animations/LottieAnimation";
import CustomShapeButton from "@/components/buttons/CustomShapeButton";
import { FaBookOpen } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { FiArrowLeft } from "react-icons/fi";
import { LuMouse } from "react-icons/lu";
import dollarAnimation from "../../../public/animations/business.json";
import SEMAnimation from "../../../public/animations/sem.json";
import SEOAnimation from "../../../public/animations/seo.json";
import SMMAnimation from "../../../public/animations/social_media_marketing.json";
import webDevelopmentAnimation from "../../../public/animations/website_development.json";

export const metadata = {
  title: "Our Services | Software, SEO & Business Growth | Devion Ark",
  description:
    "Devion Ark is a leading IT firm specializing in software & website development, SEO, social media marketing, search engine marketing, and business consultancy. We help startups and local businesses grow their brand online with cutting-edge digital solutions. Let’s build your success today!",
};

function Services() {
  return (
    <main className="font-poppins">
      {/* Landing Section */}

      <div className="w-full h-full relative">
        <div className="w-full flex flex-col gap-10 px-5 lg:px-20 pb-10 lg:pb-20 pt-5 lg:pt-10">
          <h1 className="w-full flex flex-col font-oswald font-bold uppercase text-start lg:text-end ">
            <span className="w-full text-lightSecondary leading-tight lg:leading-none text-[9vw] lg:text-[5.8vw]">
              Empowering Your Business with
            </span>
            <span className="w-full leading-none text-lightPrimary text-[12vw] lg:text-[8.3vw]">
              Cutting-Edge{" "}
              <span className="text-accentColor text-[18vw] lg:text-[8vw]">
                Solutions
              </span>
            </span>
          </h1>
          <div className="w-full">
            <p className="w-full lg:w-[50%] text-[5vw] lg:text-[2vw] font-light text-lightSecondary leading-tight lg:pt-5">
              We craft tailored digital experiences-driving measurable growth,
              ensuring your business stands out in today&apos;s competitive
              online landscape."
            </p>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-full lg:w-[50%] flex justify-start lg:justify-end">
              <CustomShapeButton
                forwardTo=""
                label="Get Started"
                paddingX="px-5"
                paddingY="py-4"
                textStyle="text-lg font-semibold text-darkPrimary"
                backgroundColor="bg-lightPrimary"
                hoverBgColor="bg-accentColor"
                icon={
                  <FiArrowLeft className="text-xl text-darkPrimary group-hover:rotate-45 transition duration-[350ms]" />
                }
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

      {/* Service List Section */}

      <div className="w-full px-5 lg:px-20 bg-black py-10 lg:py-20">
        <div className="w-full flex flex-col gap-10 lg:gap-16">
          <div className="w-full text-accentColor font-oswald font-bold uppercase text-center text-[8vw] lg:text-[7vw]">
            <h2>At your service</h2>
          </div>
          <div className="w-full h-full flex flex-col gap-10">
            <div className="w-full flex flex-col lg:flex-row gap-10">
              <div
                className="w-full lg:w-[50%] bg-lightPrimary p-5"
                style={{
                  clipPath:
                    "polygon(28px 0%, calc(100% - 28px) 0%, 100% 28px, 100% 100%, calc(100% - 28px) 100%, 28px 100%, 0px 100%, 0px 0px)",
                }}
              >
                <div className="w-full flex flex-col gap-5">
                  <div className="text-darkPrimary text-[9vw] lg:text-[4vw] font-semibold leading-none font-oswald">
                    <h3>Custom Software Development</h3>
                  </div>
                  <p className="font-light leading-tight text-base lg:text-lg text-darkSecondary">
                    Every business has unique needs. Custom software solutions
                    improve efficiency, automate workflows, and solve specific
                    challenges with precision, ensuring seamless integration and
                    long-term scalability.
                  </p>
                  <div className="w-full flex justify-start lg:justify-end">
                    <div className="w-full flex justify-start lg:justify-end">
                      <CustomShapeButton
                        forwardTo=""
                        label="Explore More"
                        paddingX="px-5"
                        paddingY="py-4"
                        textStyle="text-lg font-normal text-lightPrimary"
                        hoverText="text-darkPrimary"
                        backgroundColor="bg-darkPrimary"
                        hoverBgColor="bg-accentColor"
                        icon={
                          <FaEarthAmericas className="text-xl text-lightPrimary group-hover:text-darkPrimary group-hover:rotate-45 transition duration-[350ms]" />
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-full lg:w-[50%] bg-darkSecondary p-5"
                style={{
                  clipPath:
                    "polygon(28px 0%, calc(100% - 28px) 0%, 100% 28px, 100% 100%, calc(100% - 28px) 100%, 28px 100%, 0px 100%, 0px 0px)",
                }}
              >
                <div className="w-full h-full flex flex-col lg:flex-row gap-5">
                  <div className="w-full lg:w-[30%] h-full">
                    <LottieAnimation animationFile={webDevelopmentAnimation} />
                  </div>
                  <div className="w-full lg:w-[70%] flex flex-col gap-5">
                    <div className="text-lightPrimary text-[9vw] lg:text-[3vw] font-semibold leading-none font-oswald">
                      <h3>Website Development</h3>
                    </div>
                    <p className="font-light leading-tight text-base lg:text-lg text-lightSecondary">
                      A well-crafted website is the foundation of any successful
                      online presence. Expect lightning-fast performance,
                      responsive layouts, and seamless navigation—all designed
                      to engage visitors and boost conversions.
                    </p>
                    <div className="w-full flex justify-start lg:justify-end">
                      <div className="w-full flex justify-start lg:justify-end">
                        <CustomShapeButton
                          forwardTo=""
                          label="Explore More"
                          paddingX="px-5"
                          paddingY="py-4"
                          textStyle="text-lg font-normal text-darkPrimary"
                          backgroundColor="bg-lightPrimary"
                          hoverBgColor="bg-accentColor"
                          icon={
                            <FaEarthAmericas className="text-xl text-darkPrimary group-hover:rotate-45 transition duration-[350ms]" />
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col lg:flex-row gap-10 items-stretch">
              <div
                className="w-full lg:w-[30%] flex bg-accentColor p-5"
                style={{
                  clipPath:
                    "polygon(28px 0%, calc(100% - 28px) 0%, 100% 28px, 100% 100%, calc(100% - 28px) 100%, 28px 100%, 0px 100%, 0px 0px)",
                }}
              >
                <div className="w-full h-full flex flex-col gap-5">
                  <div className="text-darkPrimary text-[9vw] lg:text-[3.5vw] font-semibold leading-none font-oswald">
                    <h3>Search Engine Optimization</h3>
                  </div>
                  <div className="w-full">
                    <LottieAnimation animationFile={SEOAnimation} />
                  </div>
                  <p className="font-light leading-tight text-base lg:text-lg text-darkSecondary">
                    Ranking higher on search engines means more customers and
                    better conversions. From keyword research, website audit &
                    backlinking to content strategy & technical SEO, every step
                    is geared toward increasing reach and online presence.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[70%] h-full flex">
                <div className="w-full flex flex-col gap-10">
                  <div
                    className="w-full h-full p-5 bg-lightPrimary"
                    style={{
                      clipPath:
                        "polygon(28px 0%, calc(100% - 28px) 0%, 100% 28px, 100% 100%, calc(100% - 28px) 100%, 28px 100%, 0px 100%, 0px 0px)",
                    }}
                  >
                    <div className="w-full h-full flex flex-col lg:flex-row gap-5 items-center">
                      <div className="w-full lg:w-[70%] flex flex-col gap-5 ">
                        <div className="text-darkPrimary text-[9vw] lg:text-[4vw] font-semibold leading-none font-oswald">
                          <h3>Social Media Marketing</h3>
                        </div>
                        <p className="font-light leading-tight text-base lg:text-lg text-darkSecondary">
                          A strong social presence builds brand trust and drives
                          engagement. Targeted campaigns, creative content, and
                          data-driven strategies ensure the right audience sees
                          and interacts with your brand across platforms like
                          Facebook, Instagram, LinkedIn, and more.
                        </p>
                        <div className="w-full flex">
                          <div className="w-full flex">
                            <CustomShapeButton
                              forwardTo=""
                              label="Learn More"
                              paddingX="px-5"
                              paddingY="py-4"
                              textStyle="text-lg font-normal text-lightPrimary"
                              hoverText="text-darkPrimary"
                              backgroundColor="bg-darkPrimary"
                              hoverBgColor="bg-accentColor"
                              icon={
                                <FaBookOpen className="text-xl text-lightPrimary group-hover:text-darkPrimary group-hover:rotate-45 transition duration-[350ms]" />
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-[30%] h-full">
                        <LottieAnimation animationFile={SMMAnimation} />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col lg:flex-row gap-10">
                    <div
                      className="w-full lg:w-[50%] bg-darkPrimary p-5"
                      style={{
                        clipPath:
                          "polygon(28px 0%, calc(100% - 28px) 0%, 100% 28px, 100% 100%, calc(100% - 28px) 100%, 28px 100%, 0px 100%, 0px 0px)",
                      }}
                    >
                      <div className="w-full flex flex-col gap-5">
                        <div className="w-full flex flex-row gap-5">
                          <div className="w-[70%]">
                            <div className="text-accentColor text-[8vw] lg:text-[2.5vw] font-semibold leading-none font-oswald">
                              <h3>Search Engine Marketing</h3>
                            </div>
                          </div>
                          <div className="w-[30%] ">
                            <LottieAnimation animationFile={SEMAnimation} />
                          </div>
                        </div>
                        <ul className="flex flex-col gap-3 font-light leading-tight text-base text-lightSecondary list-disc ps-5">
                          <li>Google Ads Campaigns</li>
                          <li>Keyword Research and Analysis</li>
                          <li>Ad Copywriting</li>
                          <li>Conversion Rate Optimization</li>
                          <li>Performance Analytics</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="w-full lg:w-[50%] bg-accentColor p-5"
                      style={{
                        clipPath:
                          "polygon(28px 0%, calc(100% - 28px) 0%, 100% 28px, 100% 100%, calc(100% - 28px) 100%, 28px 100%, 0px 100%, 0px 0px)",
                      }}
                    >
                      <div className="w-full flex flex-col gap-5">
                        <div className="w-full flex flex-row gap-5">
                          <div className="w-[70%]">
                            <div className="text-darkPrimary text-[10vw] lg:text-[3vw] font-semibold leading-none font-oswald">
                              <h3>Business Consultancy</h3>
                            </div>
                          </div>
                          <div className="w-[30%]">
                            <LottieAnimation animationFile={dollarAnimation} />
                          </div>
                        </div>
                        <p className="font-light leading-tight text-base lg:text-lg text-darkSecondary">
                          Success starts with the right strategy. Data-backed
                          decisions, market study, competitor analysis, &
                          tailored solutions help businesses optimize
                          operations, increase profitability, and stay ahead of
                          competitors in an ever-evolving market.
                        </p>
                      </div>
                    </div>
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

export default Services;
