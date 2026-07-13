import type { Meta, StoryObj } from "@storybook/react-vite";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./hover-card";
import { CalendarDaysIcon } from "@hugeicons/core-free-icons";
import * as React from "react";
import { Icon } from "@/components/icon"

const meta = {
  title: "Components/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="https://twitter.com/nextjs"
          target="_blank"
          rel="noreferrer"
          className="rounded-md text-sm font-semibold underline-offset-4 hover:underline"
        >
          @nextjs
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-sm">
            NY
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <Icon icon={CalendarDaysIcon} className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
