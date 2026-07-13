import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction } from "./toast";
import { Button } from "@/components/atoms/button";
import * as React from "react";

const meta = {
  title: "Components/Toast",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Default = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <ToastProvider>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Show Toast
        </Button>
        <Toast open={open} onOpenChange={setOpen}>
          <div className="grid gap-1">
            <ToastTitle>Scheduled: Catch up</ToastTitle>
            <ToastDescription>Friday, February 10, 2023 at 5:57 PM</ToastDescription>
          </div>
          <ToastAction altText="Goto schedule page" asChild>
            <Button size="sm" variant="outline" className="h-8">Undo</Button>
          </ToastAction>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    );
  },
};
