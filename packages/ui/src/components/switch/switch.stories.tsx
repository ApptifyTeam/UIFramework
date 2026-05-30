import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { Switch } from "./switch";
import { Label } from "@/components/label";
import * as React from "react";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
  play: async ({ canvas, userEvent }) => {
    const toggle = canvas.getByRole("switch");
    await expect(toggle).toHaveAttribute("aria-checked", "false");
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-checked", "true");
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode2" disabled />
      <Label htmlFor="airplane-mode2" className="opacity-50">
        Airplane Mode
      </Label>
    </div>
  ),
};
