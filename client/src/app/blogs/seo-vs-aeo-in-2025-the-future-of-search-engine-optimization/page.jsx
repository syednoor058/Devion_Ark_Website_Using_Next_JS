import AnimatedLetter from "@/components/animations/AnimatedLetter";
import SendToTop from "@/components/sendToTop/SendToTop";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoMdShare } from "react-icons/io";
import { LuArrowLeft } from "react-icons/lu";
import { MdOutlineArrowForward } from "react-icons/md";
import blogImg1 from "../../../../public/blog-1-images/1.jpg";
import blogImg2 from "../../../../public/blog-1-images/2.jpg";
import blogImg3 from "../../../../public/blog-1-images/3.jpg";
import blogCover from "../../../../public/blogs_cover/seo-vs-aeo-2025-blog-cover.jpg";
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
          <div className="text-xl lg:text-2xl text-lightPrimary group-hover:underline underline-offset-4 duration-500">
            {title}
          </div>
          <div className="text-2xl lg:text-4xl">
            <MdOutlineArrowForward className="group-hover:-rotate-45 duration-500 text-accentColor font-light" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export const metadata = {
  title:
    "SEO vs AEO in 2025: The Future of Search Engine Optimization | Devion Ark",
  description:
    "Is SEO dead, or is AEO taking over? Discover how SEO and Answer Engine Optimization (AEO) are shaping the future of digital marketing in 2025. Learn actionable strategies to stay ahead!",
};

function Blog1() {
  return (
    <main className="font-poppins">
      <SendToTop />
      {/* Blog Landing Section */}
      <div className="w-full bg-darkPrimary pt-5 lg:pt-10 px-5 lg:px-20 pb-10 lg:pb-20 font-light text-lightSecondary">
        <div className="flex flex-col gap-8 lg:gap-16 ">
          <Link href="/blogs">
            <div className="w-full flex flex-row gap-2 text-sm lg:text-lg items-center text-lightPrimary">
              <LuArrowLeft className="text-base lg:text-xl" />{" "}
              <span className="pt-1">
                <AnimatedLetter text="Back" hoverText="text-accentColor" />
              </span>
            </div>
          </Link>
          <div className="flex flex-col gap-8 lg:gap-16">
            <div className="text-4xl lg:text-7xl font-semibold leading-none text-lightPrimary font-oswald text-center">
              <h1>
                SEO vs AEO in 2025: <br />
                <span className="font-normal text-3xl lg:text-6xl leading-none">
                  The Future of Search Engine Optimization
                </span>
              </h1>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-2 lg:gap-10 font-light text-lightSecondary text-base lg:text-lg leading-none justify-between">
              <div>December 13, 2024</div>
              <div className="text-lightPrimary flex flex-col gap-1">
                <p>Naim Rahman</p>
                <p>Syed Shaeduzzaman Noor</p>
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
            alt="seo vs aeo who will take over in 2025 blog cover"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Blog Description */}

      <div className="w-full px-5 lg:px-20 py-10 lg:py-20">
        <p className="font-light text-lightPrimary text-lg lg:text-2xl">
          Is SEO dead, or is it just evolving? In this in-depth blog, we explore
          the future of SEO (Search Engine Optimization) and the rise of AEO
          (Answer Engine Optimization) in 2025. Discover how voice search,
          featured snippets, and structured data are reshaping the digital
          marketing landscape. Learn why SEO is still essential, how AEO
          complements it, and actionable strategies to combine both for maximum
          online visibility. Whether you're a business owner or a marketer, this
          blog will help you stay ahead in the ever-changing world of search
          optimization. Don&apos;t miss out on the future of search—read now!
        </p>
      </div>

      {/* Blog Content */}

      <div className="w-full px-5 lg:px-20 pt-5 pb-5">
        <div className="w-full flex flex-row gap-20">
          <div className="w-[30%] hidden lg:flex">
            <div className="flex h-screen flex-col gap-5 sticky top-20">
              <div className="uppercase text-lightPrimary font-light">
                Table of Contents
              </div>
              <ul className="pl-5 flex flex-col gap-5 font-light text-lightSecondary list-disc">
                <li>What&apos;s Happening to SEO in 2025?</li>
                <li className="">
                  What Is AEO, and Why Is It Gaining Popularity?
                </li>
                <li>SEO vs AEO: Key Differences and Similarities</li>
                <li>How to Prepare for the Future of Search Optimization</li>
                <li>Why SEO Is Still Worth It (And Always Will Be)</li>
                <li>The Rise of Voice Search and Conversational Queries</li>
                <li>How Featured Snippets Are Changing the Game</li>
                <li>
                  Actionable Tips to Combine SEO and AEO for Maximum Impact
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-[70%] overflow-y-auto">
            <div className="">
              <article className="w-full flex flex-col gap-5 lg:gap-7 font-light text-lightSecondary leading-tight text-base lg:text-xl">
                <p>
                  The digital marketing world is buzzing with one question: Is
                  SEO dead, or is AEO (Answer Engine Optimization) taking over?
                  The truth? SEO isn&apos;t going anywhere—it&apos;s just
                  evolving. By 2025, businesses will need to blend traditional
                  SEO with AEO to stay competitive. Let&apos;s break it all
                  down.
                </p>
                <h2 className="text-2xl lg:text-4xl text-lightPrimary py-4 lg:py-6 font-semibold">
                  What&apos;s Happening to SEO in 2025?
                </h2>
                <p>
                  SEO isn&apos;t dead—it&apos;s adapting. With the rise of voice
                  search, AI-driven algorithms, and user intent-focused queries,
                  SEO is becoming more sophisticated. While AEO is gaining
                  traction, it&apos;s not replacing SEO. Instead, it&apos;s
                  complementing it.
                </p>
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-lightPrimary">
                    Key Stats to Know:
                  </p>
                  <ul className="ps-5 list-disc">
                    <li>
                      50% of all searches will be voice-based by 2025
                      (Comscore).
                    </li>
                    <li>
                      40% of Google searches now return featured snippets
                      (HubSpot).
                    </li>
                  </ul>
                </div>
                <div className="w-full relative overflow-hidden rounded-sm">
                  <Image
                    placeholder="blur"
                    src={blogImg1}
                    alt="construction_building"
                    className="w-full object-cover"
                  />
                </div>

                <h2 className="text-2xl lg:text-4xl text-lightPrimary py-4 lg:py-6 font-semibold">
                  What Is AEO, and Why Is It Gaining Popularity?
                </h2>
                <p>
                  AEO, or Answer Engine Optimization, focuses on delivering
                  precise answers to user queries. It&apos;s the backbone of:
                </p>
                <ul className="pl-5 flex flex-col gap-5 list-disc">
                  <li>
                    <span className="font-bold">Voice Search:</span> The growing
                    popularity of voice assistants has made providing accurate,
                    concise answers essential.
                  </li>
                  <li>
                    <span className="font-bold">Featured Snippets:</span> AEO
                    targets “Position Zero,” the prime spot on Google where
                    concise answers are displayed above traditional search
                    results.
                  </li>
                  <li>
                    <span className="font-bold">Structured Data:</span> Schema
                    markup is vital in helping search engines understand content
                    and present it effectively in search results.
                  </li>
                </ul>
                <div className="flex flex-col gap-3">
                  <p className="text-lightPrimary font-semibold">
                    Why AEO Matters:
                  </p>
                  <ul className="ps-5 list-disc">
                    <li>Users want quick, accurate answers—not just links.</li>
                    <li>
                      AEO helps you dominate voice search and featured snippets.
                    </li>
                  </ul>
                </div>
                <h2 className="text-2xl lg:text-4xl text-lightPrimary py-4 lg:py-6 font-semibold">
                  SEO vs AEO: Key Differences and Similarities
                </h2>
                <table className="">
                  <thead className="text-lightPrimary fonr-normal bg-darkSecondary">
                    <tr>
                      <th className="w-[50%] border-r border-lightSecondary/30 py-3 pe-3">
                        SEO
                      </th>
                      <th className="w-[50%] py-3 ps-3">AEO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-lightSecondary/30">
                      <td className="w-[50%] py-4 pe-3">
                        Focuses on keywords and backlinks.
                      </td>
                      <td className="w-[50%] py-4 ps-3">
                        Focuses on answering user queries directly.
                      </td>
                    </tr>
                    <tr className="border-b border-lightSecondary/30">
                      <td className="w-[50%] py-4 pe-3">
                        Drives organic traffic through rankings.
                      </td>
                      <td className="w-[50%] py-4 ps-3">
                        Targets voice search and featured snippets.
                      </td>
                    </tr>
                    <tr className="border-b border-lightSecondary/30">
                      <td className="w-[50%] py-4 pe-3">
                        Builds long-term authority.
                      </td>
                      <td className="w-[50%] py-4 ps-3">
                        Provides instant, concise answers.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  <span className="text-lightPrimary font-normal">
                    The Bottom Line:
                  </span>{" "}
                  SEO and AEO aren&apos;t rivals—they&apos;re partners.
                  Together, they create a powerful strategy for modern search
                  optimization.
                </p>
                <div className="w-full relative overflow-hidden rounded-sm">
                  <Image
                    placeholder="blur"
                    src={blogImg2}
                    alt="construction_building"
                    className="w-full object-cover"
                  />
                </div>
                <h2 className="text-2xl lg:text-4xl text-lightPrimary py-4 lg:py-6 font-semibold">
                  How to Prepare for the Future of Search Optimization
                </h2>
                <p>
                  As we approach 2025, the lines between SEO and AEO are
                  blurring. Businesses must adapt to this hybrid model to stay
                  competitive. Here&apos;s how you can prepare:
                </p>
                <h3 className="text-xl lg:text-3xl text-lightPrimary py-4 lg:py-6 font-semibold">
                  The Rise of Voice Search and Conversational Queries
                </h3>
                <ul className="ps-5 list-disc">
                  <li>Optimize for natural language and long-tail keywords.</li>
                  <li>
                    Example: Instead of “best pizza delivery,” target “Where can
                    I find the best pizza delivery near me?”
                  </li>
                </ul>
                <h3 className="text-xl lg:text-3xl text-lightPrimary py-4 lg:py-6 font-semibold">
                  How Featured Snippets Are Changing the Game
                </h3>
                <ul className="ps-5 list-disc">
                  <li>
                    Use schema markup to help search engines understand your
                    content.
                  </li>
                  <li>Create FAQ sections to target question-based queries.</li>
                </ul>
                <h3 className="text-xl lg:text-3xl text-lightPrimary py-4 lg:py-6 font-semibold">
                  Actionable Tips to Combine SEO and AEO for Maximum Impact
                </h3>
                <ul className="ps-5 list-disc flex flex-col gap-2">
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Optimize for Voice Search:
                    </span>{" "}
                    Use conversational phrases and question-based keywords.
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Leverage Structured Data:
                    </span>{" "}
                    Implement schema markup for better visibility.
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Create Answer-Driven Content:
                    </span>{" "}
                    Focus on solving user problems with clear, concise answers.
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Don&apos;t Neglect Traditional SEO:
                    </span>{" "}
                    Keep optimizing for keywords, backlinks, and mobile-first
                    indexing.
                  </li>
                </ul>

                <h2 className="text-2xl lg:text-4xl text-lightPrimary py-4 lg:py-6 font-semibold">
                  Why SEO Is Still Worth It (And Always Will Be)
                </h2>
                <p>
                  The rise of AEO is not the end of SEO but rather an evolution
                  of it. Businesses that integrate AEO into their SEO strategies
                  will have a competitive edge. But still today, SEO remains the
                  backbone of digital marketing. Here's why:
                </p>
                <ul className="pl-5 list-disc">
                  <li>
                    It drives <span className="">organic traffic</span> and
                    builds <span className="">long-term authority</span>.
                  </li>
                  <li>
                    It ensures your content is discoverable across all search
                    methods.
                  </li>
                  <li>
                    It works hand-in-hand with AEO to create a holistic search
                    strategy.
                  </li>
                </ul>
                <div className="w-full relative overflow-hidden rounded-sm">
                  <Image
                    placeholder="blur"
                    src={blogImg3}
                    alt="construction_building"
                    className="w-full object-cover"
                  />
                </div>

                <p className="text-lightPrimary">
                  Ready to future-proof your online presence? Partner with{" "}
                  <span className="font-semibold text-accentColor">
                    Devion Ark
                  </span>{" "}
                  to blend SEO and AEO strategies for 2025 and beyond.
                  Let&apos;s dominate search together!
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* Share Links */}
      <div className="px-5 lg:px-20 flex flex-row gap-5 items-center text-base lg:text-xl pb-10 lg:pb-20 pt-5 lg:pt-10">
        <div className="flex flex-row gap-2 items-center">
          <IoMdShare /> Share:
        </div>
        <div className="flex flex-row gap-5 items-center">
          <a href="">
            <FaFacebookF className="text-lightPrimary hover:text-accentColor duration-500" />
          </a>
          <a href="">
            <FaLinkedinIn className="text-lightPrimary hover:text-accentColor duration-500" />
          </a>
          <a href="">
            <AiFillInstagram className="text-lightPrimary hover:text-accentColor duration-500" />
          </a>
          <a href="">
            <FaXTwitter className="text-lightPrimary hover:text-accentColor duration-500" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="px-5 lg:px-20">
        <div className="w-full h-[1px] bg-gray-800"></div>
      </div>

      {/* More Blogs */}
      <div className="w-full px-5 lg:px-20 pt-10 lg:pt-20 pb-10 lg:pb-20 flex flex-col gap-10 lg:gap-20">
        <div className="flex overflow-hidden">
          <div className="text-sm uppercase text-lightPrimary font-light ps-3 pe-5 py-2 rounded-full border border-accentColor">
            <p className="flex flex-row gap-2 items-center">
              <span>
                <GoDotFill className="text-xs" />
              </span>
              More Blogs
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
          <MoreBlogCard
            title="How much does it cost to design a website"
            forwardTo=""
            cover={blogCover}
          />
        </div>
      </div>
    </main>
  );
}

export default Blog1;
