import * as React from "react"
import { Loader2Icon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/cn"

const spinnerVariants = cva(
  "animate-spin shrink-0",
  {
    variants: {
      variant: {
        default: "text-muted-foreground",
        primary: "text-primary",
        secondary: "text-secondary",
        destructive: "text-destructive",
      },
      size: {
        xs: "size-3",
        sm: "size-4",
        default: "size-6",
        lg: "size-8",
        xl: "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface SpinnerProps
  extends React.ComponentProps<"svg">,
    VariantProps<typeof spinnerVariants> {}

function Spinner({ className, variant, size, ...props }: SpinnerProps) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn(spinnerVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Spinner, spinnerVariants }
