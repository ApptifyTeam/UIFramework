import * as React from "react"
import { SlidersHorizontalIcon } from "@hugeicons/core-free-icons"
import { cn } from "@/utils/cn"
import { Button } from "@/components/atoms/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/atoms/popover"
import { Icon } from "@/components/atoms/icon"

export interface FilterPopoverProps {
  children?: React.ReactNode
  className?: string
  contentClassName?: string
  align?: "start" | "center" | "end"
}

function FilterPopover({
  children,
  className,
  contentClassName,
  align = "end",
}: FilterPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "h-10 w-10 border-input bg-background shadow-none",
            className
          )}
        >
          <Icon
            icon={SlidersHorizontalIcon}
            className="h-4 w-4 text-muted-foreground"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-80 p-4", contentClassName)} align={align}>
        {children}
      </PopoverContent>
    </Popover>
  )
}

function FilterPopoverHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-2", className)} {...props} />
}
FilterPopoverHeader.displayName = "FilterPopoverHeader"

function FilterPopoverTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h4 className={cn("font-semibold leading-none", className)} {...props} />
}
FilterPopoverTitle.displayName = "FilterPopoverTitle"

function FilterPopoverDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />
}
FilterPopoverDescription.displayName = "FilterPopoverDescription"

function FilterPopoverSection({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-2", className)} {...props} />
}
FilterPopoverSection.displayName = "FilterPopoverSection"

function FilterPopoverSectionLabel({ className, ...props }: React.HTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("text-xs font-semibold", className)} {...props} />
}
FilterPopoverSectionLabel.displayName = "FilterPopoverSectionLabel"

export {
  FilterPopover,
  FilterPopoverHeader,
  FilterPopoverTitle,
  FilterPopoverDescription,
  FilterPopoverSection,
  FilterPopoverSectionLabel,
}
