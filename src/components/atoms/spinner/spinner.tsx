import * as React from "react"
import { Loading01Icon } from "@hugeicons/core-free-icons"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/cn"
import { Icon } from "@/components/atoms/icon"

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
  extends Omit<React.ComponentPropsWithoutRef<typeof Icon>, "size" | "variant">,
    VariantProps<typeof spinnerVariants> {}

function Spinner({ className, variant, size, strokeWidth, ...props }: SpinnerProps) {
  const strokeWidthNum = typeof strokeWidth === "string" ? parseFloat(strokeWidth) : strokeWidth;
  return (
    <Icon
      icon={Loading01Icon}
      role="status"
      aria-label="Loading"
      className={cn(spinnerVariants({ variant, size }), className)}
      strokeWidth={strokeWidthNum}
      {...props}
    />
  )
}

export { Spinner, spinnerVariants }
