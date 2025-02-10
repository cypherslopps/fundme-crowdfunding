"use client";

import React from 'react'
import { debounce } from "lodash";
import { calculateTimeRemaining } from "@/lib/utils";

const CountdownTimer = () => {
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
    <div className='inline-flex text-[13px] gap-x-1 text-[#0a63f5] font-semibold'>
      <span>{timeRemaining.days} Days</span>
      
      <div>
        <span>{timeRemaining.hours}H:</span>
        <span>{timeRemaining.minutes}M:</span>
        <span>{timeRemaining.seconds}S</span>
      </div>
    </div>
  )
}

export default CountdownTimer