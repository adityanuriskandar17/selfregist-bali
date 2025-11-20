"use client";

import { cn } from "@/lib/utils";

interface Step {
  number: number;
  label: string;
}

const steps: Step[] = [
  { number: 1, label: "Paket" },
  { number: 2, label: "Membership" },
  { number: 3, label: "Registrasi" },
  { number: 4, label: "Pembayaran" },
];

interface StepIndicatorProps {
  currentStep?: number;
}

const StepIndicator = ({ currentStep = 1 }: StepIndicatorProps) => {

  const CheckIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  return (
    <div className="w-full mx-auto py-8">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-zinc-800">
          <div
            className="h-full transition-all duration-500"
            style={{
              background: '#146ef5',
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step) => {
            const isCompleted = step.number < currentStep;
            const isCurrent = step.number === currentStep;
            const isPending = step.number > currentStep;

            return (
              <div
                key={step.number}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 relative",
                    isPending && "bg-zinc-800 border-zinc-700 text-zinc-400"
                  )}
                  style={
                    isCompleted || isCurrent
                      ? {
                        background: "linear-gradient(145deg, #1a7fff, #0d5dd1)",
                        boxShadow: `
                            0 4px 8px rgba(20, 110, 245, 0.4),
                            0 8px 16px rgba(20, 110, 245, 0.3),
                            inset 0 -2px 4px rgba(0, 0, 0, 0.3),
                            inset 0 2px 4px rgba(255, 255, 255, 0.2)
                          `,
                        transform: isCurrent ? "scale(1.25)" : "scale(1.1)",
                        color: "#000",
                      }
                      : undefined
                  }
                >
                  {isCompleted ? (
                    <CheckIcon className="w-5 h-5" />
                  ) : (
                    step.number
                  )}
                </div>
                <span
                  className={cn(
                    "text-xs font-medium transition-colors",
                    (isCompleted || isCurrent) && "text-white",
                    isPending && "text-zinc-400"
                  )}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;

