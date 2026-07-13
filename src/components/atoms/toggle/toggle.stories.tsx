import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "./toggle";
import { TextBoldIcon } from "@hugeicons/core-free-icons";
import * as React from "react";
import { Icon } from "@/components/atoms/icon"

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Icon icon={TextBoldIcon} className="h-4 w-4" />
    </Toggle>
  ),
};

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Toggle bold">
      <Icon icon={TextBoldIcon} className="h-4 w-4" />
    </Toggle>
  ),
};
