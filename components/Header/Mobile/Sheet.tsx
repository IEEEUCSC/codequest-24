import { motion, useScroll, useTransform } from "motion/react";
import { type RefObject, useRef } from "react";

import MobileNavigationTarget from "./Target";
import AnimatedButton, {
  AnimatedButtonText,
} from "@/components/AnimatedButton";
import { NAV_LINKS, socialMediaLinks } from "@/libs/data";

type Props = {
  id: string;
  open: (isOpen: boolean) => void;
};

const SHEET_VARIANTS = {
  closed: { opacity: 0 },
  open: {
    background: "rgba(0, 0, 0, 0.75)",
    backdropFilter: "blur(24px)",
    opacity: 1,
  },
};

export default function Sheet({ id, open }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={containerRef}
      id={id}
      role="listbox"
      initial="closed"
      animate="open"
      exit="closed"
      variants={SHEET_VARIANTS}
      className="fixed inset-0 flex min-h-[100dvh] flex-col overflow-y-auto pb-12 lg:hidden"
    >
      <SheetHeaderCover container={containerRef} />
      <div className="flex flex-col gap-6 px-6 pt-8">
        <ul
          className="flex flex-col gap-4 *:text-white"
          onClick={(e) => {
            if ((e.target as HTMLElement).tagName === "A")
              open.call(null, false);
            e.stopPropagation();
          }}
        >
          {NAV_LINKS.map((link) => (
            <MobileNavigationTarget
              key={link.href}
              href={link.href}
              label={link.label}
            />
          ))}
        </ul>
        <AnimatedButton className="w-fit px-6 py-2 text-white" scaleAmount={50}>
          <AnimatedButtonText text="Register Now" />
        </AnimatedButton>
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
