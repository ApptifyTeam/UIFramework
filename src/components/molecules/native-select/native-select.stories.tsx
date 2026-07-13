import type { Meta, StoryObj } from "@storybook/react-vite";
import { NativeSelect } from "./native-select";
import * as React from "react";

const meta = {
  title: "Components/NativeSelect",
  component: NativeSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[200px]">
      <NativeSelect>
        <option value="next">Next.js</option>
        <option value="vite">Vite</option>
        <option value="astro">Astro</option>
        <option value="nuxt">Nuxt.js</option>
      </NativeSelect>
    </div>
  ),
};
