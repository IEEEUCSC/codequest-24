"use client";

import { cn } from "@/libs/utils";
import {
  HTMLMotionProps,
  motion,
  stagger,
  useAnimate,
  useInView,
} from "motion/react";
import { useEffect, useMemo } from "react";
import useSplitText from "@/hooks/useTextSplit";

interface TypewriterEffectProps extends HTMLMotionProps<"div"> {
  text: string;
  className?: string;
  textClassName?: string;
  animationDelay?: number;
  startAnimationDelay?: number;
}

export const TypewriterEffect = ({
  text,
  className,
  textClassName,
  animationDelay = 0.1,
  startAnimationDelay = 0,
  ...props
}: TypewriterEffectProps) => {
  const wordsArray = useSplitText(text, {splitBy: "words", preserveWhitespace: true});
  
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        animate(
          "span",
          {
            display: "inline-block",
            opacity: 1,
            width: "fit-content",
          },
          {
            duration: 0.1,
            delay: stagger(animationDelay),
            ease: "easeInOut",
          },
        );
      }, startAnimationDelay * 1000);

      return () => clearTimeout(timeout);
    }
  }, [isInView, animate, animationDelay, startAnimationDelay]);

  const renderWords = useMemo(() => {
    return (
      <motion.div ref={scope} className="inline" {...props}>
        {wordsArray.map((word, idx) => (
          <span
            key={`word-${idx}`}
            className="inline-block mr-1"
            aria-hidden="true"
          >
            {word.split("").map((char, index) => (
              <motion.span
                key={`char-${index}`}
                className={cn(
                  `hidden text-black opacity-0 dark:text-white`,
                  textClassName,
                )}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.div>
    );
  }, [wordsArray, scope, textClassName, props]);

  return (
    <div className={cn("text-center text-base", className)}>
      <span className={textClassName} aria-hidden="true">
        {" "}
      </span>
      {renderWords}
    </div>
  );
};
