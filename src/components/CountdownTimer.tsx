"use client";

import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 13,
    minutes: 9,
    seconds: 16,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div
        className="p-2 md:p-4 w-16 md:w-24 rounded-lg"
        style={{
          background: "radial-gradient(at bottom, #ffffff33 0%, rgb(255,255,255,0.1) 100%)",
        }}
      >
        <div className="text-3xl md:text-4xl text-white font-bold tabular-nums">
          {value.toString().padStart(2, "0")}
        </div>
        <div className="text-[7pt] md:text-sm text-white font-semibold mt-2 uppercase">
          {label}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center gap-2 md:gap-4">
      <TimeUnit value={timeLeft.days} label="Days" />
      <span className="text-2xl text-white mb-6">:</span>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <span className="text-2xl text-white mb-6">:</span>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <span className="text-2xl text-white mb-6">:</span>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
