import Link from "next/link";
import { useRouter } from "next/navigation";

function sleep(num) {
  return new Promise((resolve) => setTimeout(resolve, num));
}

function TransitionLink({ children, href, onNavigate }) {
  const router = useRouter();
  const handleTransition = async (e) => {
    e.preventDefault();
    const body = document.querySelector("#content-body");
    const shutter = document.querySelector("#shutter");

    // Trigger navbar close animation first
    if (typeof onNavigate === "function") {
      onNavigate(); // Call the navbar close function
      await sleep(1000); // Wait for navbar slide-up animation
    }

    body?.classList.add("page-transition");
    shutter?.classList.add("shutter-transition");
    await sleep(1000);
    router.push(href);
    await sleep(1000);
    body?.classList.remove("page-transition");
    shutter?.classList.remove("shutter-transition");
  };
  return (
    <Link href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
}

export default TransitionLink;
