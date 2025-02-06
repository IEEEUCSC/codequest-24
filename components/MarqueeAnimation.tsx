"use client";

import { useClock } from "@/hooks/useClock";
import { cn } from "@/libs/utils";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useEffect, useState } from "react";

type CarouselDirection = "horizontal" | "vertical";
type ItemGapSize = "small" | "medium" | "large" | "xlarge";
type LoopSpeedVariant = "slow" | "medium" | "fast";

interface InfiniteCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  loopSpeed?: LoopSpeedVariant;
  children: React.ReactNode;
  className?: string;
  direction?: CarouselDirection;
  itemGap?: ItemGapSize;
  reverse?: boolean;
  hoverStop?: boolean;
  isScroll?: boolean;
}

export default function MarqueeAnimation({
  children,
  className,
  loopSpeed = "medium",
  direction = "horizontal",
  itemGap = "medium",
  reverse = false,
  hoverStop = false,
  isScroll = false,
  ...props
}: InfiniteCarouselProps) {
  const durationMapping: Record<LoopSpeedVariant, number> = {
    slow: 144000,
    medium: 22000,
    fast: 6000,
  };

  const actualDuration = durationMapping[loopSpeed];

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [isHover, setIsHover] = useState<boolean>(false);
  const [activeDirection, setActiveDirection] = useState<boolean>(false);

  const clock = useClock({
    defaultValue: Date.now(),
    reverse: isScroll ? activeDirection : reverse,
    speed: hoverStop ? (isHover ? 0 : 1) : 1,
  }).value;

  const progress = useTransform(
    clock,
    (time) => (time % actualDuration) / actualDuration,
  );
  const percentage = useTransform(progress, (t) => t * 100);
  const translateX = useMotionTemplate`-${percentage}%`;
  const translateY = useMotionTemplate`-${percentage}%`;

  const animateValue =
    direction === "horizontal" ? { translateX } : { translateY };

  const marginClasses = {
    small: direction === "horizontal" ? "*:ml-2" : "*:mt-2",
    medium: direction === "horizontal" ? "*:ml-4" : "*:mt-4",
    large: direction === "horizontal" ? "*:ml-8" : "*:mt-8",
    xlarge: direction === "horizontal" ? "*:ml-16" : "*:mt-16",
  };

  useEffect(() => {
    return velocityFactor.on("change", (value) => {
      if (value < 0) {
        setActiveDirection(true);
      } else if (value > 0) {
        setActiveDirection(false);
      }
    });
  }, [velocityFactor]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div
        {...props}
        className={cn("relative w-max overflow-hidden", className)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <motion.div
          style={animateValue}
          className={"relative flex h-full w-max"}
        >
          <div
            className={cn(
              "flex",
              direction === "horizontal"
                ? "flex-row"
                : "flex-col justify-evenly",
              marginClasses[itemGap],
            )}
          >
            {children}
          </div>
          <div
            className={cn(
              "absolute flex h-full w-full",
              direction === "horizontal"
                ? "left-full top-0 flex-row"
                : "left-0 top-full flex-col justify-evenly",
              marginClasses[itemGap],
            )}
          >
            {children}
          </div>
        </motion.div>
      </div>
    )
  );
}
