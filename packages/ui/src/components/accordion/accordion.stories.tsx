import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./accordion";
import * as React from "react";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  render: () => (
    <div className="w-[500px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the design tokens.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It has smooth accordion-down and accordion-up height animations.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
