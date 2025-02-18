import { Variants } from "motion/react";

export type PresetType = "slideUp" | "slideDown";

export interface CharacterVariants {
  character: Variants;
}

export interface AnimatedTextProps {
  text: string;
  type?: "characters" | "words";
  textClassName?: string;
  preset?: PresetType;
  variants?: CharacterVariants;
  cloneTextColor?: string;
  duration?: number;
  style?: React.CSSProperties;
}

export interface AnimatedButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    AnimatedTextProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export interface TimelineItem {
  date: {
    day: string;
    month: string;
  };
  header: string;
  content: string;
  time: string;
}
