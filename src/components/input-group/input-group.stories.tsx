import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputGroup, InputGroupText } from "./input-group";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Search } from "lucide-react";
import * as React from "react";

const meta = {
  title: "Components/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Prefix: Story = {
  render: () => (
    <div className="w-[350px]">
      <InputGroup>
        <InputGroupText>https://</InputGroupText>
        <Input placeholder="example.com" />
      </InputGroup>
    </div>
  ),
};

export const Suffix: Story = {
  render: () => (
    <div className="w-[350px]">
      <InputGroup>
        <Input placeholder="username" />
        <InputGroupText>@apptify.com</InputGroupText>
      </InputGroup>
    </div>
  ),
};

export const IconPrefixButtonSuffix: Story = {
  render: () => (
    <div className="w-[350px]">
      <InputGroup>
        <InputGroupText className="px-2.5">
          <Search className="h-4 w-4 text-muted-foreground" />
        </InputGroupText>
        <Input placeholder="Search documents..." />
        <Button variant="ghost" className="h-auto rounded-none border-l border-input">
          Find
        </Button>
      </InputGroup>
    </div>
  ),
};
