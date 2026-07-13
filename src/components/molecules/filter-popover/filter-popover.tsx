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
            "h-10 w-10 rounded-md border-black/5 dark:border-white/5 bg-background shadow-none",
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

export { FilterPopover }
