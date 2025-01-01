import Link from "next/link";

function CallToActionsButton({ forwardTo, label, icon }) {
  return (
    <Link href={forwardTo}>
      <div className="text-darkSecondary font-medium">
        <div className="flex flex-row justify-center items-center capitalize">
          <div className="py-[6px] bg-accentColor rounded-full px-5">
            {label}
          </div>
          <div className="p-[8px] bg-accentColor rounded-full drop-shadow-xl -mx-[1px]">
            {icon}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CallToActionsButton;
