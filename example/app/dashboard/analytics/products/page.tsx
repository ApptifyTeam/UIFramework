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
} from "recharts";

// Mock Data
const productTrendData = [
  { date: "2026-07-01", unitsSold: 120, views: 1500 },
  { date: "2026-07-02", unitsSold: 135, views: 1800 },
  { date: "2026-07-03", unitsSold: 125, views: 1650 },
  { date: "2026-07-04", unitsSold: 150, views: 2100 },
  { date: "2026-07-05", unitsSold: 145, views: 1900 },
  { date: "2026-07-06", unitsSold: 170, views: 2400 },
  { date: "2026-07-07", unitsSold: 180, views: 2600 },
];

const productPerformanceData = [
  {
    id: "PROD-001",
    name: "Wireless Noise-Cancelling Headphones",
    category: "Audio",
    stock: 145,
    status: "In Stock",
    unitsSold: 320,
    revenue: "$95,680",
  },
  {
    id: "PROD-002",
    name: "Minimalist Leather Wallet",
    category: "Accessories",
    stock: 12,
    status: "Low Stock",
    unitsSold: 850,
    revenue: "$41,650",
  },
  {
    id: "PROD-003",
    name: "Mechanical Gaming Keyboard",
    category: "Gaming",
    stock: 85,
    status: "In Stock",
    unitsSold: 215,
    revenue: "$32,035",
  },
  {
    id: "PROD-004",
    name: "Ceramic Coffee Dripper",
    category: "Kitchen",
    stock: 0,
    status: "Out of Stock",
    unitsSold: 540,
    revenue: "$18,900",
  },
  {
    id: "PROD-005",
    name: "Smart Fitness Tracker V2",
    category: "Wearables",
    stock: 310,
    status: "In Stock",
    unitsSold: 480,
    revenue: "$71,520",
  },
];

const inventoryStatusData = [
  { name: "In Stock", value: 850, fill: "hsl(var(--chart-4))" },
  { name: "Low Stock", value: 120, fill: "hsl(var(--chart-2))" },
  { name: "Out of Stock", value: 45, fill: "hsl(var(--destructive))" },
];

const trendChartConfig = {
  unitsSold: {
    label: "Units Sold",
    color: "hsl(var(--primary))",
  },
};

const inventoryChartConfig = {
  status: {
    label: "Inventory Status",
  },
  inStock: {
    label: "In Stock",
    color: "hsl(var(--chart-4))",
  },
  lowStock: {
    label: "Low Stock",
    color: "hsl(var(--chart-2))",
  },
  outOfStock: {
    label: "Out of Stock",
    color: "hsl(var(--destructive))",
  },
};

export default function ProductReportsPage() {
  return (
    <Page>
      <PageHeader>
        <div>
          <PageTitle>Product Reports</PageTitle>
          <PageDescription>
            Analyze product performance, inventory status, and sales trends.
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
                Total Units Sold
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
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,450</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 font-medium">+8.2%</span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Products
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
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,024</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 font-medium">+24</span> new products this week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Conversion Rate
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
              <div className="text-2xl font-bold">4.6%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 font-medium">+0.4%</span> from
                last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Out of Stock Items
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
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">45</div>
              <p className="text-xs text-muted-foreground">
                Requires immediate attention
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Main Chart */}
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Units Sold Over Time</CardTitle>
              <CardDescription>
                Daily product units sold for the current week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={trendChartConfig} className="h-[300px] w-full">
                <AreaChart
                  data={productTrendData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="fillUnitsSold" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="var(--color-unitsSold)"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor="var(--color-unitsSold)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
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
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="unitsSold"
                    stroke="var(--color-unitsSold)"
                    fillOpacity={1}
                    fill="url(#fillUnitsSold)"
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Inventory Status Donut Chart */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Inventory Status</CardTitle>
              <CardDescription>
                Current stock levels across all products
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={inventoryChartConfig} className="h-[300px] w-full">
                <PieChart>
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={inventoryStatusData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={80}
                    outerRadius={100}
                    strokeWidth={2}
                    paddingAngle={3}
                    cornerRadius={8}
                  >
                    {inventoryStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Product Performance Table */}
        <Card>
          <CardHeader>
            <CardTitle>Product Performance</CardTitle>
            <CardDescription>
              Detailed metrics for top-performing products.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Stock</TableHead>
                  <TableHead className="text-right">Units Sold</TableHead>
                  <TableHead className="text-right">Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productPerformanceData.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{product.name}</span>
                        <span className="text-xs text-muted-foreground">{product.id}</span>
                      </div>
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          product.status === "In Stock"
                            ? "success"
                            : product.status === "Low Stock"
                              ? "warning"
                              : "destructive"
                        }
                      >
                        {product.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{product.stock}</TableCell>
                    <TableCell className="text-right">
                      {product.unitsSold}
                    </TableCell>
                    <TableCell className="text-right">
                      {product.revenue}
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
