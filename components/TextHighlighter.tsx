"use client";

import { motion, useInView } from "motion/react";
import React from "react";

interface TextHighlighterProps {
  children: React.ReactNode;
  color?: string;
}

export const TextHighlighter: React.FC<TextHighlighterProps> = ({
  children,
  color = "var(--color-primary-400)",
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="relative inline-block">
      <motion.div
        className="absolute inset-0 z-0 -left-0.5"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          backgroundColor: color,
          originX: 0,
        }}
      />
      <span className="relative z-10">{children}</span>
    </div>
  );
};
