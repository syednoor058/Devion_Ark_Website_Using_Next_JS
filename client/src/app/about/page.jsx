import Image from "next/image";
import aboutLandingImg from "../../../public/about/hero_image.png";

function page() {
  return (
    <main>
      {/* Landing Section */}
      <div className="w-full px-5 lg:px-20 pt-5 lg:pt-10 pb-10 lg:pb-20">
        <div className="w-full flex flex-col gap-10 lg:gap-16">
          <h1 className="uppercase font-oswald font-bold text-[12vw] lg:text-[8vw] leading-none text-lightPrimary flex flex-col">
            <span>Our Journey of</span>{" "}
            <span>
              <span className="text-accentColor">Precision</span> and Passion
            </span>
          </h1>
          <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-10 lg:gap-16 items-end">
            <div className="w-full lg:w-[40%] overflow-hidden rounded-sm relative">
              <Image
                src={aboutLandingImg}
                alt="about page landing page image"
                className="w-full object-cover"
              />
            </div>
            <p className="w-full lg:w-[60%] font-light text-lightSecondary text-xl lg:text-4xl">
              Welcome to Devion Ark, where digital transformation meets human
              ambition. Founded in 2021, we&apos;re not just another IT agency —
              we&apos;re problem solvers, growth architects, and relentless
              advocates for your success. From startups to enterprises,
              we&apos;ve spent 3 years mastering SEO, crafting award-winning
              social strategies, and building custom software that simplifies
              complexity. But behind every line of code is a simple belief: Your
              growth is our legacy. Let&apos;s redefine what&apos;s possible.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
