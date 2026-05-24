import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePicker } from "./date-picker";
import * as React from "react";

const meta = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>();

    return <DatePicker date={date} onDateChange={setDate} />;
  },
};
