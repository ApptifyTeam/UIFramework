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
  Grid,
} from "@apptify-labs/ui";
import { Download01Icon, Upload01Icon, ShoppingBag01Icon, ShoppingCart01Icon, PackageIcon, SlidersHorizontalIcon } from "@hugeicons/core-free-icons";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

// Mock Data
const revenueData = [
  { date: "2026-07-01", revenue: 4500, orders: 120 },
  { date: "2026-07-02", revenue: 5200, orders: 135 },
  { date: "2026-07-03", revenue: 4800, orders: 125 },
  { date: "2026-07-04", revenue: 6100, orders: 150 },
  { date: "2026-07-05", revenue: 5900, orders: 145 },
  { date: "2026-07-06", revenue: 6800, orders: 170 },
  { date: "2026-07-07", revenue: 7200, orders: 180 },
];

const topProducts = [
  {
    id: "1",
    name: "Wireless Earbuds Pro",
    category: "Electronics",
    sales: 1245,
    revenue: "$186,750",
    status: "In Stock",
  },
  {
    id: "2",
    name: "Ergonomic Office Chair",
    category: "Furniture",
    sales: 850,
    revenue: "$170,000",
    status: "Low Stock",
  },
  {
    id: "3",
    name: "Mechanical Keyboard",
    category: "Electronics",
    sales: 920,
    revenue: "$138,000",
    status: "In Stock",
  },
  {
    id: "4",
    name: "Yoga Mat",
    category: "Fitness",
    sales: 1530,
    revenue: "$45,900",
    status: "Out of Stock",
  },
];

const salesOverviewData = [
  { name: "Mon", revenue: 4200, orders: 120 },
  { name: "Tue", revenue: 5800, orders: 145 },
  { name: "Wed", revenue: 4900, orders: 132 },
  { name: "Thu", revenue: 7200, orders: 180 },
  { name: "Fri", revenue: 8500, orders: 210 },
  { name: "Sat", revenue: 9100, orders: 240 },
  { name: "Sun", revenue: 6400, orders: 165 },
];

const categorySalesData = [
  { category: "Electronics", sales: 18400, share: "40.6%" },
  { category: "Clothing", sales: 12200, share: "26.9%" },
  { category: "Home & Garden", sales: 8100, share: "17.9%" },
  { category: "Sports & Outdoors", sales: 4500, share: "9.9%" },
  { category: "Books & Media", sales: 2100, share: "4.6%" },
];

const topProductsData = [
  { name: "Wireless Earbuds Pro", sku: "SKU-8921", sales: 342, revenue: "$44,118" },
  { name: "Ergonomic Desk Chair", sku: "SKU-4412", sales: 189, revenue: "$37,611" },
  { name: "Smart Fitness Watch", sku: "SKU-7729", sales: 256, revenue: "$33,024" },
  { name: "Mechanical Keyboard", sku: "SKU-1029", sales: 198, revenue: "$25,542" },
  { name: "USB-C Docking Station", sku: "SKU-3310", sales: 412, revenue: "$24,308" },
];

const recentSalesData = [
  { id: "ORD-9421", customer: "Sarah Connor", product: "Wireless Earbuds Pro", amount: "$129.00", status: "Completed", date: "2 mins ago" },
  { id: "ORD-9420", customer: "John Doe", product: "Smart Fitness Watch", amount: "$129.00", status: "Completed", date: "15 mins ago" },
  { id: "ORD-9419", customer: "Emily Watson", product: "Ergonomic Desk Chair", amount: "$199.00", status: "Processing", date: "32 mins ago" },
  { id: "ORD-9418", customer: "Michael Brown", product: "Mechanical Keyboard", amount: "$129.00", status: "Completed", date: "1 hour ago" },
  { id: "ORD-9417", customer: "Lisa Ray", product: "USB-C Docking Station", amount: "$59.00", status: "Shipped", date: "2 hours ago" },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--primary))",
  },
  orders: {
    label: "Orders",
    color: "hsl(var(--primary) / 0.5)",
  },
};

const categoryChartConfig = {
  sales: {
    label: "Sales",
    color: "hsl(var(--primary))",
  },
};

export default function SalesAnalyticsPage() {
  return (
    <Page>
      <PageHeader>
        <div>
          <PageTitle>Sales Analytics</PageTitle>
          <PageDescription>
            Detailed performance breakdown of store revenue, order volume, and top products.
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
        <Grid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
          <StatCard
            title="Total Revenue"
            value="45,231.89"
            prefix_unit="$"
            icon={ShoppingBag01Icon}
            change="+20.1%"
            desc="from last month"
          />
          <StatCard
            title="Total Orders"
            value="2,350"
            icon={ShoppingCart01Icon}
            change="+15.2%"
            desc="from last month"
          />
          <StatCard
            title="Average Order Value"
            value="124.50"
            prefix_unit="$"
            icon={PackageIcon}
            change="-2.1%"
            desc="from last month"
          />
          <StatCard
            title="Conversion Rate"
            value="3.24"
            suffix_unit="%"
            icon={SlidersHorizontalIcon}
            change="+1.2%"
            desc="from last month"
          />
        </Grid>

        {/* Main Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>
              Daily revenue for the current week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[350px] w-full">
              <AreaChart
                data={revenueData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-revenue)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-revenue)"
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
                  tickFormatter={(value) => `$${value}`}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="var(--color-revenue)"
                  fillOpacity={1}
                  fill="url(#fillRevenue)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Top Selling Products</CardTitle>
              <CardDescription>
                Products with the highest revenue this month.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Sales</TableHead>
                    <TableHead className="text-right">Revenue</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        {product.name}
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
                                : "destructive") as "success" | "warning" | "destructive"
                          }
                        >
                          {product.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {product.sales}
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

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Sales by Category</CardTitle>
              <CardDescription>
                Revenue distribution across categories.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={categoryChartConfig}
                className="w-full"
              >
                <BarChart
                  data={categorySalesData}
                  layout="vertical"
                  margin={{ top: 0, right: 0, left: 30, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis
                    dataKey="category"
                    type="category"
                    axisLine={false}
                    tickLine={false}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="sales"
                    fill="var(--color-sales)"
                    radius={8}
                    barSize={16}
                    background={{ fill: "hsl(var(--muted))", radius: 8 }}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </PageContent>
    </Page>
  );
}
