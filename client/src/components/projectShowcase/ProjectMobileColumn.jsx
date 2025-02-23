import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

function ProjectMobileColumn({
  caption,
  img,
  title,
  forward = "",
  projectNum,
}) {
  return (
    <div className="w-full h-screen relative border-b border-black px-4 py-5">
      <div className="w-full h-full absolute top-0 left-0 z-[1]">
        <div className="w-full h-full overflow-hidden relative z-[1]">
          <Image
            placeholder="blur"
            src={img}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="h-full flex flex-col justify-between items-center">
        <div
          className={`w-full text-base text-darkSecondary z-[2] text-center`}
        >
          {caption}
        </div>
        <div className="w-full z-[2] flex flex-col gap-7 justify-center items-center uppercase font-oswald">
          <h2
            className={`font-normal text-5xl  text-darkSecondary text-center duration-500`}
          >
            {title}
          </h2>
        </div>

        <div className={`z-[2] flex justify-center items-center`}>
          <Link href={forward} className={``}>
            <FiArrowUpRight
              className={`text-6xl text-darkSecondary  rotate-45  transition duration-[350ms] group-hover:rotate-0`}
            />
          </Link>
        </div>
        <div className="w-full text-darkSecondary text-[250px] font-semibold z-[2] leading-none text-center flex items-end justify-center font-baumans">
          {projectNum}
        </div>
      </div>
    </div>
  );
}

export default ProjectMobileColumn;
