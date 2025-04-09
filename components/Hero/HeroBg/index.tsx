"use client";

import React from "react";
import Image from "next/image";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { HeroBg } from "@/libs/data";

const HeroBgImage = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="absolute bottom-0 h-[100svh] w-full mask-radial-[100%_100%] mask-radial-from-50% mask-radial-to-100% mask-radial-at-top">
      {desktop && (
        <Image
          src={HeroBg}
          alt="Hero background"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
          quality={65}
        />
      )}
    </div>
  );
};

export default HeroBgImage;
