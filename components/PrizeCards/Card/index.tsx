import { cn } from "@/libs/utils";
import { ReactNode } from "react";

interface CardProps {
  position?: "1st" | "2nd" | "3rd";
  amount?: string;
  currency?: string;
  className?: string;
  children?: ReactNode;
  contentPosition?: "top" | "bottom";
}

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
        return "card-gold";
      case "2nd":
        return "card-silver";
      case "3rd":
        return "card-bronze";
      default:
        return "card-default";
    }
  };

  return (
    <div
      className={cn(
        `relative flex flex-col justify-center rounded-4xl p-6 text-black transition-transform duration-300 hover:scale-105 ${getPositionColor()}`,
        className,
      )}
    >
      {contentPosition === "top" && children}

      {position && (
        <div className="text-left text-7xl font-bold tracking-wider mb-6">
          {position.charAt(0)}
          <span className="text-4xl font-bold ">{position.slice(1)}</span>{" "}
          <div className="mt-2 text-left text-3xl font-bold">Place</div>
          {/* <br /> */}
        </div>
      )}

      {amount && (
        <div className="w-full rounded-xl bg-black/100 px-6 py-4 text-center">
          <span className="text-4xl font-bold text-white">{amount}</span><br></br>
          <span className="ml-2 text-4xl text-white">{currency}</span>
        </div>
      )}

      {contentPosition === "bottom" && children}
    </div>
  );
};

export default Card;