"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";

const chartData = [
  { date: "2024-07-15", bookmarks: 3 },
  { date: "2024-07-16", bookmarks: 5 },
  { date: "2024-07-17", bookmarks: 4 },
  { date: "2024-07-18", bookmarks: 7 },
  { date: "2024-07-19", bookmarks: 6 },
  { date: "2024-07-20", bookmarks: 9 },
  { date: "2024-07-21", bookmarks: 12 },
];

const chartConfig = {
  bookmarks: {
    label: "Bookmarks",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function BookmarkTrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bookmark Trends (Mocked Data)</CardTitle>
        <CardDescription>
          Number of new bookmarks over the last 7 days.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="bookmarks" fill="var(--color-bookmarks)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5 bookmarks this week{" "}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing data for the last 7 days
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
