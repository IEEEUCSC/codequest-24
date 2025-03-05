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
        "top-element section-title relative mx-auto w-fit px-4 py-2 text-white select-none lg:text-lg",
        className,
      )}
      {...props}
    >
      {title}
      <div className="absolute -bottom-2 -left-2 h-[120%] w-[120%]">
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
