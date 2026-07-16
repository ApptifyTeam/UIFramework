import * as React from "react";

export type NavItemData = {
  title: string;
  url: string;
  icon?: React.ElementType | unknown;
  badge?: string;
  items?: {
    title: string;
    url: string;
    icon?: React.ElementType | unknown;
    as?: React.ElementType;
  }[];
  as?: React.ElementType;
};

export type NavGroupData = {
  group?: string;
  items: NavItemData[];
};

export type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};
