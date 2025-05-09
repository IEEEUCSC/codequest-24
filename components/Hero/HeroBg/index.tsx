import React from "react";
import Image from "next/image";

import { HeroBg } from "@/libs/data";

const HeroBgImage = () => {
  return (
    <div className="absolute top-0 bottom-0 h-[100svh] w-full mask-radial-[100%_100%] mask-radial-from-80% mask-radial-to-100% mask-radial-at-top">
      <Image
        src={HeroBg}
        alt="Hero background"
        fill
        style={{ objectFit: "cover" }}
        priority={true}
        quality={65}
      />
    </div>
  );
};

export default HeroBgImage;
