"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

import { CQLogo, NAV_LINKS } from "@/libs/data";
import NavigationTarget from "./NavigationTarget";
import Glassmorphism from "../Glassmorphism";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useLockingBodyScroll } from "@/hooks/useLockingBodyScroll";
import MobileNavigation from "./Mobile";
import Image from "next/image";
import { cn } from "@/libs/utils";
import RegButton from "./RegBtn";

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
      className="fixed z-[999] w-full py-2 lg:mt-2 lg:px-2"
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
      <Glassmorphism className="container mx-auto rounded-full p-2 lg:p-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full text-white",
          )}
        >
          <div>
            <Image src={CQLogo} alt="CodeQuest Logo" width={150} height={50} />
          </div>
          {desktop ? (
            <>
              <div className="px-4 py-1.5">
                <ul className="flex space-x-4" aria-label="navigation">
                  {NAV_LINKS.map((link) => (
                    <NavigationTarget key={link.href} {...link} />
                  ))}
                </ul>
              </div>
              <RegButton />
            </>
          ) : (
            <MobileNavigation isOpen={isOpen} open={open} />
          )}
        </div>
      </Glassmorphism>
    </motion.header>
  );
};

export default Header;
