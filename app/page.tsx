import AnimatedGridWrapper from "@/components/AnimatedGrid/AnimatedGridWrapper";
import Hero from "@/components/Hero";
// import FAQs from "@/components/FAQs";
// import TimelineSection from "@/components/Timeline";
// import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <div className=" bg-dark-300">
      <AnimatedGridWrapper />
      <Hero />
      {/* <Contacts /> */}
      {/* <TimelineSection />
      <FAQs /> */}
      <div className="min-h-screen w-full" />
      <div className="min-h-screen w-full" />
    </div>
  );
}
