import * as React from "react";
import { cn } from "@/utils/cn";

export type ResponsiveProp<T> =
  | T
  | {
      base?: T;
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
      "2xl"?: T;
    };

function resolveResponsiveClasses(
  prop: ResponsiveProp<number> | undefined,
  classMap: Record<string, Record<number, string>>
): string {
  if (prop === undefined) return "";
  if (typeof prop === "number") {
    return classMap.base[prop] || "";
  }
  const classes: string[] = [];
  if (prop.base) classes.push(classMap.base[prop.base]);
  if (prop.sm) classes.push(classMap.sm[prop.sm]);
  if (prop.md) classes.push(classMap.md[prop.md]);
  if (prop.lg) classes.push(classMap.lg[prop.lg]);
  if (prop.xl) classes.push(classMap.xl[prop.xl]);
  if (prop["2xl"]) classes.push(classMap["2xl"][prop["2xl"]]);

  return classes.filter(Boolean).join(" ");
}

const gridColsMap: Record<string, Record<number, string>> = {
  base: { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4", 5: "grid-cols-5", 6: "grid-cols-6", 7: "grid-cols-7", 8: "grid-cols-8", 9: "grid-cols-9", 10: "grid-cols-10", 11: "grid-cols-11", 12: "grid-cols-12" },
  sm: { 1: "sm:grid-cols-1", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-4", 5: "sm:grid-cols-5", 6: "sm:grid-cols-6", 7: "sm:grid-cols-7", 8: "sm:grid-cols-8", 9: "sm:grid-cols-9", 10: "sm:grid-cols-10", 11: "sm:grid-cols-11", 12: "sm:grid-cols-12" },
  md: { 1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4", 5: "md:grid-cols-5", 6: "md:grid-cols-6", 7: "md:grid-cols-7", 8: "md:grid-cols-8", 9: "md:grid-cols-9", 10: "md:grid-cols-10", 11: "md:grid-cols-11", 12: "md:grid-cols-12" },
  lg: { 1: "lg:grid-cols-1", 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5", 6: "lg:grid-cols-6", 7: "lg:grid-cols-7", 8: "lg:grid-cols-8", 9: "lg:grid-cols-9", 10: "lg:grid-cols-10", 11: "lg:grid-cols-11", 12: "lg:grid-cols-12" },
  xl: { 1: "xl:grid-cols-1", 2: "xl:grid-cols-2", 3: "xl:grid-cols-3", 4: "xl:grid-cols-4", 5: "xl:grid-cols-5", 6: "xl:grid-cols-6", 7: "xl:grid-cols-7", 8: "xl:grid-cols-8", 9: "xl:grid-cols-9", 10: "xl:grid-cols-10", 11: "xl:grid-cols-11", 12: "xl:grid-cols-12" },
  "2xl": { 1: "2xl:grid-cols-1", 2: "2xl:grid-cols-2", 3: "2xl:grid-cols-3", 4: "2xl:grid-cols-4", 5: "2xl:grid-cols-5", 6: "2xl:grid-cols-6", 7: "2xl:grid-cols-7", 8: "2xl:grid-cols-8", 9: "2xl:grid-cols-9", 10: "2xl:grid-cols-10", 11: "2xl:grid-cols-11", 12: "2xl:grid-cols-12" },
};

const colSpanMap: Record<string, Record<number, string>> = {
  base: { 1: "col-span-1", 2: "col-span-2", 3: "col-span-3", 4: "col-span-4", 5: "col-span-5", 6: "col-span-6", 7: "col-span-7", 8: "col-span-8", 9: "col-span-9", 10: "col-span-10", 11: "col-span-11", 12: "col-span-12" },
  sm: { 1: "sm:col-span-1", 2: "sm:col-span-2", 3: "sm:col-span-3", 4: "sm:col-span-4", 5: "sm:col-span-5", 6: "sm:col-span-6", 7: "sm:col-span-7", 8: "sm:col-span-8", 9: "sm:col-span-9", 10: "sm:col-span-10", 11: "sm:col-span-11", 12: "sm:col-span-12" },
  md: { 1: "md:col-span-1", 2: "md:col-span-2", 3: "md:col-span-3", 4: "md:col-span-4", 5: "md:col-span-5", 6: "md:col-span-6", 7: "md:col-span-7", 8: "md:col-span-8", 9: "md:col-span-9", 10: "md:col-span-10", 11: "md:col-span-11", 12: "md:col-span-12" },
  lg: { 1: "lg:col-span-1", 2: "lg:col-span-2", 3: "lg:col-span-3", 4: "lg:col-span-4", 5: "lg:col-span-5", 6: "lg:col-span-6", 7: "lg:col-span-7", 8: "lg:col-span-8", 9: "lg:col-span-9", 10: "lg:col-span-10", 11: "lg:col-span-11", 12: "lg:col-span-12" },
  xl: { 1: "xl:col-span-1", 2: "xl:col-span-2", 3: "xl:col-span-3", 4: "xl:col-span-4", 5: "xl:col-span-5", 6: "xl:col-span-6", 7: "xl:col-span-7", 8: "xl:col-span-8", 9: "xl:col-span-9", 10: "xl:col-span-10", 11: "xl:col-span-11", 12: "xl:col-span-12" },
  "2xl": { 1: "2xl:col-span-1", 2: "2xl:col-span-2", 3: "2xl:col-span-3", 4: "2xl:col-span-4", 5: "2xl:col-span-5", 6: "2xl:col-span-6", 7: "2xl:col-span-7", 8: "2xl:col-span-8", 9: "2xl:col-span-9", 10: "2xl:col-span-10", 11: "2xl:col-span-11", 12: "2xl:col-span-12" },
};

const rowSpanMap: Record<string, Record<number, string>> = {
  base: { 1: "row-span-1", 2: "row-span-2", 3: "row-span-3", 4: "row-span-4", 5: "row-span-5", 6: "row-span-6", 7: "row-span-7", 8: "row-span-8", 9: "row-span-9", 10: "row-span-10", 11: "row-span-11", 12: "row-span-12" },
  sm: { 1: "sm:row-span-1", 2: "sm:row-span-2", 3: "sm:row-span-3", 4: "sm:row-span-4", 5: "sm:row-span-5", 6: "sm:row-span-6", 7: "sm:row-span-7", 8: "sm:row-span-8", 9: "sm:row-span-9", 10: "sm:row-span-10", 11: "sm:row-span-11", 12: "sm:row-span-12" },
  md: { 1: "md:row-span-1", 2: "md:row-span-2", 3: "md:row-span-3", 4: "md:row-span-4", 5: "md:row-span-5", 6: "md:row-span-6", 7: "md:row-span-7", 8: "md:row-span-8", 9: "md:row-span-9", 10: "md:row-span-10", 11: "md:row-span-11", 12: "md:row-span-12" },
  lg: { 1: "lg:row-span-1", 2: "lg:row-span-2", 3: "lg:row-span-3", 4: "lg:row-span-4", 5: "lg:row-span-5", 6: "lg:row-span-6", 7: "lg:row-span-7", 8: "lg:row-span-8", 9: "lg:row-span-9", 10: "lg:row-span-10", 11: "lg:row-span-11", 12: "lg:row-span-12" },
  xl: { 1: "xl:row-span-1", 2: "xl:row-span-2", 3: "xl:row-span-3", 4: "xl:row-span-4", 5: "xl:row-span-5", 6: "xl:row-span-6", 7: "xl:row-span-7", 8: "xl:row-span-8", 9: "xl:row-span-9", 10: "xl:row-span-10", 11: "xl:row-span-11", 12: "xl:row-span-12" },
  "2xl": { 1: "2xl:row-span-1", 2: "2xl:row-span-2", 3: "2xl:row-span-3", 4: "2xl:row-span-4", 5: "2xl:row-span-5", 6: "2xl:row-span-6", 7: "2xl:row-span-7", 8: "2xl:row-span-8", 9: "2xl:row-span-9", 10: "2xl:row-span-10", 11: "2xl:row-span-11", 12: "2xl:row-span-12" },
};

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: ResponsiveProp<number>;
  gap?: number | string;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, columns, gap = 6, children, style, ...props }, ref) => {
    // Count valid React elements
    const childCount = React.useMemo(() => {
      let count = 0;
      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) count++;
      });
      return count;
    }, [children]);

    const colsClasses = resolveResponsiveClasses(columns, gridColsMap);

    return (
      <div
        ref={ref}
        className={cn("grid", colsClasses, className)}
        style={{
          // If no columns prop is provided, we default to the number of children (equal width)
          ...(!columns && { gridTemplateColumns: `repeat(${Math.max(1, childCount)}, minmax(0, 1fr))` }),
          gap: typeof gap === "number" ? `${gap * 0.25}rem` : gap,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Grid.displayName = "Grid";

export interface GridColProps extends React.HTMLAttributes<HTMLDivElement> {
  colSpan?: ResponsiveProp<number>;
  rowSpan?: ResponsiveProp<number>;
}

const GridCol = React.forwardRef<HTMLDivElement, GridColProps>(
  ({ className, colSpan, rowSpan, ...props }, ref) => {
    const spanClasses = resolveResponsiveClasses(colSpan, colSpanMap);
    const rowSpanClasses = resolveResponsiveClasses(rowSpan, rowSpanMap);

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-6", spanClasses, rowSpanClasses, className)}
        {...props}
      />
    );
  }
);
GridCol.displayName = "GridCol";

export { Grid, GridCol };
