"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DashboardSquare01Icon,
  NoteIcon,
  ComponentIcon,
  LayersIcon,
  Logout01Icon
} from "@hugeicons/core-free-icons";
import { useLang } from "../providers/lang-provider";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Icon,
} from "@apptify-labs/ui";

export function AppSidebar() {
  const { t } = useLang();
  const pathname = usePathname();

  const navItems = [
    {
      title: t.common.dashboard,
      url: "/dashboard",
      icon: DashboardSquare01Icon,
    },
    {
      title: t.common.forms,
      url: "/dashboard/forms",
      icon: NoteIcon,
    },
    {
      title: t.common.uiElements,
      url: "/dashboard/components",
      icon: ComponentIcon,
    },
    {
      title: t.common.overlays,
      url: "/dashboard/overlays",
      icon: LayersIcon,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="font-bold text-xl flex items-center gap-2">
          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-black">
            A
          </div>
          Apptify UI
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t.common.overview}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.url}>
                        <Icon icon={item.icon} variant={isActive ? "duotone" : "default"} />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Icon icon={Logout01Icon} />
                <span>{t.common.logout}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
