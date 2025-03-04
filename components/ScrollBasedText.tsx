"use client";
import { cn } from "@/libs/utils";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

interface ScrollBaseText {
  children: string;
  className?: string;
  startOffset?: number;
  endOffset?: number;
}

const ScrollBaseText = ({
  children,
  className,
  startOffset = 0.95,
  endOffset = 0.7,
}: ScrollBaseText) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${startOffset}`, `end ${endOffset}`],
  });

  const words = children.split(" ");
  return (
    <p
      ref={ref}
      className={cn(
        "relative flex max-w-[1080px] flex-wrap justify-center text-center",
        className,
      )}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={`word-${i}`} range={[start, end]} value={scrollYProgress}>
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
  range: number[];
  value: MotionValue;
}

const Word = ({ children, range, value }: WordProps) => {
  const y = useTransform(value, range, [200, 0]);
  const rotate = useTransform(value, range, [-20, 0]);

  return (
    <span className="overflow-clip">
      <motion.span
        className="relative mr-3 inline-block"
        style={{ y, rotateX: rotate }}
        transition={{ duration: 0.25, ease: "easeIn" }}
      >
        {children}
      </motion.span>
    </span>
  );
};
