import Card from "./Card";

const PrizeCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center min-h-[300px] w-full px-4 py-8">
      {/* 2nd Place - Slightly smaller */}
      <Card
        position="2nd"
        amount="40,000"
        className="w-[280px] h-[330px] md:translate-y-8 card-glow"
      />

      {/* 1st Place - Largest */}
      <Card
        position="1st"
        amount="60,000"
        className="w-[320px] h-[410px] card-glow z-10"
      />

      {/* 3rd Place - Slightly smaller */}
      <Card
        position="3rd"
        amount="20,000"
        className="w-[280px] h-[330px] md:translate-y-8 card-glow"
      />
    </div>
  );
};

export default PrizeCards;