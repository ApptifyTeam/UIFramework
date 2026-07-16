import * as React from "react"
import { cn } from "@/utils/cn"

const Page = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col h-full gap-6 w-full min-w-0", className)} {...props} />
  )
)
Page.displayName = "Page"

const PageHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center", className)}
      {...props}
    />
  )
)
PageHeader.displayName = "PageHeader"

const PageTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h1 ref={ref} className={cn("text-2xl font-semibold", className)} {...props} />
  )
)
PageTitle.displayName = "PageTitle"

const PageActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-wrap items-center gap-2", className)} {...props} />
  )
)
PageActions.displayName = "PageActions"

const PageContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex-1 min-w-0", className)} {...props} />
  )
)
PageContent.displayName = "PageContent"

export { Page, PageHeader, PageTitle, PageActions, PageContent }
