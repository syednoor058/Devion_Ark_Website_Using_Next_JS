"use client";
import CircleType from "circletype";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function CircularTextAnimation({
  text,
  radius,
  textColor = "text-lightSecondary",
  fontSize = "text-base",
}) {
  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current) {
      const circleType = new CircleType(textRef.current);
      circleType.radius(radius);
    }
  }, [radius, text]);
  return (
    <motion.div
      ref={textRef}
      animate={{ rotate: 360 }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
      className={`${textColor} ${fontSize} font-light`}
    >
      {text}
    </motion.div>
  );
}

export default CircularTextAnimation;
