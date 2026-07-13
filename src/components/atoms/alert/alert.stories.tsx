import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, AlertTitle, AlertDescription } from "./alert";
import { TerminalIcon, AlertCircleIcon, CheckmarkCircle02Icon, AlertTriangle, InformationCircleIcon } from "@hugeicons/core-free-icons";
import * as React from "react";
import { Icon } from "@/components/atoms/icon"

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "success", "warning", "info"],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert className="max-w-[500px]">
      <Icon icon={TerminalIcon} className="h-4 w-4" />
      <div>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </div>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="max-w-[500px]">
      <Icon icon={AlertCircleIcon} className="h-4 w-4" />
      <div>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </div>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert variant="success" className="max-w-[500px]">
      <Icon icon={CheckmarkCircle02Icon} className="h-4 w-4" />
      <div>
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </div>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert variant="warning" className="max-w-[500px]">
      <Icon icon={AlertTriangle} className="h-4 w-4" />
      <div>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          You are running low on storage. Please clean up files.
        </AlertDescription>
      </div>
    </Alert>
  ),
};

export const InfoAlert: Story = {
  render: () => (
    <Alert variant="info" className="max-w-[500px]">
      <Icon icon={InformationCircleIcon} className="h-4 w-4" />
      <div>
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          A new software update is available. Read more here.
        </AlertDescription>
      </div>
    </Alert>
  ),
};
