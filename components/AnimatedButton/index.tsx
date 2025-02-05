import { cn } from "@/libs/utils";
import AnimatedText from "../AnimatedText";
import { AnimatedButtonProps } from "@/libs/types";

const AnimatedButton = ({ className, children, text, ...props }: AnimatedButtonProps) => {
  return (
    <button className={cn(" ", className)}>
      <AnimatedText text={text} {...props} />
      {children}
    </button>
  );
};

export default AnimatedButton;
