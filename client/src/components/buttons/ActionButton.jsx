// import Link from "next/link";
import Link from "next/link";
import AnimatedLetter from "../animations/AnimatedLetter";

function ActionButton({
  forwardTo,
  label,
  labelSize,
  labelColor,
  labelHoverColor = "",
  borderColor,
  bgColor,
  iconColor,
  iconSize,
  icon,
  paddingX = "px-5",
  paddingY = "py-3",
}) {
  return (
    <div className="inline-flex group">
      <Link href={forwardTo} className="">
        <div className="inline-flex">
          {/* Text Container */}
          <div
            className={`relative ${paddingX} ${paddingY} border-2 overflow-hidden ${borderColor}`}
          >
            {/* Label Text */}
            <h4
              className={`relative z-10 block transition-colors duration-500 ${labelColor} ${labelSize} capitalize whitespace-nowrap pt-1`}
            >
              <AnimatedLetter text={label} hoverText={labelHoverColor} />
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
        className={`h-full aspect-square flex justify-center items-center ${iconSize} transition-colors duration-[350ms] ease-in-out  ${bgColor} ${iconColor}`}
      >
        {icon}
      </div>
    </div>
  );
}

export default ActionButton;
