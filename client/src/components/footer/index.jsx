import Image from "next/image";
import Link from "next/link";
import {
  FaBell,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import footerLogo from "../../../public/footer_logo.png";
import amexIcon from "../../../public/payments/amex.png";
import bkashIcon from "../../../public/payments/BKash-Icon2-Logo.wine.png";
import nogodIcon from "../../../public/payments/Nagad-Logo.wine.png";
import mastersIcon from "../../../public/payments/shopping.png";
import visaIcon from "../../../public/payments/visa.png";
import TextAnimation from "../animations/TextAnimation";

function AddressInfo({ icon, title, value }) {
  return (
    <div className="w-full flex flex-row gap-5 font-light leading-none">
      <div className="w-[30%] flex flex-row gap-2">
        <span>{icon}</span>
        {title}:
      </div>
      <div className="w-[70%] leading-tight">{value}</div>
    </div>
  );
}

function Footer() {
  const navLinks1 = [
    { label: "Business Services", path: "/services" },
    { label: "Dynamic Solutions", path: "/case-studies" },
    { label: "Latest Articles", path: "/blogs" },
    { label: "About Us", path: "/about" },
    { label: "Get In Touch", path: "/contact" },
  ];
  const navLinks2 = [
    {
      label: "Software Solutions",
      path: "/services#custom-software-solutions",
    },
    { label: "Website Development", path: "/services#website-development" },
    {
      label: "Social Marketing",
      path: "/services#social-media-marketing",
    },

    { label: "Business Consultancy", path: "/services#business-consultancy" },
    {
      label: "Search Marketing",
      path: "/services#search-engine-marketing",
    },
    {
      label: "Search Optimization",
      path: "/services#search-engine-optimization",
    },
  ];
  const navLinks3 = [
    { label: "Responsive Website", path: "/case-studies" },
    { label: "Brand Revival", path: "/blogs" },
    { label: "Local SEO", path: "/about" },
    { label: "Management System", path: "/services" },
    { label: "Ecommerce Application", path: "/" },
  ];
  const navLinks4 = [
    { label: "Cookies Policy", path: "/legals" },
    { label: "Privacy Policy", path: "/legals#privacy-policy" },
  ];

  const socialLinks = [
    { label: <FaFacebookF />, url: "https://www.facebook.com/devion.ark/" },
    {
      label: <FaLinkedinIn />,
      url: "https://www.linkedin.com/company/devion-ark/",
    },
    { label: <FaInstagram />, url: "https://www.instagram.com/devionark/" },
    { label: <FaWhatsapp />, url: "https://wa.me/8801782734573" },
    { label: <FaXTwitter />, url: "/" },
    { label: <FaYoutube />, url: "/" },
  ];

  return (
    <div className="w-full relative bg-black pt-10 lg:pt-32 flex px-4 lg:px-20 font-light font-poppins">
      <div className="w-full h-full flex flex-col gap-7 lg:gap-14 justify-between">
        <div className="w-full hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10 text-lg">
          <div className="flex flex-col gap-4">
            <div className="text-lightPrimary font-normal uppercase">
              Quick Links
            </div>
            <div className="flex flex-col gap-2 font-light">
              {navLinks1.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="text-lightSecondary hover:text-accentColor transition-colors duration-[350ms]"
                >
                  {" "}
                  <TextAnimation
                    text={link.label}
                    hoverText="text-accentColor"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-lightPrimary font-normal uppercase">
              Resources
            </div>
            <div className="flex flex-col gap-2 font-light">
              {navLinks2.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="text-lightSecondary hover:text-accentColor transition-colors duration-[350ms]"
                >
                  <TextAnimation
                    text={link.label}
                    hoverText="text-accentColor"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-lightPrimary font-normal uppercase">
              Legals
            </div>
            <div className="flex flex-col gap-2 font-light">
              {navLinks4.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="text-lightSecondary hover:text-accentColor transition-colors duration-[350ms]"
                >
                  <TextAnimation
                    text={link.label}
                    hoverText="text-accentColor"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-lightPrimary font-normal uppercase">
              Case Studies
            </div>
            <div className="flex flex-col gap-2 font-light">
              {navLinks3.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className="text-lightSecondary hover:text-accentColor transition-colors duration-[350ms]"
                >
                  <TextAnimation
                    text={link.label}
                    hoverText="text-accentColor"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-14 lg:gap-40 justify-between pt-10">
          <div className="w-full lg:w-[60%] flex flex-col gap-5">
            <div className="h-6 lg:h-8 relative overflow-hidden">
              <Image
                src={footerLogo}
                alt="Devion Ark Logo"
                className="h-full w-auto"
              />
            </div>
            <p className="font-light text-lightSecondary">
              Your full-service digital growth partner. We craft custom
              software, SEO-optimized websites, and data-driven marketing
              strategies that convert. Empowering startups to enterprises with
              transparent, results-focused solutions.
            </p>
            <div className="w-full flex flex-wrap gap-4">
              <div className="h-7 relative overflow-hidden">
                <Image
                  src={bkashIcon}
                  alt="payment_logo"
                  className="h-full w-auto"
                />
              </div>
              <div className="h-7 relative overflow-hidden">
                <Image
                  src={nogodIcon}
                  alt="payment_logo"
                  className="h-full w-auto"
                />
              </div>
              <div className="h-7 relative overflow-hidden">
                <Image
                  src={visaIcon}
                  alt="payment_logo"
                  className="h-full w-auto"
                />
              </div>
              <div className="h-7 relative overflow-hidden">
                <Image
                  src={mastersIcon}
                  alt="payment_logo"
                  className="h-full w-auto"
                />
              </div>
              <div className="h-7 relative overflow-hidden">
                <Image
                  src={amexIcon}
                  alt="payment_logo"
                  className="h-full w-auto"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex flex-col gap-10 lg:gap-5">
            <div className="flex flex-col-reverse lg:flex-col gap-10 lg:gap-5">
              <div className="w-full flex flex-wrap gap-5 justify-between lg:justify-end">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-2 rounded-md bg-accentColor2 hover:bg-accentColor text-lightPrimary transition-all duration-[350ms] text-xl lg:hover:scale-110">
                      {item.label}
                    </div>
                  </a>
                ))}
              </div>
              <div className="w-full">
                <form className="w-full flex flex-row">
                  <button
                    type="submit"
                    className="px-5 flex flex-row gap-2 items-center bg-accentColor2 hover:bg-accentColor text-lightPrimary transition-all duration-[350ms] rounded-l-sm"
                  >
                    <span>Subscribe</span>
                    <FaBell className="text-base text-lightPrimary transition duration-[350ms]" />
                  </button>
                  <input
                    className="w-full p-3 outline-none border bg-lightPrimary text-darkSecondary"
                    placeholder="Enter your email address"
                    type="email"
                    required
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 lg:py-7 border-t-[0.5px] border-gray-700">
          <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between text-sm lg:text-base text-lightSecondary text-center lg:text-left">
            <p>&copy; 2023-2025 Devion Ark Digital Solutions</p>
            <p>Prices are listed without VAT.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
