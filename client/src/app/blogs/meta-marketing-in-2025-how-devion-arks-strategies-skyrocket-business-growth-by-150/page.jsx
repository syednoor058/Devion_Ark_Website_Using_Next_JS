import CopyLinkButton from "@/components/buttons/CopyLinkButton";
import CustomShapeButton from "@/components/buttons/CustomShapeButton";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowDownLeft } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { MdOutlineArrowForward } from "react-icons/md";
import blogImg1 from "../../../../public/blogs/blog-2-images/img1.jpg";
import blogImg2 from "../../../../public/blogs/blog-2-images/img2.jpg";
import blogImg3 from "../../../../public/blogs/blog-2-images/img3.jpg";
import blogCover from "../../../../public/blogs/meta-marketing-2025-cover.jpg";
import moreBlog1 from "../../../../public/blogs/seo-vs-aeo-2025-blog-cover.jpg";
import naimPic from "../../../../public/owners/naim_rahman.webp";
import shaedPic from "../../../../public/owners/syed_shaeduzzaman_noor.png";

function MoreBlogCard({ cover, title = "", forwardTo, date }) {
  const truncatedTitle = title.length > 80 ? title.slice(0, 80) + "..." : title;
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
    "Meta Marketing in 2025: How Devion Ark's Strategies Skyrocket Business Growth by 150% | Devion Ark",
  description:
    "Discover how Meta Marketing drives 150%+ growth in 2025. Learn AI personalization, AR/VR ads, and e-commerce strategies. See how Devion Ark’s proven methods triple ROI. Start now!",
  openGraph: {
    title:
      "Meta Marketing in 2025: How Devion Ark's Strategies Skyrocket Business Growth by 150%",
    description:
      "Discover how Meta Marketing drives 150%+ growth in 2025. Learn AI personalization, AR/VR ads, and e-commerce strategies.",
    url: "https://www.devionark.com/blogs/meta-marketing-in-2025-how-devion-arks-strategies-skyrocket-business-growth-by-150",
    type: "article",
    images: [
      {
        url: "https://www.devionark.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmeta-marketing-2025-cover.8864546a.jpg&w=1200&q=75", // Absolute URL required
        width: 1200,
        height: 630,
        alt: "Meta Marketing 2025 Strategies Visual Guide",
      },
    ],
    publishedTime: "2024-11-30T00:00:00Z",
    authors: ["Devion Ark"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Meta Marketing in 2025: 150% Growth Strategies",
    description:
      "Triple your ROI with Devion Ark's Meta Marketing methods. AI personalization, AR/VR ads, and more!",
    images: [
      "https://www.devionark.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmeta-marketing-2025-cover.8864546a.jpg&w=1200&q=75",
    ],
  },
};

function Blog2() {
  const shareLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/sharer/sharer.php?u=https://www.devionark.com/blogs/meta-marketing-in-2025-how-devion-arks-strategies-skyrocket-business-growth-by-150",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/sharing/share-offsite/?url=https://www.devionark.com/blogs/meta-marketing-in-2025-how-devion-arks-strategies-skyrocket-business-growth-by-150",
    },
    {
      icon: <FaXTwitter />,
      url: "https://twitter.com/intent/tweet?text=seovsaeoin2025&url=https://www.devionark.com/blogs/meta-marketing-in-2025-how-devion-arks-strategies-skyrocket-business-growth-by-150&hashtags=SocialMediaMarketing,DigitalStrategy",
    },
  ];

  return (
    <main className="font-poppins">
      {/* Blog Cover */}
      <div className="w-full relative overflow-hidden px-4 lg:px-20 pt-6 lg:pt-10">
        <div className="w-full relative overflow-hidden">
          <Image
            placeholder="blur"
            src={blogCover}
            alt="meta marketing in 2025"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Blog Header  */}
      <div className="w-full bg-darkPrimary pt-5 lg:pt-10 px-4 lg:px-20 pb-10 lg:pb-20 font-light text-lightSecondary">
        <div className="flex flex-col gap-10">
          <div className="w-full uppercase text-normal flex flex-row gap-5 lg:gap-20 justify-between lg:justify-normal items-center">
            <p className=" leading-none text-accentColor">Meta Marketing</p>
            <p className="leading-none">30 November 2024</p>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div className="w-full lg:w-[70%] flex flex-col gap-6 lg:gap-10">
              <div>
                <h1 className="text-3xl lg:text-6xl font-medium leading-none text-lightPrimary font-oswald">
                  Meta Marketing in 2025: How Devion Ark&apos;s Strategies
                  Skyrocket Business Growth by 150%
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

      <div className="w-full px-4 lg:px-20 py-10 lg:py-20">
        <p className="font-light text-lightPrimary text-lg lg:text-2xl lg:indent-40 lg:leading-[1.7]">
          This article explores how Meta Marketing is revolutionizing business
          growth in 2025, focusing on trends like AI-driven personalization,
          AR/VR advertising, and seamless e-commerce integration across
          Facebook, Instagram, and WhatsApp. Learn how Devion Ark leverages
          these tools to deliver 150%+ traffic growth and triple sales through
          precision targeting, scroll-stopping creatives, and real-time
          optimization. Discover actionable strategies, real-world case studies,
          and step-by-step guidance to dominate Meta platforms, enhance ROI, and
          stay ahead in the competitive digital landscape. Perfect for
          businesses ready to harness cutting-edge Meta Marketing tactics for
          explosive growth.
        </p>
      </div>

      {/* Blog Content */}

      <div className="w-full px-4 lg:px-20 pt-5 pb-5">
        <div className="w-full flex flex-row gap-20">
          <div className="w-[30%] hidden lg:flex">
            <div className="flex h-screen flex-col gap-5 sticky top-20">
              <div className="uppercase text-lightPrimary font-light">
                Table of Contents
              </div>
              <ul className="pl-5 flex flex-col gap-5 font-light text-lightSecondary list-disc">
                <li className="text-lightSecondary hover:text-lightPrimary">
                  <Link href="/blogs/meta-marketing-in-2025-how-devion-arks-strategies-skyrocket-business-growth-by-150#what-is-meta-marketing">
                    What Is Meta Marketing? The 2025 Growth Engine
                  </Link>
                </li>
                <li className="text-lightSecondary hover:text-lightPrimary">
                  <Link href="/blogs/meta-marketing-in-2025-how-devion-arks-strategies-skyrocket-business-growth-by-150#top-5-meta-marketing">
                    Top 5 Meta Marketing Trends for 2025
                  </Link>
                </li>
                <li className="text-lightSecondary hover:text-lightPrimary">
                  <Link href="/blogs/meta-marketing-in-2025-how-devion-arks-strategies-skyrocket-business-growth-by-150#why-meta-marketing-non-negotiable-in-2025">
                    Why Meta Marketing is Non-Negotiable in 2025
                  </Link>
                </li>
                <li className="text-lightSecondary hover:text-lightPrimary">
                  <Link href="/blogs/meta-marketing-in-2025-how-devion-arks-strategies-skyrocket-business-growth-by-150#how-devion-ark-delivers-150-growth-with-meta-marketing">
                    How Devion Ark Delivers 150%+ Growth with Meta Marketing
                  </Link>
                </li>
                <li className="text-lightSecondary hover:text-lightPrimary">
                  <Link href="/blogs/meta-marketing-in-2025-how-devion-arks-strategies-skyrocket-business-growth-by-150#case-studies">
                    Case Studies: Devion Ark's Meta Marketing Wins
                  </Link>
                </li>
                <li className="text-lightSecondary hover:text-lightPrimary">
                  <Link href="/blogs/meta-marketing-in-2025-how-devion-arks-strategies-skyrocket-business-growth-by-150#why-choose-devion-ark">
                    Why Choose Devion Ark for Your Meta Marketing?
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-[70%]">
            <div className="">
              <article className="w-full flex flex-col gap-5 lg:gap-7 font-light text-lightSecondary leading-tight text-base lg:text-xl">
                <p>
                  The digital marketing landscape is evolving faster than ever,
                  and Meta Marketing is leading the charge. By 2025, businesses
                  leveraging Meta&apos;s AI-driven ads, AR/VR experiences, and
                  seamless e-commerce tools will dominate their industries. At
                  Devion Ark, we&apos;ve helped brands achieve 150%+ traffic
                  growth and triple sales using cutting-edge Meta strategies.
                  Here&apos;s your roadmap to success.
                </p>
                <div className="w-full relative overflow-hidden rounded-sm">
                  <Image
                    placeholder="blur"
                    src={blogImg1}
                    alt="what is meta marketing know in details"
                    className="w-full object-cover"
                  />
                </div>
                <h2
                  id="what-is-meta-marketing"
                  className="text-2xl lg:text-4xl text-lightPrimary py-4 lg:py-6 font-semibold"
                >
                  What Is Meta Marketing? The 2025 Growth Engine
                </h2>
                <p>
                  Meta Marketing harnesses Facebook, Instagram, and
                  WhatsApp&apos;s advanced tools to create hyper-targeted
                  campaigns that convert. Unlike traditional methods, it
                  combines:
                </p>
                <ul className="ps-5 list-disc">
                  <li>
                    <span className="text-lightPrimary font-normal">
                      AI-Powered Insights:
                    </span>{" "}
                    Deliver personalized content based on user behavior.
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Immersive AR/VR Ads:
                    </span>{" "}
                    Engage users with interactive 3D experiences.
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Frictionless Shopping:
                    </span>{" "}
                    Turn social media scrolls into sales with in-app checkout.
                  </li>
                </ul>
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-lightPrimary">
                    Why It&apos;s Essential in 2025:
                  </p>
                  <ul className="ps-5 list-disc">
                    <li>
                      68% of consumers prefer brands using personalized ads (
                      <a
                        className="text-accentColor"
                        href="https://investor.atmeta.com/investor-news/press-release-details/2025/Meta-Reports-Fourth-Quarter-and-Full-Year-2024-Results/default.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                      Meta 2024 Report).
                    </li>
                    <li>
                      Businesses using Meta Shops see 40% higher conversion
                      rates (
                      <a
                        className="text-accentColor"
                        href="https://www.forbes.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Forbes
                      </a>
                      ).
                    </li>
                  </ul>
                </div>
                <div className="w-full relative overflow-hidden rounded-sm">
                  <Image
                    placeholder="blur"
                    src={blogImg2}
                    alt="top 5 meta marketing trends for 2025"
                    className="w-full object-cover"
                  />
                </div>

                <h2
                  id="top-5-meta-marketing"
                  className="text-2xl lg:text-4xl text-lightPrimary py-4 lg:py-6 font-semibold"
                >
                  Top 5 Meta Marketing Trends for 2025
                </h2>
                <h3 className="text-xl lg:text-2xl text-lightPrimary font-medium">
                  1. AI-Driven Personalization
                </h3>
                <p>
                  Meta&apos;s algorithms analyze demographics, interests, and
                  purchase history to serve tailored ads. Example: A skincare
                  brand targets users searching for “acne solutions” with
                  personalized ads for their salicylic acid serum.
                </p>

                <h3 className="text-xl lg:text-2xl text-lightPrimary font-medium">
                  2. AR/VR Ads: The Future of Engagement
                </h3>

                <ul className="pl-5 flex flex-col gap-2 list-disc">
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Virtual Try-Ons:
                    </span>{" "}
                    Let users “test” products like sunglasses or makeup.
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Interactive Storytelling:
                    </span>{" "}
                    Gamified ads boost engagement by 200% (
                    <a
                      className="text-accentColor"
                      href="https://www.hubspot.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HubSpot
                    </a>
                    ).
                  </li>
                </ul>

                <h3 className="text-xl lg:text-2xl text-lightPrimary font-medium">
                  3. Instagram Reels & Facebook Shops Domination
                </h3>

                <ul className="pl-5 flex flex-col gap-2 list-disc">
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Short-Form Video:
                    </span>{" "}
                    45% of users discover products via Reels ({" "}
                    <a
                      className="text-accentColor"
                      href="https://about.meta.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Meta
                    </a>{" "}
                    ).
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      In-App Checkout:
                    </span>{" "}
                    Reduce cart abandonment by 35% with Facebook Shops.
                  </li>
                </ul>

                <h3 className="text-xl lg:text-2xl text-lightPrimary font-medium">
                  4. Hyper-Targeted Ads with Advanced Analytics
                </h3>
                <p>
                  Track metrics like CPC (Cost Per Click) and ROAS (Return on Ad
                  Spend) to refine campaigns in real time.
                </p>

                <h3 className="text-xl lg:text-2xl text-lightPrimary font-medium">
                  5. WhatsApp Automation for Customer Retention
                </h3>
                <p>
                  Use chatbots to answer FAQs, send promotions, and recover
                  abandoned carts—24/7.
                </p>

                <h2
                  id="why-meta-marketing-non-negotiable-in-2025"
                  className="text-2xl lg:text-4xl text-lightPrimary py-4 lg:py-6 font-semibold"
                >
                  Why Meta Marketing is Non-Negotiable in 2025
                </h2>

                <ul className="pl-5 flex flex-col gap-2 list-disc">
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Reach 2.9 Billion Users:
                    </span>{" "}
                    Meta&apos;s platforms connect you to nearly 1/3 of the
                    global population.
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Outperform Competitors:
                    </span>{" "}
                    Brands using Meta Ads see 3X higher ROI than traditional ads
                    (
                    <a
                      href="https://www.socialmediatoday.com/news/meta-shares-key-best-practices-facebook-instagram-ad-campaigns/691320/"
                      className="text-accentColor"
                      target="_blank"
                      rel="noopener norefferer"
                    >
                      Social Media Today
                    </a>
                    ).
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Build Brand Loyalty:
                    </span>{" "}
                    Interactive content like polls and live videos increase
                    trust by 60% (
                    <a
                      href="https://sproutsocial.com/"
                      className="text-accentColor"
                      target="_blank"
                      rel="noopener norefferer"
                    >
                      Sprout Social
                    </a>
                    ).
                  </li>
                </ul>

                <h2
                  id="how-devion-ark-delivers-150-growth-with-meta-marketing"
                  className="text-2xl lg:text-4xl text-lightPrimary py-4 lg:py-6 font-semibold"
                >
                  How Devion Ark Delivers 150%+ Growth with Meta Marketing
                </h2>

                <h3 className="text-xl lg:text-2xl text-lightPrimary font-medium">
                  Step 1: Precision Audience Targeting
                </h3>

                <p>We use Meta Audience Insights to identify:</p>
                <ul className="pl-5 flex flex-col gap-2 list-disc">
                  <li>
                    High-intent users based on interests (e.g., “fitness
                    enthusiasts”).
                  </li>
                  <li>Lookalike audiences mirroring your best customers.</li>
                </ul>

                <h3 className="text-xl lg:text-2xl text-lightPrimary font-medium">
                  Step 2: Scroll-Stopping Ad Creatives
                </h3>

                <ul className="pl-5 flex flex-col gap-2 list-disc">
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Instagram Carousel Ads:
                    </span>{" "}
                    Showcase products in action.
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Facebook Lead Ads:
                    </span>{" "}
                    Capture emails with one-click forms.
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      WhatsApp Campaigns:
                    </span>{" "}
                    Send personalized offers directly to users&apos; phones.
                  </li>
                </ul>

                <h3 className="text-xl lg:text-2xl text-lightPrimary font-medium">
                  Step 3: E-Commerce Integration
                </h3>

                <ul className="pl-5 flex flex-col gap-2 list-disc">
                  <li>Set up Facebook Shops in 48 hours.</li>
                  <li>Sync Instagram Checkout with your inventory.</li>
                </ul>

                <h3 className="text-xl lg:text-2xl text-lightPrimary font-medium">
                  Step 4: Real-Time Optimization
                </h3>
                <p>
                  We track CTR (Click-Through Rate), CPC, and conversions to
                  tweak bids, audiences, and creatives weekly.
                </p>

                <h2
                  id="case-studies"
                  className="text-2xl lg:text-4xl text-lightPrimary py-4 lg:py-6 font-semibold"
                >
                  Case Studies: Devion Ark&apos;s Meta Marketing Wins
                </h2>
                <h3 className="text-xl lg:text-2xl text-lightPrimary font-medium">
                  {" "}
                  Case Study 1: 150% Traffic & 3X Students for Coaching Center
                </h3>

                <ul className="pl-5 flex flex-col gap-2 list-disc">
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Challenge:
                    </span>{" "}
                    A local coaching center struggled with low online visibility
                    of their institution. They used to follow old advertisement
                    policies.
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Solution:
                    </span>{" "}
                    We launched Instagram Reels campaigns and shoppable Facebook
                    posts.
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Results:
                    </span>{" "}
                    150% increase in website traffic and tripled admissions in 3
                    months.
                  </li>
                </ul>

                <h3 className="text-xl lg:text-2xl text-lightPrimary font-medium">
                  {" "}
                  Case Study 2: 156% Social Growth for Sportswear Brand
                </h3>

                <ul className="pl-5 flex flex-col gap-2 list-disc">
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Challenge:
                    </span>{" "}
                    Kick-Off Jersey Galleria, a renowned sportswear brand in
                    Khulna, Bangladesh, needed a scalable e-commerce site and
                    advertisement for their products through social media.
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Solution:
                    </span>{" "}
                    We built a mobile-optimized web app and paired it with Reels
                    ads.
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Results:
                    </span>{" "}
                    156% rise in social media engagement and 20% higher
                    conversion rates.
                  </li>
                </ul>

                <div className="w-full relative overflow-hidden rounded-sm">
                  <Image
                    placeholder="blur"
                    src={blogImg3}
                    alt="analyse your competitors of increase your business growth"
                    className="w-full object-cover"
                  />
                </div>

                <h2
                  id="why-choose-devion-ark"
                  className="text-2xl lg:text-4xl text-lightPrimary py-4 lg:py-6 font-semibold"
                >
                  Why Choose Devion Ark for Your Meta Marketing?
                </h2>
                <ul className="pl-5 flex flex-col gap-2 list-disc">
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Proven Expertise:
                    </span>{" "}
                    6 brands boosted ROI in 2024.
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Transparent Pricing:
                    </span>{" "}
                    No hidden fees—pay only for results.
                  </li>
                  <li>
                    <span className="text-lightPrimary font-normal">
                      Future-Ready Strategies:
                    </span>{" "}
                    We stay ahead of Meta&apos;s algorithm updates.
                  </li>
                </ul>

                <p className="text-lightPrimary">
                  Stop wasting ad spend! Book your free Meta Marketing
                  consultation today and unlock 150%+ growth in 90 days.
                  Don&apos;t let competitors steal your spotlight! Contact
                  Devion Ark now to dominate Meta Marketing in 2025.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="px-4 lg:px-20 pt-10 lg:pt-20">
        <div className="w-full h-[1px] bg-gray-800"></div>
      </div>

      {/* More Blogs */}
      <div className="w-full px-4 lg:px-20 pt-10 lg:pt-20 pb-10 lg:pb-20 flex flex-col gap-10 lg:gap-20">
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
            title="SEO vs AEO in 2025: The future of search engine optimization"
            forwardTo="/blogs/seo-vs-aeo-in-2025-the-future-of-search-engine-optimization"
            cover={moreBlog1}
            date="13 December 2024"
          />
        </div>
      </div>
    </main>
  );
}

export default Blog2;
