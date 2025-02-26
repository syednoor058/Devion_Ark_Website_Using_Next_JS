"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import eCommerceBack from "../../../public/projects/e-commerce_background.jpg";
import realEstateBack from "../../../public/projects/real_estate_background.jpg";
import seoBack from "../../../public/projects/seo_background.jpg";
import smmBack from "../../../public/projects/smm_background.jpg";
import ProjectColumn from "./ProjectColumn";
import ProjectMobileColumn from "./ProjectMobileColumn";

gsap.registerPlugin(ScrollTrigger);

const ProjectShowcase = () => {
  const projectCardDivRef = useRef(null);
  const projectCardTwoRef = useRef(null);
  const projectCardThreeRef = useRef(null);
  const projectCardFourRef = useRef(null);
  const [activeCard, setActiveCard] = useState("1");
  useEffect(() => {
    if (!projectCardDivRef.current) return;

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectCardDivRef.current,
        start: "top top",
        end: "400% bottom",
        pin: true,
        scrub: 1.5,
        // markers: true,
      },
    });

    tl.to(
      projectCardTwoRef.current,
      {
        top: 0,
        ease: "power2.inOut",
      },
      "a"
    )
      .to(
        projectCardThreeRef.current,
        {
          top: "100%",
        },
        "a"
      )
      .to(
        projectCardFourRef.current,
        {
          top: "200%",
        },
        "a"
      )
      .to(
        projectCardThreeRef.current,
        {
          top: 0,
          ease: "power2.inOut",
        },
        "b"
      )
      .to(
        projectCardFourRef.current,
        {
          top: "100%",
        },
        "b"
      )
      .to(
        projectCardFourRef.current,
        {
          top: 0,
          ease: "power2.inOut",
        },
        "c"
      );

    return () => tl.revert();
  }, []);

  return (
    <div className="w-full lg:h-screen overflow-hidden relative">
      <div className="w-full h-full hidden lg:flex">
        <ProjectColumn
          caption="An intuitive and scalable e-commerce website tailored for sportswear businesses."
          title1="Sportswear"
          title2="E-commerce"
          img={eCommerceBack}
          forward=""
          projectNum="1"
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <ProjectColumn
          caption="A powerful CRM system for real estate professionals, providing automation."
          title1="Real Estate"
          title2="CRM System"
          img={realEstateBack}
          forward=""
          projectNum="2"
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <ProjectColumn
          caption="A strategic social media project encompassing performance monitoring to boost online presence."
          title1="Social Ads"
          title2="Campaigns"
          img={smmBack}
          forward=""
          projectNum="3"
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <ProjectColumn
          caption="A potential strategy to stand out and out perform competitors in google search rank."
          title1="Technical"
          title2="SEO Stuff"
          img={seoBack}
          forward=""
          projectNum="4"
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
      </div>
      <div
        ref={projectCardDivRef}
        className="w-full min-h-screen flex lg:hidden flex-col relative"
      >
        <ProjectMobileColumn
          caption="An intuitive and scalable e-commerce web application tailored for sportswear businesses."
          title1="Sportswear"
          title2="E-commerce"
          img={eCommerceBack}
          forward=""
          projectNum="1"
        />
        <div
          ref={projectCardTwoRef}
          className="w-full h-screen absolute top-[100%] left-0 z-[10]"
          style={{ top: "100%" }}
        >
          <ProjectMobileColumn
            caption="A powerful CRM system for real estate professionals, providing automation."
            title1="Real Estate"
            title2="CRM System"
            img={realEstateBack}
            forward=""
            projectNum="2"
          />
        </div>
        <div
          ref={projectCardThreeRef}
          className="w-full h-screen absolute top-[100%] left-0 z-[15]"
          style={{ top: "200%" }}
        >
          <ProjectMobileColumn
            caption="A strategic social media project encompassing performance monitoring to boost online presence."
            title1="Social Ads"
            title2="Campaigns"
            img={smmBack}
            forward=""
            projectNum="3"
          />
        </div>
        <div
          ref={projectCardFourRef}
          className="w-full h-screen absolute top-[100%] left-0 z-[20]"
          style={{ top: "300%" }}
        >
          <ProjectMobileColumn
            caption="A potential strategy to stand out and out perform competitors in google search rank."
            title1="Technical"
            title2="SEO Stuff"
            img={seoBack}
            forward=""
            projectNum="4"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
