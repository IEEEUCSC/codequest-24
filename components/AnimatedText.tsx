"use client";

import React, { useState } from "react";
import { motion, Variants } from "motion/react";

import { cn } from "@/libs/utils";
import useTextSplit from "@/hooks/useTextSplit";
import { AnimatedTextProps, CharacterVariants, PresetType } from "@/libs/types";

const defaultCharacterVariants: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: "-100%",
  },
};

const presetVariants: Record<PresetType, CharacterVariants> = {
  slideUp: {
    character: {
      initial: {
        y: 0,
      },
      animate: {
        y: "-160%",
      },
    },
  },
  slideDown: {
    character: {
      initial: {
        y: 0,
      },
      animate: {
        y: "105%",
      },
    },
  },
};

const presetClasses: Record<PresetType, string> = {
  slideUp: "",
  slideDown: " -top-full",
};

const AnimatedText = ({
  text,
  type = "characters",
  textClassName,
  variants,
  preset = "slideUp",
  cloneTextColor = "text-red-400",
  duration = 0.4,
  style,
}: AnimatedTextProps) => {
  const splitText = useTextSplit(text, {
    splitBy: type === "characters" ? "characters" : "words",
    preserveWhitespace: type === "words" ? true : true,
  });
  const [isHover, setIsHover] = useState(false);

  // Select appropriate variants: either preset or passed variants
  const selectedVariants = preset
    ? presetVariants[preset]
    : { character: defaultCharacterVariants };
  const characterVariant = variants?.character || selectedVariants.character;

  const presetClass = presetClasses[preset];

  return (
    <div
      className={cn("relative h-fit overflow-hidden", textClassName)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {preset === "slideDown" && (
        <CloneText
          splitText={splitText}
          characterVariant={characterVariant}
          isHover={isHover}
          presetClass={presetClass}
          cloneTextColor={cloneTextColor}
        />
      )}
      <motion.p
        className="relative h-full py-1 leading-[0.8] select-none"
        style={style}
      >
        {splitText.map((char, index) => (
          <motion.span
            key={index}
            variants={characterVariant}
            animate={isHover === true ? "animate" : "initial"}
            className="inline-block"
            transition={{
              delay: index * 0.025,
              type: "tween",
              duration: duration,
              ease: [0.6, 0.2, 0.18, 1],
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>

      {preset === "slideUp" && (
        <CloneText
          splitText={splitText}
          characterVariant={characterVariant}
          isHover={isHover}
          cloneTextColor={cloneTextColor}
          duration={duration}
        />
      )}
    </div>
  );
};

export default AnimatedText;

type CloneTextProps = {
  splitText: string[];
  characterVariant: Variants;
  isHover: boolean;
  presetClass?: string;
  cloneTextColor?: string;
  duration?: number;
  style?: React.CSSProperties;
};

const CloneText = ({
  splitText,
  characterVariant,
  isHover,
  presetClass,
  cloneTextColor = "text-red-400",
  duration = 0.4,
  style,
}: CloneTextProps) => {
  return (
    <motion.p
      className={cn("absolute h-full py-1 leading-[0.8]", presetClass)}
      style={style}
    >
      {splitText.map((char, index) => (
        <motion.span
          key={index}
          variants={characterVariant}
          animate={isHover === true ? "animate" : "initial"}
          className={cn("inline-block", cloneTextColor)}
          transition={{
            delay: index * 0.025,
            type: "tween",
            duration: duration,
            ease: [0.6, 0.2, 0.18, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.p>
  );
};
