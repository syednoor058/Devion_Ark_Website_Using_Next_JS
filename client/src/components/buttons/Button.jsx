import Link from "next/link";
import TextAnimation from "../animations/TextAnimation";

function Button({
  label,
  forwardTo = "",
  paddingX = "ps-6 pe-4",
  paddingY = "py-3",
  textStyle = "text-[#fff]",
  hoverText = "text-[#fff]",
  hoverBgColor1 = "accentColor",
  hoverBgColor2 = "accentColor2",
  fontGap = "gap-3",
  icon,
}) {
  return (
    <Link
      href={forwardTo}
      className={`inline-block ${paddingX} ${paddingY} ${textStyle} duration-[350ms] ease-in-out transition-all group overflow-hidden relative rounded-lg hover:shadow-[0_5px_10px_rgb(0,0,0,0.5)] bg-gradient-to-bl from-${hoverBgColor1} to-${hoverBgColor2}`}
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

export default Button;
