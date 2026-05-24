import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";
import * as React from "react";

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-[300px]",
  },
};
