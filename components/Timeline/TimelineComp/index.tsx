"use client";

import { useState } from "react";
import { motion } from "motion/react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { TimelineItem } from "@/libs/types";

interface TimelineProps {
  items: TimelineItem[];
}

export function TimelineComp({ items }: TimelineProps) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const desktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="top-element flex w-full flex-col gap-y-4 lg:flex-row lg:gap-[2px] xl:gap-2">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`timeline-card-bg top-element min-h-[180px] flex-1 rounded-xl border border-gray-600 p-4 text-white transition-all duration-300 ease-in-out hover:cursor-pointer lg:min-h-[320px] lg:p-2 xl:min-h-[320px] xl:max-w-[480px] xl:min-w-[180px] xl:rounded-3xl xl:p-4 2xl:min-w-[210px] 2xl:p-6 ${expandedIndex === index ? "flex-[3]" : "flex-1"}`}
          onMouseEnter={() => setExpandedIndex(index)}
          onMouseLeave={() => setExpandedIndex(0)}
          style={
            desktop
              ? expandedIndex === index
                ? { filter: "drop-shadow(0 0 25px var(--color-primary-400))" }
                : undefined
              : undefined
          }
        >
          <div className="flex h-full flex-col">
            <div className="font-generalSans flex flex-col font-bold">
              <span className="text-4xl sm:text-5xl md:text-[32px] xl:text-5xl">
                {item.date.day}
              </span>
              <span className="text-4xl sm:text-5xl md:text-[32px] xl:text-5xl">
                {item.date.month}
              </span>
            </div>

            <div
              className={`mb-4 text-lg transition-opacity duration-300 sm:text-xl md:text-xl lg:mt-4 lg:mb-2 lg:text-2xl`}
            >
              <div className="overflow-hidden">
                {desktop ? (
                  expandedIndex === index && (
                    <motion.div
                      initial={{ display: "none", y: 10, opacity: 0 }}
                      animate={
                        expandedIndex === index
                          ? { display: "block", y: 0, opacity: 1 }
                          : {}
                      }
                      transition={{
                        delay: 0.15,
                        type: "tween",
                        ease: "easeIn",
                      }}
                    >
                      <h3 className="font-semibold">{item.header}</h3>
                      <p className="text-sm text-gray-400 lg:mb-2 xl:mb-4 xl:text-base">
                        {item.content}
                      </p>
                    </motion.div>
                  )
                ) : (
                  <>
                    <h3 className="font-semibold">{item.header}</h3>
                    <p className="text-sm text-gray-400 lg:mb-2 xl:mb-4 xl:text-base">
                      {item.content}
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="font-consola mt-auto text-lg text-gray-400 lg:text-2xl">
              {item.time}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
