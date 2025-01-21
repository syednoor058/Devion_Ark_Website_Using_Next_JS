import Image from "next/image";
import Marquee from "react-fast-marquee";
import { AiFillInstagram, AiOutlineTikTok } from "react-icons/ai";
import { BsHandIndexThumbFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail, IoMdPin } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import CallToActionsButton from "../buttons/CallToActionsButton";

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
          <div className="w-full h-[100vh] relative bg-black pt-7 text-sm flex items-end">
            <div className="w-full h-full flex flex-col justify-between">
              <div className="w-full flex flex-col lg:flex-row justify-between gap-5 lg:gap-10">
                <div className="w-full lg:w-[40%] flex flex-col gap-3 px-5">
                  <h3 className="font-inter uppercase text-lightPrimary font-semibold  text-[7vw] lg:text-[3vw] leading-none">
                    Ready to transform your business?
                  </h3>
                  <p className="font-light">
                    Sign up for counsiling, latest update, and offers!
                  </p>
                  <form className="w-full flex flex-col gap-2">
                    <input
                      className="px-5 py-2 rounded-sm"
                      placeholder="Enter your email address"
                    />

                    <CallToActionsButton
                      forwardTo=""
                      label="Subscribe"
                      icon={<BsHandIndexThumbFill />}
                      btnColor="bg-lightPrimary"
                    />
                  </form>

                  <p className="text-xs font-light">
                    By signing up, you understand and agree that your data will
                    be collected and used subject to our{" "}
                    <span className="underline underline-offset-2">
                      Privacy Policy
                    </span>{" "}
                    and{" "}
                    <span className="underline underline-offset-2">
                      Terms of Use
                    </span>
                    .
                  </p>
                </div>
                <div className="w-full lg:w-[40%] flex flex-col gap-10 justify-between px-5">
                  <div className="flex flex-row gap-10 ">
                    <div className="w-full lg:w-[60%] flex flex-col gap-3 lg:gap-7">
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
                    <div className="w-[40%] hidden lg:flex flex-col gap-7">
                      <div className="uppercase font-semibold text-lightPrimary">
                        Resources
                      </div>
                      <div className="flex flex-col gap-3 font-light">
                        <div>Privacy Poilicy</div>
                        <div>Terms of Use</div>
                        <div>Cookies Policy</div>
                        <div>Contact</div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full hidden lg:flex flex-row gap-10">
                    <div className="uppercase font-semibold text-lightPrimary text-nowrap">
                      Quick Links
                    </div>
                    <div className="w-full flex flex-row gap-5 font-light">
                      <div>Home</div>
                      <div>Case Studies</div>
                      <div>Blog</div>
                      <div>About</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-row gap-5 lg:gap-20 px-5">
                <div className="uppercase font-semibold text-lightPrimary">
                  Connect:
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-5 gap-y-2 lg:gap-x-10 lg:gap-y-0 font-inter font-medium text-sm lg:text-base">
                  <div className="flex flex-row items-center gap-2">
                    <span>
                      <FaFacebookF />
                    </span>
                    Facebook
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <span>
                      <AiFillInstagram />
                    </span>
                    Instagram
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <span>
                      <FaLinkedinIn />
                    </span>
                    LinkedIn
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <span>
                      <FaYoutube />
                    </span>
                    YouTube
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <span>
                      <FaXTwitter />
                    </span>
                    Twitter (X)
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <span>
                      <AiOutlineTikTok />
                    </span>
                    Tiktok
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 w-screen justify-end">
                <div className="w-full flex flex-row gap-5 justify-between text-xs lg:text-base ps-5 pe-10">
                  <div>&copy;2024 - 2025</div>
                  <div>All rights reserved by</div>
                </div>

                <Marquee autoFill={true}>
                  <div className="w-screen aspect-[7.6/1] relative mx-4 lg:mx-8">
                    <Image
                      src="/footer_logo.png"
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
