import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { BiSupport } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import footerLogo from "../../../public/footer_logo.png";

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
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Blogs", path: "/blogs" },
  ];
  const navLinks2 = [
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
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
  ];

  return (
    <div
      className="w-full relative h-[100vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative w-full h-[200vh] -top-[100vh]">
        <div className="sticky w-full h-[100vh] top-0 left-0">
          <div className="w-full h-[100vh] relative bg-black pt-5 lg:pt-20 flex">
            <div className="w-full h-full flex flex-col gap-5 lg:gap-10 justify-between">
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-20 px-4 lg:px-10">
                <div className="flex flex-col gap-5">
                  <div className="h-6 relative overflow-hidden">
                    <Image
                      src={footerLogo}
                      alt="Devion Ark Logo"
                      className="h-full w-auto"
                    />
                  </div>
                  <p className="font-light">
                    Your full-service digital growth partner. We craft custom
                    software, SEO-optimized websites, and data-driven marketing
                    strategies that convert. Empowering startups to enterprises
                    with transparent, results-focused solutions.
                  </p>
                  <div className="w-full flex flex-wrap gap-5">
                    {socialLinks.map((item, index) => (
                      <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="p-3 rounded-full bg-darkSecondary hover:bg-darkPrimary text-lightPrimary hover:text-accentColor transition-colors duration-[350ms] text-xl">
                          {item.label}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="w-full flex flex-row gap-10 lg:justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="text-lightPrimary font-normal uppercase">
                      Quick Links
                    </div>
                    <div className="flex flex-col gap-1 font-light">
                      {navLinks1.map((link, index) => (
                        <Link
                          key={index}
                          href={link.path}
                          className="text-lightSecondary hover:text-accentColor transition-colors duration-[350ms]"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="text-lightPrimary font-normal uppercase">
                      Resources
                    </div>
                    <div className="flex flex-col gap-1 font-light">
                      {navLinks2.map((link, index) => (
                        <Link
                          key={index}
                          href={link.path}
                          className="text-lightSecondary hover:text-accentColor transition-colors duration-[350ms]"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full flex lg:justify-end">
                  <div className="flex flex-col gap-5 lg:gap-10">
                    <div className="flex flex-col gap-3">
                      <div className="text-lightPrimary font-normal uppercase">
                        Contact us 24/7
                      </div>
                      <div className="flex flex-col">
                        <div className="flex flex-row gap-3 text-lightSecondary">
                          <span className="text-accentColor pt-1">
                            <BiSupport />
                          </span>{" "}
                          <span>+8801782734573</span>
                        </div>
                        <div className="flex flex-row gap-3 text-lightSecondary">
                          <span className="text-accentColor pt-1">
                            <MdOutlineEmail />
                          </span>{" "}
                          <span>info@devionark.com</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="text-lightPrimary font-normal uppercase">
                        Office
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex flex-row gap-3 text-lightSecondary">
                          <span className="text-accentColor pt-1">
                            <MdOutlineLocationOn />
                          </span>
                          <span className="flex flex-col">
                            <span>08 Tootpara Central Rd,</span>
                            <span>Khulna Sadar, Khulna-9100</span>
                            <span>Bangladesh</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5 w-full justify-end">
                <div className="w-full flex justify-center text-sm">
                  <p>Copyright &copy; 2025 Devion Ark. All rights resereved.</p>
                </div>
                <div className="hidden lg:flex">
                  <Marquee autoFill={true}>
                    <div className="w-[480px] lg:w-[1300px] aspect-[7.6/1] relative mx-4 lg:mx-6">
                      <Image
                        placeholder="blur"
                        src={footerLogo}
                        alt="footer-logo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
