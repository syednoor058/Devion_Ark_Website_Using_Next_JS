import Link from "next/link";

function ProjectMobileColumn({ caption, video, title, forward, projectNum }) {
  return (
    <div className="w-full h-screen relative text-darkPrimary border-b border-black">
      <div className="w-full h-full absolute top-0 left-0 z-[1]">
        <div className="w-full h-full overflow-hidden relative z-[1]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video} />
          </video>
        </div>
      </div>
      <div className="p-5 w-full h-full flex flex-col justify-between gap-5 ">
        <div className="w-full h-[10%] z-[5] text-base">{caption}</div>
        <div className="w-full h-[40%] text-center flex justify-center items-center z-[5] text-3xl lg:text-5xl font-oswald leading-tight font-bold">
          {title}
        </div>
        <div className="w-full h-[10%] flex justify-center items-center z-[5]">
          <Link
            href={forward}
            className="relative overflow-hidden group border-[2px] border-darkPrimary"
          >
            <div className="inline-flex">
              <span className="px-8 py-3 text-darkPrimary group-hover:text-lightPrimary duration-500 z-[2] ">
                Learn More
              </span>
              <div className="w-full h-full bg-darkPrimary absolute top-0 left-0 -translate-x-full group-hover:translate-x-0 duration-500 z-[1] "></div>
            </div>
          </Link>
        </div>
        <div className="w-full h-[40%] text-center flex justify-center items-end z-[5] text-[50vw] leading-none font-poppins">
          {projectNum}
        </div>
      </div>
    </div>
  );
}

export default ProjectMobileColumn;
