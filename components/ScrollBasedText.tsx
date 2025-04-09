"use client";

import React, { useRef } from "react";
import { motion } from "motion/react";

import { cn } from "@/libs/utils";

interface ScrollBaseText extends React.HTMLAttributes<HTMLParagraphElement> {
  children: string;
  className?: string;
  startOffset?: number;
  ariaText?: string;
}

const ScrollBaseText = ({
  children,
  className,
  startOffset = 0,
  ariaText,
  ...props
}: ScrollBaseText) => {
  const ref = useRef(null);

  const words = children.split(" ");
  return (
    <p
      ref={ref}
      className={cn(
        "relative flex max-w-[1080px] flex-wrap justify-start",
        className,
      )}
      onCopy={(e) => {
        e.preventDefault();
        navigator.clipboard.writeText(ariaText as string);
        e.clipboardData.setData("text/plain", ariaText as string);
      }}
      aria-label={ariaText}
      {...props}
    >
      {words.map((word, i) => {
        return (
          <Word key={`word-${i}`} customValue={i + startOffset * 8}>
            {word as string}
          </Word>
        );
      })}
    </p>
  );
};

export default ScrollBaseText;

interface WordProps {
  children: string;
  customValue?: number;
}

const Word = ({ children, customValue }: WordProps) => {
  return (
    <span className="overflow-clip" aria-hidden="true">
      <motion.span
        className="relative mr-3 inline-block"
        variants={FadeUpVariant}
        initial="initial"
        whileInView="animate"
        custom={customValue}
        viewport={{ once: false, amount: 0.2 }}
      >
        {children}
      </motion.span>
    </span>
  );
};

const FadeUpVariant = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      delay: i * 0.01,
      ease: "easeIn",
      type: "tween",
    },
  }),
};
