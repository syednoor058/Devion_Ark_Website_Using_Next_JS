import Image from "next/image";
import Marquee from "react-fast-marquee";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import { CgQuote } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { FiArrowDownLeft } from "react-icons/fi";

function TestimonialCard({ image, name, position, company, review }) {
  return (
    <div className="w-[400px] aspect-video p-5 rounded text-lightSecondary  flex flex-col-reverse gap-3 overflow-hidden">
      <div className="flex flex-row-reverse gap-5 justify-between items-start">
        <div className="flex flex-row-reverse gap-5 items-center">
          <div>
            <div className="w-16 aspect-square rounded-full overflow-hidden relative">
              <Image src={image} alt={name} fill className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <div className="text-lightPrimary uppercase font-medium leading-none">
              {name}
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs font-light leading-none text-end">
                {company}
              </div>
              <div className="text-xs font-light leading-none text-end">
                {position}
              </div>
            </div>
          </div>
        </div>
        <div className="text-6xl">
          <BiSolidQuoteLeft />
        </div>
      </div>
      <div className="flex flex-row gap-[2px] text-yellow-500">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="text-sm font-light leading-tight">{review}</div>
    </div>
  );
}

function TestimonialCard2({ image, name, position, company, review }) {
  return (
    <div className="w-[400px] aspect-video p-5 rounded text-lightSecondary flex flex-col-reverse gap-3 overflow-hidden">
      <div className="flex flex-row gap-5 justify-between items-start">
        <div className="flex flex-row gap-5 items-center">
          <div>
            <div className="w-16 aspect-square rounded-full overflow-hidden relative">
              <Image src={image} alt={name} fill className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-lightPrimary uppercase font-medium leading-none">
              {name}
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs font-light leading-none">{company}</div>
              <div className="text-xs font-light leading-none">{position}</div>
            </div>
          </div>
        </div>
        <div className="text-6xl">
          <BiSolidQuoteRight />
        </div>
      </div>
      <div className="w-full flex flex-row gap-[2px] text-yellow-500 justify-end">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="text-sm font-light leading-tight text-end">{review}</div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="w-full min-h-[15vh] pb-0 lg:pb-10 bg-black overflow-x-hidden">
      <div className="w-full h-full flex flex-col lg:gap-20 justify-between">
        <div className="w-full h-full ps-5 lg:ps-20 flex flex-row  relative border-b border-gray-700">
          {/* <div className="w-[1px] h-full bg-darkSecondary"></div> */}
          <h2 className="pt-16 lg:pt-40 text-nowrap font-bold text-accentColor font-inter text-[14vw] lg:text-[14.5vw] leading-none text-center border-l-[1px] border-r-[1px] border-gray-700 pb-5 lg:pb-0">
            Clients talk
          </h2>
          {/* <div className="w-[1px] h-full bg-darkSecondary"></div> */}

          <div className="w-full h-full flex items-start">
            <div className="w-full aspect-square bg-lightPrimary text-darkPrimary text-[7vw] lg:text-[5vw] flex justify-center items-center">
              <FiArrowDownLeft />
            </div>
          </div>
        </div>
        <div className="w-full hidden lg:flex flex-col gap-5">
          <div className="w-full">
            <Marquee autoFill={true} pauseOnClick={true}>
              <div className="flex mx-[10px]">
                <TestimonialCard
                  image="/testimonials/mehedi.webp"
                  name="Syed Mustafa Mehedi"
                  position="Founder & CEO"
                  company="QAHAF"
                  review="With their SEO expertise and digital marketing campaigns, we saw a 200% increase in website traffic within the first quarter. They transformed our online presence and positioned us as an authority in our industry."
                />
              </div>
              <div className="flex mx-[10px]">
                <TestimonialCard
                  image="/testimonials/farhan_masum.webp"
                  name="Kazi Farhan Masum"
                  position="Founder & CEO"
                  company="PuppetBrush Digital Solutions"
                  review="Our business grew faster than we imagined after partnering with this agency. They showed obedient behavior and a work friendly attitude. They were always willing to offer their assistance. I wish them every success in their future endeavors."
                />
              </div>
              <div className="flex mx-[10px]">
                <TestimonialCard
                  image="/testimonials/rakib.webp"
                  name="Rakib Shikdar"
                  position="Founder & CEO"
                  company="Kick-off The Jersey Galleria"
                  review="They developed an E-commerce web application for my jersey business! The most loveble thing is they actually can understand what clients want and their requirments! Totally satisfied with their works! Their services are highly recommended!"
                />
              </div>
              <div className="flex mx-[10px]">
                <TestimonialCard
                  image="/testimonials/azizul.webp"
                  name="MD Azizul Hoque"
                  position="Founder & CEO"
                  company="InterAiD"
                  review="We relied on them for software development, and they exceeded expectations with flawless, reliable solutions. Their rigorous testing ensured a smooth launch with zero downtime—simply outstanding and amazing!"
                />
              </div>
            </Marquee>
          </div>
          <div className="w-full">
            <Marquee autoFill={true} pauseOnClick={true} direction="right">
              <div className="flex mx-[10px]">
                <TestimonialCard2
                  image="/testimonials/mehedi.webp"
                  name="Syed Mustafa Mehedi"
                  position="Founder & CEO"
                  company="QAHAF"
                  review="With their SEO expertise and digital marketing campaigns, we saw a 200% increase in website traffic within the first quarter. They transformed our online presence and positioned us as an authority in our industry."
                />
              </div>
              <div className="flex mx-[10px]">
                <TestimonialCard2
                  image="/testimonials/farhan_masum.webp"
                  name="Kazi Farhan Masum"
                  position="Founder & CEO"
                  company="PuppetBrush Digital Solutions"
                  review="Our business grew faster than we imagined after partnering with this agency. They showed obedient behavior and a work friendly attitude. They were always willing to offer their assistance. I wish them every success in their future endeavors."
                />
              </div>
              <div className="flex mx-[10px]">
                <TestimonialCard2
                  image="/testimonials/rakib.webp"
                  name="Rakib Shikdar"
                  position="Founder & CEO"
                  company="Kick-off The Jersey Galleria"
                  review="They developed an E-commerce web application for my jersey business! The most loveble thing is they actually can understand what clients want and their requirments! Totally satisfied with their works! Their services are highly recommended!"
                />
              </div>
              <div className="flex mx-[10px]">
                <TestimonialCard2
                  image="/testimonials/azizul.webp"
                  name="MD Azizul Hoque"
                  position="Founder & CEO"
                  company="InterAiD"
                  review="We relied on them for software development, and they exceeded expectations with flawless, reliable solutions. Their rigorous testing ensured a smooth launch with zero downtime—simply outstanding and amazing!"
                />
              </div>
            </Marquee>
          </div>
        </div>
        <div className="flex lg:hidden flex-col">
          <div className="border-b border-gray-700 flex flex-col gap-5 px-5 py-5">
            <div className="flex flex-row gap-2">
              <p className=" font-light leading-tight">
                With their SEO expertise and digital marketing campaigns, we saw
                a 200% increase in website traffic within the first quarter.
                They transformed our online presence and positioned us as an
                authority in our industry.
              </p>
              <div className="text-2xl text-lightPrimary">
                <CgQuote />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <div className="flex flex-col gap-2 items-end">
                <div className="uppercase text-lightPrimary leading-none">
                  Syed Mustafa Mehedi
                </div>
                <div className="flex flex-col gap-1 text-xs font-light leading-none text-end">
                  <div>QAHAF</div>
                  <div>Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-700 flex flex-col gap-5 px-5 py-5">
            <div className="flex flex-row-reverse items-start gap-2">
              <p className="font-light leading-tight text-end">
                Our business grew faster than we imagined after partnering with
                this agency. They showed obedient behavior and a work friendly
                attitude. They were always willing to offer their assistance. I
                wish them every success in their future endeavors.
              </p>
              <div className="text-2xl text-lightPrimary ">
                <CgQuote />
              </div>
            </div>
            <div className="w-full flex justify-start">
              <div className="flex flex-col gap-2">
                <div className="uppercase text-lightPrimary leading-none">
                  Kazi Farhan Masum
                </div>
                <div className="flex flex-col gap-1 text-xs font-light leading-none">
                  <div>PuppetBrush</div>
                  <div>Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-700 flex flex-col gap-5 px-5 py-5">
            <div className="flex flex-row gap-2">
              <p className="font-light leading-tight">
                They developed an E-commerce web application for my jersey
                business! The most loveble thing is they actually can understand
                what clients want and their requirments! Totally satisfied with
                their works! Their services are highly recommended!
              </p>
              <div className="text-2xl text-lightPrimary">
                <CgQuote />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <div className="flex flex-col gap-2 items-end">
                <div className="uppercase text-lightPrimary leading-none">
                  Rakib Shikder
                </div>
                <div className="flex flex-col gap-1 text-xs font-light leading-none text-end">
                  <div>Kick-off - The Jersey Galleria</div>
                  <div>Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-700 flex flex-col gap-5 px-5 py-5">
            <div className="flex flex-row-reverse items-start gap-2">
              <p className="font-light leading-tight text-end">
                We relied on them for software development, and they exceeded
                expectations with flawless, reliable solutions. Their rigorous
                testing ensured a smooth launch with zero downtime—simply
                outstanding and amazing!
              </p>
              <div className="text-2xl text-lightPrimary  rotate-">
                <CgQuote />
              </div>
            </div>
            <div className="w-full flex justify-start">
              <div className="flex flex-col gap-2">
                <div className="uppercase text-lightPrimary leading-none">
                  Md. Azizul Hoque
                </div>
                <div className="flex flex-col gap-1 text-xs font-light leading-none">
                  <div>InterAiD</div>
                  <div>Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
