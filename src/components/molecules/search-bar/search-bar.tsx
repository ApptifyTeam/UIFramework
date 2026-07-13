import * as React from "react"
import { Search01Icon } from "@hugeicons/core-free-icons"
import { cn } from "@/utils/cn"
import { Icon } from "@/components/atoms/icon"

export interface SearchBarProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onSearch?: (value: string) => void
  onChange?: (value: string) => void
  expandable?: boolean
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, onSearch, onChange, expandable = true, placeholder = "Search...", ...props }, ref) => {
    const [value, setValue] = React.useState("")
    const [isFocused, setIsFocused] = React.useState(false)
    const localRef = React.useRef<HTMLInputElement>(null)
    const activeRef = (ref as React.RefObject<HTMLInputElement>) || localRef

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value
      setValue(val)
      onSearch?.(val)
      onChange?.(val)
    }

    const handleContainerClick = () => {
      if (expandable && !isFocused) {
        activeRef.current?.focus()
      }
    }

    return (
      <div
        className={cn(
          "relative flex items-center h-10 transition-all duration-300 rounded-full border border-input bg-background shadow-none",
          expandable
            ? isFocused || value
              ? "w-[240px] px-3"
              : "w-10 justify-center cursor-pointer hover:bg-accent"
            : "w-full px-3",
          className
        )}
        onClick={handleContainerClick}
      >
        <Icon
          icon={Search01Icon}
          className={cn(
            "h-4 w-4 text-muted-foreground shrink-0 transition-colors",
            isFocused && "text-foreground"
          )}
        />
        <input
          ref={activeRef}
          type="search"
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={expandable ? (isFocused ? placeholder : "") : placeholder}
          className={cn(
            "bg-transparent text-sm outline-none border-none p-0 focus:ring-0 placeholder:text-muted-foreground transition-all duration-300",
            expandable
              ? isFocused || value
                ? "w-full ml-2 opacity-100"
                : "w-0 opacity-0 pointer-events-none"
              : "w-full ml-2"
          )}
          {...props}
        />
      </div>
    )
  }
)
SearchBar.displayName = "SearchBar"

export { SearchBar }
