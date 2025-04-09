import React from "react";
import Image from "next/image";

import { cn } from "@/libs/utils";
import { SectionBg } from "@/libs/data";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  className?: string;
}

const SectionHeader = ({ title, className, ...props }: SectionHeaderProps) => {
  return (
    <h1
      className={cn(
        "top-element section-title relative mx-auto w-fit px-4 py-2 text-xl text-white select-none lg:text-4xl",
        className,
      )}
      {...props}
    >
      {title}
      <div
        className="absolute -bottom-3 -left-2 h-[140%] w-[120%] lg:-bottom-4 lg:-left-8 lg:w-[140%]"
        aria-hidden="true"
      >
        <Image
          src={SectionBg}
          alt="section title background"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </h1>
  );
};

export default SectionHeader;
