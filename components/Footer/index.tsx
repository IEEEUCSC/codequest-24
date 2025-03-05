"use client";

import Image from "next/image";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { CQLogo, FOOTER_DESC, IEEElogo, socialMediaLinks } from "@/libs/data";

const Footer = () => {
  const desktop = useMediaQuery("(min-width: 768px");

  return (
    <footer
      className="top-element relative"
      style={{
        height: "300px",
        clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <div
        className={`relative -top-[100vh] h-[calc(100vh+var(--footer-height))]`}
      >
        <div
          className={`sticky top-[calc(100vh-var(--footer-height))] h-[var(--footer-height)]`}
        >
          <div className="top-element bg-primary-300 relative z-2 flex h-full min-h-[20vh] w-full flex-col overflow-auto">
            <div className="top-element relative container mx-auto flex h-[300px] flex-grow flex-col justify-between px-4 py-8 text-white">
              <div className="flex w-full flex-col justify-between">
                <div className="flex w-full items-center justify-between">
                  <Image
                    src={CQLogo}
                    alt="IntelliHack Logo"
                    width={120}
                    className="h-auto"
                  />
                  <Image
                    src={IEEElogo}
                    alt="IEEE Logo"
                    width={desktop ? 200 : 320}
                    className="h-auto w-auto"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-pretty md:max-w-[480px]">{FOOTER_DESC}</p>
                  <div className="top-element flex gap-x-2 pt-4">
                    {socialMediaLinks.map((link, index) => (
                      <a
                        href={link.link}
                        key={index}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xl hover:cursor-pointer"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 w-full">
                <p className="text-center text-xs lg:text-base">
                  © 2025 IEEE Student Branch UCSC. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
