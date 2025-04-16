import { motion, MotionValue } from "motion/react";

interface HeaderWrapperProps {
  children: React.ReactNode;
  scrollY: MotionValue<number>;
  scrollDirection: string;
  isOpen: boolean;
}

const HeaderWrapper = ({
  children,
  scrollY,
  scrollDirection,
  isOpen,
}: HeaderWrapperProps) => {
  const variants = {
    down: { opacity: 0, y: "-100%" },
    up: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className="fixed z-[999] w-full lg:mt-4"
      animate={
        scrollY.get() > 100 && !isOpen
          ? scrollDirection === "down"
            ? "down"
            : "up"
          : {}
      }
      variants={variants}
      transition={{ type: "tween", ease: "easeIn", duration: 0.25 }}
    >
      {children}
    </motion.header>
  );
};

export default HeaderWrapper;
