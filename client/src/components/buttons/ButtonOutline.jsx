import Link from "next/link";
import TextAnimation from "../animations/TextAnimation";

function ButtonOutline({
  label,
  forwardTo = "",
  paddingX = "ps-6 pe-4",
  paddingY = "py-3",
  textStyle = "font-normal text-accentColor",
  hoverText = "",
  borderColor = "border-accentColor",
  fontGap = "gap-3",
  icon,
}) {
  return (
    <Link
      href={forwardTo}
      className={`inline-block ${paddingX} ${paddingY} ${textStyle} border ${borderColor} duration-[350ms] ease-in-out transition-colors group overflow-hidden relative rounded-lg hover:shadow-[0_5px_10px_rgb(103,61,229,0.7)]`}
    >
      <div
        className={`relative z-[5] flex flex-row ${fontGap} items-center whitespace-nowrap`}
      >
        <span>
          <TextAnimation text={label} hoverText={hoverText} />
        </span>
        <span>{icon}</span>
      </div>
    </Link>
  );
}

export default ButtonOutline;
