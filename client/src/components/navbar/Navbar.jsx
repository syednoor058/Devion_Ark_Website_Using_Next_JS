import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import logo from "../../../public/dark_mode_logo.png";
import CallToActionsButton from "../buttons/CallToActionsButton";

function Navbar() {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Blog", path: "/blog" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <div className="flex flex-row gap-5 justify-between items-center px-20 sticky top-0 z-[1000] py-2">
      <div className="">
        <Image
          src={logo}
          alt="devion_ark_logo"
          className="w-auto h-14 object-fill"
        />
      </div>
      <div className="">
        <div className="flex flex-row items-center justify-end gap-10">
          {navLinks.map((navLink, index) => (
            <Link href={navLink.path} key={index}>
              {navLink.label}
            </Link>
          ))}
          <div className="ml-7">
            <CallToActionsButton
              forwardTo="/"
              label="Get a quote"
              icon={<GoArrowUpRight />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
