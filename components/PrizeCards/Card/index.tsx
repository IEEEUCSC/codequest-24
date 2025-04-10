import { cn } from "@/libs/utils";
import { CardProps } from "@/libs/types";
import goldMedal from "@/assets/prizes/1st.png";
import silverMedal from "@/assets/prizes/2nd.png";
import bronzeMedal from "@/assets/prizes/3rd.png";

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
        return "text-bronze border-bronze";
      default:
        return "text-default border-default";
    }
  };

  return (
    <div
      className={cn(
        `relative flex flex-col justify-center rounded-4xl border-3 p-4 transition-transform duration-300 hover:scale-105 ${getPositionColor()} ${position === "1st" ? "bg-gold/10" : position === "2nd" ? "bg-silver/10" : position === "3rd" ? "bg-bronze/10" : "bg-default/10"}`,
        className,
      )}
    >
      {contentPosition === "top" && children}

      {position && (
        <div className="mb-6 text-center">
          <img
            src={
              position === "1st"
                ? goldMedal.src
                : position === "2nd"
                  ? silverMedal.src
                  : bronzeMedal.src
            }
            alt={`${position} place medal`}
            className="mx-auto max-h-36 max-w-36 object-contain"
          />
        </div>
      )}

      {amount && (
        <div className="w-full rounded-xl px-6 py-4 text-center">
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
