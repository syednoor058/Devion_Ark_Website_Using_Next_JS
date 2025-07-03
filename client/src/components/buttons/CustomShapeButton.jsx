import Link from "next/link";
import TextAnimation from "../animations/TextAnimation";

function CustomShapeButton({
  label,
  forwardTo = "",
  bend = "16px",
  paddingX = "ps-4 pe-8",
  paddingY = "py-4",
  textStyle = "text-lg font-normal text-lightPrimary",
  hoverText = "text-lightPrimary",
  backgroundColor = "bg-darkPrimary",
  hoverBgColor = "bg-lightPrimary",
  fontGap = "gap-2",
  icon,
}) {
  return (
    <Link
      href={forwardTo}
      className={`inline-block ${paddingX} ${paddingY} ${textStyle} ${backgroundColor} duration-[350ms] ease-in-out transition-colors group overflow-hidden relative rounded-full`}
    >
      <div
        className={`relative z-[5] flex flex-row ${fontGap} items-center whitespace-nowrap uppercase`}
      >
        <span>
          <TextAnimation text={label} hoverText={hoverText} />
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
