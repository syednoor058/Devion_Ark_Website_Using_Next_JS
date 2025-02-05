// import Link from "next/link";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

function ActionButton({
  forwardTo,
  label,
  labelSize,
  labelColor,
  labelHoverColor,
  borderColor,
  bgColor,
  iconColor,
  iconSize,
}) {
  return (
    <div className="inline-flex group">
      <Link href={forwardTo} className="">
        <div className="inline-flex">
          {/* Text Container */}
          <div
            className={`relative px-5 py-3 border-l-2 border-y-2 overflow-hidden ${borderColor}`}
          >
            {/* Label Text */}
            <h4
              className={`relative z-10 block transition-colors duration-500 ${labelColor} group-hover:${labelHoverColor} ${labelSize} capitalize`}
            >
              {label}
            </h4>
            {/* Background Hover Effect */}
            <div
              className={`absolute inset-0 ${bgColor} translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0`}
            ></div>
          </div>
        </div>
      </Link>
      {/* Icon Container */}
      <div
        className={`h-full aspect-square flex justify-center items-center ${iconSize} transition-colors duration-500 ${bgColor} ${iconColor}`}
      >
        <LuArrowUpRight />
      </div>
    </div>
  );
}

export default ActionButton;
