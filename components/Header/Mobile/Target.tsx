"use client";

import { useLenis } from "lenis/react";

import Link from "next/link";

interface NavigationTargetProps {
  href: string;
  label: string;
}

export default function MobileNavigationTarget({
  href,
  label,
}: NavigationTargetProps) {
  const lenis = useLenis();

  const local = href.startsWith("#");

  return (
    <li
      className="font-dm-sans bg-clip-text pb-1 text-4xl font-semibold text-black transition-colors"
      role="link"
      onClick={() => {
        if (local) {
          // if (href === "/") return lenis?.scrollTo(0);
          const hash = href.substring(1);
          const ele = document.getElementById(hash);

          if (ele) {
            return lenis?.scrollTo(ele, {
              offset: -50,
              duration: 1,
              easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
              lerp: 0.1,
            });
          }
        }
      }}
    >
      <Link href={href} className="">
        {label}
      </Link>
    </li>
  );
}
