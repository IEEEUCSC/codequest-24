import AnimatedGridWrapper from "@/components/AnimatedGrid/AnimatedGridWrapper";
import Hero from "@/components/Hero";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <div className="">
      <AnimatedGridWrapper />
      <Hero />
      <Contacts />
      <div className="min-h-screen w-full" />
      <div className="min-h-screen w-full" />
    </div>
  );
}
