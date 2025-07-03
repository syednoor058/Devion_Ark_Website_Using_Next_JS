"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

function Template({ children }) {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="font-poppins"
    >
      {children}
    </motion.div>
  );
}

export default Template;
