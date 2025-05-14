import { cn } from "@/libs/utils";
import CountdownTimer from "./CountDownTimer";
import { BPMono } from "@/fonts";
import HeroBgImage from "@/components/Hero/HeroBg";
import Glassmorphism from "@/components/Glassmorphism";

export default function Page() {
  const START_TIME = new Date("2025-05-14T09:36:00"); // Start time in UTC
  const DURATION = 24; // Duration in hours
  const CRITICAL_HOURS = 3; // Critical period in hours (e.g., 3 hours before the end)


  const endTime = () => {
    const date = START_TIME;
    date.setHours(date.getHours() + DURATION);
    return date;
  };

  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-center p-8",
        BPMono.variable,
      )}
    >
      <HeroBgImage />

      <Glassmorphism className="container mx-auto flex flex-col items-center justify-center rounded-2xl px-4 py-8 lg:gap-y-8 lg:p-16">
        <h1 className="text-center text-lg font-bold text-slate-100 lg:text-6xl">
          Race to Patch – Final Countdown
        </h1>
        <CountdownTimer
          endTime={endTime()}
          criticalHours={CRITICAL_HOURS}
          className="font-bpmono text-4xl"
          criticalClassName="text-primary-300 font-bold animate-ping"
        />
      </Glassmorphism>
    </main>
  );
}
