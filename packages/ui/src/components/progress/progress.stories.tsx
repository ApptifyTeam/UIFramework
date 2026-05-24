import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";
import * as React from "react";

const meta = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
    className: "w-[300px]",
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
