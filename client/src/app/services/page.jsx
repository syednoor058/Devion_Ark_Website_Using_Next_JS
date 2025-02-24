import CustomShapeButton from "@/components/buttons/CustomShapeButton";
import AutoSlider from "@/components/slider/Slider";
import Image from "next/image";
import Link from "next/link";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import featureMock from "../../../public/crm_mock.jpg";
import sliderMock1 from "../../../public/dispkay_mock_1.jpg";
import sliderMock2 from "../../../public/display_mock_2.jpg";
import bangladeshMap from "../../../public/location.png";
import service1Img1 from "../../../public/services/service_1/service_1_img_1.jpg";
import service1Img2 from "../../../public/services/service_1/service_1_img_2.jpg";
import service2Img from "../../../public/services/service_2/service-2_img_1.jpg";
import service3Img1 from "../../../public/services/service_3/service_3_img_1.jpg";
import service3Img2 from "../../../public/services/service_3/service_3_img_2.jpg";
import service4Img1 from "../../../public/services/service_4/service_4_img_1.jpg";
import service5Img1 from "../../../public/services/service_5/service_5_img_1.jpg";
import service5Img2 from "../../../public/services/service_5/service_5_img_2.jpg";
import service6Img1 from "../../../public/services/service_6/service_6_img_1.jpg";
import cover from "../../../public/services/service_cover.jpg";

export const metadata = {
  title: "Our Services | Software, SEO & Business Growth | Devion Ark",
  description:
    "Devion Ark is a leading IT firm specializing in software & website development, SEO, social media marketing, search engine marketing, and business consultancy. We help startups and local businesses grow their brand online with cutting-edge digital solutions. Let’s build your success today!",
};

function MockCard({ title, forwardTo, img }) {
  return (
    <div className="w-full h-full overflow-hidden relative group">
      <Image src={img} alt={title} className="w-full h-full object-cover" />
      <div className="w-full h-full absolute inset-0 z-[3] p-2">
        <div className="flex flex-col justify-between">
          <div className="w-full flex justify-end">
            <Link href={forwardTo}>
              <FiArrowUpRight className=" text-lightPrimary group-hover:text-accentColor rotate-45 group-hover:rotate-0 transition duration-[350ms]" />
            </Link>
          </div>
          <div className="text-lightPrimary font-normal text-sm"> {title}</div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, desc, features, imgs, reverse = "0" }) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-7 lg:gap-10">
        <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-20">
          <div className="w-full lg:w-[55%] text-3xl lg:text-6xl font-normal text-lightPrimary">
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
                  forwardTo="/contact-us"
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
            {imgs.map((img, i) => (
              <div key={i} className="w-auto h-auto relative overflow-hidden">
                <Image
                  placeholder="blur"
                  src={img}
                  alt={title + `_${i}`}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <main className="font-poppins">
      {/* Landing Section */}

      <div className="w-full min-h-[calc(100vh-60px)] bg-darkPrimary px-4 lg:px-20 flex items-end py-10 lg:py-20">
        <div className="w-full h-full flex flex-col lg:flex-row gap-10 lg:items-stretch ">
          <div className="w-full lg:w-[55%] flex">
            <div className="w-full flex flex-col-reverse lg:flex-col gap-5 lg:gap-10">
              <div className="w-full lg:w-[60%] border-lightSecondary/30 lg:border-t text-lg lg:text-base">
                <p className="lg:pt-5">
                  We craft tailored digital experiences-driving measurable
                  growth, ensuring your business stands out in today's
                  competitive online landscape.
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-lightPrimary text-6xl lg:text-8xl font-bold font-oswald leading-[1.10] uppercase">
                  Our <span className="text-accentColor">Services</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[45%] h-full font-light text-lightSecondary">
            <div className="flex flex-col gap-2">
              <div className="p-2 w-full bg-black flex flex-row gap-3 group rounded">
                <div className="w-[50%] relative overflow-hidden rounded-sm">
                  <Image
                    placeholder="blur"
                    src={featureMock}
                    alt="feature project mock"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Link
                  href=""
                  className="w-[50%] flex flex-col-reverse gap-3 justify-between"
                >
                  <div className="w-full h-full flex flex-col gap-1 justify-end">
                    <div className="text-base text-lightPrimary font-normal">
                      <p>Real Estate CRM</p>
                    </div>
                    <div className="text-sm">
                      <p>
                        Get to know about our latest custom software solutions
                        project for real estate company.
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-end">
                    <div>
                      <FiArrowUpRight className="text-4xl text-lightPrimary group-hover:text-accentColor rotate-45 group-hover:rotate-0 transition duration-[350ms]" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="w-full flex flex-row gap-2">
                <div className="w-[50%] flex flex-col gap-2">
                  <div className="w-full flex flex-row gap-2 text-lightPrimary text-sm font-normal">
                    <div className="w-[50%] py-2 bg-lightSecondary/20 rounded-full flex justify-center">
                      Our team
                    </div>
                    <div className="w-[50%] py-2 bg-lightSecondary/20 rounded-full flex justify-center">
                      Contact
                    </div>
                  </div>
                  <div className="w-full h-full flex bg-black text-lightPrimary text-base font-normal items-end p-2 rounded">
                    <div className="h-full flex flex-col justify-between">
                      <div className="w-full flex justify-center items-center">
                        <div className="w-[70%] relative overflow-hidden">
                          <Image
                            src={bangladeshMap}
                            alt="bangladesh map pinned on khulna"
                            className="w-full h-full object-cover"
                          />{" "}
                        </div>
                      </div>
                      <p>Location</p>
                    </div>
                  </div>
                </div>
                <div className="p-2 w-[50%] aspect-square bg-black rounded flex items-center justify-center">
                  <div className="w-full aspect-square overflow-hidden ">
                    <AutoSlider
                      components={[
                        {
                          img: sliderMock1,
                          title: "About",
                          forwardTo: "/about",
                        },
                        { img: sliderMock2, title: "Career", forwardTo: "/" },
                      ]}
                    />
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
            <div className="w-full lg:w-[80%] text-3xl lg:text-6xl  text-lightPrimary font-medium">
              <h1 className="leading-[1.15]">
                Struggling to Stand Out in a Crowded{" "}
                <span className="text-accentColor leading-[1.15]">
                  Digital World
                </span>{" "}
                ?
              </h1>
            </div>
          </div>
          <div className="w-full lg:w-[90%] flex flex-col gap-5 lg:gap-10 text-base lg:text-3xl lg:text-end font-normal">
            <p>
              You&apos;re not alone — 74% of businesses feel invisible online.
              At Devion Ark, we turn that silence into a roar. With 3+ years of
              proven strategies, 20+ success stories, and tailored SEO, social
              media, and software solutions, we don&apos;t just get you seen —
              we get you remembered.{" "}
            </p>
            <p>
              Ready to finally break through? Start with a free, no-strings
              consultation today!
            </p>
          </div>
        </div>
      </div>

      {/* Service List Section */}
      <div className="w-full flex flex-col px-4 lg:px-20">
        <div className="py-10 lg:py-20 border-y border-lightSecondary/30">
          <ServiceCard
            imgs={[service1Img1, service1Img2]}
            title="Custom Software Solutions"
            desc="Every business has unique needs. Custom software solutions improve efficiency, automate workflows, and solve specific challenges with precision, ensuring seamless integration and long-term scalability."
            features={[
              "CRM",
              "IMS",
              "E-commerce",
              "SaaS",
              "EMS",
              "LMS",
              "Custom Management",
            ]}
          />
        </div>
        <div className="py-10 lg:py-20 border-b border-lightSecondary/30">
          <ServiceCard
            reverse="1"
            imgs={[service2Img]}
            title="Website Development"
            desc="A well-crafted website is the foundation of any successful online presence. Expect lightning-fast performance, responsive layouts, and seamless navigation—all designed to engage visitors and boost conversions."
            features={[
              "UI/UX",
              "Responsive",
              "Business Website",
              "SEO-Friendly",
              "Landing Page",
              "Product Page",
              "Portfolio",
            ]}
          />
        </div>
        <div className="py-10 lg:py-20 border-b border-lightSecondary/30">
          <ServiceCard
            imgs={[service3Img1, service3Img2]}
            title="Social Media Marketing"
            desc="A strong social presence builds brand trust and drives engagement. Targeted campaigns, creative content, and data-driven strategies ensure the right audience sees and interacts with your brand across platforms like Facebook, Instagram, LinkedIn, and more."
            features={[
              "Sale Boosting",
              "Engagement Ads",
              "Leads Generation",
              "Awareness",
              "Ads Campaign",
              "Content Design",
              "A/B Testing",
            ]}
          />
        </div>
        <div className="py-10 lg:py-20 border-b border-lightSecondary/30">
          <ServiceCard
            reverse="1"
            imgs={[service4Img1]}
            title="Search Engine Marketing"
            desc="Ranking higher on search engines means more customers and better conversions. From keyword research, website audit & backlinking to content strategy & technical SEO, every step is geared toward increasing reach and online presence."
            features={[
              "Google Search",
              "Q/A Marketing",
              "Google Ads",
              "Google My Business",
              "Google Analytics",
            ]}
          />
        </div>
        <div className="py-10 lg:py-20 border-b border-lightSecondary/30">
          <ServiceCard
            imgs={[service5Img1, service5Img2]}
            title="Search Engine Optimization"
            desc="Ranking higher on search engines means more customers and better conversions. From keyword research, website audit & backlinking to content strategy & technical SEO, every step is geared toward increasing reach and online presence."
            features={[
              "On-page",
              "Off-page",
              "Back Linking",
              "Technical SEO",
              "Local SEO",
              "Keyword Research",
              "E-commerce SEO",
            ]}
          />
        </div>
        <div className="py-10 lg:py-20">
          <ServiceCard
            reverse="1"
            imgs={[service6Img1]}
            title="Business Consultancy"
            desc="Success starts with the right strategy. Data-backed decisions, market study, competitor analysis, & tailored solutions help businesses optimize operations, increase profitability, and stay ahead of competitors in an ever-evolving market."
            features={[
              "Organic Growth",
              "Promotional Growth",
              "Campaign Setup",
              "Online Audit",
              "Competitors Analysis",
              "Market Research",
            ]}
          />
        </div>
      </div>
    </main>
  );
}

export default Services;
