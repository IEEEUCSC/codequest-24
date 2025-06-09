import { cn } from "@/libs/utils";
import CountdownTimer from "./CountDownTimer";
import { BPMono } from "@/fonts";
import HeroBgImage from "@/components/Hero/HeroBg";
import Glassmorphism from "@/components/Glassmorphism";
import { CRITICAL_HOURS, END_TIME } from "@/libs/data";

export default function Page() {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-center p-8",
        BPMono.variable,
      )}
    >
      <HeroBgImage />

      <Glassmorphism className="container mx-auto flex flex-col items-center justify-center rounded-2xl px-4 py-8 lg:gap-y-8 lg:p-16">
        <h1 className="text-center text-lg font-bold text-slate-100 lg:text-3xl xl:text-5xl 2xl:text-5xl">
          Final Countdown: The Race to Patch Begins
        </h1>
        <CountdownTimer
          endTime={END_TIME}
          criticalHours={CRITICAL_HOURS}
          className="font-bpmono text-4xl"
          criticalClassName="text-primary-300 font-bold animate-ping"
        />
      </Glassmorphism>
    </main>
  );
}
