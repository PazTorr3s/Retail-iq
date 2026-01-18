"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type WeeklyData = {
  day: string;
  thisWeek: number;
  lastWeek: number;
};

type WeeklyComparisonChartProps = {
  data: WeeklyData[];
};

export function WeeklyComparisonChart({ data }: WeeklyComparisonChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="thisWeek" fill="#3b82f6" />
        <Bar dataKey="lastWeek" fill="#9ca3af" />
      </BarChart>
    </ResponsiveContainer>
  );
}
