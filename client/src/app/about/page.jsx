import Head from "next/head";
import Image from "next/image";
import { BsTools } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import { GoDotFill } from "react-icons/go";
import { MdOutlinePeopleAlt, MdOutlineSupport } from "react-icons/md";
import { RiBriefcaseFill } from "react-icons/ri";
import { TiLockOpenOutline } from "react-icons/ti";
import clientsPartnership from "../../../public/about/happy-and-partnership.png";
import aboutLandingImg from "../../../public/about/hero_image.png";
import oldGarage from "../../../public/about/old-garage.jpg";
import fahim from "../../../public/owners/fahim_sharar.webp";
import fuad from "../../../public/owners/farhan_fuad.webp";
import naim from "../../../public/owners/naim_rahman.webp";
import syedNoor from "../../../public/owners/syed_noor.webp";

export const metadata = {
  title:
    "About Devion Ark | Digital Growth Partner for SEO, Software & Results",
  description:
    "Discover Devion Ark’s mission, team, and proven expertise in SEO, custom software, and digital strategies. Learn how we empower businesses to scale with innovation and integrity.",
};

function About() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.devionark.com/about/" />
      </Head>
      <main>
        {/* Landing Section */}
        <div className="w-full px-5 lg:px-20 pt-5 lg:pt-10 pb-5 lg:pb-10">
          <div className="w-full flex flex-col gap-10 lg:gap-16">
            <h1 className="uppercase font-oswald font-semibold text-3xl lg:text-6xl leading-none text-lightPrimary flex flex-col">
              <span>Our Journey of</span>{" "}
              <span>
                <span className="text-accentColor ">Precision</span> and Passion
              </span>
            </h1>
            <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-10 lg:gap-16 items-end">
              <div className="w-full lg:w-[20%] overflow-hidden rounded-sm relative">
                <Image
                  placeholder="blur"
                  src={aboutLandingImg}
                  alt="about page landing page image"
                  className="w-full object-cover"
                />
              </div>
              <p className="w-full lg:w-[80%] font-light text-lightSecondary text-xl lg:text-3xl">
                Welcome to Devion Ark, where digital transformation meets human
                ambition. Founded in 2021, we&apos;re not just another IT agency
                — we&apos;re problem solvers, growth architects, and relentless
                advocates for your success. From startups to enterprises,
                we&apos;ve spent 3 years mastering SEO, crafting award-winning
                social strategies, and building custom software that simplifies
                complexity. But behind every line of code is a simple belief:
                Your growth is our legacy. Let&apos;s redefine what&apos;s
                possible.
              </p>
            </div>
          </div>
        </div>

        {/* Start Story Section  */}
        <div className="w-full text-lightSecondary font-light py-10 lg:py-20 px-5 lg:px-20 text-base lg:text-xl leading-tight">
          <div className="w-full flex flex-col gap-10 lg:gap-16">
            <div className="flex overflow-hidden">
              <div className="text-sm uppercase text-lightPrimary font-light ps-3 pe-5 py-2 rounded-full border border-accentColor">
                <p className="flex flex-row gap-2 items-center uppercase">
                  <span>
                    <GoDotFill className="text-xs" />
                  </span>
                  Our Stories
                </p>
              </div>
            </div>
            <h2 className="text-lightPrimary font-oswald font-medium text-3xl lg:text-6xl leading-tight lg:leading-none ">
              How <span className="text-accentColor uppercase">Devion Ark</span>{" "}
              began
            </h2>
            <div className="flex flex-col gap-5">
              <p>
                Every revolution starts with a spark. For Devion Ark, that spark
                ignited in 2021 when our founder,{" "}
                <span className="text-lightPrimary font-normal">
                  Syed Shaeduzzaman Noor
                </span>
                , noticed a glaring gap in the digital world: businesses were
                drowning in generic tools and hollow promises. Armed with a
                laptop, a vision, and relentless grit, he set out to build an
                agency that prioritized results over rhetoric.
              </p>
              <p>
                The early days were far from glamorous. Working out of a cramped
                garage in Khulna, Bangladesh, we took on projects others
                dismissed as ‘too niche’ or ‘too ambitious.’ Whether it was
                rescuing a local bakery’s SEO from obscurity or coding a website
                for a nonprofitable organization, we thrived on challenges that
                demanded creativity.
              </p>
            </div>
            <div className="w-full overflow-hidden relative rounded-sm">
              <Image
                placeholder="blur"
                src={oldGarage}
                alt="four co-workers are standing in an old garage"
                className="w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <p>
                Our breakthrough came in 2022 when we collaborated with a
                Canadian digital marketing agency,{" "}
                <span className="text-lightPrimary font-normal">
                  Puppetbrush
                </span>
                . That success wasn’t just a win for our company — it proved
                that agility, transparency, and technical mastery could outpace
                industry giants.
              </p>
              <p>
                Today, we’ve grown into a full-service digital partner trusted
                by startups, locals, and enterprises alike. But our core remains
                unchanged: We’re still that scrappy team obsessed with solving
                problems, one line of code — and one pixel-perfect strategy — at
                a time.
              </p>
            </div>
          </div>
        </div>

        {/* Our Missions Section  */}
        <div className="w-full text-lightSecondary font-light py-10 lg:py-20 px-5 lg:px-20 text-base lg:text-xl leading-tight">
          <div className="flex flex-col gap-10 lg:gap-16">
            <div className="flex overflow-hidden">
              <div className="text-sm uppercase text-lightPrimary font-light ps-3 pe-5 py-2 rounded-full border border-accentColor">
                <p className="flex flex-row gap-2 items-center uppercase">
                  <span>
                    <GoDotFill className="text-xs" />
                  </span>
                  Our Missions
                </p>
              </div>
            </div>
            <h2 className="text-lightPrimary font-oswald font-medium text-3xl lg:text-6xl leading-tight lg:leading-none">
              More than <span className="text-accentColor">metrics</span>, it’s
              about momentum
            </h2>
            <div className="w-full flex flex-col lg:flex-row gap-10 justify-between">
              <div className="w-full lg:w-[60%] flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <p>
                    At{" "}
                    <span className="font-normal text-lightPrimary">
                      Devion Ark
                    </span>
                    , our mission is simple but powerful: Empower businesses to
                    thrive in the digital age. We believe technology and
                    creativity should work hand-in-hand to solve real-world
                    challenges, not just chase vanity metrics.
                  </p>
                  <p>Our values shape every decision we make:</p>
                </div>
                <ul className="w-full flex flex-col gap-5 list-disc ps-5">
                  <li>
                    <span className="font-normal text-lightPrimary">
                      Client-First Integrity:
                    </span>{" "}
                    Your goals are our north star — no shortcuts, no hidden
                    agendas.
                  </li>
                  <li>
                    <span className="font-normal text-lightPrimary">
                      Relentless Innovation:
                    </span>{" "}
                    We stay ahead of trends (Google’s ever-changing algorithms?
                    Bring it on).
                  </li>
                  <li>
                    <span className="font-normal text-lightPrimary">
                      Transparent Partnerships:
                    </span>{" "}
                    Monthly reports, honest feedback, and zero jargon. Always.
                  </li>
                  <li>
                    <span className="font-normal text-lightPrimary">
                      Community Impact:
                    </span>{" "}
                    5% of profits fund digital literacy programs for underserved
                    entrepreneurs.
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-[30%] relative overflow-hidden rounded-sm">
                <Image
                  placeholder="blur"
                  src={clientsPartnership}
                  alt="happy clients and partnership building"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Founder Quote  */}
        <div className="w-full text-lightSecondary font-light py-10 lg:py-20 px-5 lg:px-20 text-base lg:text-xl leading-tight">
          <div className="flex flex-col gap-5 lg:gap-10">
            <div className=" text-[6vw] lg:text-[4vw] leading-tight">
              <h3>
                "We’re not here to be another vendor. We’re here to be your
                growth ally."
              </h3>
            </div>
            <div className="flex justify-end">
              <div className="flex flex-col gap-2 lg:gap-3">
                <div className="text-lightPrimary font-semibold uppercase leading-none text-xl lg:text-3xl">
                  <h5>Syed Sheaduzzaman Noor</h5>
                </div>
                <div className="text-base lg:text-xl">
                  <p>Founder, Cheif Technology Officer (CTO)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Work Section  */}
        <div className="w-full text-lightSecondary font-light py-10 lg:py-20 px-5 lg:px-20 text-base lg:text-xl leading-tight">
          <div className="flex flex-col gap-10 lg:gap-16">
            <div className="flex overflow-hidden">
              <div className="text-sm uppercase text-lightPrimary font-light ps-3 pe-5 py-2 rounded-full border border-accentColor">
                <p className="flex flex-row gap-2 items-center uppercase">
                  <span>
                    <GoDotFill className="text-xs" />
                  </span>
                  Our Strategy
                </p>
              </div>
            </div>
            <h2 className="text-lightPrimary font-oswald font-medium text-3xl lg:text-6xl  leading-tight lg:leading-none">
              Our <span className="text-accentColor">process</span> for
              guaranteed growth
            </h2>

            <div className="w-full flex flex-col lg:flex-row-reverse gap-10 justify-between">
              <div className="w-full lg:w-[60%] flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <p>
                    Great results start with a proven framework. Here’s how we
                    turn your vision into reality:
                  </p>
                </div>
                <ul className="w-full flex flex-col gap-5 list-disc ps-5">
                  <li>
                    <span className="font-normal text-lightPrimary">
                      Discovery:
                    </span>{" "}
                    We listen. Deeply. Through audits and workshops, we uncover
                    your unique challenges and goals.
                  </li>
                  <li>
                    <span className="font-normal text-lightPrimary">
                      Strategy:
                    </span>{" "}
                    Data meets creativity. We build a roadmap with KPIs,
                    timelines, and contingency plans.
                  </li>
                  <li>
                    <span className="font-normal text-lightPrimary">
                      Execution:
                    </span>{" "}
                    Agile development, A/B-tested campaigns, and weekly syncs
                    ensure no detail slips through the cracks.
                  </li>
                  <li>
                    <span className="font-normal text-lightPrimary">
                      Optimization:
                    </span>{" "}
                    We refine. Constantly. From tweaking SEO keywords to scaling
                    software features, perfection is a moving target — and we
                    love the chase.
                  </li>
                </ul>
                <p>
                  Whether it’s ranking #1 for hyper-competitive keywords or
                  coding a custom CRM, we blend cutting-edge tools (think
                  SEMrush, HubSpot, React.js) with old-school hustle.
                </p>
              </div>
              <div className="w-full lg:w-[30%] relative overflow-hidden rounded-sm">
                <Image
                  placeholder="blur"
                  src={clientsPartnership}
                  alt="happy clients and partnership building"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why choose us Section  */}
        <div className="w-full text-lightSecondary font-light py-10 lg:py-20 px-5 lg:px-20 text-base lg:text-xl leading-tight">
          <div className="flex flex-col gap-10 lg:gap-16">
            <div className="flex overflow-hidden">
              <div className="text-sm uppercase text-lightPrimary font-light ps-3 pe-5 py-2 rounded-full border border-accentColor">
                <p className="flex flex-row gap-2 items-center uppercase">
                  <span>
                    <GoDotFill className="text-xs" />
                  </span>
                  Why us
                </p>
              </div>
            </div>
            <h2 className="text-lightPrimary font-oswald font-medium text-3xl lg:text-6xl leading-tight lg:leading-none">
              Where expertise meets{" "}
              <span className="text-accentColor ">execution</span>.
            </h2>
            <div className="w-full">
              <div className="w-full flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <p className=" text-[5vw] lg:text-[3vw] leading-tight">
                    Why do 87% of clients stay with us from the beginning?
                    Because we deliver what others can’t:
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
              <div className="flex flex-col gap-3 lg:gap-5">
                <div className="flex flex-row items-center gap-5 text-6xl text-lightPrimary font-semibold">
                  <span>
                    <CgSandClock className=" text-accentColor" />
                  </span>{" "}
                  <span>3+</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="font-oswald font-semibold text-lightPrimary leading-tight text-2xl lg:text-3xl uppercase">
                    Years of Mastery
                  </h5>
                  <p>
                    Over 1,000 days refining SEO, social campaigns, and software
                    solutions — we’ve seen what works (and what doesn’t).
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5">
                <div className="flex flex-row items-center gap-5 text-6xl text-lightPrimary font-semibold">
                  <span>
                    <RiBriefcaseFill className=" text-accentColor" />
                  </span>{" "}
                  <span>20+</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="font-oswald font-semibold text-lightPrimary leading-tight text-2xl lg:text-3xl uppercase">
                    Projects Delivered
                  </h5>
                  <p>
                    Proven success across industries — SaaS, retail, healthcare,
                    and beyond.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5">
                <div className="flex flex-row items-center gap-5 text-6xl text-lightPrimary font-semibold">
                  <span>
                    <BsTools className=" text-accentColor" />
                  </span>{" "}
                  <span>100%</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="font-oswald font-semibold text-lightPrimary leading-tight text-2xl lg:text-3xl uppercase">
                    Full-Stack Flexibility
                  </h5>
                  <p>
                    SEO, social ads, websites, custom software, business
                    strategy planning — no project is too niche or too vast.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5">
                <div className="flex flex-row items-center gap-5 text-6xl text-lightPrimary font-semibold">
                  <span>
                    <MdOutlinePeopleAlt className=" text-accentColor" />
                  </span>{" "}
                  <span>12+</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="font-oswald font-semibold text-lightPrimary leading-tight text-2xl lg:text-3xl uppercase">
                    Worldwide Clients
                  </h5>
                  <p>
                    From local cat food shop to global e-commerce brands, our
                    strategies transcend borders.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5">
                <div className="flex flex-row items-center gap-5 text-6xl text-lightPrimary font-semibold">
                  <span>
                    <TiLockOpenOutline className=" text-accentColor" />
                  </span>{" "}
                  <span>0</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="font-oswald font-semibold text-lightPrimary leading-tight text-2xl lg:text-3xl uppercase">
                    Lock-In Contracts
                  </h5>
                  <p>
                    Hate rigid terms? So do we. Pay for results, not promises.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5">
                <div className="flex flex-row items-center gap-5 text-6xl text-lightPrimary font-semibold">
                  <span>
                    <MdOutlineSupport className=" text-accentColor" />
                  </span>{" "}
                  <span>24/7</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="font-oswald font-semibold text-lightPrimary leading-tight text-2xl lg:text-3xl uppercase">
                    Support Available
                  </h5>
                  <p>Your midnight email? Answered before your coffee brews.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meet The Team Section  */}
        <div className="w-full text-lightSecondary font-light py-10 lg:py-20 px-5 lg:px-20 text-base lg:text-xl leading-tight">
          <div className="flex flex-col gap-10 lg:gap-16">
            <div className="flex overflow-hidden">
              <div className="text-sm uppercase text-lightPrimary font-light ps-3 pe-5 py-2 rounded-full border border-accentColor">
                <p className="flex flex-row gap-2 items-center uppercase">
                  <span>
                    <GoDotFill className="text-xs" />
                  </span>
                  The Team
                </p>
              </div>
            </div>
            <h2 className="text-lightPrimary font-oswald font-medium text-3xl lg:text-6xl leading-tight lg:leading-none">
              The minds behind the{" "}
              <span className="text-accentColor ">magic</span>.
            </h2>
            <div className="w-full">
              <div className="w-full flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <p className=" text-2xl lg:text-4xl leading-tight">
                    We’re engineers, artists, and data nerds united by one goal:
                    your success.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
              <div className="flex flex-col gap-3 lg:gap-5">
                <div className="w-full aspect-[9/11] overflow-hidden rounded-sm relative">
                  <Image
                    placeholder="blur"
                    src={syedNoor}
                    alt="Syed Shaeduzzaman Noor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:gap-3">
                  <h5 className="text-lightPrimary font-oswald uppercase font-semibold leading-tight text-2xl">
                    Syed Shaeduzzaman Noor
                  </h5>
                  <p className="text-lg lg:text-xl ">
                    Founder, Cheif Technology Officer (CTO)
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5">
                <div className="w-full aspect-[9/11] overflow-hidden rounded-sm relative">
                  <Image
                    placeholder="blur"
                    src={fahim}
                    alt="Kazi Fahim Sharar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:gap-3">
                  <h5 className="text-lightPrimary font-oswald uppercase font-semibold leading-tight text-2xl">
                    Kazi Fahim Sharar
                  </h5>
                  <p className="text-lg lg:text-xl ">
                    Co-founder, Senior SEO Specialist
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5">
                <div className="w-full aspect-[9/11] overflow-hidden rounded-sm relative">
                  <Image
                    placeholder="blur"
                    src={naim}
                    alt="Naim Rahman"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:gap-3">
                  <h5 className="text-lightPrimary font-oswald uppercase font-semibold leading-tight text-2xl">
                    Naim Rahman
                  </h5>
                  <p className="text-lg lg:text-xl ">
                    Co-founder, Senior Marketing Officer
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5">
                <div className="w-full aspect-[9/11] overflow-hidden rounded-sm relative">
                  <Image
                    placeholder="blur"
                    src={fuad}
                    alt="MD Farhan Fuad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 lg:gap-3">
                  <h5 className="text-lightPrimary font-oswald uppercase font-semibold leading-tight text-2xl">
                    Farhan Fuad
                  </h5>
                  <p className="text-lg lg:text-xl ">
                    Co-founder, Senior Campaign Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
