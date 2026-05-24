import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import * as React from "react";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  play: async ({ canvas }) => {
    // Assert fallback text is present in the DOM (initially or as fallback)
    await expect(canvas.getByText("CN")).toBeInTheDocument();
  },
};

export const Fallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://broken-link.png" alt="Fallback user" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};
