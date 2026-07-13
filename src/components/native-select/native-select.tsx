import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          className={cn(
            "flex h-9 w-full appearance-none rounded-lg border border-input bg-transparent px-3 py-2 pr-9 text-sm shadow-sm transition-colors duration-200 ease-out placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-50">
          <ChevronDown className="h-4 w-4" />
        </span>
      </div>
    );
  }
);
NativeSelect.displayName = "NativeSelect";

export { NativeSelect };
