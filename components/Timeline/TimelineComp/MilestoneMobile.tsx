import clsx from "clsx/lite";

import styles from "./MilestoneMobile.module.css";
import AnimatedCircleIcon from "./AnimatedCircle";
import { motion } from "motion/react";
import { TimelineItem } from "@/libs/types";
import Glassmorphism from "@/components/Glassmorphism";

// Define the Milestone type if not imported
export type Milestone = {
  title: string;
  description: string;
};

type Props = TimelineItem & {
  mode: "active" | "surpassed" | "inactive";
};

export default function MilestoneMobile({
  date,
  header,
  content,
  time,
  mode,
}: Props) {
  return (
    <motion.div className={clsx(styles.card, "flex gap-4")}>
      <AnimatedCircleIcon
        strokeWidth={3}
        data-value="hexagon"
        className="absolute inset-y-1/2 left-[-3.24rem] size-5"
        mode={mode}
      />
      <motion.div
        variants={timelineItemVariant}
        initial="initial"
        whileInView={
          mode === "active" || mode === "surpassed" ? "animate" : " "
        }
        viewport={{ once: true }}
        className="w-full"
      >
        <Glassmorphism className="w-full overflow-clip rounded-xl border-0 p-4">
          <div className="bg-primary-300/60 absolute top-0 left-0 h-full w-full mask-radial-[100%_100%] mask-radial-from-60% mask-radial-to-100% mask-radial-at-top-left" />
          <div className="relative flex h-full flex-col">
            <div className="font-generalSans flex font-bold">
              <span className="text-4xl sm:text-5xl md:text-[32px] xl:text-5xl">
                {date.day} {date.month}
              </span>
            </div>
            <div
              className={`mb-4 text-lg transition-opacity duration-300 sm:text-xl md:text-xl lg:mt-4 lg:mb-2 lg:text-2xl`}
            >
              <div className="overflow-hidden">
                <motion.div>
                  <h3 className="font-semibold">{header}</h3>
                  <p className="text-sm text-gray-400 lg:mb-2 xl:mb-4 xl:text-base">
                    {content}
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="font-consola mt-auto text-lg text-gray-400 lg:text-2xl">
              {time}
            </div>
          </div>
        </Glassmorphism>
      </motion.div>
    </motion.div>
  );
}

const timelineItemVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
