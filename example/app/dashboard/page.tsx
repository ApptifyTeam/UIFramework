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
} from "@hugeicons/core-free-icons";
import * as React from "react";

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
  { day: "1", val: 3000 },
  { day: "2", val: 3200 },
  { day: "3", val: 2800 },
  { day: "4", val: 3800 },
  { day: "5", val: 3500 },
  { day: "6", val: 4200 },
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
      {/* Background Track (Always spans full height down to baseline) */}
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

  // y is the bottom line of the chart. We'll place the dot below y, and text below the dot.
  return (
    <g transform={`translate(${x},${y})`}>
      {/* Dot */}
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
      {/* Text Label */}
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
    { label: "Location 1", value: "loc-1" },
    { label: "Location 2", value: "loc-2" },
    { label: "Location 3", value: "loc-3" },
  ];

  const chartConfig = {
    profit: { label: "Total Profit", color: "hsl(var(--chart-1))" },
    sales: { label: "Total Sales", color: "hsl(var(--chart-2))" },
  };

  return (
    <Page>
      <PageHeader>
        <div>
          <PageTitle>Sales Insights</PageTitle>
          <PageDescription>
            Overview of your store&apos;s revenue and conversion metrics.
          </PageDescription>
        </div>
        <PageActions>
          <DatePicker date={selectedDate} onDateChange={setSelectedDate} />
          <MultiSelect
            options={locationOptions}
            selected={selectedLocations}
            onChange={setSelectedLocations}
            placeholder="Select Locations"
          />
          <SearchBar
            expandable
            placeholder="Search dashboard..."
            onSearch={setSearchQuery}
          />
          <FilterPopover className="ml-4">
            <FilterPopoverHeader>
              <FilterPopoverTitle>Filters</FilterPopoverTitle>
              <FilterPopoverDescription>
                Customize your dashboard views.
              </FilterPopoverDescription>
            </FilterPopoverHeader>
            <div className="h-px bg-border my-2" />
            <FilterPopoverSection>
              <FilterPopoverSectionLabel>
                Refresh Rate
              </FilterPopoverSectionLabel>
              <div className="text-sm font-mono text-muted-foreground">
                Every 5 minutes
              </div>
            </FilterPopoverSection>
          </FilterPopover>
        </PageActions>
      </PageHeader>

      <PageContent>
        <Grid columns={{ base: 1, lg: 8, xl: 12 }}>
          {/* Left Column */}
          <GridCol colSpan={{ lg: 8, xl: 6 }}>
            <Card className="flex-1 min-h-[380px]">
              <CardHeader className="flex flex-row items-start justify-between pb-8">
                <div className="space-y-1">
                  <CardTitle className="text-3xl font-bold tracking-tight">
                    $33,500
                  </CardTitle>
                  <CardDescription className="text-sm font-medium">
                    Total Profit
                  </CardDescription>
                </div>
                <Tabs defaultValue="j">
                  <TabsList>
                    <TabsTrigger value="j">J</TabsTrigger>
                    <TabsTrigger value="m">M</TabsTrigger>
                    <TabsTrigger value="a">A</TabsTrigger>
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
                          value: "Achieve goal",
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
                    Total Sales
                  </CardDescription>
                </div>
                <Tabs defaultValue="j">
                  <TabsList>
                    <TabsTrigger value="j">J</TabsTrigger>
                    <TabsTrigger value="m">M</TabsTrigger>
                    <TabsTrigger value="a">A</TabsTrigger>
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
                          value: "Achieve goal",
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

          {/* Middle Column */}
          <GridCol colSpan={{ lg: 4, xl: 3 }}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-6">
                <CardTitle className="text-lg font-medium">
                  Performance
                </CardTitle>
                <Select defaultValue="12m">
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
              <CardContent className="space-y-8">
                <div className="space-y-2">
                  <div className="h-[80px] w-full">
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
                  <div className="flex justify-between items-center text-sm pt-2">
                    <span className="text-muted-foreground">
                      Conversion Rate Growth
                    </span>
                    <span className="text-chart-1 font-medium">+20%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-[80px] w-full">
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
                  <div className="flex justify-between items-center text-sm pt-2 border-b border-border/50 pb-4">
                    <span className="text-muted-foreground">
                      New Customer Acquisition
                    </span>
                    <span className="text-chart-1 font-medium">+18%</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">
                    Returning Customer Growth
                  </span>
                  <span className="text-chart-1 font-medium">+12%</span>
                </div>

                <div className="text-xs text-muted-foreground/60 pt-4">
                  Data updated 1 min ago
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <CardDescription className="text-xs">
                  Active Campaigns
                </CardDescription>
                <CardTitle className="text-lg font-medium">
                  Goals Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-chart-2 flex items-center justify-center text-xs font-medium text-chart-2">
                      #1
                    </div>
                    <div>
                      <p className="text-sm font-medium">Summer Sale</p>
                      <p className="text-xs text-muted-foreground">
                        Social Media
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-green-500 font-medium">+14.5%</p>
                    <p className="text-sm font-medium">$6,000</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-chart-2 flex items-center justify-center text-xs font-medium text-chart-2">
                      EM
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email Retargeting</p>
                      <p className="text-xs text-muted-foreground">
                        Cart Recovery
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-green-500 font-medium">+20.0%</p>
                    <p className="text-sm font-medium">$5,350</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full justify-center bg-transparent border-border mt-2"
                >
                  2 Goals{" "}
                  <Icon
                    icon={ChevronDownIcon}
                    className="ml-2 w-4 h-4 text-muted-foreground"
                  />
                </Button>
              </CardContent>
            </Card>
          </GridCol>

          {/* Right Column (Weekly Report) */}
          <GridCol colSpan={{ lg: 4, xl: 3 }}>
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <Icon icon={SlidersHorizontalIcon} className="w-5 h-5" />
                <span className="font-medium text-lg">Weekly Report</span>
              </div>
              <Icon
                icon={ChevronDownIcon}
                className="w-4 h-4 text-muted-foreground"
              />
            </div>

            <Card className="flex-1 bg-transparent border-none shadow-none">
              <CardHeader className="px-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Performance summary
                  <br />
                  over 6 months
                </CardTitle>
              </CardHeader>
              <CardContent className="px-2 space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Total revenue
                  </p>
                  <div className="flex items-end justify-between">
                    <p className="text-3xl font-semibold">$36,358</p>
                    <div className="w-24 h-12">
                      <ChartContainer
                        config={chartConfig}
                        className="w-full h-full"
                      >
                        <LineChart data={lineData}>
                          <Line
                            type="monotone"
                            dataKey="val"
                            stroke="var(--color-profit)"
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ChartContainer>
                    </div>
                  </div>
                  <p className="text-xs text-green-500 font-medium mt-2">
                    +12.5%{" "}
                    <span className="text-muted-foreground font-normal">
                      vs last month
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </GridCol>
        </Grid>
      </PageContent>
    </Page>
  );
}
