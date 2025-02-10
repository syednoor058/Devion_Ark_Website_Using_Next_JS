import SendToTop from "@/components/sendToTop/SendToTop";
import Image from "next/image";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { MdOutlineArrowForward } from "react-icons/md";
import blogImg1 from "../../../../public/blog-1-images/construction-building-images.webp";
import blog1Cover from "../../../../public/blogs_cover/blog_1_cover.webp";
import {
  default as blog2Cover,
  default as blogCover,
} from "../../../../public/blogs_cover/blog_2_cover.webp";
import blog3Cover from "../../../../public/blogs_cover/blog_3_cover.webp";

function MoreBlogCard({ cover, title, forwardTo }) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <div className="w-full overflow-hidden relative rounded-sm">
          <Image
            placeholder="blur"
            src={cover}
            alt={title}
            className="w-full object-cover"
          />
        </div>
        <div className="w-full h-[1px] bg-gray-500"></div>
      </div>
      <Link href={forwardTo} className="group">
        <div className="w-full flex flex-row gap-5 justify-between">
          <div className="text-xl lg:text-2xl text-lightPrimary">{title}</div>
          <div className="text-2xl lg:text-4xl">
            <MdOutlineArrowForward className="group-hover:-rotate-45 duration-500 text-accentColor font-light" />
          </div>
        </div>
      </Link>
    </div>
  );
}

function Blog1() {
  return (
    <main>
      <SendToTop />
      {/* Blog Landing Section */}
      <div className="w-full bg-darkPrimary pt-5 lg:pt-10 px-5 lg:px-20 pb-5 lg:pb-10 font-light text-lightSecondary">
        <div className="flex flex-col gap-10 lg:gap-20">
          <Link href="/blogs">
            <div className="w-full flex flex-row gap-5 text-base lg:text-lg uppercase items-center">
              <LuArrowLeft /> Back To Blog
            </div>
          </Link>
          <div className="flex flex-col gap-5 lg:gap-10">
            <div className="text-[7vw] font-bold leading-none text-lightPrimary uppercase">
              <h1>Web Brutalism: Key Features and 5 Creative Examples</h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 font-light text-lightSecondary text-base lg:text-lg">
              <div>10 February, 2025</div>
              <div className="text-lightPrimary">
                <p>Geralt Of Revia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Cover */}
      <div className="w-full relative overflow-hidden">
        <div className="w-full relative">
          <Image
            placeholder="blur"
            src={blogCover}
            alt="Web Brutalism: Key Features and 5 Creative Examples Cover"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Blog Description */}

      <div className="w-full px-5 lg:px-20 py-10 lg:py-20">
        <p className="font-light text-lightSecondary text-lg lg:text-4xl">
          Brutalism is a design style inspired by architecture and the practical
          websites of the 90s and early 2000s. It has a punk attitude and a
          rebellious spirit. In this article, we will explore brutalism's key
          features and analyze its versatility and relevance today for
          businesses.
        </p>
      </div>

      {/* Blog Content */}

      <div className="w-full px-5 lg:px-20 pt-5 pb-10 lg:pb-20">
        <div className="w-full flex flex-row gap-10">
          <div className="w-[30%] hidden lg:flex">
            <div className="flex h-screen flex-col gap-5 sticky top-28">
              <div className="uppercase text-lightPrimary font-light">
                Table of Contents
              </div>
              <ul className="flex flex-col gap-5 font-light text-lightSecondary uppercase list-disc">
                <li>The Origins of Brutalism</li>
                <li className="text-accentColor">
                  Core features of brutalist websites
                </li>
                <li>The Versatility of Brutalism in UI Design</li>
                <li>Brutalist websites: 5 inspiring examples ‍</li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-[70%] overflow-y-auto">
            <div className="">
              <article className="w-full flex flex-col gap-5 font-light text-lightSecondary leading-tight text-xl">
                <p>
                  Brutalism is a design style that draws inspiration from the
                  practical websites of the 90s and early 2000s. It has a punk
                  attitude and a rebellious spirit. Started as a rebellious
                  movement against perfect user-centered designs, brutalism
                  broke down established approaches. This style has sparked a
                  wide range of opinions. The functionality embodiment.
                  Primitive and rough. Provocative, but focusing on essence.
                </p>
                <p>
                  In this article, we will explore brutalism's key features and
                  analyze its versatility and relevance today for businesses.
                </p>
                <h2 className="text-4xl text-lightPrimary py-6 font-semibold">
                  The Origins of Brutalism
                </h2>
                <p>
                  Brutalism in UI design draws inspiration from the brutalist
                  architecture movement popular after World War II.
                </p>
                <p>
                  Brutalist architects rejected decoration but favored raw
                  materials, exposed concrete, and repetitive modular elements.
                  Buildings were monolithic, ascetic, and monumental. This
                  architectural style met the contemporary needs and public
                  demand for affordable, not expensive but reliable buildings.
                </p>
                <div className="w-full relative overflow-hidden rounded-sm">
                  <Image
                    placeholder="blur"
                    src={blogImg1}
                    alt="construction_building"
                    className="w-full object-cover"
                  />
                </div>
                <p>
                  If you're ready to elevate your business's digital presence,
                  contact us to discuss how we can bring your project to life.
                  Explore our work to see how our expertise delivers outstanding
                  results.
                </p>
                <h2 className="text-4xl text-lightPrimary py-6 font-semibold">
                  Core features of brutalist websites
                </h2>
                <p>
                  Brutalism in UI design draws inspiration from the brutalist
                  architecture movement popular after World War II.
                </p>
                <p>
                  Brutalist architects rejected decoration but favored raw
                  materials, exposed concrete, and repetitive modular elements.
                  Buildings were monolithic, ascetic, and monumental. This
                  architectural style met the contemporary needs and public
                  demand for affordable, not expensive but reliable buildings.
                </p>
                <h2 className="text-4xl text-lightPrimary py-6 font-semibold">
                  The Versatility of Brutalism in UI Design
                </h2>
                <p>
                  Brutalism in UI design draws inspiration from the brutalist
                  architecture movement popular after World War II.
                </p>
                <p>
                  Brutalist architects rejected decoration but favored raw
                  materials, exposed concrete, and repetitive modular elements.
                  Buildings were monolithic, ascetic, and monumental. This
                  architectural style met the contemporary needs and public
                  demand for affordable, not expensive but reliable buildings.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* More Blogs */}
      <div className="w-full px-5 lg:px-20 pt-5 lg:pt-10 pb-1 lg:pb-20 flex flex-col gap-5 lg:gap-10">
        <div className="flex flex-row gap-2 lg:gap-3 items-stretch overflow-hidden">
          <div className="uppercase flex font-light text-base sm:text-lg overflow-hidden text-accentColor leading-none">
            <span className="inline-block">More Blogs</span>
          </div>
          <div className="w-[2px] flex bg-lightPrimary"></div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
          <MoreBlogCard
            title="How much does it cost to design a website"
            forwardTo=""
            cover={blog1Cover}
          />
          <MoreBlogCard
            title="Why Webflow is the best platform for businesses in 2025"
            forwardTo=""
            cover={blog2Cover}
          />
          <MoreBlogCard
            title="How to create the best corporate website in 2025?"
            forwardTo=""
            cover={blog3Cover}
          />
        </div>
      </div>
    </main>
  );
}

export default Blog1;
