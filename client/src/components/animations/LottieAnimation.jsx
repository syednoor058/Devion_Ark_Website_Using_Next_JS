"use client";
import dynamic from "next/dynamic";
// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function LottieAnimation({ animationFile }) {
  return (
    <Lottie
      style={{ background: "transparent" }}
      animationData={animationFile}
      loop
      autoplay
    />
  );
}

export default LottieAnimation;
