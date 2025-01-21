"use client";
import CircleType from "circletype";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { FaTools } from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

function OurService() {
  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "50% 50%",
        end: "375% 50%",
        scrub: 1.5,
        pin: true,
        // markers: true,
      },
    });
    tl.to(
      "#card-one",
      {
        top: "45%",
        ease: "power2.inOut",
      },
      "a"
    )
      .to(
        "#card-two",
        {
          top: "160%",
        },
        "a"
      )

      .to(
        "#card-one",
        {
          scale: 0.8,
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        "#card-two",
        {
          top: "52%",
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        "#card-three",
        {
          top: "160%",
        },
        "b"
      )

      .to(
        "#card-two",
        {
          scale: 0.9,
          ease: "power2.inOut",
        },
        "c"
      )
      .to(
        "#card-three",
        {
          top: "60%",
          ease: "power2.inOut",
        },
        "c"
      )
      .to(
        "#card-four",
        {
          top: "160%",
        },
        "c"
      )
      .to(
        "#card-one",
        {
          scale: 0,
        },
        "d"
      )
      .to(
        "#card-two",
        {
          top: "45%",
          scale: 0.8,
        },
        "d"
      )

      .to(
        "#card-three",
        {
          top: "52%",
          scale: 0.9,
        },
        "d"
      )
      .to(
        "#card-four",
        {
          top: "60%",
        },
        "d"
      )
      .to(
        "#card-five",
        {
          top: "160%",
        },
        "d"
      )
      .to(
        "#card-two",
        {
          scale: 0,
        },
        "e"
      )
      .to(
        "#card-three",
        {
          top: "45%",
          scale: 0.8,
        },
        "e"
      )

      .to(
        "#card-four",
        {
          top: "52%",
          scale: 0.9,
        },
        "e"
      )
      .to(
        "#card-five",
        {
          top: "60%",
        },
        "e"
      )
      .to(
        "#card-six",
        {
          top: "160%",
        },
        "e"
      )
      .to(
        "#card-three",
        {
          scale: 0,
        },
        "f"
      )
      .to(
        "#card-four",
        {
          top: "45%",
          scale: 0.8,
        },
        "f"
      )

      .to(
        "#card-five",
        {
          top: "52%",
          scale: 0.9,
        },
        "f"
      )
      .to(
        "#card-six",
        {
          top: "60%",
        },
        "f"
      );

    return () => tl.revert();
  }, []);

  useEffect(() => {
    const circleType = new CircleType(
      document.getElementById("service-rotated-text")
    );
    circleType.radius(80);
  }, []);
  return (
    <div
      id="main"
      className="w-full min-h-[120vh] justify-center items-center relative bg-darkPrimary"
    >
      <div className="w-full flex flex-row justify-between absolute top-0 z-[1] overflow-hidden px-5 lg:px-20">
        {/* {[
          ...Array(10).map((_, index) => (
            <div
              key={index}
              className="w-[1px] h-[120vh] bg-lightSecondary bg-opacity-15"
            ></div>
          )),
        ]} */}
        <div className="w-[1px] h-[120vh] bg-darkSecondary"></div>
        <div className="w-[1px] h-[120vh] bg-darkSecondary"></div>
        <div className="w-[1px] h-[120vh] bg-darkSecondary"></div>
        <div className="w-[1px] h-[120vh] bg-darkSecondary"></div>
        <div className="w-[1px] h-[120vh] bg-darkSecondary"></div>
        <div className="w-[1px] h-[120vh] bg-darkSecondary"></div>
      </div>
      <div
        id="text"
        className="w-full absolute top-24 z-[2] flex flex-col justify-center items-center"
      >
        <div className="w-full min-h-[600px] relative flex justify-center">
          <motion.div
            className="text-4xl lg:text-6xl font-inter font-medium flex flex-row gap-1 items-center"
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {" "}
            <div id="service-rotated-text" className="pe-3">
              ur Services . Our Services . Our Services . O
            </div>{" "}
          </motion.div>
          <div className="absolute text-[120px] lg:text-[200px] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
            <FaTools />
          </div>
        </div>
      </div>
      <div
        id="card-one"
        className="w-full lg:w-[90%] h-[95vh] lg:h-[75vh] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[3]"
        style={{ top: "160%" }}
      >
        <ServiceCard
          index="1"
          title="Software System Development"
          desc="We deliver robust and scalable software solutions tailored to meet your business needs. From custom applications to enterprise-grade systems, we transform your ideas into reality."
          features={[
            "Custom Software Development",
            "CRM Systems (Customer Relationship Management)",
            "ERP Systems (Enterprise Resource Planning)",
            "E-commerce Solutions",
            "Software As A Service (SAAS)",
            "API Integration and Development",
          ]}
          image="/services/software_development.jpg"
          bgcolor="bg-black"
          titlecolor="text-lightPrimary"
          textcolor="text-lightSecondary"
          barcolor="border-gray-700"
        />
      </div>
      <div
        id="card-two"
        className="w-full lg:w-[90%] h-[95vh] lg:h-[75vh] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[3]"
        style={{ top: "230%" }}
      >
        <ServiceCard
          index="2"
          title="Website Development"
          desc="Creating visually stunning and highly functional websites designed to captivate your audience and deliver a seamless user experience."
          features={[
            "Responsive Design",
            "Single-Page Applications (SPA)",
            "Progressive Web Apps (PWA)",
            "WordPress Development",
            "Website Maintenance and Updates",
            "UI/UX Design",
          ]}
          image="/services/software_development.jpg"
          bgcolor="bg-darkSecondary"
          titlecolor="text-lightPrimary"
          textcolor="text-lightSecondary"
          barcolor="border-gray-700"
        />
      </div>
      <div
        id="card-three"
        className="w-full lg:w-[90%] h-[95vh] lg:h-[75vh] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[3]"
        style={{ top: "250%" }}
      >
        <ServiceCard
          index="3"
          title="Social Media Marketing (SMM)"
          desc="Expand your online presence and engage your target audience through innovative social media strategies and campaigns."
          features={[
            "Social Media Content Creation",
            "Paid Advertising Campaigns",
            "Influencer Marketing",
            "Community Management",
            "Analytics and Reporting",
            "Strategy Development",
          ]}
          image="/services/software_development.jpg"
          bgcolor="bg-black"
          titlecolor="text-lightPrimary"
          textcolor="text-lightSecondary"
          barcolor="border-gray-300"
        />
      </div>
      <div
        id="card-four"
        className="w-full lg:w-[90%] h-[95vh] lg:h-[75vh] absolute bg-[#0f0f0f] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[3]"
        style={{ top: "270%" }}
      >
        <ServiceCard
          index="4"
          title="Search Engine Marketing (SEM)"
          desc="Drive immediate traffic to your website with targeted and effective pay-per-click advertising campaigns."
          features={[
            "Google Ads Campaigns",
            "Bing Ads Management",
            "Keyword Research and Analysis",
            "Ad Copywriting",
            "Conversion Rate Optimization",
            "Performance Analytics",
          ]}
          image="/services/software_development.jpg"
          bgcolor="bg-darkSecondary"
          titlecolor="text-lightPrimary"
          textcolor="text-lightSecondary"
          barcolor="border-gray-700"
        />
      </div>
      <div
        id="card-five"
        className="w-full lg:w-[90%] h-[95vh] lg:h-[75vh] absolute bg-[#0f0f0f] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[3]"
        style={{ top: "290%" }}
      >
        <ServiceCard
          index="5"
          title="Search Engine Optimization (SEO)"
          desc="Improve your website's visibility and ranking on search engines to attract organic traffic and grow your business."
          features={[
            "On-Page Optimization",
            "Off-Page Optimization",
            "Technical SEO Audits",
            "Keyword Analysis & Research",
            "Back-Link Building",
            "Local SEO",
          ]}
          image="/services/software_development.jpg"
          bgcolor="bg-black"
          titlecolor="text-lightPrimary"
          textcolor="text-lightSecondary"
          barcolor="border-gray-700"
        />
      </div>
      <div
        id="card-six"
        className="w-full lg:w-[90%] h-[95vh] lg:h-[75vh] absolute bg-[#0f0f0f] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[3]"
        style={{ top: "310%" }}
      >
        <ServiceCard
          index="6"
          title="Digital Marketing"
          desc="Amplify your brand’s digital footprint with holistic strategies that combine creativity and data-driven insights."
          features={[
            "Email Marketing Campaigns",
            "Content Marketing",
            "Video Marketing",
            "Analytics and Performance Tracking",
            "Brand Strategy",
          ]}
          image="/services/software_development.jpg"
          bgcolor="bg-darkSecondary"
          titlecolor="text-lightPrimary"
          textcolor="text-lightSecondary"
          barcolor="border-gray-700"
        />
      </div>
    </div>
  );
}

export default OurService;
