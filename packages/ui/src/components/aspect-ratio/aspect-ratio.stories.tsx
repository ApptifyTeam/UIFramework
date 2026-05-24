import type { Meta, StoryObj } from "@storybook/react-vite";
import { AspectRatio } from "./aspect-ratio";
import * as React from "react";

const meta = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SixteenByNine: Story = {
  render: () => (
    <div className="w-[450px] overflow-hidden rounded-md border bg-muted">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&auto=format&fit=crop"
          alt="Scenic view"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  render: () => (
    <div className="w-[300px] overflow-hidden rounded-md border bg-muted">
      <AspectRatio ratio={1}>
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&auto=format&fit=crop"
          alt="Scenic view"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  ),
};
