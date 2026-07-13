import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/cn"
import { HugeiconsIcon } from "@hugeicons/react"

const iconVariants = cva(
  "inline-flex items-center justify-center shrink-0",
  {
    variants: {
      variant: {
        default: "",
        solid: "[&>svg]:fill-current [&>svg]:stroke-current",
        duotone: "bg-primary/10 text-primary p-1.5 rounded-lg",
        bold: "[&>svg]:stroke-[2.5px]",
        glow: "drop-shadow-[0_0_6px_currentColor]",
      },
      size: {
        default: "[&>svg]:size-5", // 20px SVG
        sm: "[&>svg]:size-4", // 16px SVG
        lg: "[&>svg]:size-6", // 24px SVG
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface IconProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "size"> {
  icon?: any
  variant?: VariantProps<typeof iconVariants>["variant"]
  size?: VariantProps<typeof iconVariants>["size"] | number
  strokeWidth?: number
}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ className, variant, size, icon: IconComponent, strokeWidth, children, ...props }, ref) => {
    const isNumericSize = typeof size === "number";
    const sizeVariant = isNumericSize ? undefined : size;
    const numericSize = isNumericSize ? size : undefined;

    return (
      <span
        ref={ref}
        className={cn(iconVariants({ variant, size: sizeVariant, className }))}
        {...props}
      >
        {IconComponent ? (
          typeof IconComponent === "function" || typeof IconComponent === "string" ? (
            <IconComponent className="size-full" />
          ) : (
            <HugeiconsIcon
              icon={IconComponent}
              className="size-full"
              strokeWidth={strokeWidth}
              size={numericSize}
            />
          )
        ) : children}
      </span>
    )
  }
)
Icon.displayName = "Icon"

export { Icon, iconVariants }
