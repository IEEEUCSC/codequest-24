import React from "react";
import { cn } from "@/libs/utils";

interface GlassmorphismProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Glassmorphism = ({
  children,
  className,
  ...props
}: GlassmorphismProps) => {
  return (
    <div
      className={cn(
        "relative border border-white/20 bg-white/10 shadow-lg backdrop-blur-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Glassmorphism;
