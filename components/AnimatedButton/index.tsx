import { cn } from "@/libs/utils";
import AnimatedText from "../AnimatedText";
import { AnimatedButtonProps } from "@/libs/types";

const AnimatedButton = ({
  className,
  children,
  text,
  style,
  to,
  id,
  ...props
}: AnimatedButtonProps & { to?: string }) => {
  const content = (
    <>
      <AnimatedText text={text} {...props} />
      {children}
    </>
  );

  return to ? (
    <a
      href={to}
      className={cn(
        "bg-primary-400 background-glow inline-block rounded-2xl px-4 py-2",
        className,
      )}
      style={style}
      id={id}
    >
      {content}
    </a>
  ) : (
    <button
      className={cn(
        "bg-primary-400 background-glow rounded-2xl px-4 py-2",
        className,
      )}
      style={style}
      id={id}
    >
      {content}
    </button>
  );
};

export default AnimatedButton;
