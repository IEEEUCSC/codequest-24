"use client";

import { cn } from "@/libs/utils";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import { useEffect, useState } from "react";

interface CountdownTimerProps {
  endTime: Date | number; // End time as Date object or timestamp
  criticalHours?: number; // Hours before end when critical styling applies
  className?: string;
  criticalClassName?: string;
}

export default function CountdownTimer({
  endTime,
  criticalHours = 2,
  className = "",
  criticalClassName = "text-red-500 font-bold",
}: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [isCritical, setIsCritical] = useState<boolean>(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const end = typeof endTime === "number" ? endTime : endTime.getTime();
      const remaining = Math.max(0, end - now);

      setTimeRemaining(remaining);

      // Check if we're in the critical period
      const criticalTimeInMs = criticalHours * 60 * 60 * 1000;
      setIsCritical(remaining > 0 && remaining <= criticalTimeInMs);

      // If countdown is finished, clear the interval
      if (remaining <= 0) {
        setIsActive(false);
        // setTimeRemaining(0); // Reset to 0 when countdown is finished
      }
    };

    // Calculate immediately
    calculateTimeRemaining();

    // Then set up interval to update every second
    const timerInterval = setInterval(calculateTimeRemaining, 1000);

    // Clean up interval on unmount
    return () => clearInterval(timerInterval);
  }, [endTime, criticalHours]);

  // Convert milliseconds to hours, minutes, seconds
  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Format time values to always have two digits
  const formatTime = (value: number) => value.toString().padStart(2, "0");

  return isActive ? (
    <NumberFlowGroup>
      <div
        className={cn(
          "font relative grid grid-cols-[1fr_1fr_1fr] items-center gap-x-2 px-4 text-slate-100 *:text-right *:text-5xl lg:*:text-9xl",
          className,
          isCritical && criticalClassName,
        )}
        style={
          {
            fontVariantNumeric: "tabular-nums",
            "--number-flow-char-height": "0.85em",
          } as React.CSSProperties
        }
      >
        <NumberFlow
          value={parseInt(formatTime(hours))}
          format={{ minimumIntegerDigits: 2 }}
        />
        <NumberFlow value={parseInt(formatTime(minutes))} prefix=":" />
        <NumberFlow
          value={parseInt(formatTime(seconds))}
          format={{ minimumIntegerDigits: 2 }}
          prefix=":"
          isolate={true}
          willChange={true}
        />
      </div>
    </NumberFlowGroup>
  ) : (
    <h1>
      <span className="text-primary-100 text-xl font-bold lg:text-6xl">
        Countdown Finished
      </span>
    </h1>
  );
}
