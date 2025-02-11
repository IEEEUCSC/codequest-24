import { cn } from "@/libs/utils";
import AnimatedText from "../AnimatedText";
import { AnimatedButtonProps } from "@/libs/types";

const AnimatedButton = ({
  className,
  children,
  text,
  ...props
}: AnimatedButtonProps) => {
  return (
    <button className={cn(" px-4 py-2 rounded-2xl", className)}>
      <AnimatedText text={text} {...props} />
      {children}
    </button>
  );
};

export default AnimatedButton;
