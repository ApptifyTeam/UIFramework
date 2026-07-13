import type { Meta, StoryObj } from "@storybook/react-vite";
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions } from "./item";
import { UserIcon, ShieldIcon, ChevronRightIcon } from "@hugeicons/core-free-icons";
import * as React from "react";
import { Icon } from "@/components/atoms/icon"

const meta = {
  title: "Components/Item",
  component: Item,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[320px] rounded-lg border p-1 bg-background">
      <Item>
        <ItemMedia>
          <Icon icon={UserIcon} className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>My Profile</ItemTitle>
          <ItemDescription>Manage settings & verification</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Icon icon={ChevronRightIcon} className="h-4 w-4" />
        </ItemActions>
      </Item>
      <Item>
        <ItemMedia>
          <Icon icon={ShieldIcon} className="h-4 w-4" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Security</ItemTitle>
          <ItemDescription>Access permissions & 2FA</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Icon icon={ChevronRightIcon} className="h-4 w-4" />
        </ItemActions>
      </Item>
    </div>
  ),
};
