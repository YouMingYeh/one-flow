"use client"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import type {
  ChartConfig} from "../ui/chart";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart"

// const chartData = [
//   { x: "January", desktop: 186 },
//   { x: "February", desktop: 305 },
//   { x: "March", desktop: 237 },
//   { x: "April", desktop: 73 },
//   { x: "May", desktop: 209 },
//   { x: "June", desktop: 214 },
// ]

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "hsl(var(--chart-1))",
//   },
// } satisfies ChartConfig

interface BarChartLabelProps {
chartConfig: ChartConfig
chartData: Record<string, unknown>[]
title?: string
description?: string
footer?: React.ReactNode
}

export function BarChartLabel({
  chartConfig,
  chartData,
  title,
  description,
  footer,

}:BarChartLabelProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              axisLine={false}
              dataKey="x"
              // tickFormatter={(value: string) => value.slice(0, 10)}
              tickLine={false}
              tickMargin={10}
            />
            <ChartTooltip
              content={<ChartTooltipContent hideLabel />}
              cursor={false}
            />
            <Bar dataKey="y" fill="var(--color-y)" radius={8}>
              <LabelList
                className="fill-foreground"
                fontSize={12}
                offset={12}
                position="top"
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {footer}
      </CardFooter>
    </Card>
  )
}
