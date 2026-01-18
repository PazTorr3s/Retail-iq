"use client";

import { Button } from "@/src/components/ui/button";
import { InsightCategory } from "@/src/types/insight";

type Filter = {
  label: string;
  value: InsightCategory | "all";
};

const filters: Filter[] = [
  { label: "All Insights", value: "all" },
  { label: "Opportunities", value: "Opportunities" },
  { label: "Inventory", value: "Inventory" },
  { label: "Pricing", value: "Pricing" },
  { label: "Marketing", value: "Marketing" },
];

type InsightFiltersProps = {
  active: Filter["value"];
  onChange: (value: Filter["value"]) => void;
};

export function InsightFilters({
  active,
  onChange,
}: InsightFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={active === filter.value ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(filter.value)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
