import { SponsorLogoProps } from "@/libs/types";
import Image from "next/image";
import React from "react";


const SponsorsCard = ({ title, logo, type }: SponsorLogoProps) => {
  return (
    <div className="flex flex-col items-center gap-4 p-2" role="contentinfo">
      <Image src={logo} alt={title} width={200} height={200} className="h-auto" />
      <span className="bg-dark-400 w-fit rounded-2xl px-4 py-1 text-center text-[#F8C660] uppercase">
        {type}
      </span>
    </div>
  );
};

export default SponsorsCard;
