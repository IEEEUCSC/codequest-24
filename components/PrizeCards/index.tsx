import { CardProps } from "@/libs/types";
import SectionHeader from "../SectionHeader";
import Card from "./Card";

const CardsData: CardProps[] = [
  {
    position: "2nd",
    amount: "40,000",
    className: "card-glow h-[330px] w-[280px] md:translate-y-8",
  },
  {
    position: "1st",
    amount: "60,000",
    className: "card-glow z-10 h-[410px] w-[320px]",
  },
  {
    position: "3rd",
    amount: "20,000",
    className: "card-glow h-[330px] w-[280px] md:translate-y-8",
  },
];

const PrizeCards = () => {
  return (
    <div
      className="main-section top-element relative min-h-[300px] w-full px-4 py-8"
      id="prizes"
    >
      <SectionHeader title="Prizes" />
      <div className="sec-inner-y flex flex-col items-center justify-center gap-8 md:flex-row">
        {CardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default PrizeCards;
