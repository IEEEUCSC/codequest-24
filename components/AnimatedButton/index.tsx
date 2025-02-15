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
    <button
      className={cn(
        "bg-primary-400 background-glow rounded-2xl px-4 py-2",
        className,
      )}
    >
      <AnimatedText text={text} {...props} />
      {children}
    </button>
  );
};

export default AnimatedButton;
