import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "./kbd";
import * as React from "react";

const meta = {
  title: "Components/Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-muted-foreground">Press</span>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
      <span className="text-sm text-muted-foreground">to open search.</span>
    </div>
  ),
};
