"use client";

import { motion } from "motion/react";

// Soft "ease-out-expo"-style curve used for every entrance animation
export const EASE = [0.22, 1, 0.36, 1];

const VIEWPORT = { once: true, amount: 0.15 };

/**
 * Fades and slides its children up the first time they scroll into view.
 * Content above the fold animates straight away on page load.
 */
export function Reveal({ children, className, delay = 0, y = 24 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Container that reveals its <RevealItem> children one after another.
 * Use it as the grid/list element itself so the layout classes stay intact.
 */
export function RevealGroup({ children, className, stagger = 0.08, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

// Defaults to a one-cell grid so a wrapped card still fills its grid cell
export function RevealItem({ children, className = "grid" }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}
