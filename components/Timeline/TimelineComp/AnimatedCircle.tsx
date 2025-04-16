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
      width="80"
      height="80"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={mode}
      aria-hidden="true"
      {...props}
    >
      <motion.circle
        cx="45"
        cy="45"
        r="40"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        variants={variants}
      />
    </motion.svg>
  );
}
