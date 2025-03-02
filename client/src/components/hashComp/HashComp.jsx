"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function HashComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollToSection = (hash, attempts = 0) => {
      const element = document.getElementById(hash);
      if (element) {
        // Calculate position accounting for any fixed headers
        const headerHeight =
          document.querySelector("header")?.offsetHeight || 0;
        const offset = element.offsetTop - headerHeight;

        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      } else if (attempts < 5) {
        // Retry after short delay if element not found
        setTimeout(() => scrollToSection(hash, attempts + 1), 100);
      }
    };

    const handleHash = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        scrollToSection(hash);
      }
    };

    // Initial check with delay to ensure DOM is ready
    setTimeout(handleHash, 200);

    // Listen for manual URL hash changes
    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener("hashchange", handleHash);
    };
  }, [pathname, searchParams]); // Add searchParams to dependency array

  return null;
}
