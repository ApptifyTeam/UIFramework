import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "./input-otp";
import * as React from "react";

const meta = {
  title: "Components/InputOTP",
  component: InputOTP,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputOTP>;

export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState("");

    return (
      <div className="space-y-2">
        <InputOTP maxLength={6} value={value} onChange={setValue}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="text-xs text-muted-foreground text-center">
          Entered value: {value || "(empty)"}
        </div>
      </div>
    );
  },
};
