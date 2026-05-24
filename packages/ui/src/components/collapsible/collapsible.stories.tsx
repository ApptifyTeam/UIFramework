import type { Meta, StoryObj } from "@storybook/react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./collapsible";
import { Button } from "@/components/button";
import { ChevronsUpDown } from "lucide-react";
import * as React from "react";

const meta = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            @pedro starred 3 repositories
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm shadow-sm bg-background">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm shadow-sm bg-background">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm shadow-sm bg-background">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};
