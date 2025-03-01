"use client";

import { usePathname } from "next/navigation";
import { FaCopy } from "react-icons/fa";

function CopyLinkButton() {
  const pathname = usePathname();
  const currentURL = `${window.location.origin}${pathname}`;
  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentURL);
    alert("Link copied to clipboard!");
  };
  return (
    <div className="flex">
      <button onClick={copyToClipboard}>
        <FaCopy className="text-lightSecondary text-xl hover:text-accentColor" />
      </button>
    </div>
  );
}

export default CopyLinkButton;
