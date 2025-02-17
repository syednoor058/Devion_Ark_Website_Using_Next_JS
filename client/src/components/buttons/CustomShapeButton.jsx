import Link from "next/link";
import AnimatedLetter from "../animations/AnimatedLetter";

function CustomShapeButton({
  label,
  forwardTo = "",
  bend = "16px",
  paddingX = "px-8",
  paddingY = "py-4",
  textStyle = "text-lg font-normal text-lightPrimary",
  hoverText = "text-darkPrimary",
  backgroundColor = "bg-darkPrimary",
  hoverBgColor = "bg-lightPrimary",
  fontGap = "gap-4",
  icon,
}) {
  return (
    <Link
      href={forwardTo}
      className={`inline-block ${paddingX} ${paddingY} ${textStyle} ${backgroundColor} duration-[350ms] ease-in-out transition-colors group overflow-hidden relative`}
      style={{
        clipPath: `polygon(${bend} 0%, calc(100% - ${bend}) 0%, 100% ${bend}, 100% 100%, calc(100% - ${bend}) 100%, ${bend} 100%, 0px 100%, 0px 0px)`,
      }}
    >
      <div
        className={`relative z-[5] flex flex-row-reverse ${fontGap} items-center whitespace-nowrap`}
      >
        <span>
          <AnimatedLetter text={label} hoverText={hoverText} />
        </span>
        <span>{icon}</span>
      </div>
      <div
        className={`w-full h-full absolute left-0 top-0 -translate-x-full group-hover:translate-x-0 transition duration-[350ms] ease-in-out ${hoverBgColor} z-[1]`}
      ></div>
    </Link>
  );
}

export default CustomShapeButton;
