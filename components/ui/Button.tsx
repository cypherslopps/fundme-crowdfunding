import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import Icons from "../Icons"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:ring-zinc-300 active:scale-[.99]",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-zinc-50 shadow hover:bg-blue-600/90",
        destructive:
          "shadow-sm bg-red-900 text-zinc-50 hover:bg-red-900/90",
        outline:
          "border shadow-smhover:text-zinc-900 border-zinc-800 bg-zinc-900 hover:bg-zinc-800 dark:hover:text-zinc-50",
        secondary:
          "shadow-sm bg-zinc-800 text-zinc-50 hover:bg-zinc-800/80",
        ghost: "hover:bg-zinc-800 hover:text-zinc-50",
        link: "text-[#0a63f5] underline-offset-4 hover:underline",
        transparent: "bg-transparent text-zinc-50"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-10",
        link: "text-sm",
        none: ""
      },
      width: {
        full: "w-full",
        max: "w-max",
        none: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      width: "max"
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, width, isLoading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, width, className }))}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <Icons.loader className="animate-spin size-5" />
        ) : null}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
