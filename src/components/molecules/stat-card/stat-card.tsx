import * as React from "react";
import { ArrowUpRight01Icon, ArrowDownRight01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/utils/cn";
import { Card } from "@/components/molecules/card";
import { Icon } from "@/components/atoms/icon";

export interface StatCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /**
   * Title / Header label of the metric card
   * e.g., "Total Revenue", "Conversion Rate"
   */
  title?: React.ReactNode;

  /**
   * Main metric value
   * e.g., "36,358", 1142, "3.42%"
   */
  value?: React.ReactNode;

  /**
   * Unit string or element placed BEFORE the value
   * e.g., "$", "฿", "€"
   */
  prefixUnit?: React.ReactNode;
  /** Alias for snake_case */
  prefix_unit?: React.ReactNode;

  /**
   * Unit string or element placed AFTER the value
   * Renders with slightly smaller font size and muted color
   * e.g., "THB", "ชิ้น", "%", "items", "USD"
   */
  suffixUnit?: React.ReactNode;
  /** Alias for snake_case */
  suffix_unit?: React.ReactNode;

  /**
   * Icon displayed at the top right of the card
   * Can be a Hugeicons object, custom SVG, or React element
   */
  icon?: any;

  /**
   * Custom Tailwind classes for the icon background container
   * Default: "bg-primary/10 text-primary" for uniform consistency across all cards
   */
  iconBgClassName?: string;

  /**
   * Value indicating change/trend percentage or text
   * Renders as a pill badge (e.g., "15.8% ↗" or "34.0% ↘")
   */
  change?: React.ReactNode;
  /** Alias for change */
  changeValue?: React.ReactNode;
  change_value?: React.ReactNode;

  /**
   * Trend direction for badge & arrow icon styling
   * - "positive" / "up": Green Pill Badge + Up-right arrow icon
   * - "negative" / "down": Red Pill Badge + Down-right arrow icon
   * - "neutral": Muted grey Pill Badge
   * - "auto": Auto-detected from change (+ or positive -> green, - -> red)
   */
  trend?: "positive" | "negative" | "neutral" | "up" | "down" | "auto";

  /**
   * Invert trend colors (e.g., for Churn Rate or Out of Stock where decrease is positive/green)
   */
  invertTrend?: boolean;

  /**
   * Custom trend icon (replaces default up/down arrow icons)
   */
  trendIcon?: React.ReactNode;

  /**
   * Description / subtitle text placed at the bottom of the card
   * e.g., "vs $31,840 last month", "Requires immediate attention"
   */
  description?: React.ReactNode;
  /** Alias for desc */
  desc?: React.ReactNode;

  /**
   * Custom badge or element rendered at top right alongside/replaces icon
   */
  badge?: React.ReactNode;

  /**
   * Custom footer container (e.g. mini chart sparkline, progress bar)
   */
  footer?: React.ReactNode;

  /**
   * Text color / style variant for value
   */
  valueVariant?: "default" | "destructive" | "primary" | "muted";
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      className,
      title,
      value,
      prefixUnit,
      prefix_unit,
      suffixUnit,
      suffix_unit,
      icon,
      iconBgClassName,
      change,
      changeValue,
      change_value,
      trend = "auto",
      invertTrend = false,
      trendIcon: customTrendIcon,
      description,
      desc,
      badge,
      footer,
      valueVariant = "default",
      ...props
    },
    ref
  ) => {
    const displayPrefix = prefixUnit ?? prefix_unit;
    const displaySuffix = suffixUnit ?? suffix_unit;
    const displayChange = change ?? changeValue ?? change_value;
    const displayDesc = description ?? desc;

    // Determine trend direction
    let calculatedTrend = trend;
    if (!calculatedTrend || calculatedTrend === "auto") {
      if (typeof displayChange === "string") {
        const trimmed = displayChange.trim();
        if (trimmed.startsWith("-")) {
          calculatedTrend = "negative";
        } else if (trimmed.startsWith("+")) {
          calculatedTrend = "positive";
        } else {
          calculatedTrend = "positive";
        }
      } else if (typeof displayChange === "number") {
        calculatedTrend = displayChange < 0 ? "negative" : "positive";
      } else {
        calculatedTrend = "positive";
      }
    }

    if (invertTrend) {
      if (calculatedTrend === "positive" || calculatedTrend === "up") {
        calculatedTrend = "negative";
      } else if (calculatedTrend === "negative" || calculatedTrend === "down") {
        calculatedTrend = "positive";
      }
    }

    const isPositive = calculatedTrend === "positive" || calculatedTrend === "up";
    const isNegative = calculatedTrend === "negative" || calculatedTrend === "down";

    // Pill Badge Styling (Matching exact user screenshot)
    const trendBadgeClass = isPositive
      ? "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
      : isNegative
      ? "bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 border-rose-500/20"
      : "bg-muted text-muted-foreground border-transparent";

    const defaultTrendIcon = isPositive ? (
      <Icon icon={ArrowUpRight01Icon} className="w-3 h-3" />
    ) : isNegative ? (
      <Icon icon={ArrowDownRight01Icon} className="w-3 h-3" />
    ) : null;

    const renderedTrendIcon = customTrendIcon ?? defaultTrendIcon;

    const valueColorClass =
      valueVariant === "destructive"
        ? "text-destructive dark:text-red-400"
        : valueVariant === "primary"
        ? "text-primary"
        : valueVariant === "muted"
        ? "text-muted-foreground"
        : "text-foreground";

    return (
      <Card
        ref={ref}
        className={cn(
          "p-4 md:p-5 flex flex-col justify-between transition-all duration-200 hover:border-foreground/15 shadow-none",
          className
        )}
        {...props}
      >
        <div>
          {/* Header Row: Title & Icon/Badge */}
          {(title || icon || badge) && (
            <div className="flex items-center justify-between gap-2 mb-3">
              {title && (
                <span className="text-sm font-medium text-foreground/70 line-clamp-1">
                  {title}
                </span>
              )}
              <div className="flex items-center gap-2 shrink-0">
                {badge}
                {icon && (
                  <div
                    className={cn(
                      "w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0",
                      iconBgClassName
                    )}
                  >
                    {typeof icon === "function" || typeof icon === "object" ? (
                      <Icon icon={icon} className="w-4.5 h-4.5" />
                    ) : (
                      icon
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Main Metric Value Row */}
          <div className="flex items-baseline tracking-tight">
            {displayPrefix && (
              <span className={cn("text-2xl font-bold tracking-tight mr-0.5", valueColorClass)}>
                {displayPrefix}
              </span>
            )}
            <span className={cn("text-2xl font-bold tracking-tight", valueColorClass)}>
              {value}
            </span>
            {displaySuffix && (
              <span className="text-xs font-normal text-muted-foreground/80 ml-1.5 leading-none">
                {displaySuffix}
              </span>
            )}
          </div>

          {/* Bottom Row: Trend Badge + Description inline */}
          {( (displayChange !== undefined && displayChange !== null) || displayDesc ) && (
            <div className="flex items-center gap-1.5 mt-2 flex-wrap">
              {displayChange !== undefined && displayChange !== null && (
                <div
                  className={cn(
                    "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-semibold border shrink-0 leading-none",
                    trendBadgeClass
                  )}
                >
                  {renderedTrendIcon}
                  <span>{displayChange}</span>
                </div>
              )}
              {displayDesc && (
                <span className="text-[11px] text-muted-foreground leading-none">
                  {displayDesc}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Optional Footer Container */}
        {footer && <div className="mt-3 pt-2 border-t border-border/50">{footer}</div>}
      </Card>
    );
  }
);

StatCard.displayName = "StatCard";

// Alias export StatsCard
const StatsCard = StatCard;

export { StatCard, StatsCard };
