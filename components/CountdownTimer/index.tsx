"use client";

import { useCountdown } from "@/hooks/useCountDown";

interface CountdownTimerProps {
  targetDate: Date;
  title?: string;
}

export function CountdownTimer({ targetDate, title }: CountdownTimerProps) {
  const timeLeft = useCountdown(targetDate);

  return (
    <div className="mx-auto w-full max-w-[300px] sm:max-w-xl rounded-xl  glow-shadow bg-dark-200  border-primary-200 border-4 px-6 py-2 text-center">
      <h2 className="font-consola mb-4 text-lg lg:text-2xl">{title}</h2>
      <div className="flex items-center justify-center gap-4">
        <TimeUnit value={timeLeft.days} label="DD" />
        <Separator />
        <TimeUnit value={timeLeft.hours} label="HH" />
        <Separator />
        <TimeUnit value={timeLeft.minutes} label="MM" />
        <Separator />
        <TimeUnit value={timeLeft.seconds} label="SS" />
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  const formattedValue = value.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <span className="font-consola text-xl lg:text-4xl font-bold tabular-nums">
        {formattedValue}
      </span>
      <span className="mt-2 text-sm">{label}</span>
    </div>
  );
}

function Separator() {
  return <div className="mx-2 h-12 w-px bg-primary-400" />;
}
