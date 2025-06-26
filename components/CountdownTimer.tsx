"use client";

import React from 'react'
import { debounce } from "lodash";
import { calculateTimeRemaining, cn } from "@/lib/utils";

const CountdownTimer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    const targetDate = new Date("14 Feb, 2025");
    const [timeRemaining, setTimeRemaining] = React.useState(calculateTimeRemaining(targetDate));


    const debouncedSetTimeRemaining = React.useCallback(
        debounce(() => {
            setTimeRemaining(calculateTimeRemaining(targetDate));
        }, 100),
        [targetDate]
    );

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            debouncedSetTimeRemaining();
        }, 1000);

        return () => clearInterval(intervalId);
    }, [debouncedSetTimeRemaining, targetDate]);

  return (
    <div 
      className={cn('inline-flex items-center text-[13px] font-medium bg-blue-500/10 text-blue-700 px-2 py-0.5 gap-x-1.5', className)}
      {...props}
    >
      <span>{timeRemaining.days} Day{timeRemaining.days > 1 ? "s" : ""}</span>
      
      <div>
        <span>{timeRemaining.hours}h:</span>
        <span>{timeRemaining.minutes}m:</span>
        <span>{timeRemaining.seconds}s</span>
      </div>
    </div>
  )
}

export default CountdownTimer