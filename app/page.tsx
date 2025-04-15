import AnimatedGridWrapper from "@/components/AnimatedGrid/AnimatedGridWrapper";
import Hero from "@/components/Hero";
import FAQs from "@/components/FAQs";
import TimelineSection from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import Contacts from "@/components/Contacts";
import PrizeCards from "@/components/PrizeCards";
import Competition from "@/components/Competition";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function Home() {
  return (
    <div className="relative">
      {/* <AnimatedGridWrapper /> */}
      <BackgroundPaths />
      {/* <Hero /> */}
      <Competition />
      <TimelineSection />
      <PrizeCards />
      <Sponsors />
      <Contacts />
      <FAQs />
    </div>
  );
}
