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
        <label className="text-sm text-white/60 font-medium">{label}</label>
        <textarea
          className={cn(
            "flex min-h-[120px] w-full rounded-md border border-zinc-200 bg-zinc-900 px-3 py-2 text-base shadow-sm placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300 resize-none",
            className
          )}
          ref={ref}
          {...props}
        />
    </div>
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
