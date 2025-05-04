"use client";

import { useCountdown } from "@/hooks/useCountDown";

interface CountdownTimerProps {
  targetDate: Date;
  startDate?: Date;
  title?: string;
}

export function CountdownTimer({
  targetDate,
  startDate,
  title,
}: CountdownTimerProps) {
  const timeLeft = useCountdown(targetDate, startDate);

  return (
    <div className="countdown-timer-bg bg-dark-300 border-primary-400 mx-auto w-full max-w-[300px] rounded-xl border-2 px-6 py-2 text-center sm:max-w-xl">
      <h2 className="font-consola text-primary-50 mb-4 text-lg lg:text-2xl">
        {title}
      </h2>
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
      <span
        className="font-consola text-primary-100 text-xl font-bold tabular-nums lg:text-4xl"
        style={{ width: "2ch", textAlign: "center" }} // Fixed width for digits
      >
        {formattedValue}
      </span>
      <span className="text-primary-100 mt-2 text-sm">{label}</span>
    </div>
  );
}

function Separator() {
  return <div className="bg-primary-400 mx-2 h-12 w-px" />;
}
