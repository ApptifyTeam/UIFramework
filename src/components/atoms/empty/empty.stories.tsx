import type { Meta, StoryObj } from "@storybook/react-vite";
import { Empty, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "./empty";
import { Button } from "@/components/atoms/button";
import { FolderOpenIcon } from "@hugeicons/core-free-icons";
import * as React from "react";
import { Icon } from "@/components/atoms/icon"

const meta = {
  title: "Components/Empty",
  component: Empty,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Empty>
      <EmptyMedia>
        <Icon icon={FolderOpenIcon} className="h-10 w-10 text-muted-foreground" />
      </EmptyMedia>
      <EmptyTitle>No files uploaded</EmptyTitle>
      <EmptyDescription>
        You haven't uploaded any documents yet. Get started by uploading your first database dump or configuration sheet.
      </EmptyDescription>
      <EmptyContent>
        <Button>Upload File</Button>
      </EmptyContent>
    </Empty>
  ),
};
