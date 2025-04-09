import { motion, type SVGMotionProps } from "motion/react";
import type { PropsWithoutRef } from "react";

export default function AnimatedCircleIcon({
  strokeWidth,
  mode,
  ...props
}: PropsWithoutRef<SVGMotionProps<SVGElement>> & {
  mode: "active" | "surpassed" | "inactive";
}) {
  const variants = {
    active: { fill: "#d51414", stroke: "#d51414" },
    surpassed: { fill: "#d51414", stroke: "#d51414" },
    inactive: { fill: "black", stroke: "#FF7F1E3F" },
  };

  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={mode}
      {...props}
    >
      <motion.circle
        cx="20"
        cy="20"
        r="10"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        variants={variants}
      />
    </motion.svg>
  );
}
