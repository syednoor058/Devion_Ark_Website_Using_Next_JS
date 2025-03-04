"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import eCommerceBack from "../../../public/projects/e-commerce_background.webp";
import realEstateBack from "../../../public/projects/real_estate_background.webp";
import seoBack from "../../../public/projects/seo_background.webp";
import smmBack from "../../../public/projects/smm_background.webp";
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
          caption="Built a scalable online store for a local brand, boosting sales by 150% with SEO-friendly web development and seamless payment integration."
          title1="Sportswear"
          title2="E-commerce App"
          img={eCommerceBack}
          forward="/case-studies/dynamic-sportswear-e-commerce-platform"
          projectNum="1"
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <ProjectColumn
          caption="Automated lead management for a Dhaka agency, slashing manual tasks by 70% with our custom software development expertise."
          title1="Real Estate"
          title2="CRM System"
          img={realEstateBack}
          forward="/case-studies/comprehensive-real-estate-crm-solution"
          projectNum="2"
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <ProjectColumn
          caption="Transformed a fading brand into a viral sensation, tripling engagement through targeted ads – proof we’re among the best digital marketing agencies in Bangladesh."
          title1="Social Media"
          title2="Brand Revival"
          img={smmBack}
          forward="/case-studies"
          projectNum="3"
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
        <ProjectColumn
          caption="Helped a e-commerce startup outrank competitors with local SEO strategies, driving a 200% traffic surge in 6 months."
          title1="Dominating"
          title2="Web Rankings"
          img={seoBack}
          forward="/case-studies"
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
          caption="Built a scalable online store for a local brand, boosting sales by 150% with SEO-friendly web development and seamless payment integration."
          title1="Sportswear"
          title2="E-commerce App"
          img={eCommerceBack}
          forward="/case-studies/dynamic-sportswear-e-commerce-platform"
          projectNum="1"
        />
        <div
          ref={projectCardTwoRef}
          className="w-full h-screen absolute top-[100%] left-0 z-[10]"
          style={{ top: "100%" }}
        >
          <ProjectMobileColumn
            caption="Automated lead management for a Dhaka agency, slashing manual tasks by 70% with our custom software development expertise."
            title1="Real Estate"
            title2="CRM System"
            img={realEstateBack}
            forward="/case-studies/comprehensive-real-estate-crm-solution"
            projectNum="2"
          />
        </div>
        <div
          ref={projectCardThreeRef}
          className="w-full h-screen absolute top-[100%] left-0 z-[15]"
          style={{ top: "200%" }}
        >
          <ProjectMobileColumn
            caption="Transformed a fading brand into a viral sensation, tripling engagement through targeted ads – proof we’re among the best digital marketing agencies in Bangladesh"
            title1="Social Media"
            title2="Brand Revival"
            img={smmBack}
            forward="/case-studies"
            projectNum="3"
          />
        </div>
        <div
          ref={projectCardFourRef}
          className="w-full h-screen absolute top-[100%] left-0 z-[20]"
          style={{ top: "300%" }}
        >
          <ProjectMobileColumn
            caption="Helped a SaaS startup outrank competitors with local SEO strategies, driving a 200% traffic surge in 6 months."
            title1="Dominating"
            title2="Web Rankings"
            img={seoBack}
            forward="/case-studies"
            projectNum="4"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
