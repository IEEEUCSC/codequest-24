import React from "react";

interface SponsorsCardProps {
  children: React.ReactNode;
  type: "Gold" | "Silver";
}
const SponsorsCard = ({ children, type }: SponsorsCardProps) => {
  return (
    <div className="flex flex-col items-center gap-4 p-2" role="contentinfo">
      {children}
      <span className="bg-dark-400 w-fit rounded-2xl px-4 py-1 text-center text-[#F8C660] uppercase">
        {type} Partner
      </span>
    </div>
  );
};

export default SponsorsCard;
