import type { Meta, StoryObj } from "@storybook/react";
import { Field, FieldLabel, FieldContent, FieldDescription, FieldError } from "./field";
import { Input } from "@/components/input";
import * as React from "react";

const meta = {
  title: "Components/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Field className="w-[300px]">
      <FieldLabel>Email address</FieldLabel>
      <FieldContent>
        <Input placeholder="Enter your email" />
      </FieldContent>
      <FieldDescription>We'll never share your email with anyone.</FieldDescription>
    </Field>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <Field data-invalid className="w-[300px]">
      <FieldLabel>Email address</FieldLabel>
      <FieldContent>
        <Input placeholder="Enter your email" className="border-destructive" />
      </FieldContent>
      <FieldError>Please enter a valid email address.</FieldError>
    </Field>
  ),
};
