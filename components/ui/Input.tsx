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
        <label className="text-sm text-white/60 font-medium select-none">{label}</label>
        <input
          type={type}
          className={cn(
            "flex h-12 w-full bg-zinc-900 rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-zinc-800 file:text-zinc-50 placeholder:text-zinc-400 dark:focus-visible:ring-blue-500/80",
            className,
            error ? "border-error dark:border-error dark:focus-visible:ring-transparent focus-visible:ring-transparent" : ""
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="text-xs sm:text-sm text-error">{error}</span>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }

