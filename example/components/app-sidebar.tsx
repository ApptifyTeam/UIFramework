"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DashboardSquare01Icon,
  NoteIcon,
  ComponentIcon,
  LayersIcon,
  Logout01Icon,
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
  type NavGroupData,
} from "@apptify-labs/ui";

export function AppSidebar() {
  const { t } = useLang();
  const pathname = usePathname();

  const navGroups: NavGroupData[] = [
    {
      group: t.common.overview,
      items: [
        {
          title: t.common.dashboard,
          url: "/dashboard",
          icon: DashboardSquare01Icon,
        },
        {
          title: "Bank Profile",
          url: "/dashboard/bank-profile",
          icon: ComponentIcon,
          items: [
            {
              title: "Bank Information",
              url: "/dashboard/bank-profile/info",
            },
            {
              title: "Bank Products",
              url: "/dashboard/bank-profile/products",
            },
          ],
        },
        {
          title: "Orders",
          url: "/dashboard/orders",
          icon: NoteIcon,
          items: [
            {
              title: "Order Management",
              url: "/dashboard/orders/management",
            },
            {
              title: "Order Setting",
              url: "/dashboard/orders/setting",
            },
          ],
        },
        {
          title: t.common.forms,
          url: "/dashboard/forms",
          icon: NoteIcon,
          badge: "5",
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
      ],
    },
  ];

  const groupsWithLinks = navGroups.map((group) => ({
    ...group,
    items: group.items.map((item) => ({
      ...item,
      as: Link,
      items: item.items?.map((sub) => ({ ...sub, as: Link })),
    })),
  }));

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="font-bold text-xl flex items-center gap-2 min-w-0 group-data-[collapsible=icon]:justify-center">
          <div className="w-8 h-8 shrink-0 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-black">
            A
          </div>
          <span className="truncate group-data-[collapsible=icon]:hidden">
            Apptify UI
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {groupsWithLinks.map((group, index) => (
          <SidebarGroup key={index}>
            {group.group && (
              <SidebarGroupLabel>{group.group}</SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu items={group.items} currentPath={pathname} />
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip={t.common.logout}>
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
