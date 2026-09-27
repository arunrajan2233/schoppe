"use client";

import { motion, MotionConfig } from "motion/react";

// Remounts on every navigation, so each page fades in when it loads.
// reducedMotion="user" turns movement off for visitors who ask for less motion.
export default function Template({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
