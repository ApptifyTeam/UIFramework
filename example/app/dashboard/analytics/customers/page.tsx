"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Badge,
  Button,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  Page,
  PageHeader,
  PageTitle,
  PageDescription,
  PageActions,
  PageContent,
  Icon,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@apptify-labs/ui";
import { Download01Icon, Upload01Icon } from "@hugeicons/core-free-icons";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Pie,
  PieChart,
  Cell,
  Bar,
  BarChart,
  Tooltip,
} from "recharts";

// Mock Data
const customerGrowthData = [
  { date: "2026-07-01", newCustomers: 45, returningCustomers: 120 },
  { date: "2026-07-02", newCustomers: 52, returningCustomers: 135 },
  { date: "2026-07-03", newCustomers: 48, returningCustomers: 125 },
  { date: "2026-07-04", newCustomers: 70, returningCustomers: 150 },
  { date: "2026-07-05", newCustomers: 65, returningCustomers: 145 },
  { date: "2026-07-06", newCustomers: 85, returningCustomers: 170 },
  { date: "2026-07-07", newCustomers: 92, returningCustomers: 180 },
];

const topCustomersData = [
  {
    id: "CUST-001",
    name: "Alex Johnson",
    email: "alex.j@example.com",
    avatar: "AJ",
    orders: 24,
    status: "VIP",
    totalSpent: "$3,450.00",
    lastOrder: "2026-07-06",
  },
  {
    id: "CUST-002",
    name: "Sarah Williams",
    email: "sarah.w@example.com",
    avatar: "SW",
    orders: 18,
    status: "Active",
    totalSpent: "$1,890.50",
    lastOrder: "2026-07-05",
  },
  {
    id: "CUST-003",
    name: "Michael Chen",
    email: "m.chen@example.com",
    avatar: "MC",
    orders: 32,
    status: "VIP",
    totalSpent: "$5,120.75",
    lastOrder: "2026-07-07",
  },
  {
    id: "CUST-004",
    name: "Emma Davis",
    email: "emma.d@example.com",
    avatar: "ED",
    orders: 5,
    status: "New",
    totalSpent: "$450.00",
    lastOrder: "2026-07-02",
  },
  {
    id: "CUST-005",
    name: "James Wilson",
    email: "j.wilson@example.com",
    avatar: "JW",
    orders: 12,
    status: "Active",
    totalSpent: "$1,240.20",
    lastOrder: "2026-06-28",
  },
];

const customerSegmentsData = [
  { name: "Retail", value: 5500, fill: "hsl(var(--chart-1))" },
  { name: "Wholesale", value: 1200, fill: "hsl(var(--chart-2))" },
  { name: "VIP", value: 450, fill: "hsl(var(--chart-3))" },
  { name: "Inactive", value: 850, fill: "hsl(var(--muted))" },
];

const growthChartConfig = {
  newCustomers: {
    label: "New Customers",
    color: "hsl(var(--chart-1))",
  },
  returningCustomers: {
    label: "Returning",
    color: "hsl(var(--chart-2))",
  },
};

const segmentChartConfig = {
  segments: {
    label: "Customer Segments",
  },
  retail: {
    label: "Retail",
    color: "hsl(var(--chart-1))",
  },
  wholesale: {
    label: "Wholesale",
    color: "hsl(var(--chart-2))",
  },
  vip: {
    label: "VIP",
    color: "hsl(var(--chart-3))",
  },
  inactive: {
    label: "Inactive",
    color: "hsl(var(--muted))",
  },
};

export default function CustomerReportsPage() {
  return (
    <Page>
      <PageHeader>
        <div>
          <PageTitle>Customer Reports</PageTitle>
          <PageDescription>
            Gain insights into customer acquisition, retention, and
            segmentation.
          </PageDescription>
        </div>
        <PageActions>
          <Button variant="outline">
            <Icon icon={Upload01Icon} />
            Export CSV
          </Button>
          <Button>
            <Icon icon={Download01Icon} />
            Download Report
          </Button>
        </PageActions>
      </PageHeader>

      <PageContent>
        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Customers
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,000</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 font-medium">+12.5%</span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Users
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4,231</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 font-medium">+5.2%</span>{" "}
                active in last 30 days
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Customer Lifetime Value
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$385.20</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 font-medium">+$12.50</span>{" "}
                from last quarter
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 font-medium">-0.3%</span>{" "}
                decrease from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Main Chart: Customer Growth */}
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Customer Acquisition</CardTitle>
              <CardDescription>
                New vs Returning customers over the current week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={growthChartConfig}>
                <BarChart
                  data={customerGrowthData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) =>
                      new Date(value).toLocaleDateString("en-US", {
                        weekday: "short",
                      })
                    }
                  />
                  <YAxis tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="returningCustomers"
                    stackId="a"
                    fill="var(--color-returningCustomers)"
                    radius={[0, 0, 8, 8]}
                    barSize={16}
                  />
                  <Bar
                    dataKey="newCustomers"
                    stackId="a"
                    fill="var(--color-newCustomers)"
                    radius={[8, 8, 0, 0]}
                    barSize={16}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Customer Segments Donut Chart */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Customer Segmentation</CardTitle>
              <CardDescription>
                Distribution of customers across segments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={segmentChartConfig}
                className="flex items-center justify-center"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={customerSegmentsData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={84}
                    outerRadius={100}
                    strokeWidth={2}
                    paddingAngle={3}
                    cornerRadius={8}
                  >
                    {customerSegmentsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Top Customers Table */}
        <Card>
          <CardHeader>
            <CardTitle>Top Customers</CardTitle>
            <CardDescription>
              High-value customers based on recent activity and spending.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Orders</TableHead>
                  <TableHead className="text-right">Total Spent</TableHead>
                  <TableHead className="text-right">Last Order</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topCustomersData.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {customer.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="font-medium">{customer.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {customer.email}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          customer.status === "VIP"
                            ? "info"
                            : customer.status === "Active"
                              ? "success"
                              : "warning"
                        }
                      >
                        {customer.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {customer.orders}
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {customer.totalSpent}
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {new Date(customer.lastOrder).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        },
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </PageContent>
    </Page>
  );
}
