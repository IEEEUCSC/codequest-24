import SectionHeader from "../SectionHeader";
import Card from "./Card";

const PrizeCards = () => {
  return (
    <div
      className="main-section top-element relative min-h-[300px] w-full px-4 py-8"
      id="prizes"
    >
      <SectionHeader title="Prizes" />
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row sec-inner-y">
        {/* 2nd Place - Slightly smaller */}
        <Card
          position="2nd"
          amount="40,000"
          className="card-glow h-[330px] w-[280px] md:translate-y-8"
        />
        {/* 1st Place - Largest */}
        <Card
          position="1st"
          amount="60,000"
          className="card-glow z-10 h-[410px] w-[320px]"
        />
        {/* 3rd Place - Slightly smaller */}
        <Card
          position="3rd"
          amount="20,000"
          className="card-glow h-[330px] w-[280px] md:translate-y-8"
        />
      </div>
    </div>
  );
};

export default PrizeCards;
