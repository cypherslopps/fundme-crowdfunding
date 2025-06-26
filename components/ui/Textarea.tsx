import * as React from "react"

import { cn } from "@/lib/utils"

interface TextareaProps extends React.ComponentProps<"textarea"> {
  label: string;
  error?: string;
}

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className, label, error, ...props }, ref) => {
  return (
    <div
        role="group"
        className="flex flex-col gap-y-1.5"
      >
        <label className="text-sm text-white/60 font-medium select-none">{label}</label>
        <textarea
          className={cn(
            "flex min-h-[120px] w-full rounded-md border bg-zinc-900 px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-zinc-800 placeholder:text-zinc-400 focus-visible:ring-blue-500/80 resize-none",
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
})
Textarea.displayName = "Textarea"

export { Textarea }
