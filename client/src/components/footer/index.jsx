import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { FaBell } from "react-icons/fa";
import { IoMdMail, IoMdPin } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import footerLogo from "../../../public/footer_logo.png";
import AnimatedLetter from "../animations/AnimatedLetter";
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
  return (
    <div
      className="w-full relative h-[100vh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative w-full h-[200vh] -top-[100vh]">
        <div className="sticky w-full h-[100vh] top-0 left-0">
          <div className="w-full h-[100vh] relative bg-black pt-5 flex items-end">
            <div className="w-full h-full flex flex-col justify-between">
              <div className="w-full flex flex-col lg:flex-row justify-between gap-5 lg:gap-10">
                <div className="w-full lg:w-[40%] flex flex-col gap-3 px-5">
                  <h3 className="uppercase text-lightPrimary font-semibold  text-[8vw] lg:text-[3vw] leading-none font-oswald">
                    Ready to transform your business?
                  </h3>
                  <p className="font-light">
                    Sign up for counsiling, latest update, and offers!
                  </p>
                  <form className="w-full flex flex-col gap-2">
                    <input
                      className="px-5 py-3 rounded-sm outline-none border bg-transparent text-lightSecondary"
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
                          paddingX="px-4"
                          paddingY="py-3"
                          fontGap="gap-2"
                          icon={
                            <FaBell className="text-base text-darkPrimary transition duration-[350ms]" />
                          }
                        />
                      </div>
                    </div>
                  </form>

                  <p className="font-light">
                    By signing up, you understand and agree that your data will
                    be collected and used subject to our{" "}
                    <Link href="/privacy-policy">
                      <span className="hover:underline underline-offset-2">
                        Privacy Policy
                      </span>
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms-of-use">
                      <span className="hover:underline underline-offset-2">
                        Terms of Use
                      </span>
                    </Link>
                    .
                  </p>
                </div>
                <div className="w-full lg:w-[40%] flex flex-col gap-10 justify-between px-5">
                  <div className="flex flex-row gap-10 text-lg">
                    <div className="w-full flex flex-col gap-3 lg:gap-7">
                      <div className="uppercase font-semibold text-lightPrimary">
                        Contact Us
                      </div>
                      <div className="flex flex-col gap-3">
                        <AddressInfo
                          icon={<IoMdMail />}
                          title="Email"
                          value="info@devionark.com"
                        />
                        <AddressInfo
                          icon={<MdPhone />}
                          title="Phone"
                          value="+8801782734573"
                        />
                        <AddressInfo
                          icon={<IoMdPin />}
                          title="Address"
                          value="Holding No. 08, Tootpare Central Rd, Khulna Sadar, Khulna-9100, Bangladesh"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3 text-lg">
                <div className="w-full hidden lg:flex flex-row gap-20 px-5">
                  <div className="w-[10%] uppercase font-semibold text-lightPrimary">
                    Resources
                  </div>
                  <div className="w-[90%] flex flex-row gap-10 font-light">
                    <Link href="">
                      <AnimatedLetter
                        text="Privacy Poilicy"
                        hoverText="text-accentColor"
                      />
                    </Link>
                    <Link href="">
                      <AnimatedLetter
                        text="Terms of Use"
                        hoverText="text-accentColor"
                      />
                    </Link>
                    <Link href="">
                      <AnimatedLetter
                        text="Cookies Policy"
                        hoverText="text-accentColor"
                      />
                    </Link>
                    <Link href="">
                      <AnimatedLetter
                        text="Contact"
                        hoverText="text-accentColor"
                      />
                    </Link>
                  </div>
                </div>

                <div className="w-full hidden lg:flex flex-row gap-20 px-5">
                  <div className="w-[10%] uppercase font-semibold text-lightPrimary">
                    Connect
                  </div>
                  <div className="w-[90%] flex flex-row gap-10 font-light">
                    <a href="" className="flex flex-row items-center gap-2">
                      <AnimatedLetter
                        text="Facebook"
                        hoverText="text-accentColor"
                      />
                    </a>
                    <a href="" className="flex flex-row items-center gap-2">
                      <AnimatedLetter
                        text="Instagram"
                        hoverText="text-accentColor"
                      />
                    </a>
                    <a href="" className="flex flex-row items-center gap-2">
                      <AnimatedLetter
                        text="LinkedIn"
                        hoverText="text-accentColor"
                      />
                    </a>
                    <a href="" className="flex flex-row items-center gap-2">
                      <AnimatedLetter
                        text="Youtube"
                        hoverText="text-accentColor"
                      />
                    </a>
                    <a href="" className="flex flex-row items-center gap-2">
                      <AnimatedLetter
                        text="Twitter"
                        hoverText="text-accentColor"
                      />
                    </a>
                    <a href="" className="flex flex-row items-center gap-2">
                      <AnimatedLetter
                        text="Whatsapp"
                        hoverText="text-accentColor"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 w-full justify-end">
                <div className="w-full flex flex-row gap-5 justify-between text-xs lg:text-base px-5">
                  <div>&copy;2024 - 2025</div>
                  <div>All rights reserved by</div>
                </div>

                <Marquee autoFill={true}>
                  <div className="w-[480px] lg:w-[1300px] aspect-[7.6/1] relative mx-4 lg:mx-8">
                    <Image
                      placeholder="blur"
                      src={footerLogo}
                      alt="footer-logo"
                      fill
                      className="object-cover"
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
