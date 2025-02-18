import ActionButton from "@/components/buttons/ActionButton";
import Image from "next/image";
import { BiBookReader } from "react-icons/bi";
import { LuArrowUpRight } from "react-icons/lu";
import { MdOutlineArrowForward } from "react-icons/md";
import blogCover1 from "../../../public/blogs_cover/seo-vs-aeo-2025-blog-cover.jpg";

function BlogCard({ title, cover, category, desc, forwardTo, date, author }) {
  return (
    <div className="w-full py-5 lg:py-10 group">
      <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-10 items-stretch">
        <div className="w-full lg:w-[50%] flex">
          <div className="w-full flex flex-col gap-5">
            <div className="w-full flex flex-row gap-5 justify-between font-light text-3xl lg:text-4xl text-lightPrimary leading-none">
              <div>
                <h2>{title}</h2>
              </div>
              <div className="text-5xl lg:text-7xl">
                <MdOutlineArrowForward className="group-hover:-rotate-45 duration-500 text-accentColor font-light" />
              </div>
            </div>
            <div className="w-full aspect-[3/1] overflow-hidden rounded-sm relative">
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
                <div className="text-lightPrimary">{author}</div>
              </div>
              <div className="w-auto lg:text-nowrap leading-tight">{date}</div>
            </div>
            <div className="w-full flex">
              <div className="w-full flex">
                <ActionButton
                  forwardTo={forwardTo}
                  label="Read More"
                  labelColor="text-lightPrimary font-normal"
                  labelHoverColor="group-hover:text-darkPrimary"
                  bgColor="bg-lightPrimary"
                  labelSize="text-base"
                  borderColor="border-lightPrimary"
                  iconColor="text-darkPrimary"
                  iconSize="text-2xl"
                  icon={<BiBookReader className="" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Blogs() {
  return (
    <main className="font-poppins">
      {/* Landing Section */}

      <div className="w-full h-full relative">
        <div className="w-full flex flex-col gap-10 lg:gap-5 px-5 lg:px-20 pb-10 lg:pb-20 pt-5 lg:pt-10">
          <h1 className="w-full flex flex-col font-oswald font-bold uppercase text-start">
            <span className="w-full text-lightSecondary leading-tight lg:leading-none text-[7.5vw] lg:text-[5vw] ">
              Digital Insights For
            </span>
            <span className="w-full leading-none text-lightPrimary text-[20vw] lg:text-[8vw]">
              Business{" "}
              <span className="text-accentColor text-[22vw] lg:text-[8vw]">
                Growth
              </span>
            </span>
          </h1>
          <div className="w-full">
            <p className="w-full text-[5vw] lg:text-[2vw] font-light text-lightSecondary leading-tight lg:pt-5">
              Welcome to the Devion Ark Blog, your resource for cutting-edge
              trends, expert tips, and actionable strategies in digital
              transformation. Here, we share real-world success stories and
              industry insights that empower you to drive growth and enhance
              your online presence."
            </p>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-full lg:w-[50%] flex justify-start lg:justify-end">
              <ActionButton
                forwardTo=""
                label="Visit Blogs"
                labelColor="text-lightPrimary font-normal"
                labelHoverColor="group-hover:text-darkPrimary"
                bgColor="bg-lightPrimary"
                labelSize="text-lg lg:text-2xl"
                borderColor="border-lightPrimary"
                iconColor="text-darkPrimary"
                iconSize="text-2xl lg:text-4xl"
                icon={
                  <LuArrowUpRight className="rotate-180 group-hover:-rotate-0 transition duration-[350ms]" />
                }
              />
            </div>
          </div>
          <div className="w-full hidden lg:flex flex-row justify-between gap-5 font-light pt-10">
            <div className="w-1/3 flex justify-start items-center">
              <div className="flex flex-col gap-1 font-light">
                <div>Most Viewed</div>
                <div className="text-lightPrimary">
                  Why Webflow is the best platform for businesses in 2025
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center gap-2">
              <div className="flex flex-col gap-1 font-light">
                <div>Top Writer</div>
                <div className="text-lightPrimary">Edward Kennway</div>
              </div>
            </div>
            <div className=" flex justify-end items-center">
              <div className="flex flex-col gap-1 font-light">
                <div>Total Contents</div>
                <div className="text-lightPrimary">03</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog List Section */}
      <div className="w-full px-5 lg:px-20 py-10 lg:py-20 bg-black">
        <div className="w-full flex flex-col gap-10 lg:gap-16">
          <div className="flex flex-row gap-2 lg:gap-3 items-stretch overflow-hidden">
            <h6 className="uppercase flex font-light text-base sm:text-lg overflow-hidden text-accentColor leading-none">
              <span className="inline-block">Blogs</span>
            </h6>
            <div className="w-[2px] flex bg-lightPrimary"></div>
          </div>
          <div className="w-full grid grid-cols-1 gap-5 lg:gap-10 font-light text-lightSecondary leading-none divide-y-[1px] divide-gray-800">
            <BlogCard
              title="IS SEO Dead? Will AEO Take Over the Industry in 2025?"
              cover={blogCover1}
              category={[
                "SEO",
                "AEO",
                "Search Engine Optimization",
                "Answer Engine Optimization",
                "Search Engine Marketing",
              ]}
              desc="In this article, we'll break down the key factors influencing web search and help you determine whether SEO or AEO aligns with your business goals in 2025."
              forwardTo="/blogs/is-seo-dead-will-aeo-take-over-the-industry-in-2025"
              date="December 13, 2024"
              author="Naim Rahman"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blogs;
