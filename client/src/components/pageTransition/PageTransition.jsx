"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

function PageTransition({ children }) {
  const pathname = usePathname();
  const variants = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: 1 }, // Added transition
    },
    exit: {
      opacity: 0, // Changed from 1 to 0
      transition: { duration: 1 },
    },
  };

  const slideVariants = {
    initial: { top: 0 },
    enter: {
      top: "100vh",
      transition: {
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      }, // Wait for content fade
    },
    exit: {
      top: 0,
      transition: {
        duration: 1,
        ease: [0.87, 0, 0.13, 1], // Better easing
      },
    },
  };

  return (
    <motion.div key={pathname}>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={slideVariants}
        className="w-full h-screen fixed top-0 left-0 bg-red-500 z-[99999999] origin-bottom"
      />

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default PageTransition;
