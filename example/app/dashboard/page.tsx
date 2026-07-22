"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  Icon,
  Button,
  DatePicker,
  MultiSelect,
  SearchBar,
  FilterPopover,
  FilterPopoverHeader,
  FilterPopoverTitle,
  FilterPopoverDescription,
  FilterPopoverSection,
  FilterPopoverSectionLabel,
  Tabs,
  TabsList,
  TabsTrigger,
  Page,
  PageHeader,
  PageTitle,
  PageDescription,
  PageActions,
  PageContent,
  Grid,
  GridCol,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Badge,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Progress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@apptify-labs/ui";
import {
  Bar,
  BarChart,
  XAxis,
  LineChart,
  Line,
  ReferenceLine,
  Cell,
} from "recharts";
import {
  ChevronDownIcon,
  SlidersHorizontalIcon,
  Download01Icon,
  ArrowUp01Icon,
  ArrowDown01Icon,
  ShoppingBag01Icon,
  PackageIcon,
  ShoppingCart01Icon,
} from "@hugeicons/core-free-icons";
import * as React from "react";

// Mock Data
const profitData = [
  { day: "23", profit: 1200 },
  { day: "28", profit: 800 },
  { day: "34", profit: 2400 },
  { day: "42", profit: 2200 },
  { day: "35", profit: 4200, active: true },
  { day: "78", profit: 3200 },
  { day: "32", profit: 1800 },
];

const salesData = [
  { day: "23", sales: 1200 },
  { day: "30", sales: 800 },
  { day: "28", sales: 1000 },
  { day: "55", sales: 1800 },
  { day: "55", sales: 3800, active: true },
  { day: "30", sales: 1600 },
  { day: "29", sales: 2000 },
];

const lineData = [
  { day: "Mon", val: 3000 },
  { day: "Tue", val: 3200 },
  { day: "Wed", val: 2800 },
  { day: "Thu", val: 3800 },
  { day: "Fri", val: 3500 },
  { day: "Sat", val: 4200 },
  { day: "Sun", val: 4650 },
];

const conversionData = [
  { day: "1", value: 80, active: true },
  { day: "2", value: 100, active: true },
  { day: "3", value: 60, active: false },
  { day: "4", value: 70, active: true },
  { day: "5", value: 50, active: false },
  { day: "6", value: 80, active: true },
  { day: "7", value: 100, active: true },
  { day: "8", value: 60, active: false },
];

const acquisitionData = [
  { day: "1", value: 90, active: true },
  { day: "2", value: 40, active: false },
  { day: "3", value: 60, active: true },
  { day: "4", value: 80, active: true },
  { day: "5", value: 50, active: false },
  { day: "6", value: 70, active: false },
  { day: "7", value: 60, active: true },
  { day: "8", value: 90, active: true },
];

const topProducts = [
  {
    name: "Wireless ANC Headphones",
    category: "Electronics",
    sales: 412,
    revenue: "$53,148",
    stockStatus: "In Stock",
    stockVariant: "default" as const,
  },
  {
    name: "Smart Fitness Watch Ultra",
    category: "Wearables",
    sales: 328,
    revenue: "$42,312",
    stockStatus: "In Stock",
    stockVariant: "default" as const,
  },
  {
    name: "Ergonomic Mechanical Keyboard",
    category: "Accessories",
    sales: 215,
    revenue: "$27,735",
    stockStatus: "Low Stock",
    stockVariant: "destructive" as const,
  },
  {
    name: "Minimalist Leather Backpack",
    category: "Lifestyle",
    sales: 184,
    revenue: "$16,376",
    stockStatus: "In Stock",
    stockVariant: "default" as const,
  },
];

const recentOrders = [
  {
    id: "#ORD-9542",
    customer: "Alex Morgan",
    email: "alex.m@example.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces",
    initials: "AM",
    items: "2 items",
    payment: "Paid",
    fulfillment: "Delivered",
    amount: "$249.00",
    date: "10 mins ago",
  },
  {
    id: "#ORD-9541",
    customer: "Sophia Chen",
    email: "sophia.c@example.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
    initials: "SC",
    items: "1 item",
    payment: "Paid",
    fulfillment: "Processing",
    amount: "$129.50",
    date: "25 mins ago",
  },
  {
    id: "#ORD-9540",
    customer: "Marcus Vance",
    email: "marcus.v@example.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces",
    initials: "MV",
    items: "3 items",
    payment: "Pending",
    fulfillment: "Processing",
    amount: "$380.00",
    date: "1 hour ago",
  },
  {
    id: "#ORD-9539",
    customer: "Elena Rostova",
    email: "elena.r@example.com",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=faces",
    initials: "ER",
    items: "1 item",
    payment: "Paid",
    fulfillment: "Shipped",
    amount: "$89.99",
    date: "2 hours ago",
  },
];

const salesChannels = [
  { name: "Direct Store", percentage: 48, revenue: "$17,450" },
  { name: "Social Media (IG/TikTok)", percentage: 28, revenue: "$10,180" },
  { name: "Marketplaces (Shopee/Lazada)", percentage: 16, revenue: "$5,820" },
  { name: "Email Campaigns", percentage: 8, revenue: "$2,908" },
];

const CustomBar = (props: {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  payload?: { active?: boolean; [key: string]: unknown };
  activeColor?: string;
}) => {
  const {
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    payload = {},
    activeColor,
  } = props;
  const isActive = payload.active;
  const radius = width / 2;
  const baseline = y + height;

  return (
    <g>
      {/* Background Track */}
      <rect
        x={x}
        y={0}
        width={width}
        height={baseline}
        fill="hsl(var(--muted))"
        rx={radius}
      />

      {/* Value Bar */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={activeColor}
        fillOpacity={isActive ? 1 : 0.3}
        stroke={isActive ? "transparent" : activeColor}
        strokeWidth={isActive ? 0 : 2}
        rx={radius}
      />
    </g>
  );
};

const CustomTick = (props: {
  x?: number;
  y?: number;
  payload?: { value: string | number };
  activeDay?: string;
  activeColor?: string;
}) => {
  const {
    x = 0,
    y = 0,
    payload = { value: "" },
    activeDay,
    activeColor,
  } = props;
  const isActive = payload.value === activeDay;

  return (
    <g transform={`translate(${x},${y})`}>
      {isActive ? (
        <circle
          cx={0}
          cy={12}
          r={4}
          fill="hsl(var(--background))"
          stroke={activeColor}
          strokeWidth={2}
        />
      ) : (
        <circle cx={0} cy={12} r={4} fill="#94a3b8" />
      )}
      <text
        x={0}
        y={34}
        textAnchor="middle"
        fill="#64748b"
        fontSize={12}
        className="font-medium"
      >
        {payload.value}
      </text>
    </g>
  );
};

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    new Date(2025, 2, 1),
  );
  const [selectedLocations, setSelectedLocations] = React.useState<string[]>([
    "loc-1",
    "loc-2",
  ]);
  const [searchQuery, setSearchQuery] = React.useState("");

  const locationOptions = [
    { label: "Main Store", value: "loc-1" },
    { label: "Online Marketplace", value: "loc-2" },
    { label: "Pop-up Store", value: "loc-3" },
  ];

  const chartConfig = {
    profit: { label: "Total Profit", color: "hsl(var(--chart-1))" },
    sales: { label: "Total Sales", color: "hsl(var(--chart-2))" },
  };

  return (
    <Page>
      <PageHeader>
        <div>
          <PageTitle>E-Commerce Sales & Operations</PageTitle>
          <PageDescription>
            Live overview of store revenue, order fulfillment, weekly insights, and customer acquisition.
          </PageDescription>
        </div>
        <PageActions>
          <DatePicker date={selectedDate} onDateChange={setSelectedDate} />
          <MultiSelect
            options={locationOptions}
            selected={selectedLocations}
            onChange={setSelectedLocations}
            placeholder="Select Channels"
          />
          <SearchBar
            expandable
            placeholder="Search orders, products..."
            onSearch={setSearchQuery}
          />
          <FilterPopover className="ml-4">
            <FilterPopoverHeader>
              <FilterPopoverTitle>Filters</FilterPopoverTitle>
              <FilterPopoverDescription>
                Customize your dashboard metrics view.
              </FilterPopoverDescription>
            </FilterPopoverHeader>
            <div className="h-px bg-border my-2" />
            <FilterPopoverSection>
              <FilterPopoverSectionLabel>
                Refresh Rate
              </FilterPopoverSectionLabel>
              <div className="text-sm font-mono text-muted-foreground">
                Live (Real-time updates)
              </div>
            </FilterPopoverSection>
          </FilterPopover>
        </PageActions>
      </PageHeader>

      <PageContent className="space-y-6">
        {/* Quick KPI Stat Cards Header */}
        <Grid columns={{ base: 1, sm: 2, lg: 4 }} gap="4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                Total Revenue (This Month)
              </span>
              <div className="p-2 bg-primary/10 text-primary rounded-lg">
                <Icon icon={ShoppingBag01Icon} className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-bold tracking-tight">$36,358</span>
              <span className="text-xs font-medium text-green-500 flex items-center gap-0.5">
                <Icon icon={ArrowUp01Icon} className="w-3 h-3" /> +14.2%
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">
              vs $31,840 last month
            </p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                Total Orders
              </span>
              <div className="p-2 bg-chart-2/10 text-chart-2 rounded-lg">
                <Icon icon={ShoppingCart01Icon} className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-bold tracking-tight">1,142</span>
              <span className="text-xs font-medium text-green-500 flex items-center gap-0.5">
                <Icon icon={ArrowUp01Icon} className="w-3 h-3" /> +8.5%
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">
              98.2% fulfillment rate
            </p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                Avg. Order Value (AOV)
              </span>
              <div className="p-2 bg-chart-1/10 text-chart-1 rounded-lg">
                <Icon icon={PackageIcon} className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-bold tracking-tight">$84.50</span>
              <span className="text-xs font-medium text-green-500 flex items-center gap-0.5">
                <Icon icon={ArrowUp01Icon} className="w-3 h-3" /> +3.8%
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">
              +$3.10 vs last week
            </p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                Conversion Rate
              </span>
              <div className="p-2 bg-purple-500/10 text-purple-500 rounded-lg">
                <Icon icon={SlidersHorizontalIcon} className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-bold tracking-tight">3.42%</span>
              <span className="text-xs font-medium text-red-500 flex items-center gap-0.5">
                <Icon icon={ArrowDown01Icon} className="w-3 h-3" /> -0.4%
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-1">
              Cart abandonment: 64.1%
            </p>
          </Card>
        </Grid>

        {/* Main Dashboard Body */}
        <Grid columns={{ base: 1, lg: 8, xl: 12 }}>
          {/* Left Column: Revenue & Sales Charts */}
          <GridCol colSpan={{ lg: 8, xl: 6 }}>
            <Card className="flex-1 min-h-[380px]">
              <CardHeader className="flex flex-row items-start justify-between pb-8">
                <div className="space-y-1">
                  <CardTitle className="text-3xl font-bold tracking-tight">
                    $33,500
                  </CardTitle>
                  <CardDescription className="text-sm font-medium">
                    Total Net Profit
                  </CardDescription>
                </div>
                <Tabs defaultValue="j">
                  <TabsList>
                    <TabsTrigger value="j">Jan</TabsTrigger>
                    <TabsTrigger value="m">Feb</TabsTrigger>
                    <TabsTrigger value="a">Mar</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent>
                <div className="h-[260px] w-full">
                  <ChartContainer
                    config={chartConfig}
                    className="h-full w-full pl-[80px]"
                  >
                    <BarChart
                      data={profitData}
                      margin={{ top: 0, right: 0, left: 0, bottom: 40 }}
                      barGap={0}
                      barSize={16}
                    >
                      <ReferenceLine
                        y={2000}
                        stroke="#cbd5e1"
                        strokeDasharray="3 3"
                        label={{
                          position: "left",
                          value: "Monthly Target",
                          fill: "#94a3b8",
                          fontSize: 12,
                        }}
                      />
                      <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        tick={
                          <CustomTick
                            activeDay="35"
                            activeColor="hsl(var(--chart-1))"
                          />
                        }
                      />
                      <ChartTooltip
                        content={<ChartTooltipContent />}
                        cursor={false}
                      />
                      <Bar
                        dataKey="profit"
                        shape={<CustomBar activeColor="hsl(var(--chart-1))" />}
                      />
                    </BarChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1 min-h-[380px]">
              <CardHeader className="flex flex-row items-start justify-between pb-8">
                <div className="space-y-1">
                  <CardTitle className="text-3xl font-bold tracking-tight">
                    2,242
                  </CardTitle>
                  <CardDescription className="text-sm font-medium">
                    Total Order Volume
                  </CardDescription>
                </div>
                <Tabs defaultValue="j">
                  <TabsList>
                    <TabsTrigger value="j">Jan</TabsTrigger>
                    <TabsTrigger value="m">Feb</TabsTrigger>
                    <TabsTrigger value="a">Mar</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent>
                <div className="h-[260px] w-full">
                  <ChartContainer
                    config={chartConfig}
                    className="h-full w-full pl-[80px]"
                  >
                    <BarChart
                      data={salesData}
                      margin={{ top: 0, right: 0, left: 0, bottom: 40 }}
                      barGap={0}
                      barSize={16}
                    >
                      <ReferenceLine
                        y={1000}
                        stroke="#cbd5e1"
                        strokeDasharray="3 3"
                        label={{
                          position: "left",
                          value: "Min Baseline",
                          fill: "#94a3b8",
                          fontSize: 12,
                        }}
                      />
                      <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        tick={
                          <CustomTick
                            activeDay="55"
                            activeColor="hsl(var(--chart-2))"
                          />
                        }
                      />
                      <ChartTooltip
                        content={<ChartTooltipContent />}
                        cursor={false}
                      />
                      <Bar
                        dataKey="sales"
                        shape={<CustomBar activeColor="hsl(var(--chart-2))" />}
                      />
                    </BarChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </GridCol>

          {/* Middle Column: Performance & Sales Channels */}
          <GridCol colSpan={{ lg: 4, xl: 3 }}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-6">
                <CardTitle className="text-lg font-medium">
                  Conversion & Growth
                </CardTitle>
                <Select defaultValue="30d">
                  <SelectTrigger className="h-8 w-auto">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent align="end">
                    <SelectItem value="12m">12 Months</SelectItem>
                    <SelectItem value="6m">6 Months</SelectItem>
                    <SelectItem value="30d">30 Days</SelectItem>
                    <SelectItem value="7d">7 Days</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="h-[75px] w-full">
                    <ChartContainer
                      config={{ value: { color: "hsl(var(--chart-1))" } }}
                      className="h-full w-full"
                    >
                      <BarChart
                        data={conversionData}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        barSize={8}
                      >
                        <Bar dataKey="value" radius={4}>
                          {conversionData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={
                                entry.active
                                  ? "hsl(var(--chart-1))"
                                  : "hsl(var(--muted))"
                              }
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ChartContainer>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-1">
                    <span className="text-muted-foreground">
                      Conversion Rate Growth
                    </span>
                    <span className="text-chart-1 font-medium">+20%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-[75px] w-full">
                    <ChartContainer
                      config={{ value: { color: "hsl(var(--chart-1))" } }}
                      className="h-full w-full"
                    >
                      <BarChart
                        data={acquisitionData}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        barSize={8}
                      >
                        <Bar dataKey="value" radius={4}>
                          {acquisitionData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={
                                entry.active
                                  ? "hsl(var(--chart-1))"
                                  : "hsl(var(--muted))"
                              }
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ChartContainer>
                  </div>
                  <div className="flex justify-between items-center text-sm pt-1 border-b border-border/50 pb-4">
                    <span className="text-muted-foreground">
                      New Customer Acquisition
                    </span>
                    <span className="text-chart-1 font-medium">+18%</span>
                  </div>
                </div>

                {/* Sales Channels Breakdown */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Sales Channel Share
                  </h4>
                  {salesChannels.map((channel) => (
                    <div key={channel.name} className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span>{channel.name}</span>
                        <span className="text-muted-foreground">
                          {channel.revenue} ({channel.percentage}%)
                        </span>
                      </div>
                      <Progress value={channel.percentage} className="h-1.5" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Selling Products */}
            <Card>
              <CardHeader className="pb-4">
                <CardDescription className="text-xs font-semibold uppercase tracking-wider">
                  Best Sellers
                </CardDescription>
                <CardTitle className="text-lg font-medium">
                  Top Selling Products
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topProducts.map((item, idx) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-3 rounded-xl border border-border"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full border border-chart-2/40 flex items-center justify-center text-xs font-semibold text-chart-2 bg-chart-2/5">
                        #{idx + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium line-clamp-1">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.category} • {item.sales} sold
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1">
                      <Badge variant={item.stockVariant} className="text-[10px] px-1.5 py-0">
                        {item.stockStatus}
                      </Badge>
                      <p className="text-xs font-bold">{item.revenue}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </GridCol>

          {/* Right Column: Weekly Report Card */}
          <GridCol colSpan={{ lg: 4, xl: 3 }}>
            <Card className="h-full border-border shadow-sm flex flex-col justify-between">
              <div>
                <CardHeader className="pb-4 border-b border-border/60">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-chart-1/10 rounded-lg text-chart-1">
                        <Icon icon={SlidersHorizontalIcon} className="w-4 h-4" />
                      </div>
                      <div>
                        <CardTitle className="text-base font-semibold">
                          Weekly Report
                        </CardTitle>
                        <CardDescription className="text-xs">
                          Jul 15 – Jul 21 (Week 29)
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[10px] font-mono">
                      WoW Digest
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-5 space-y-5">
                  {/* Revenue Sparkline */}
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">
                      Weekly Revenue Trend
                    </span>
                    <div className="flex items-end justify-between mt-1">
                      <p className="text-3xl font-bold tracking-tight">$12,450</p>
                      <div className="w-24 h-10">
                        <ChartContainer
                          config={chartConfig}
                          className="w-full h-full"
                        >
                          <LineChart data={lineData}>
                            <Line
                              type="monotone"
                              dataKey="val"
                              stroke="hsl(var(--chart-1))"
                              strokeWidth={2.5}
                              dot={false}
                            />
                          </LineChart>
                        </ChartContainer>
                      </div>
                    </div>
                    <p className="text-xs text-green-500 font-medium mt-1 flex items-center gap-1">
                      <Icon icon={ArrowUp01Icon} className="w-3.5 h-3.5" />
                      +12.5% WoW{" "}
                      <span className="text-muted-foreground font-normal">
                        (vs $11,060 last week)
                      </span>
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="space-y-3 pt-3 border-t border-border/50">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Weekly Operational Stats
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="p-3 bg-muted/40 rounded-xl border border-border/40">
                        <p className="text-xs text-muted-foreground">Orders Completed</p>
                        <p className="text-lg font-semibold mt-0.5">348</p>
                        <span className="text-[10px] text-green-500 font-medium">
                          +8.2% WoW
                        </span>
                      </div>
                      <div className="p-3 bg-muted/40 rounded-xl border border-border/40">
                        <p className="text-xs text-muted-foreground">Avg Order Value</p>
                        <p className="text-lg font-semibold mt-0.5">$78.20</p>
                        <span className="text-[10px] text-green-500 font-medium">
                          +$2.40 WoW
                        </span>
                      </div>
                      <div className="p-3 bg-muted/40 rounded-xl border border-border/40">
                        <p className="text-xs text-muted-foreground">Return / Refund</p>
                        <p className="text-lg font-semibold mt-0.5">1.2%</p>
                        <span className="text-[10px] text-green-500 font-medium">
                          -0.3% WoW
                        </span>
                      </div>
                      <div className="p-3 bg-muted/40 rounded-xl border border-border/40">
                        <p className="text-xs text-muted-foreground">Top Category</p>
                        <p className="text-sm font-semibold mt-0.5 line-clamp-1">
                          Electronics
                        </p>
                        <span className="text-[10px] text-muted-foreground">
                          42% total sales
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Weekly Insight Quote */}
                  <div className="p-3 bg-chart-1/5 rounded-xl border border-chart-1/20 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">💡 Insight:</span>{" "}
                    Social media ad spend drove a +24% increase in weekend traffic. Wireless audio category holds highest margin.
                  </div>
                </CardContent>
              </div>

              <div className="p-5 pt-0">
                <Button variant="outline" className="w-full justify-center gap-2">
                  <Icon icon={Download01Icon} className="w-4 h-4" />
                  Download Full Weekly PDF
                </Button>
              </div>
            </Card>
          </GridCol>
        </Grid>

        {/* Bottom Full-width Section: Live Recent Orders Table */}
        <Card className="mt-6">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div>
              <CardTitle className="text-lg font-semibold">
                Recent Orders & Fulfillment
              </CardTitle>
              <CardDescription className="text-xs">
                Real-time transaction log across all connected sales channels.
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              View All Orders
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Fulfillment</TableHead>
                  <TableHead className="text-right">Total Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium font-mono text-xs">
                      {order.id}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <Avatar className="h-7 w-7">
                          <AvatarImage src={order.avatar} alt={order.customer} />
                          <AvatarFallback className="text-[10px]">
                            {order.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-xs font-medium leading-none">
                            {order.customer}
                          </p>
                          <p className="text-[10px] text-muted-foreground mt-0.5">
                            {order.email}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {order.items}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={order.payment === "Paid" ? "default" : "secondary"}
                        className="text-[10px] px-2 py-0.5"
                      >
                        {order.payment}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.fulfillment === "Delivered"
                            ? "default"
                            : order.fulfillment === "Shipped"
                            ? "outline"
                            : "secondary"
                        }
                        className="text-[10px] px-2 py-0.5"
                      >
                        {order.fulfillment}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-semibold text-xs">
                      {order.amount}
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

