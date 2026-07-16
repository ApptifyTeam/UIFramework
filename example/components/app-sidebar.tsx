"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DashboardSquare01Icon,
  ShoppingCart01Icon,
  PackageIcon,
  Tag01Icon,
  Megaphone01Icon,
  UserGroupIcon,
  Message01Icon,
  Settings01Icon,
  Logout01Icon,
  Analytics01Icon,
  TruckIcon,
  NoteIcon,
  ComponentIcon,
  LayersIcon,
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
      group: t.sidebar.overview,
      items: [
        {
          title: t.common.dashboard,
          url: "/dashboard",
          icon: DashboardSquare01Icon,
        },
        {
          title: t.sidebar.analytics,
          url: "/dashboard/analytics",
          icon: Analytics01Icon,
          items: [
            { title: t.sidebar.salesReports, url: "/dashboard/analytics/sales" },
            { title: t.sidebar.productReports, url: "/dashboard/analytics/products" },
            { title: t.sidebar.customerReports, url: "/dashboard/analytics/customers" },
          ],
        },
      ],
    },
    {
      group: t.sidebar.sales,
      items: [
        {
          title: t.sidebar.orders,
          url: "/dashboard/orders",
          icon: ShoppingCart01Icon,
          badge: "24",
          items: [
            { title: t.sidebar.allOrders, url: "/dashboard/orders/all" },
            { title: t.sidebar.pending, url: "/dashboard/orders/pending" },
            {
              title: t.sidebar.processing,
              url: "/dashboard/orders/processing",
            },
            {
              title: t.sidebar.returnsAndRefunds,
              url: "/dashboard/orders/returns",
            },
          ],
        },
        {
          title: t.sidebar.payments,
          url: "/dashboard/payments",
          icon: LayersIcon,
        },
        {
          title: t.sidebar.invoices,
          url: "/dashboard/invoices",
          icon: NoteIcon,
        },
      ],
    },
    {
      group: t.sidebar.catalog,
      items: [
        {
          title: t.sidebar.products,
          url: "/dashboard/products",
          icon: PackageIcon,
          items: [
            { title: t.sidebar.allProducts, url: "/dashboard/products/all" },
            { title: t.sidebar.addNew, url: "/dashboard/products/new" },
            { title: t.sidebar.drafts, url: "/dashboard/products/drafts" },
          ],
        },
        {
          title: t.sidebar.categories,
          url: "/dashboard/categories",
          icon: Tag01Icon,
        },
        {
          title: t.sidebar.brands,
          url: "/dashboard/brands",
          icon: ComponentIcon,
        },
        {
          title: t.sidebar.attributes,
          url: "/dashboard/attributes",
          icon: ComponentIcon,
        },
        {
          title: t.sidebar.inventory,
          url: "/dashboard/inventory",
          icon: LayersIcon,
          items: [
            { title: t.sidebar.stock, url: "/dashboard/inventory/stock" },
            { title: t.sidebar.warehouses, url: "/dashboard/inventory/warehouses" },
            { title: t.sidebar.stockMovements, url: "/dashboard/inventory/movements" },
          ],
        },
        {
          title: t.sidebar.reviews,
          url: "/dashboard/reviews",
          icon: ComponentIcon,
          badge: "5",
        },
      ],
    },
    {
      group: t.sidebar.customers,
      items: [
        {
          title: t.sidebar.customers,
          url: "/dashboard/customers",
          icon: UserGroupIcon,
          items: [
            { title: t.sidebar.allCustomers, url: "/dashboard/customers/all" },
            { title: t.sidebar.segments, url: "/dashboard/customers/segments" },
          ],
        },
      ],
    },
    {
      group: t.sidebar.marketing,
      items: [
        {
          title: t.sidebar.campaigns,
          url: "/dashboard/campaigns",
          icon: Megaphone01Icon,
        },
        {
          title: t.sidebar.promotions,
          url: "/dashboard/promotions",
          icon: Tag01Icon,
        },
        {
          title: t.sidebar.coupons,
          url: "/dashboard/coupons",
          icon: Tag01Icon,
        },
        {
          title: t.sidebar.affiliates,
          url: "/dashboard/affiliates",
          icon: UserGroupIcon,
        },
      ],
    },
    {
      group: t.sidebar.content,
      items: [
        {
          title: t.sidebar.banners,
          url: "/dashboard/banners",
          icon: ComponentIcon,
        },
        {
          title: t.sidebar.pages,
          url: "/dashboard/pages",
          icon: NoteIcon,
        },
        {
          title: t.sidebar.blog,
          url: "/dashboard/blog",
          icon: NoteIcon,
        },
        {
          title: t.sidebar.media,
          url: "/dashboard/media",
          icon: LayersIcon,
        },
      ],
    },
    {
      group: t.sidebar.operations,
      items: [
        {
          title: t.sidebar.shippingAndDelivery,
          url: "/dashboard/shipping",
          icon: TruckIcon,
        },
        {
          title: t.sidebar.chatAndInbox,
          url: "/dashboard/chat",
          icon: Message01Icon,
          badge: "9+",
        },
        {
          title: t.sidebar.helpdesk,
          url: "/dashboard/helpdesk",
          icon: Message01Icon,
        },
      ],
    },
    {
      group: t.sidebar.system,
      items: [
        {
          title: t.sidebar.settings,
          url: "/dashboard/settings",
          icon: Settings01Icon,
          items: [
            { title: t.sidebar.general, url: "/dashboard/settings/general" },
            {
              title: t.sidebar.paymentGateways,
              url: "/dashboard/settings/payments",
            },
            { title: t.sidebar.taxes, url: "/dashboard/settings/taxes" },
          ],
        },
        {
          title: t.sidebar.staff,
          url: "/dashboard/staff",
          icon: UserGroupIcon,
        },
        {
          title: t.sidebar.integrations,
          url: "/dashboard/integrations",
          icon: ComponentIcon,
        },
        {
          title: t.sidebar.activityLogs,
          url: "/dashboard/logs",
          icon: NoteIcon,
        },
        {
          title: t.sidebar.automations,
          url: "/dashboard/automations",
          icon: ComponentIcon,
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
