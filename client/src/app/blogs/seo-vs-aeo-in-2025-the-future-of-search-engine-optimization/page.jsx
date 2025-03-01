import CopyLinkButton from "@/components/buttons/CopyLinkButton";
import CustomShapeButton from "@/components/buttons/CustomShapeButton";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowDownLeft } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { MdOutlineArrowForward } from "react-icons/md";
import blogImg1 from "../../../../public/blogs/blog-1-images/1.jpg";
import blogImg2 from "../../../../public/blogs/blog-1-images/2.jpg";
import blogImg3 from "../../../../public/blogs/blog-1-images/3.jpg";
import moreBlogs1 from "../../../../public/blogs/meta-marketing-2025-cover.jpg";
import blogCover from "../../../../public/blogs/seo-vs-aeo-2025-blog-cover.jpg";
import naimPic from "../../../../public/owners/naim_rahman.webp";
import shaedPic from "../../../../public/owners/syed_shaeduzzaman_noor.png";

function MoreBlogCard({ cover, title = "", forwardTo, date }) {
  const truncatedTitle = title.length > 60 ? title.slice(0, 60) + "..." : title;
  return (
    <div className="w-full flex flex-col gap-3 p-5 bg-black rounded">
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
      <p className="text-sm">{date}</p>
      <Link href={forwardTo} className="group">
        <div className="w-full flex flex-row gap-5 justify-between">
          <div className="text-xl lg:text-2xl text-lightPrimary group-hover:underline underline-offset-4 duration-500">
            {truncatedTitle}
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
  openGraph: {
    title:
      "SEO vs AEO in 2025: The Future of Search Engine Optimization | Devion Ark",
    description:
      "Is SEO dead, or is AEO taking over? Discover how SEO and Answer Engine Optimization (AEO) are shaping the future of digital marketing in 2025.",
    url: "https://www.devionark.com/blogs/seo-vs-aeo-in-2025-the-future-of-search-engine-optimization",
    type: "article",
    images: [
      {
        url: "https://www.devionark.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseo-vs-aeo-2025-blog-cover.b4e049bc.jpg&w=1200&q=75", // Absolute URL required
        width: 1200,
        height: 630,
        alt: "SEO vs AEO in 2025: The Future of Search Engine Optimization",
      },
    ],
    publishedTime: "2024-12-13T00:00:00Z",
    authors: ["Devion Ark"],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "SEO vs AEO in 2025: The Future of Search Engine Optimization | Devion Ark",
    description:
      "Is SEO dead, or is AEO taking over? Discover how SEO and Answer Engine Optimization (AEO) are shaping the future of digital marketing in 2025.",
    images: [
      "https://www.devionark.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseo-vs-aeo-2025-blog-cover.b4e049bc.jpg&w=1200&q=75",
    ],
  },
};

function Blog1() {
  const shareLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/sharer/sharer.php?u=https://www.devionark.com/blogs/seo-vs-aeo-in-2025-the-future-of-search-engine-optimization",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/sharing/share-offsite/?url=https://www.devionark.com/blogs/seo-vs-aeo-in-2025-the-future-of-search-engine-optimization",
    },
    {
      icon: <FaXTwitter />,
      url: "https://twitter.com/intent/tweet?text=seovsaeoin2025&url=https://www.devionark.com/blogs/seo-vs-aeo-in-2025-the-future-of-search-engine-optimization&hashtags=Marketing,DigitalStrategy",
    },
  ];

  return (
    <main className="font-poppins">
      {/* Blog Cover */}
      <div className="w-full relative overflow-hidden px-4 lg:px-20 pt-5 lg:pt-10">
        <div className="w-full relative">
          <Image
            placeholder="blur"
            src={blogCover}
            alt="seo vs aeo who will take over in 2025 blog cover"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Blog Header  */}
      <div className="w-full bg-darkPrimary pt-5 lg:pt-10 px-4 lg:px-20 pb-10 lg:pb-20 font-light text-lightSecondary">
        <div className="flex flex-col gap-10">
          <div className="w-full uppercase text-normal flex flex-row gap-5 lg:gap-20 justify-between lg:justify-normal items-center">
            <p className=" leading-none text-accentColor">Search Engine</p>
            <p className="leading-none">13 December 2024</p>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div className="w-full lg:w-[70%] flex flex-col gap-6 lg:gap-10">
              <div>
                <h1 className="text-3xl lg:text-6xl font-medium leading-none text-lightPrimary font-oswald">
                  SEO vs AEO in 2025: The future of search engine optimization
                </h1>
              </div>
              <div>
                <CustomShapeButton
                  forwardTo="/blogs"
                  label="Back"
                  textStyle="text-lg font-normal text-darkPrimary"
                  paddingX="ps-4 pe-8"
                  paddingY="py-4"
                  fontGap="gap-2"
                  backgroundColor="bg-lightPrimary"
                  hoverBgColor="bg-accentColor"
                  icon={
                    <FiArrowDownLeft className="text-xl text-darkPrimary rotate-45 group-hover:rotate-90 transition duration-[350ms]" />
                  }
                />
              </div>
            </div>
            <div className="w-full lg:w-[30%] flex flex-col gap-10">
              <div className="w-full flex flex-col gap-3">
                <p className="w-full font-normal text-accentColor">Author(s)</p>
                <div className="w-full flex flex-col gap-2">
                  <div className="w-full flex flex-row gap-3 items-center">
                    <div className="flex rounded-full p-[1px] border border-dashed border-accentColor">
                      <div className="w-7 lg:w-8 h-7 lg:h-8 rounded-full overflow-hidden relative">
                        <Image
                          alt="naim rahman"
                          src={naimPic}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-lightPrimary leading-none lg:text-lg">
                      Naim Rahman
                    </p>
                  </div>
                  <div className="w-full flex flex-row gap-3 items-center">
                    <div className="flex rounded-full p-[1px] border border-dashed">
                      <div className="w-7 lg:w-8 h-7 lg:h-8 rounded-full overflow-hidden relative border-accentColor">
                        <Image
                          alt="syed shaeduzzaman noor"
                          src={shaedPic}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <p className="text-lightPrimary leading-none lg:text-lg">
                      Syed Shaeduzzaman Noor
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <p className="w-full font-normal text-lightPrimary">Share</p>
                <div className="flex flex-row gap-3 items-center">
                  {shareLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lightSecondary hover:text-accentColor transition-colors duration-[350ms] text-xl"
                    >
                      {link.icon}
                    </a>
                  ))}
                  <CopyLinkButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Description */}

      <div className="w-full px-5 lg:px-20 py-10 lg:py-20">
        <p className="font-light text-lightPrimary text-lg lg:text-2xl lg:indent-40 lg:leading-[1.7]">
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
          <div className="w-full lg:w-[70%]">
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
                      <a
                        href="https://www.comscore.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accentColor"
                      >
                        Comscore
                      </a>{" "}
                      predicts that by 2025, 50% of all searches will be
                      voice-based.
                    </li>
                    <li>
                      40% of Google searches now return featured snippets (
                      <a
                        href="https://www.hubspot.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accentColor"
                      >
                        HubSpot
                      </a>
                      ).
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
                <ul className="pl-5 flex flex-col gap-2 list-disc">
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Voice Search:
                    </span>{" "}
                    The growing popularity of voice assistants has made
                    providing accurate, concise answers essential.
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Featured Snippets:
                    </span>{" "}
                    AEO targets “Position Zero,” the prime spot on Google where
                    concise answers are displayed above traditional search
                    results.
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Structured Data:
                    </span>{" "}
                    Schema markup is vital in helping search engines understand
                    content and present it effectively in search results.
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
                    <tr className="border-x border-lightSecondary/30">
                      <th className="w-[50%] border-r border-lightSecondary/30 py-3 pe-3">
                        SEO
                      </th>
                      <th className="w-[50%] py-3 ps-3">AEO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-lightSecondary/30">
                      <td className="w-[50%] py-4 px-3 border-x border-lightSecondary/30">
                        Focuses on keywords and backlinks.
                      </td>
                      <td className="w-[50%] py-4 px-3 border-r border-lightSecondary/30">
                        Focuses on answering user queries directly.
                      </td>
                    </tr>
                    <tr className="border-b border-lightSecondary/30">
                      <td className="w-[50%] py-4 px-3 border-x border-lightSecondary/30">
                        Drives organic traffic through rankings.
                      </td>
                      <td className="w-[50%] py-4 px-3 border-r border-lightSecondary/30">
                        Targets voice search and featured snippets.
                      </td>
                    </tr>
                    <tr className="border-b border-lightSecondary/30">
                      <td className="w-[50%] py-4 px-3 border-x border-lightSecondary/30">
                        Builds long-term authority.
                      </td>
                      <td className="w-[50%] py-4 px-3 border-r border-lightSecondary/30">
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
                <h3 className="text-xl lg:text-2xl text-lightPrimary font-medium">
                  The Rise of Voice Search and Conversational Queries
                </h3>
                <ul className="ps-5 list-disc">
                  <li>Optimize for natural language and long-tail keywords.</li>
                  <li>
                    Example: Instead of "best car shop," ask, "Where can I find
                    the best car shop near me?"
                  </li>
                </ul>
                <h3 className="text-xl lg:text-2xl text-lightPrimary font-medium">
                  How Featured Snippets Are Changing the Game
                </h3>
                <ul className="ps-5 list-disc">
                  <li>
                    Schema markup can help search engines interpret your
                    content.
                  </li>
                  <li>Create FAQ sections to target question-based queries.</li>
                </ul>
                <h3 className="text-xl lg:text-2xl text-lightPrimary font-medium">
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

      {/* Divider */}
      <div className="px-5 lg:px-20 pt-10 lg:pt-20">
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
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
          <MoreBlogCard
            title="Meta Marketing in 2025: How Devion Ark’s Strategies Skyrocket Business Growth by 150%"
            forwardTo="/blogs/meta-marketing-in-2025-how-devion-arks-strategies-skyrocket-business-growth-by-150"
            cover={moreBlogs1}
            date="30 November 2024"
          />
        </div>
      </div>
    </main>
  );
}

export default Blog1;
