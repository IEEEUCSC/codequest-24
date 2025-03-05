import { cn } from "@/libs/utils";
import { CardProps } from "@/libs/types";

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
        return "bg-gold";
      case "2nd":
        return "bg-silver";
      case "3rd":
        return "bg-bronze";
      default:
        return "bg-default";
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
        <div className="mb-6 text-left text-7xl font-bold tracking-wider">
          {position.charAt(0)}
          <span className="text-4xl font-bold">{position.slice(1)}</span>{" "}
          <div className="mt-2 text-left text-3xl font-bold">Place</div>
          {/* <br /> */}
        </div>
      )}

      {amount && (
        <div className="w-full rounded-xl bg-black/100 px-6 py-4 text-center">
          <span className="text-4xl font-bold text-white">{amount}</span>
          <br></br>
          <span className="ml-2 text-4xl text-white">{currency}</span>
        </div>
      )}

      {contentPosition === "bottom" && children}
    </div>
  );
};

export default Card;
