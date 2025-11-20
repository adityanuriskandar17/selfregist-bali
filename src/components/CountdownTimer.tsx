"use client";

import { useState, useEffect } from "react";

const COUNTDOWN_DURATION = (14 * 60 * 60 * 1000) + (40 * 60 * 1000); // 14h 40m in ms
const STORAGE_KEY = 'ftlCountdownEndTime';

const CountdownTimer = () => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 14,
    minutes: 40,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);

    // Get or create target end time
    let targetTime: number;

    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        targetTime = parseInt(stored);
        console.log('Found stored time:', new Date(targetTime).toLocaleString());

        // If expired, create new one
        if (targetTime <= Date.now()) {
          console.log('Stored time expired, creating new countdown');
          targetTime = Date.now() + COUNTDOWN_DURATION;
          localStorage.setItem(STORAGE_KEY, targetTime.toString());
        }
      } else {
        console.log('No stored time, creating new countdown');
        targetTime = Date.now() + COUNTDOWN_DURATION;
        localStorage.setItem(STORAGE_KEY, targetTime.toString());
      }
    } catch (error) {
      console.error('localStorage error:', error);
      targetTime = Date.now() + COUNTDOWN_DURATION;
    }

    const updateCountdown = () => {
      const now = Date.now();
      const difference = targetTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        // Clear expired countdown
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch (e) {
          console.error('Failed to remove expired countdown', e);
        }
      }
    };

    // Update immediately
    updateCountdown();

    // Update every second
    const timer = setInterval(updateCountdown, 1000);

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

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="flex justify-center items-center gap-2 md:gap-4">
        <TimeUnit value={14} label="Hours" />
        <span className="text-2xl text-white mb-6">:</span>
        <TimeUnit value={40} label="Minutes" />
        <span className="text-2xl text-white mb-6">:</span>
        <TimeUnit value={0} label="Seconds" />
      </div>
    );
  }

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
