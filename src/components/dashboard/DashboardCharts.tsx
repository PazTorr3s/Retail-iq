"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Jan 8", sales: 6800 },
  { date: "Jan 9", sales: 5400 },
  { date: "Jan 10", sales: 6900 },
  { date: "Jan 11", sales: 7500 },
  { date: "Jan 12", sales: 8200 },
  { date: "Jan 13", sales: 7800 },
  { date: "Jan 14", sales: 8600 },
];

export function SalesOverviewChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
