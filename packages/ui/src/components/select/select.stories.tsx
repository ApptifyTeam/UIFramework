import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "./select";
import * as React from "react";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="potato">Potato</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
