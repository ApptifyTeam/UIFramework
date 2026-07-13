import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataTable } from "./data-table";
import { type ColumnDef } from "@tanstack/react-table";
import * as React from "react";

const meta = {
  title: "Components/DataTable",
  component: DataTable,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<any>;

type UserPayment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const columns: ColumnDef<UserPayment>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];

const data: UserPayment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "success",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "p@example.com",
  },
  {
    id: "542a2d33",
    amount: 75,
    status: "pending",
    email: "test@example.com",
  },
];

export const Default: Story = {
  render: () => (
    <div className="w-[600px]">
      <DataTable columns={columns} data={data} />
    </div>
  ),
};

export const Empty: Story = {
  render: () => (
    <div className="w-[600px]">
      <DataTable columns={columns} data={[]} />
    </div>
  ),
};
