"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

import MilestoneMobile from "./MilestoneMobile";
import { TimelineItem } from "@/libs/types";

type Props = { data: TimelineItem[] };

export default function MobileArea({ data }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "start 0%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);

  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const wrapper = ref.current;
    const progressContainer = progressRef.current;
    const hexagons = wrapper?.querySelectorAll(
      "svg[data-value='hexagon']",
    ) as NodeListOf<SVGSVGElement>;

    if (!wrapper || !hexagons || !progressContainer) return;

    const hexagonAbsolutes = Array.from(hexagons).map((x) => {
      const { top } = x.getBoundingClientRect();
      return window.scrollY + top;
    });

    const cancel = scrollYProgress.on("change", () => {
      const { height, top } = progressContainer.getBoundingClientRect();
      const endingNode = window.scrollY + top + height;

      const index = hexagonAbsolutes.findIndex((y) => y > endingNode);

      if (index === -1) setActiveIndex(data.length);
      else setActiveIndex(index - 1);
    });

    return () => {
      cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className="relative grid grid-cols-[1.75rem_1fr] py-16">
      <div className="relative flex flex-col justify-start">
        <div
          aria-hidden
          className="from-black-950 absolute inset-x-0 top-0 h-16 bg-gradient-to-b"
        />

        <motion.div
          ref={progressRef}
          className="to-primary-400 mt-0.5 ml-px h-full w-1 rounded-xl bg-gradient-to-b from-[-10%]"
          style={{ height: height }}
        />

        <div
          aria-hidden
          className="from-black-950 absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t"
        />
      </div>

      <div className="flex flex-col gap-4">
        {data.map((item, i) => (
          <MilestoneMobile
            key={i}
            date={item.date}
            header={item.header}
            content={item.content}
            time={item.time}
            mode={resolveMilestoneStatus(activeIndex, i)}
          />
        ))}
      </div>
    </div>
  );
}

function resolveMilestoneStatus(
  activeIndex: number,
  i: number,
): "active" | "surpassed" | "inactive" {
  if (activeIndex === i) {
    return "active";
  }

  if (activeIndex > i) {
    return "surpassed";
  }

  return "inactive";
}
