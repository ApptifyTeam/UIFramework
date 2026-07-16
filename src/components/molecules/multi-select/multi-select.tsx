import * as React from "react"
import { Tick01Icon, ChevronDownIcon } from "@hugeicons/core-free-icons"
import { cn } from "@/utils/cn"
import { Button } from "@/components/atoms/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/atoms/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/atoms/command"
import { Icon } from "@/components/atoms/icon"

export interface MultiSelectProps {
  options: { label: string; value: string }[]
  selected: string[]
  onChange: (values: string[]) => void
  placeholder?: string
  className?: string
  triggerClassName?: string
}

function MultiSelect({
  options,
  selected = [],
  onChange,
  placeholder = "Select options...",
  className,
  triggerClassName,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)

  const handleSelect = (value: string) => {
    const isSelected = selected.includes(value)
    const newSelected = isSelected
      ? selected.filter((item) => item !== value)
      : [...selected, value]
    onChange(newSelected)
  }

  const displayText = selected.length === 0
    ? placeholder
    : selected.length === 1
    ? options.find((o) => o.value === selected[0])?.label || placeholder
    : `${selected.length} Selected`

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-auto h-10 px-4 justify-between text-left font-normal shadow-none border-input",
            triggerClassName
          )}
        >
          <span className="truncate">{displayText}</span>
          <Icon icon={ChevronDownIcon} className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selected.includes(option.value)
                return (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <Icon icon={Tick01Icon} className="h-3 w-3" />
                    </div>
                    <span>{option.label}</span>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { MultiSelect }
