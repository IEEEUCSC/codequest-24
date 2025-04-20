"use client";

import { TypewriterEffect } from "../TextEffect";

export const HeroSecHeader = () => {
  const text = [
    "IEEE STUDENT BRANCH OF",
    "UNIVERSITY OF COLOMBO SCHOOL OF COMPUTING",
    "PROUDLY PRESENTS",
  ];

  return (
    <div className="flex flex-col text-center text-base will-change-[height,_contents] md:text-lg lg:text-2xl">
      {text.map((line, index) => (
        <TypewriterEffect
          key={index}
          text={line}
          textClassName="text-base md:text-lg lg:text-2xl text-balance"
          animationDelay={0.05}
          startAnimationDelay={index * 0.5}
          onCopy={(e) => {
            e.preventDefault();
            e.clipboardData.setData("text/plain", line);
          }}
          aria-label={line}
          aria-description="This text is animated with a typewriter effect"
          role="text"

        />
      ))}
      <div className="hidden text-0xBADF00D">
        <p id="Y29kZXF1ZXN0e1IzZzFzdDNyXzRfVGgzX1cxbiFf">Not so fast...</p>
        <span>
              <p>QzBkMzpfPGhlaGVfZmluZF90aGVfY29kZT5fQ1RGfQ</p>
            </span>
      </div>
    </div>
  );
};
