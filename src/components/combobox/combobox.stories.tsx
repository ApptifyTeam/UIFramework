import type { Meta, StoryObj } from "@storybook/react-vite";
import { Combobox } from "./combobox";
import * as React from "react";

const meta = {
  title: "Components/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<any>;

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState("");

    return (
      <div className="space-y-4">
        <Combobox
          options={frameworks}
          value={value}
          onValueChange={setValue}
          placeholder="Select framework..."
        />
        <div className="text-xs text-muted-foreground text-center">
          Selected framework: {value || "(none)"}
        </div>
      </div>
    );
  },
};
