import type { Meta, StoryObj } from "@storybook/react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./resizable";
import * as React from "react";

const meta = {
  title: "Components/Resizable",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Horizontal = {
  render: () => (
    <div className="h-[200px] w-[500px] rounded-lg border bg-background">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold text-sm">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold text-sm">Main Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};

export const Vertical = {
  render: () => (
    <div className="h-[300px] w-[500px] rounded-lg border bg-background">
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold text-sm">Header</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold text-sm">Body</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};
