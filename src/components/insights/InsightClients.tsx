"use client";

import { useState } from "react";
import { Insight } from "@/src/types/insight";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { cn } from "@/src/lib/utils";
import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

type Props = {
  insights: Insight[];
};

const FILTERS = [
  "All",
  "Opportunities",
  "Inventory",
  "Pricing",
  "Marketing",
] as const;

export function InsightsClient({ insights }: Props) {
  const [activeFilter, setActiveFilter] =
    useState<(typeof FILTERS)[number]>("All");

  const filteredInsights =
    activeFilter === "All"
      ? insights
      : insights.filter(
          (insight) => insight.category === activeFilter
        );

  function renderIcon(type: Insight["type"]) {
    switch (type) {
      case "opportunity":
        return <TrendingUp className="h-4 w-4" />;
      case "alert":
        return <AlertTriangle className="h-4 w-4" />;
      case "insight":
        return <Lightbulb className="h-4 w-4" />;
      default:
        return <Sparkles className="h-4 w-4" />;
    }
  }

  function badgeVariant(severity: Insight["severity"]) {
    switch (severity) {
      case "success":
        return "success";
      case "warning":
        return "warning";
      case "info":
        return "info";
      default:
        return "default";
    }
  }

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center gap-3">
          <Sparkles className="h-5 w-5 text-primary" />
          <div>
            <CardTitle>AI-Powered Insights</CardTitle>
            <p className="text-sm text-muted-foreground">
              Automatically generated recommendations
            </p>
          </div>
        </CardHeader>
      </Card>

      <div className="flex gap-2 flex-wrap">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm border transition",
              activeFilter === filter
                ? "bg-primary text-primary-foreground"
                : "bg-background hover:bg-muted"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredInsights.map((insight) => (
          <Card key={insight.id}>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-medium">
                  {renderIcon(insight.type)}
                  {insight.title}
                </div>

                <Badge variant={badgeVariant(insight.severity)}>
                  {insight.severity}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground">
                {insight.description}
              </p>

              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">
                  {insight.metric}
                </span>
                <span className="text-primary cursor-pointer">
                  View Details →
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
