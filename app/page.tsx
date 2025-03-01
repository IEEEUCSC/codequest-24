import AnimatedGridWrapper from "@/components/AnimatedGrid/AnimatedGridWrapper";
import Hero from "@/components/Hero";
import FAQs from "@/components/FAQs";
import TimelineSection from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
// import Contacts from "@/components/Contacts";
import TeamGrid from "@/components/TeamGrid";
import contactData from "@/libs/contactData";
// import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <div className="relative">
      {/* <AnimatedGridWrapper /> */}
      <Hero />
      {/* <Contacts /> */}
      <TimelineSection />
      <Sponsors />
      <FAQs />
      <div className="container mx-auto max-w-6xl px-8 py-12">
        <h1 className="mb-8 text-center text-3xl font-bold">Our Team</h1>
        <TeamGrid contactData={contactData} />
      </div>
      {/* <div className="min-h-screen w-full" /> */}
      {/* <div className="min-h-screen w-full" /> */}
    </div>
  );
}
