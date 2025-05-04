import AnimatedGridWrapper from "@/components/AnimatedGrid/AnimatedGridWrapper";
import Hero from "@/components/Hero";
import FAQs from "@/components/FAQs";
import TimelineSection from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import Contacts from "@/components/Contacts";
import PrizeCards from "@/components/PrizeCards";
import Competition from "@/components/Competition";
import Timer from "@/components/Timer";

export default function Home() {
  return (
    <div className="relative">
      <AnimatedGridWrapper />
      <Hero />
      <Competition />
      <Timer />
      <TimelineSection />
      <PrizeCards />
      <Sponsors />
      <Contacts />
      <FAQs />
    </div>
  );
}
