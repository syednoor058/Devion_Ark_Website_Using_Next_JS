import CustomShapeButton from "@/components/buttons/CustomShapeButton";
import BlogSlider from "@/components/slider/BlogSlider";
import Image from "next/image";
import { FiArrowDownLeft } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { MdOutlineArrowForward } from "react-icons/md";
import blogCover2 from "../../../public/blogs/meta-marketing-2025-cover.jpg";
import blogCover1 from "../../../public/blogs/seo-vs-aeo-2025-blog-cover.jpg";
import cover from "../../../public/projects/case-study-cover.jpg";

export const metadata = {
  title: "Blog - Latest Updates On SEO, Software & Social Media | Devion Ark",
  description:
    "Unlock growth with cutting-edge insights on SEO, software trends, and social media. Transform your strategy with Devion Ark’s actionable guides.",
};

function BlogCard({ title, cover, category, desc, forwardTo, date, author }) {
  return (
    <div className="w-full py-5 lg:py-10 group">
      <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-10 items-stretch">
        <div className="w-full lg:w-[50%] flex">
          <div className="w-full flex flex-col gap-5 justify-between">
            <div className="w-full flex flex-row gap-5 justify-between font-light text-3xl lg:text-4xl text-lightPrimary leading-none">
              <div>
                <h2>{title}</h2>
              </div>
              <div className="text-5xl lg:text-7xl">
                <MdOutlineArrowForward className="group-hover:-rotate-45 duration-500 text-accentColor font-light" />
              </div>
            </div>
            <div className="w-full aspect-[1200/630] overflow-hidden rounded-sm relative">
              <Image
                placeholder="blur"
                src={cover}
                alt={title}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex">
          <div className="flex flex-col gap-5 justify-between">
            <div className="font-light text-lightSecondary text-lg leading-tight">
              <p>{desc}</p>
            </div>
            <div className="w-full flex flex-wrap gap-1 lg:gap-2">
              {category.map((cat, index) => (
                <div
                  key={index}
                  className="text-sm font-light text-accentColor px-3 py-2 rounded-full border border-lightSecondary"
                >
                  {cat}
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-2 lg:gap-5 justify-between">
              <div className="w-full flex flex-col gap-1 lg:gap-2">
                <div>Author</div>
                <div className="text-lightPrimary flex flex-col gap-1">
                  {author.map((auth, i) => (
                    <p key={i}>{auth}</p>
                  ))}
                </div>
              </div>
              <div className="w-auto lg:text-nowrap leading-tight">{date}</div>
            </div>
            <div className="w-full flex">
              <CustomShapeButton
                label="Read More"
                forwardTo={forwardTo}
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
      </div>
    </div>
  );
}

function Blogs() {
  const blogSliderConstant = [
    {
      title: "SEO vs AEO in 2025: The Future of Search Engine Optimization",
      img: blogCover1,
      forwardTo:
        "/blogs/seo-vs-aeo-in-2025-the-future-of-search-engine-optimization",
    },
    {
      title: "Meta Marketing in 2025: How Devion Ark's Strategies...",
      img: blogCover2,
      forwardTo:
        "/blogs/meta-marketing-in-2025-how-devion-arks-strategies-skyrocket-business-growth-by-150",
    },
  ];
  return (
    <main className="font-poppins">
      {/* Landing Section */}

      <div className="w-full min-h-[calc(100vh-60px)] bg-darkPrimary flex items-end pt-5 pb-10 lg:pt-20 lg:pb-20 text-lightSecondary font-light">
        <div className="w-full flex flex-col gap-10">
          <div className="w-full px-4 lg:px-20 flex flex-col gap-5">
            <h1 className="text-lightPrimary text-6xl lg:text-9xl font-medium uppercase font-oswald leading-none">
              Latest <span className="text-accentColor leading-none">news</span>
              .
            </h1>
          </div>
          <div className="w-full flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 px-4 lg:px-20 justify-between">
            <div className="w-full lg:w-[30%] flex flex-col gap-5">
              <div>
                <CustomShapeButton
                  label="Learn More"
                  forwardTo="/about"
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
              <p className="font-normal text-xl lg:text-sm lg:leading-normal lg:pt-5 lg:indent-20">
                Welcome to the Devion Ark Blog, your resource for cutting-edge
                trends, expert tips, and actionable strategies in digital
                transformation. Here, we share real-world success stories and
                industry insights that empower you to drive growth and enhance
                your online presence.
              </p>
            </div>
            <div className="w-full lg:w-[40%] flex flex-col gap-5">
              <div className="flex overflow-hidden">
                <div className="text-sm uppercase text-lightPrimary font-light ps-3 pe-5 py-2 rounded-full border border-accentColor">
                  <p className="flex flex-row gap-2 items-center">
                    <span>
                      <GoDotFill className="text-xs" />
                    </span>
                    Top Articles
                  </p>
                </div>
              </div>
              <div className="w-full text-base lg:text-lg p-3 bg-darkSecondary">
                <div className="w-full overflow-hidden">
                  <BlogSlider components={blogSliderConstant} />
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

      {/* Blog List Section */}
      <div className="w-full px-5 lg:px-20 py-10 lg:py-20 bg-black">
        <div className="w-full flex flex-col gap-10 lg:gap-16">
          <div className="flex overflow-hidden">
            <div className="text-sm uppercase text-lightPrimary font-light ps-3 pe-5 py-2 rounded-full border border-accentColor">
              <p className="flex flex-row gap-2 items-center">
                <span>
                  <GoDotFill className="text-xs" />
                </span>
                Blogs
              </p>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 gap-5 lg:gap-10 font-light text-lightSecondary leading-none divide-y-[1px] divide-lightSecondary/30">
            <BlogCard
              title="Meta Marketing in 2025: How Devion Ark's Strategies Skyrocket Business Growth by 150%"
              cover={blogCover2}
              category={[
                "Meta Marketing",
                "Ads Campaign",
                "Social Media",
                "Virtual Reality",
                "Social Media Marketing",
              ]}
              desc="This article explores how Meta Marketing is revolutionizing business growth in 2025, focusing on trends like AI-driven personalization, AR/VR advertising, and seamless e-commerce integration across Facebook, Instagram, and WhatsApp. Learn how Devion Ark leverages these tools to deliver 150%+ traffic growth and triple sales through precision targeting, scroll-stopping creatives, and real-time optimization."
              forwardTo="/blogs/meta-marketing-in-2025-how-devion-arks-strategies-skyrocket-business-growth-by-150"
              date="November 30, 2024"
              author={["Naim Rahman", "Syed Shaeduzzaman Noor"]}
            />

            <BlogCard
              title="SEO vs AEO in 2025: The Future of Search Engine Optimization"
              cover={blogCover1}
              category={[
                "SEO",
                "AEO",
                "Search Engine Optimization",
                "Answer Engine Optimization",
                "Search Engine Marketing",
              ]}
              desc="Is SEO dead, or is it just evolving? In this in-depth blog, we explore the future of SEO (Search Engine Optimization) and the rise of AEO (Answer Engine Optimization) in 2025. Discover how voice search, featured snippets, and structured data are reshaping the digital marketing landscape."
              forwardTo="/blogs/seo-vs-aeo-in-2025-the-future-of-search-engine-optimization"
              date="December 13, 2024"
              author={["Naim Rahman", "Syed Shaeduzzaman Noor"]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blogs;
