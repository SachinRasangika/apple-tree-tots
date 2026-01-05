import React, { Fragment } from 'react';
import { Check } from 'lucide-react';
import { clsx } from 'clsx';
interface Step {
  label: string;
  completed?: boolean;
}
interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}
export function ProgressIndicator({
  steps,
  currentStep,
  className
}: ProgressIndicatorProps) {
  return <div className={clsx('flex items-center justify-between', className)}>
      {steps.map((step, index) => {
      const stepNumber = index + 1;
      const isCompleted = stepNumber < currentStep;
      const isCurrent = stepNumber === currentStep;
      const isUpcoming = stepNumber > currentStep;
      return <Fragment key={stepNumber}>
            <div className="flex flex-col items-center">
              <div className={clsx('w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500', {
            'bg-[#2d5555] border-[#2d5555] text-white': isCompleted,
            'bg-white border-white text-[#1a3a3a]': isCurrent,
            'bg-transparent border-white/20 text-white/40': isUpcoming
          })}>
                {isCompleted ? <Check size={20} /> : <span className="text-sm font-medium">{stepNumber}</span>}
              </div>
              <span className="text-[10px] tracking-widest uppercase mt-2 opacity-60">
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && <div className={clsx('flex-1 h-0.5 mx-2 transition-all duration-500', {
          'bg-[#2d5555]': stepNumber < currentStep,
          'bg-white/10': stepNumber >= currentStep
        })} />}
          </Fragment>;
    })}
    </div>;
}