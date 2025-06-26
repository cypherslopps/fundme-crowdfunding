"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Calendar } from "@/components/ui/Calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover"

interface IDateRangePickerProps {
    date: DateRange | undefined;
    setDate: (range: DateRange | undefined) => void;
    label: string;
}

function DateRangePicker({
  className,
  label,
  date,
  setDate
}: React.HTMLAttributes<IDateRangePickerProps> & IDateRangePickerProps) {
  return (
    <div 
        role="group"
        className={cn("grid gap-1.5", className)}
    >
        <label className="text-sm text-white/60 font-medium">{label}</label>
        <Popover>
            <PopoverTrigger className="w-full" asChild>
                <Button
                    id="date"
                    width="full"
                    variant={"outline"}
                    className={cn(
                    "h-12 justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon />
                    {date?.from ? (
                    date.to ? (
                        <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                        </>
                    ) : (
                        format(date.from, "LLL dd, y")
                    )
                    ) : (
                    <span>Pick a date</span>
                    )}
                </Button>
            </PopoverTrigger>
            
            <PopoverContent className="w-full p-0" align="start">
            <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
            />
            </PopoverContent>
        </Popover>
    </div>
  )
}

export default DateRangePicker;