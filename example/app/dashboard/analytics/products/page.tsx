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
  StatCard,
} from "@apptify-labs/ui";
import { Download01Icon, Upload01Icon, PackageIcon, ShoppingBag01Icon, SlidersHorizontalIcon, AlertCircleIcon } from "@hugeicons/core-free-icons";
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
          <StatCard
            title="Total Units Sold"
            value="12,450"
            icon={PackageIcon}
            change="+8.2%"
            desc="from last month"
          />
          <StatCard
            title="Active Products"
            value="1,024"
            icon={ShoppingBag01Icon}
            change="+24"
            desc="new products this week"
          />
          <StatCard
            title="Avg. Conversion Rate"
            value="4.6"
            suffix_unit="%"
            icon={SlidersHorizontalIcon}
            change="+0.4%"
            desc="from last month"
          />
          <StatCard
            title="Out of Stock Items"
            value="45"
            valueVariant="destructive"
            icon={AlertCircleIcon}
            desc="Requires immediate attention"
          />
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
                    innerRadius={84}
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
                        className=""
                        variant={
                          (product.status === "In Stock"
                            ? "success"
                            : product.status === "Low Stock"
                              ? "warning"
                              : "destructive")
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
