"use client";

import Link from "next/link";
import { useLenis } from "lenis/react";
import StaggerText from "../StaggerText";
// import { usePathname } from "next/navigation";

interface NavigationTargetProps {
  href: string;
  label: string;
}

export default function NavigationTarget({
  href,
  label,
}: NavigationTargetProps) {
  const lenis = useLenis();
  // const pathname = usePathname();
  const local = href.startsWith("#");

  return (
    <li
      className="transition-colors"
      role="link"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

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
      <Link href={href} className="nav-link">
        <StaggerText text={label} As="h3" />
      </Link>
    </li>
  );
}
