import Image from "next/image";

import { cn } from "@/libs/utils";
import { CardProps } from "@/libs/types";
import { bronzeMedal, goldMedal, silverMedal } from "@/libs/data";

const Card = ({
  position,
  amount,
  currency = "LKR",
  className = "",
  children,
  contentPosition = "bottom",
}: CardProps) => {
  const getPositionColor = () => {
    switch (position) {
      case "1st":
        return "text-gold border-gold";
      case "2nd":
        return "text-silver border-silver";
      case "3rd":
        return "text-[#de8857] border-[#de8857]";
      default:
        return "text-default border-default";
    }
  };

  return (
    <div
      className={cn(
        `top-element bg-dark-300 relative flex flex-col justify-center rounded-4xl border-3 p-4 transition-transform duration-300 hover:scale-105 ${getPositionColor()}`,
        className,
      )}
    >
      <div
        className={`absolute top-0 left-0 h-full w-full rounded-4xl ${
          position === "1st"
            ? "from-gold/50 to-gold/5 bg-gradient-to-tr"
            : position === "2nd"
              ? "from-silver/50 to-silver/5 bg-gradient-to-tr"
              : position === "3rd"
                ? "bg-gradient-to-tr from-[#de8857]/50 to-[#de8857]/10"
                : "bg-default/10"
        }`}
      />
      {contentPosition === "top" && children}

      {position && (
        <div className="relative mb-6 text-center">
          <Image
            src={
              position === "1st"
                ? goldMedal.src
                : position === "2nd"
                  ? silverMedal.src
                  : bronzeMedal.src
            }
            alt={`${position} place medal`}
            className="mx-auto max-h-36 max-w-36 object-contain"
            width={144}
            height={144}
          />
        </div>
      )}

      {amount && (
        <div className="relative w-full rounded-xl px-6 py-4 text-center">
          <span className="text-3xl font-bold text-white">{amount}</span>
          <br></br>
          <span className="ml-2 text-3xl text-white">{currency}</span>
        </div>
      )}

      {contentPosition === "bottom" && children}
    </div>
  );
};

export default Card;
