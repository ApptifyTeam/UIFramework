import type { Meta, StoryObj } from "@storybook/react";
import { Direction } from "./direction";
import * as React from "react";

const meta = {
  title: "Components/Direction",
  component: Direction,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Direction>;

export default meta;
type Story = StoryObj<any>;

export const LTR: Story = {
  render: () => (
    <Direction dir="ltr">
      <div className="text-sm">
        This text is Left-to-Right (LTR): <strong>Hello World!</strong>
      </div>
    </Direction>
  ),
};

export const RTL: Story = {
  render: () => (
    <Direction dir="rtl">
      <div className="text-sm">
        This text is Right-to-Left (RTL): <strong>مرحبا بالعالم!</strong>
      </div>
    </Direction>
  ),
};
