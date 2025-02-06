import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ActionButton from "../buttons/ActionButton";

function CTASection() {
  return (
    <div className="w-full h-full bg-accentColor text-darkSecondary">
      <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center gap-5 py-10 lg:py-20 px-5 lg:px-20">
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
        <div className="w-full lg:w-1/3 flex justify-end">
          <div className="w-full flex justify-center">
            <ActionButton
              forwardTo=""
              label="Book A Call"
              labelColor="text-darkPrimary group-hover:text-lightPrimary"
              bgColor="bg-darkPrimary"
              labelSize="text-base lg:text-lg"
              borderColor="border-darkPrimary"
              iconColor="text-lightPrimary"
              iconSize="text-xl lg:text-2xl"
              icon={<FaPhone />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTASection;
