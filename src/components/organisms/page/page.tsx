import * as React from "react";
import { cn } from "@/utils/cn";

const Page = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8 w-full min-w-0",
      className,
    )}
    {...props}
  />
));
Page.displayName = "Page";

const PageHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center",
      className,
    )}
    {...props}
  />
));
PageHeader.displayName = "PageHeader";

const PageTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn("text-2xl font-semibold", className)}
    {...props}
  />
));
PageTitle.displayName = "PageTitle";

const PageActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-wrap items-center gap-2", className)}
    {...props}
  />
));
PageActions.displayName = "PageActions";

const PageDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-muted-foreground mt-1", className)}
    {...props}
  />
));
PageDescription.displayName = "PageDescription";

const PageContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 min-w-0 mt-6 space-y-6", className)}
    {...props}
  />
));
PageContent.displayName = "PageContent";

export { Page, PageHeader, PageTitle, PageDescription, PageActions, PageContent };
