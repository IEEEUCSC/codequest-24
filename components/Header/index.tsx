"use client";

import { NAV_LINKS } from "@/libs/data";
import NavigationTarget from "./NavigationTarget";
import AnimatedButton from "../AnimatedButton";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import MobileNavigation from "./Mobile";
import { useLockingBodyScroll } from "@/hooks/useLockingBodyScroll";

const Header = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [isOpen, open] = useLockingBodyScroll();

  return (
    <header className="   w-full mt-2  fixed z-20">
      <div className="flex justify-between  items-center header-bg-gradient backdrop-blur-sm p-4 text-white container mx-auto rounded-full border-2 border-primary-200">
        <h1>logo</h1>
        {desktop ? (
          <>
            <div className=" px-4 py-1.5">
              <ul className="flex space-x-4">
                {NAV_LINKS.map((link) => (
                  <NavigationTarget key={link.href} {...link} />
                ))}
              </ul>
            </div>
            <AnimatedButton
              text="Register Now"
              cloneTextColor="text-[#fff]"
              textClassName=" text-base cursor-pointer"
              className="bg-primary-100"
            />
          </>
        ) : (
          <MobileNavigation isOpen={isOpen} open={open} />
        )}
      </div>
    </header>
  );
};

export default Header;
