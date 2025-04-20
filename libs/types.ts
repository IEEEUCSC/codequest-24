import { Variants } from "motion/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

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

export interface StaggerTextProps {
  text: string;
  className?: string;
  As?: "h1" | "h2" | "h3" | "span" | "p";
}

export interface AnimatedButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>, StaggerTextProps {
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


export interface CardProps {
  position?: "1st" | "2nd" | "3rd";
  amount?: string;
  currency?: string;
  className?: string;
  children?: ReactNode;
  contentPosition?: "top" | "bottom";
}


export interface SponsorLogoProps {
  title: string;
  logo: StaticImport;
  type: string;
}