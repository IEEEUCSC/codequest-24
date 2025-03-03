// import AnimatedGridWrapper from "@/components/AnimatedGrid/AnimatedGridWrapper";
import Hero from "@/components/Hero";
import FAQs from "@/components/FAQs";
import TimelineSection from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import Contacts from "@/components/Contacts";
import PrizeCards from "@/components/PrizeCards";

export default function Home() {
  return (
    <div className="relative">
      {/* <AnimatedGridWrapper /> */}
      <Hero />
      <TimelineSection />
      <Sponsors />
      <Contacts />
      <FAQs />
      {/* <div className="min-h-screen w-full" /> */}
      {/* <div className="min-h-screen w-full" /> */}
      <PrizeCards />
    </div>
  );
}
