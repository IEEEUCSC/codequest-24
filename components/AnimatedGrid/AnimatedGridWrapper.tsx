"use client";

import React from "react";
import { AnimatedGrid } from "./AnimatedGrid/AnimatedGrid";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const AnimatedGridWrapper = () => {
  const isDesktop = useMediaQuery("(min-width: 768px");
  return (
    <div className="fixed top-0 left-0 z-[1] min-h-screen w-full select-none">
      {isDesktop && (
        <AnimatedGrid
          boxSize={35}
          highlightColor="#482b2a"
          highlightBorderColor="#f1261e"
          highlightRadius={55}
        />
      )}
    </div>
  );
};

export default AnimatedGridWrapper;
