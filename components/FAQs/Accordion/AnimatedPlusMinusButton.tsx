"use client";
// import { useContext, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedPlusMinusButtonProps {
  size?: number;
  strokeColor?: string;
  isOpen?: boolean;
}
const AnimatedPlusMinusButton = ({
  strokeColor = "black",
  size = 24,
  isOpen = false,
}: AnimatedPlusMinusButtonProps) => {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 150,
  };
  return (
    <span
      role="button"
      aria-pressed="true"
      className="flex items-center justify-center"
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        {/* Horizontal line */}
        <motion.line
          x1="1"
          y1="12"
          x2="23"
          y2="12"
          stroke={strokeColor}
          strokeWidth="1"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={spring}
        />

        {/* Vertical line */}
        <motion.line
          x1="12"
          y1="1"
          x2="12"
          y2="23"
          stroke={strokeColor}
          strokeWidth="1"
          variants={{
            closed: { rotate: 0, opacity: 1 },
            open: { rotate: 90, opacity: 1 },
          }}
          transition={spring}
        />
      </motion.svg>
    </span>
  );
};

export default AnimatedPlusMinusButton;
