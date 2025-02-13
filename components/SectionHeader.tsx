import React from "react";

import { cn } from "@/libs/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  className?: string;
}

const SectionHeader = ({ title, className, ...props }: SectionHeaderProps) => {
  return (
    <h1
      className={cn(
        "bg-dark-100 top-element border-primary-200 relative mx-auto w-fit rounded-4xl border px-4 py-2 text-white select-none lg:text-lg",
        className,
      )}
      {...props}
    >
      {title}
    </h1>
  );
};

export default SectionHeader;
