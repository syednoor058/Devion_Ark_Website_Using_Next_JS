import { CgArrowTopRight } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";

function CTASection() {
  return (
    <div className="w-screen bg-accentColor text-darkSecondary">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[50%] text-darkPrimary font-bold text-[7vw] lg:text-[5.5vw] pt-5 pb-5 lg:pt-32 lg:pb-16 uppercase px-5 lg:px-10 border-b lg:border-b-0 lg:border-r border-darkPrimary font-oswald leading-none">
          <h3>
            Do you have a <span className="text-lightPrimary">project</span> in
            mind?
          </h3>
        </div>
        <div className="w-full lg:w-[20%]  flex flex-row lg:flex-col">
          <div className="w-[50%] py-5 lg:py-0 lg:w-full h-full lg:-[50%] flex justify-center items-center px-5 lg:px-10  text-center text-sm lg:text-xl border-r lg:border-r-0 lg:border-b border-darkPrimary hover:bg-darkPrimary hover:text-lightPrimary duration-500 transform transition ease-in-out uppercase cursor-pointer relative">
            Get in Touch
            <div className="w-[15%] lg:w-[20%] aspect-square absolute bottom-0 right-0 bg-lightPrimary text-darkPrimary flex justify-center items-center">
              <CgArrowTopRight />
            </div>
          </div>
          <div className="w-[50%] py-5 lg:py-0 lg:w-full h-full lg:-[50%] flex justify-center items-center px-5 lg:px-10  text-center text-sm lg:text-xl hover:bg-darkPrimary hover:text-lightPrimary duration-500 transform transition ease-in-out uppercase cursor-pointer relative">
            LinkedIn
            <div className="w-[15%] lg:w-[20%] aspect-square absolute bottom-0 right-0 bg-lightPrimary text-darkPrimary flex justify-center items-center">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[30%] uppercase font-semibold text-[9vw] lg:text-[4vw] px-5 flex justify-center items-center text-center border-t lg:border-t-0 lg:border-l border-darkPrimary pt-5 pb-5 lg:pt-0 lg:pb-0 leading-none">
          Let&apos;s &nbsp;
          <span className="text-lightPrimary ps-5 lg:ps-3">talk</span>!
        </div>
      </div>
    </div>
  );
}

export default CTASection;
