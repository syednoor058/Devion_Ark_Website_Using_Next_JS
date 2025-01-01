import { Avatar, AvatarGroup } from "@mui/material";
import { PiArrowSquareUpRightThin } from "react-icons/pi";

function WhoWeAre() {
  return (
    <div className="px-5 sm:px-7 lg:px-10 xl:px-20 py-10 lg:py-20 bg-darkPrimary relative overflow-hidden">
      <div className="w-[95%] sm:w-[70%] lg:w-[50%] aspect-square bg-darkSecondary rounded-[100%] absolute -right-32 -bottom-32 sm:-right-36 lg:-right-60 sm:-bottom-36 lg:-bottom-60 p-20 sm:p-28 lg:p-40 z-[2]">
        <div className="w-full aspect-square rounded-[100%] bg-darkPrimary"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-7 lg:gap-10 relative z-[5]">
        <div className="w-full lg:w-[65%] flex flex-col gap-5">
          <div className="flex flex-row gap-2 items-center overflow-hidden">
            <div className="uppercase font-semibold text-sm sm:text-lg overflow-hidden">
              <span id="who-we-are" className="inline-block">
                Who We Are
              </span>
            </div>
            <div id="who-bar" className="w-[2px] h-full bg-accentColor"></div>
          </div>
          <div className="flex flex-col gap-2 uppercase font-titleFont text-lightTitleText">
            <h2 className="text-[4vw] leading-none overflow-hidden font-medium">
              <span id="who-title-1" className="inline-block">
                Empowering your Business to Reach{" "}
                <span id="who-title-3" className="inline-block font-bold">
                  New <span className="text-accentColor">heights</span>!
                </span>
              </span>
            </h2>
            <div className="w-full flex justify-start lg:justify-end">
              <div className="text-7xl sm:text-9xl font-extralight opacity-25 rotate-90 lg:rotate-0">
                <PiArrowSquareUpRightThin />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[35%] flex flex-col gap-7 lg:gap-20 justify-end">
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <AvatarGroup>
              <Avatar
                alt="Md Azizul Hoque"
                src="/testimonials/azizul.webp"
                sx={{ width: 56, height: 56 }}
              />

              <Avatar
                alt="Syed Mustafa Mehedi"
                src="/testimonials/mehedi.webp"
                sx={{
                  width: 56,
                  height: 56,
                }}
              />

              <Avatar
                alt="Rakib Shikder"
                src="/testimonials/rakib.webp"
                sx={{ width: 56, height: 56 }}
              />
              <Avatar
                alt="Kazi Farhan Masum"
                src="/testimonials/farhan_masum.webp"
                sx={{ width: 56, height: 56 }}
              />
              <Avatar sx={{ width: 56, height: 56, bgcolor: "#414141" }}>
                8+
              </Avatar>
            </AvatarGroup>
            <div className="overflow-hidden">
              <span id="who-subdesc" className="inline-block">
                We have{" "}
                <span className="font-medium underline underline-offset-4 text-lightTitleText">
                  12+ satisfied clients
                </span>{" "}
                all around the world.
              </span>
            </div>
          </div>
          <div className="text-sm sm:text-base overflow-hidden">
            <span id="who-desc" className="inline-block">
              We are more than just a service provider — we are your strategic
              partner. Our mission is to empower your business with tailored
              digital solutions that drive growth, enhance visibility, and
              maximize impact.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
