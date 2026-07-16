"use client";

import { SidebarProvider, SidebarInset } from "@apptify-labs/ui";
import { AppSidebar } from "../../components/app-sidebar";
import { TopNavbar } from "../../components/top-navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <TopNavbar />
        <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-full min-w-0 overflow-x-hidden">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
