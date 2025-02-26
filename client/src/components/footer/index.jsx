import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { FaBell } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import footerLogo from "../../../public/footer_logo.png";
import TextAnimation from "../animations/TextAnimation";
import CustomShapeButton from "../buttons/CustomShapeButton";

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
  ];
  const navLinks2 = [
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Blogs", path: "/blogs" },
  ];

  const navLinks3 = [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Cookies Policy", path: "/cookies-policy" },
    { label: "Terms of Use", path: "/terms-of-use" },
  ];

  const socialLinks = [
    { label: "Facebook", url: "www.facebook.com/devion.ark/" },
    { label: "LinkedIn", url: "www.linkedin.com/company/devion-ark/" },
    { label: "Instagram", url: "www.instagram.com/devionark/" },
    { label: "Whatsapp", url: "www.wa.me/01782734573" },
  ];

  return (
    <div
      className="w-full relative h-[100vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative w-full h-[200vh] -top-[100vh]">
        <div className="sticky w-full h-[100vh] top-0 left-0">
          <div className="w-full h-[100vh] relative bg-black pt-5 lg:pt-10 flex">
            <div className="w-full h-full flex flex-col gap-10 justify-between">
              <div className="w-full h-full flex flex-col-reverse lg:flex-row  px-4 lg:px-10">
                <div className="w-full h-full flex lg:w-[50%] pb-5 lg:pb-10 lg:pe-10 ">
                  <div className="w-full h-full flex flex-col gap-5 justify-between">
                    <div className="w-full h-full flex flex-col gap-10">
                      <div className="hidden lg:flex flex-col gap-3 text-sm lg:text-lg font-light">
                        <div className="flex flex-col">
                          <p>08 Tootpara Central Rd,</p>
                          <p>Khulna-9100, Bangladesh</p>
                        </div>
                        <div className="flex flex-col">
                          <p>+8801782-734573, +8801893-204778</p>
                          <p>info@devionark.com</p>
                        </div>
                      </div>
                      <div className="w-full grid grid-cols-3 gap-4 lg:gap-7 text-sm font-light lg:font-normal lg:text-lg leading-none">
                        <div className="flex flex-col gap-2 ">
                          <div>
                            <p className="text-lightPrimary font-medium">
                              Quick Links
                            </p>
                          </div>
                          {navLinks1.map((nav, i) => (
                            <Link href={nav.path} key={i}>
                              <span className="text-lightSecondary">
                                <TextAnimation
                                  text={nav.label}
                                  hoverText="text-accentColor"
                                />
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="flex flex-col gap-2 ">
                          <div>
                            <p className="text-lightPrimary font-medium">
                              Resources
                            </p>
                          </div>
                          {navLinks2.map((nav, i) => (
                            <Link href={nav.path} key={i}>
                              <span className="text-lightSecondary">
                                <TextAnimation
                                  text={nav.label}
                                  hoverText="text-accentColor"
                                />
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="flex flex-col gap-2 ">
                          <div>
                            <p className="text-lightPrimary font-medium">
                              Legals
                            </p>
                          </div>
                          {navLinks3.map((nav, i) => (
                            <Link href={nav.path} key={i}>
                              <span className="text-lightSecondary">
                                <TextAnimation
                                  text={nav.label}
                                  hoverText="text-accentColor"
                                />
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="w-full h-full lg:hidden flex flex-row justify-between items-end gap-5 text-sm">
                        <p>&copy;2025</p>
                        <p className="text-end">All rights reserved</p>
                      </div>
                    </div>
                    <div className="w-full hidden lg:flex flex-row gap-3 justify-between items-center">
                      <div>
                        <p>&copy;2025</p>
                      </div>
                      <div>
                        <GoDotFill />
                      </div>
                      <div>
                        <p>Devion Ark Digital Solutions</p>
                      </div>
                      <div>
                        <GoDotFill />
                      </div>
                      <div>
                        <p>All rights reserved</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex lg:w-[50%] pb-5 lg:pb-10 lg:ps-10">
                  <div className="flex flex-col gap-5 justify-between">
                    <div className="w-full flex flex-col gap-3">
                      <h2 className="text-lightPrimary font-semibold  text-3xl lg:text-5xl font-oswald leading-[1.10]">
                        Ready to transform your{" "}
                        <span className="text-accentColor">business</span>?
                      </h2>
                      <p className="font-light text-base lg:text-lg">
                        Sign up for counsiling, latest updates, and offers!
                      </p>
                      <form className="w-full flex flex-col gap-3">
                        <input
                          className="p-3 outline-none border bg-transparent text-lightSecondary"
                          placeholder="Enter your email address"
                        />
                        <div className="w-full flex justify-start">
                          <div className="w-full flex justify-start">
                            <CustomShapeButton
                              label="Subscribe"
                              backgroundColor="bg-lightPrimary"
                              hoverBgColor="bg-accentColor"
                              textStyle="text-lg font-semibold text-darkPrimary"
                              hoverText="text-darkPrimary"
                              paddingX="ps-3 pe-6"
                              paddingY="py-3"
                              fontGap="gap-3"
                              icon={
                                <FaBell className="text-base text-darkPrimary transition duration-[350ms]" />
                              }
                            />
                          </div>
                        </div>
                      </form>
                      <p className="text-sm font-light ">
                        By signing up, you understand and agree that your data
                        will be collected and used subject to our Privacy Policy
                        and Terms of Use.
                      </p>
                    </div>
                    <div className="w-full h-full flex flex-row gap-2 justify-between items-end py-7 lg:py-0">
                      {socialLinks.map((social, index) => (
                        <a href={social.url} key={index}>
                          <div
                            className={`w-full text-lightPrimary text-sm lg:text-base font-medium leading-none duration-[350ms] whitespace-nowrap`}
                          >
                            <TextAnimation
                              text={social.label}
                              hoverText="text-accentColor"
                            />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex w-full justify-end">
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
  );
}

export default Footer;
