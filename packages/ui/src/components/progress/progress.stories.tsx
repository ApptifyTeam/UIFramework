import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { Progress } from "./progress";
import * as React from "react";

const meta = {
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["ai-generated"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
    className: "w-[300px]",
  },
  play: async ({ canvas }) => {
    const progress = canvas.getByRole("progressbar");
    await expect(progress).toBeVisible();
    const indicator = progress.firstElementChild;
    await expect(indicator).toHaveStyle("transform: matrix(1, 0, 0, 1, -120, 0)");
  },
};

export const Animated: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
      const timer = setTimeout(() => setValue(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress value={value} className="w-[300px]" />;
  },
};
