"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

function Template({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          y: 40,
          position: "absolute",
        }}
        transition={{ duration: 2 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default Template;
