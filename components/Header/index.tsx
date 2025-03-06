"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

import { CQLogo, NAV_LINKS } from "@/libs/data";
import NavigationTarget from "./NavigationTarget";
import AnimatedButton from "../AnimatedButton";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import MobileNavigation from "./Mobile";
import { useLockingBodyScroll } from "@/hooks/useLockingBodyScroll";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Image from "next/image";
import { cn } from "@/libs/utils";

export const HeaderButtonPadding = 64;

const Header = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [isOpen, open] = useLockingBodyScroll();

  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("down");

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = current - previous;
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  const variants = {
    down: { opacity: 0, y: "-100%" },
    up: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className="absolute z-[999] mt-2 w-full px-2"
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
      <div
        className={cn(
          "container mx-auto flex items-center justify-between rounded-full px-6 py-4 text-white",
        )}
      >
        <div>
          <Image src={CQLogo} alt="CodeQuest Logo" width={150} height={50} />
        </div>
        {desktop ? (
          <>
            <div className="px-4 py-1.5">
              <ul className="flex space-x-4">
                {NAV_LINKS.map((link) => (
                  <NavigationTarget key={link.href} {...link} />
                ))}
              </ul>
            </div>
            <AnimatedButton
              text="Register Now"
              cloneTextColor="text-[#fff]"
              textClassName=" text-base cursor-pointer text-white"
              className="flex items-center gap-x-2 py-3"
              style={{ paddingInline: HeaderButtonPadding }}
              to="/register"
              id="register-button"
            >
              <BsArrowUpRightCircle className="text-[20px]" />
            </AnimatedButton>
          </>
        ) : (
          <MobileNavigation isOpen={isOpen} open={open} />
        )}
      </div>
    </motion.header>
  );
};

export default Header;
