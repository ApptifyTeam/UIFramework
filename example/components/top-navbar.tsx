"use client";

import * as React from "react";
import { SidebarTrigger } from "@apptify-labs/ui";
import { Separator } from "@apptify-labs/ui";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@apptify-labs/ui";
import { ThemeSwitcher } from "./theme-switcher";
import { LangSwitcher } from "./lang-switcher";
import { usePathname } from "next/navigation";

export function TopNavbar() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(p => p);

  return (
    <header className="sticky top-0 z-10 bg-background flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {paths.map((path, index) => {
              const isLast = index === paths.length - 1;
              const href = `/${paths.slice(0, index + 1).join('/')}`;
              const label = path.charAt(0).toUpperCase() + path.slice(1);

              return (
                <React.Fragment key={path}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-2">
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
