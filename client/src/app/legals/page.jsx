import HashComponent from "@/components/hashComp/HashComp";
import Head from "next/head";
import Link from "next/link";

export const metadata = {
  title: "Legal & Compliance | Privacy & Cookie Policies – Devion Ark",
  description:
    "Understand your rights and our obligations. Explore Devion Ark’s legal policies for data protection, service terms, and cookie usage. Updated 2 March, 2025.",
};

function Legals() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.devionark.com/legals/" />
      </Head>
      <main className="font-poppins font-light text-lightSecondary">
        {/* Landing Section  */}
        <div className="w-full pt-5 lg:pt-10 pb-10 lg:pb-20 px-4 lg:px-20">
          <div className="w-full flex flex-col gap-5 justify-center items-center text-center">
            <h1 className="font-bold font-oswald text-9xl uppercase text-accentColor">
              Legals
            </h1>
            <p className="text-lg">Last updated: March 2, 2025</p>
          </div>
        </div>

        {/* Legals Content */}

        <div className="w-full px-4 lg:px-20 py-10 lg:py-20 bg-black">
          <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div className="w-full lg:w-[30%]">
              <div className="flex h-screen flex-col gap-5 sticky top-20">
                <div className="uppercase text-lightPrimary font-light">
                  Table of Contents
                </div>
                <ul className="pl-5 flex flex-col gap-5 font-light text-lightSecondary">
                  <li className="text-lightSecondary hover:text-lightPrimary flex flex-col gap-3">
                    <Link href="/legals#cookie-policy">1. Cookie Policy</Link>
                    <ul className="pl-5 flex flex-col gap-2 font-light text-lightSecondary">
                      <li className="text-lightSecondary hover:text-lightPrimary">
                        <Link href="/legals#cookie-introduction">
                          1.1 Introduction
                        </Link>
                      </li>
                      <li className="text-lightSecondary hover:text-lightPrimary">
                        <Link href="/legals#what-are-cookies">
                          1.2 What Are Cookies?
                        </Link>
                      </li>
                      <li className="text-lightSecondary hover:text-lightPrimary">
                        <Link href="/legals#types-of-cookies">
                          1.3 Types of Cookies We Use
                        </Link>
                      </li>
                      <li className="text-lightSecondary hover:text-lightPrimary">
                        <Link href="/legals#third-party-cookies">
                          1.4 Third-Party Cookies
                        </Link>
                      </li>
                      <li className="text-lightSecondary hover:text-lightPrimary">
                        <Link href="/legals#managing-cookies">
                          1.5 Managing Cookies
                        </Link>
                      </li>
                      <li className="text-lightSecondary hover:text-lightPrimary">
                        <Link href="/legals#change-to-policy">
                          1.6 Changes to This Policy
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="text-lightSecondary hover:text-lightPrimary flex flex-col gap-3">
                    <Link href="/legals#privacy-policy">2. Privacy Policy</Link>
                    <ul className="pl-5 flex flex-col gap-2 font-light text-lightSecondary">
                      <li className="text-lightSecondary hover:text-lightPrimary">
                        <Link href="/legals#2-1">2.1 Scope</Link>
                      </li>
                      <li className="text-lightSecondary hover:text-lightPrimary">
                        <Link href="/legals#2-2">
                          2.2 Information We Collect
                        </Link>
                      </li>
                      <li className="text-lightSecondary hover:text-lightPrimary">
                        <Link href="/legals#2-3">2.3 How We Use Your Data</Link>
                      </li>
                      <li className="text-lightSecondary hover:text-lightPrimary">
                        <Link href="/legals#2-4">2.4 Data Sharing</Link>
                      </li>
                      <li className="text-lightSecondary hover:text-lightPrimary">
                        <Link href="/legals#2-5">2.5 Data Retention</Link>
                      </li>
                      <li className="text-lightSecondary hover:text-lightPrimary">
                        <Link href="/legals#2-6">2.6 Security Measures</Link>
                      </li>
                      <li className="text-lightSecondary hover:text-lightPrimary">
                        <Link href="/legals#2-7">2.7 Your Rights</Link>
                      </li>
                      <li className="text-lightSecondary hover:text-lightPrimary">
                        <Link href="/legals#2-8">2.8 Contact Us</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <HashComponent />
            <div className="w-full lg:w-[70%] flex flex-col gap-10">
              <div className="">
                <article className="w-full flex flex-col gap-5 lg:gap-7 font-light text-lightSecondary leading-tight text-base lg:text-xl">
                  <h2
                    id="cookie-policy"
                    className="text-2xl lg:text-4xl text-lightPrimary py-4 lg:py-6 font-semibold"
                  >
                    1. Cookie Policy
                  </h2>
                  <h3
                    id="cookie-introduction"
                    className="text-xl lg:text-2xl text-lightPrimary font-medium"
                  >
                    1.1 Introduction
                  </h3>
                  <p>
                    This Cookie Policy explains how Devion Ark ("we," "us," or
                    "our") uses cookies and similar tracking technologies when
                    you visit our website [
                    <span className="italic">www.devionark.com</span>]. By using
                    our website, you consent to the use of cookies as described
                    in this policy.
                  </p>

                  <h3
                    id="what-are-cookies"
                    className="text-xl lg:text-2xl text-lightPrimary font-medium"
                  >
                    1.2 What Are Cookies?
                  </h3>
                  <p>
                    Cookies are small text files stored on your device
                    (computer, mobile, or tablet) when you access our website.
                    They help us recognize your device, remember preferences,
                    and improve user experience.
                  </p>

                  <h3
                    id="types-of-cookies"
                    className="text-xl lg:text-2xl text-lightPrimary font-medium"
                  >
                    1.3 Types of Cookies We Use
                  </h3>
                  <ul className="pl-5 flex flex-col gap-2 list-disc">
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Essential Cookies:
                      </span>{" "}
                      Required for website functionality (e.g., login sessions,
                      payment processing).
                    </li>
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Analytics Cookies:
                      </span>{" "}
                      Track traffic sources, page views, and user behavior
                      (e.g., time spent on pages).
                    </li>
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Advertising Cookies:
                      </span>{" "}
                      Deliver targeted ads based on your interests and
                      demographics.
                    </li>
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Performance Cookies:
                      </span>{" "}
                      Monitor site speed and responsiveness.
                    </li>
                  </ul>

                  <h3
                    id="third-party-cookies"
                    className="text-xl lg:text-2xl text-lightPrimary font-medium"
                  >
                    1.4 Third-Party Cookies
                  </h3>
                  <p>
                    We may use third-party services (e.g., future Google
                    Analytics, Facebook Pixel) that place cookies to analyze
                    traffic, deliver ads, or integrate social media. These
                    parties have their own privacy policies.
                  </p>

                  <h3
                    id="managing-cookies"
                    className="text-xl lg:text-2xl text-lightPrimary font-medium"
                  >
                    1.5 Managing Cookies
                  </h3>
                  <ul className="pl-5 flex flex-col gap-2 list-disc">
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Consent:
                      </span>{" "}
                      By continuing to use our website, you agree to all
                      cookies.
                    </li>
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Browser Settings:
                      </span>{" "}
                      Most browsers allow you to block/delete cookies via
                      settings (e.g., Chrome, Firefox).
                    </li>
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Opt-Out Tools:
                      </span>{" "}
                      For advertising cookies, visit{" "}
                      <a
                        href="https://optout.aboutads.info/"
                        target="_blank"
                        rel="noopener norefferer"
                        className="text-accentColor"
                      >
                        Your Ad Choices
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://optout.networkadvertising.org/"
                        target="_blank"
                        rel="noopener norefferer"
                        className="text-accentColor"
                      >
                        NAI Consumer Opt-Out
                      </a>
                      .
                    </li>
                  </ul>
                  <h3
                    id="change-to-policy"
                    className="text-xl lg:text-2xl text-lightPrimary font-medium"
                  >
                    1.6 Changes to This Policy
                  </h3>
                  <p>
                    We may update this policy periodically. Continued use of the
                    site constitutes acceptance of changes.
                  </p>
                </article>
              </div>

              <div className="">
                <article className="w-full flex flex-col gap-5 lg:gap-7 font-light text-lightSecondary leading-tight text-base lg:text-xl">
                  <h2
                    id="privacy-policy"
                    className="text-2xl lg:text-4xl text-lightPrimary py-4 lg:py-6 font-semibold"
                  >
                    2. Privacy Policy
                  </h2>
                  <h3
                    id="2-1"
                    className="text-xl lg:text-2xl text-lightPrimary font-medium"
                  >
                    2.1 Scope
                  </h3>
                  <p>
                    This Privacy Policy applies to all users of [
                    <span className="italic">www.devionark.com</span>] and
                    outlines how we collect, use, and protect your personal
                    data.
                  </p>

                  <h3
                    id="2-2"
                    className="text-xl lg:text-2xl text-lightPrimary font-medium"
                  >
                    2.2 Information We Collect
                  </h3>
                  <ul className="pl-5 flex flex-col gap-2 list-disc">
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Personal Data:
                      </span>{" "}
                      Name, email, phone number, billing address.
                    </li>
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Technical Data:
                      </span>{" "}
                      IP address, browser type, device information.
                    </li>
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Behavioral Data:
                      </span>{" "}
                      Pages visited, session duration, demographics, interests.
                    </li>
                  </ul>

                  <h3
                    id="2-3"
                    className="text-xl lg:text-2xl text-lightPrimary font-medium"
                  >
                    2.3 How We Use Your Data
                  </h3>

                  <table className="">
                    <thead className="text-lightPrimary fonr-normal bg-darkSecondary text-start">
                      <tr className="border-x border-lightSecondary/30">
                        <th className="border-r border-lightSecondary/30 py-3 pe-3">
                          Purpose
                        </th>
                        <th className=" py-3 ps-3">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-lightSecondary/30">
                        <td className="w-[50%] py-4 px-3 border-x border-lightSecondary/30">
                          Service Delivery
                        </td>
                        <td className="w-[50%] py-4 px-3 border-r border-lightSecondary/30">
                          Processing orders, providing customer support.
                        </td>
                      </tr>
                      <tr className="border-b border-lightSecondary/30">
                        <td className="w-[50%] py-4 px-3 border-x border-lightSecondary/30">
                          Marketing
                        </td>
                        <td className="w-[50%] py-4 px-3 border-r border-lightSecondary/30">
                          Sending promotional emails, targeted ads.
                        </td>
                      </tr>
                      <tr className="border-b border-lightSecondary/30">
                        <td className="w-[50%] py-4 px-3 border-x border-lightSecondary/30">
                          Analytics
                        </td>
                        <td className="w-[50%] py-4 px-3 border-r border-lightSecondary/30">
                          Improving website performance, researching trends.
                        </td>
                      </tr>
                      <tr className="border-b border-lightSecondary/30">
                        <td className="w-[50%] py-4 px-3 border-x border-lightSecondary/30">
                          Legal Compliance
                        </td>
                        <td className="w-[50%] py-4 px-3 border-r border-lightSecondary/30">
                          Fraud prevention, tax obligations.
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h3
                    id="2-4"
                    className="text-xl lg:text-2xl text-lightPrimary font-medium"
                  >
                    2.4 Data Sharing
                  </h3>
                  <p>We may share your data with:</p>
                  <ul className="pl-5 flex flex-col gap-2 list-disc">
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Service Providers:
                      </span>{" "}
                      Payment processors, hosting companies.
                    </li>
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Legal Authorities:
                      </span>{" "}
                      If required by law (e.g., court orders).
                    </li>
                  </ul>

                  <h3
                    id="2-5"
                    className="text-xl lg:text-2xl text-lightPrimary font-medium"
                  >
                    2.5 Data Retention
                  </h3>
                  <p>We retain data:</p>
                  <ul className="pl-5 flex flex-col gap-2 list-disc">
                    <li>Until you request deletion.</li>
                    <li>As needed for legal/compliance purposes.</li>
                  </ul>
                  <h3
                    id="2-6"
                    className="text-xl lg:text-2xl text-lightPrimary font-medium"
                  >
                    2.6 Security Measures
                  </h3>
                  <p>
                    We implement SSL encryption, firewalls, and access controls
                    to protect your data.
                  </p>
                  <h3
                    id="2-7"
                    className="text-xl lg:text-2xl text-lightPrimary font-medium"
                  >
                    2.7 Your Rights
                  </h3>
                  <ul className="pl-5 flex flex-col gap-2 list-disc">
                    {" "}
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Access:
                      </span>{" "}
                      Request a copy of your data.
                    </li>
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Deletion:
                      </span>{" "}
                      Ask us to erase your data (exceptions apply).
                    </li>
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Opt-Out:
                      </span>{" "}
                      Unsubscribe from marketing emails via the "Unsubscribe"
                      link.
                    </li>
                  </ul>

                  <h3
                    id="2-8"
                    className="text-xl lg:text-2xl text-lightPrimary font-medium"
                  >
                    2.8 Contact Us
                  </h3>
                  <ul className="pl-5 flex flex-col gap-2 list-disc">
                    {" "}
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Email:
                      </span>{" "}
                      info@devionark.com
                    </li>
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Phone 1:
                      </span>{" "}
                      +8801782734573
                    </li>
                    <li>
                      <span className="text-lightPrimary font-normal">
                        Phone 2:
                      </span>{" "}
                      +8801893204778
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Legals;
