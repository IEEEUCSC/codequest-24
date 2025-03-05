"use client";

import { useWindowSize } from "@/hooks/useWindowSize";
import React, { useMemo, useCallback } from "react";

interface AnimatedGridProps {
  boxSize?: number;
  highlightColor?: string;
  highlightBorderColor?: string;
  highlightRadius?: number;
}

export function AnimatedGrid({
  boxSize = 50,
  highlightColor = "#3b82f6",
  highlightBorderColor = "#2563eb",
  highlightRadius = 100,
}: AnimatedGridProps) {
  const { width, height, mouseX, mouseY } = useWindowSize();

  const boxes = useMemo(() => {
    const columns = Math.floor(width / boxSize);
    const rows = Math.floor(height / boxSize);
    return Array.from({ length: columns * rows }).map((_, index) => {
      const col = index % columns;
      const row = Math.floor(index / columns);
      return { x: col * boxSize, y: row * boxSize };
    });
  }, [width, height, boxSize]);

  const getHighlightIntensity = useCallback(
    (boxX: number, boxY: number) => {
      const distance = Math.sqrt(
        Math.pow(boxX - mouseX + boxSize / 2, 2) +
          Math.pow(boxY - mouseY + boxSize / 2, 2),
      );
      return Math.max(0, 1 - distance / highlightRadius);
    },
    [mouseX, mouseY, boxSize, highlightRadius],
  );

  return (
    <div
      className="fixed top-0 left-0 z-[1] grid h-screen w-screen overflow-hidden"
      style={{
        gridTemplateColumns: `repeat(auto-fill, minmax(${boxSize}px, 1fr))`,
        gridTemplateRows: `repeat(auto-fill, minmax(${boxSize}px, 1fr))`,
      }}
    >
      {boxes.map((box, index) => {
        const intensity = getHighlightIntensity(box.x, box.y);
        return (
          <div
            key={index}
            className="transition-all duration-300 ease-in-out"
            style={{
              width: `${boxSize}px`,
              height: `${boxSize}px`,
              backgroundColor: `rgba(${parseInt(highlightColor.slice(1, 3), 16)}, ${parseInt(highlightColor.slice(3, 5), 16)}, ${parseInt(highlightColor.slice(5, 7), 16)}, ${Math.max(0.15, intensity * 0.5)})`,
              borderColor: highlightBorderColor,
              borderWidth: `${intensity * 2}px`,
              filter: `blur(${intensity * 2}px)`,
              opacity: 0.4 + intensity * 0.8,
            }}
          />
        );
      })}
    </div>
  );
}
