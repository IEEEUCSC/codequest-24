"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";

import { CQLogo, NAV_LINKS } from "@/libs/data";
import NavigationTarget from "./NavigationTarget";
import Glassmorphism from "../Glassmorphism";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useLockingBodyScroll } from "@/hooks/useLockingBodyScroll";
import MobileNavigation from "./Mobile";
import Image from "next/image";
import HeaderWrapper from "./HeaderWrapper";
import ECertificateButton from "../ECertificate/ECertificateButton";
import AnimatedButton from "../AnimatedButton";

const HeaderContent = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [isOpen, open] = useLockingBodyScroll();
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("down");

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = current - previous;
    setScrollDirection(diff > 0 ? "down" : "up");
  });
  return (
    <HeaderWrapper
      scrollY={scrollY}
      scrollDirection={scrollDirection}
      isOpen={isOpen}
    >
      <Glassmorphism className="container mx-auto flex min-h-[60px] items-center justify-between rounded-full p-2 text-white lg:min-h-[75px] lg:p-4">
        <div>
          <Image src={CQLogo} alt="CodeQuest Logo" width={150} height={50} />
        </div>
        {desktop ? (
          <>
            {pathname === "/" && (
              <div className="px-4 py-1.5">
                <ul className="flex space-x-4" aria-label="navigation">
                  {NAV_LINKS.map((link) => (
                    <NavigationTarget key={link.href} {...link} />
                  ))}
                </ul>
              </div>
            )}
            {pathname === "/ECertificate" ? (
              <AnimatedButton text="Back to Home" to="/" />
            ) : (
              <ECertificateButton />
            )}
          </>
        ) : (
          <MobileNavigation isOpen={isOpen} open={open} />
        )}
      </Glassmorphism>
    </HeaderWrapper>
  );
};

export default HeaderContent;
