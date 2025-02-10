import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  label: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement,InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <div
        role="group"
        className="flex flex-col gap-y-1.5"
      >
        <label className="text-sm text-white/60 font-medium">{label}</label>
        <input
          type={type}
          className={cn(
            "flex h-12 w-full bg-zinc-900 rounded-md border border-zinc-200 px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-zinc-800 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }

