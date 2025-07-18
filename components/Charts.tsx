"use client";

import { TrendingUp, Star, Crown } from "lucide-react";
import {
  PolarAngleAxis,
  Radar,
  RadarChart,
  PolarGrid,
  PolarRadiusAxis,
} from "recharts";
import { useAvg } from "@/hooks/useAvg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";

export const description =
  "A radar chart showing department performance ratings";

const chartConfig = {
  rating: {
    label: "Average Rating",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ChartRadarGridNone() {
  const chartData = [
    { department: "HR", rating: useAvg("HR") },
    { department: "Marketing", rating: useAvg("Marketing") },
    { department: "Sales", rating: useAvg("Sales") },
    { department: "Finance", rating: useAvg("Finance") },
    { department: "IT", rating: useAvg("IT") },
  ];

  const overallAvg =
    chartData.reduce((acc, item) => acc + (item.rating || 0), 0) /
    chartData.length;
  const topPerformer = chartData.reduce((prev, current) =>
    current.rating > prev.rating ? current : prev
  );

  return (
    <Card className="w-full border-0 bg-muted/30">
      <CardHeader className="items-center pb-4">
        <CardTitle className="flex items-center gap-2 text-xl font-bold">
          Department Performance
        </CardTitle>
        <CardDescription>
          Average ratings across all departments
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px]"
        >
          <RadarChart
            data={chartData}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          >
            <PolarGrid
              gridType="polygon"
              className="fill-muted-foreground/10 stroke-muted-foreground/30"
            />
            <PolarAngleAxis
              dataKey="department"
              className="text-sm"
              fill="hsl(var(--foreground))"
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 5]}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
              tickCount={6}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(value) => `${Number(value).toFixed(1)}/5.0`}
                  labelClassName="text-lg font-bold"
                />
              }
            />
            <Radar
              dataKey="rating"
              fill="hsl(var(--chart-1))"
              fillOpacity={0.2}
              stroke="hsl(var(--chart-1))"
              strokeWidth={2.5}
              dot={{
                r: 5,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 text-sm p-4">
        <Separator />
        <div className="w-full flex justify-between items-center font-medium">
          <span className="flex items-center gap-2 text-muted-foreground">
            <TrendingUp className="h-5 w-5" />
            Overall Average
          </span>
          <span>{overallAvg.toFixed(1)} / 5.0</span>
        </div>
        <Separator />
        <div className="w-full flex justify-between items-center font-bold text-primary">
          <span className="flex items-center gap-2">
            <Crown className="h-5 w-5" />
            Top Performer
          </span>
          <span>
            {topPerformer.department} ({topPerformer.rating.toFixed(1)})
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
