import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import TextAnimation from "../animations/TextAnimation";

function CustomShapeBorderButton({
  text,
  forwardTo,
  bg,
  bg2,
  padd,
  textColor,
}) {
  return (
    <Link href={forwardTo} className="inline-block group">
      <div
        className={`flex ${bg} p-[1px] overflow-hidden`}
        style={{
          clipPath: `polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, calc(100% - 16px) 100%, 16px 100%, 0px 100%, 0px 0px)`,
        }}
      >
        <div
          className={`${padd} text-lg font-light leading-none flex flex-row gap-2 items-center ${bg2} ${textColor}`}
          style={{
            clipPath: `polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, calc(100% - 16px) 100%, 16px 100%, 0px 100%, 0px 0px)`,
          }}
        >
          <GoDotFill className="text-base" />
          <TextAnimation text={text} />
        </div>
      </div>
    </Link>
  );
}

export default CustomShapeBorderButton;
