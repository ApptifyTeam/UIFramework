import * as React from "react";
import { format } from "date-fns";
import { Calendar01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/utils/cn";
import { Button } from "@/components/atoms/button";
import { Calendar } from "@/components/molecules/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/atoms/popover";
import { Icon } from "@/components/atoms/icon"

export interface DatePickerProps {
  date?: Date;
  onDateChange?: (date?: Date) => void;
  placeholder?: string;
  className?: string;
}

function DatePicker({
  date,
  onDateChange,
  placeholder = "Pick a date",
  className,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-auto h-10 px-4 rounded-full justify-start text-left font-normal shadow-none border-input",
            !date && "text-muted-foreground",
            className
          )}
        >
          <Icon icon={Calendar01Icon} className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateChange}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export { DatePicker };
