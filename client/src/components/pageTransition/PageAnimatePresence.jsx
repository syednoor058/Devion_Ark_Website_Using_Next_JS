"use client";

import { AnimatePresence } from "framer-motion";

function PageAnimatePresence({ children }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}

export default PageAnimatePresence;
