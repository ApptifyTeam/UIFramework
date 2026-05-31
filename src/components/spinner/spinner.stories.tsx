import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./spinner";
import * as React from "react";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "default", "lg", "xl"],
    },
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "destructive"],
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "default",
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    size: "lg",
    variant: "primary",
  },
};

export const Destructive: Story = {
  args: {
    size: "xl",
    variant: "destructive",
  },
};
