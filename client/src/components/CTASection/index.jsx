import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function CTASection() {
  return (
    <div className="w-full bg-accentColor text-darkSecondary">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 py-10 lg:py-20 px-5 lg:px-20">
        <div className="w-full lg:w-1/3 flex flex-row gap-3 justify-center items-center text-2xl">
          <Link
            href=""
            className="p-3 rounded-full border border-darkSecondary hover:text-lightPrimary hover:bg-darkPrimary hover:-translate-y-2 duration-300"
          >
            <FaFacebookF />
          </Link>
          <Link
            href=""
            className="p-3 rounded-full border border-darkSecondary hover:text-lightPrimary hover:bg-darkPrimary hover:-translate-y-2 duration-300"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href=""
            className="p-3 rounded-full border border-darkSecondary hover:text-lightPrimary hover:bg-darkPrimary hover:-translate-y-2 duration-300"
          >
            <FaXTwitter />
          </Link>
          <Link
            href=""
            className="p-3 rounded-full border border-darkSecondary hover:text-lightPrimary hover:bg-darkPrimary hover:-translate-y-2 duration-300"
          >
            <AiFillInstagram />
          </Link>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center items-center text-center font-oswald font-bold uppercase text-5xl lg:text-6xl border-x-[2px] border-lightPrimary">
          <h2>Let&apos;s Talk!</h2>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <Link
            href=""
            className="relative  overflow-hidden  border-[2px] border-darkPrimary group"
          >
            <div className="inline-flex">
              <span className="px-8 py-3 text-darkPrimary group-hover:text-lightPrimary duration-500 z-[2] text-lg">
                Book A Call
              </span>
              <div className="w-full h-full bg-darkPrimary absolute top-0 left-0 -translate-x-full group-hover:translate-x-0 duration-500 z-[1] "></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CTASection;
