import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(targetDate: Date, startDate?: Date) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime(); // Use current time dynamically
      const difference = targetDate.getTime() - now; // Calculate difference from current time

      if (difference > 0) {
        // Ensure countdown starts only after startDate
        const adjustedDifference =
          difference + new Date().getTimezoneOffset() * 60 * 1000;
        setTimeLeft({
          days: Math.floor(adjustedDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((adjustedDifference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((adjustedDifference / 1000 / 60) % 60),
          seconds: Math.floor((adjustedDifference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, startDate]);

  return timeLeft;
}
