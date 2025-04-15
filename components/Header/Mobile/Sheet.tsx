import { motion, useScroll, useTransform } from "motion/react";
import { type RefObject, useRef } from "react";
import { usePathname } from "next/navigation";

import { NAV_LINKS, socialMediaLinks } from "@/libs/data";
import { MENU_SLIDE } from "./anim";
import MobileNavigationTarget from "./Target";
import AnimatedCurve from "./Curve";
import RegButton from "../RegBtn";

type Props = {
  id: string;
  open: (isOpen: boolean) => void;
};

export default function Sheet({ id, open }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  return (
    <motion.div
      ref={containerRef}
      id={id}
      role="listbox"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={MENU_SLIDE}
      className="fixed inset-0 -top-2.5 -left-[16px] flex min-h-[100dvh] w-[105vw] flex-col bg-[rgb(30,30,30)]/80 pb-12 backdrop-blur-xl lg:hidden"
    >
      <SheetHeaderCover container={containerRef} />
      <div className="flex flex-col gap-6 px-6 pt-8">
        {pathname === "/" && (
          <ul
            className="flex flex-col gap-4 *:text-white"
            onClick={(e) => {
              if ((e.target as HTMLElement).tagName === "A")
                open.call(null, false);
              e.stopPropagation();
            }}
          >
            {NAV_LINKS.map((link, index) => (
              <MobileNavigationTarget
                key={link.href}
                href={link.href}
                label={link.label}
                index={index}
              />
            ))}
          </ul>
        )}
        <RegButton />
      </div>

      <div aria-hidden className="my-6 flex-1" />

      <div className="grid min-h-max grid-cols-[repeat(auto-fill,2.25rem)] gap-x-3 px-6">
        <span className="col-span-full mb-4 font-semibold text-white">
          Follow us on
        </span>
        {socialMediaLinks.map((link, index) => (
          <a
            href={link.link}
            key={index}
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-white hover:cursor-pointer"
          >
            {link.icon}
          </a>
        ))}
      </div>
      <AnimatedCurve fill="fill-[rgb(30,30,30)]" />
    </motion.div>
  );
}

type SheetHeaderCoverProps = {
  container: RefObject<HTMLDivElement | null>;
};

function SheetHeaderCover({ container }: SheetHeaderCoverProps) {
  const { scrollYProgress } = useScroll({
    container,
    axis: "y",
    layoutEffect: false,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <motion.div
      aria-hidden
      style={{ opacity }}
      className="relative top-0 z-10 min-h-[6.5rem] w-full bg-gradient-to-b from-transparent"
    />
  );
}
