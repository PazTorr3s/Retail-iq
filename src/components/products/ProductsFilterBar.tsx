"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

type ProductsFilterBarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  status: string;
  onStatusChange: (status: string) => void;
};

export function ProductsFilterBar({
  search,
  onSearchChange,
  status,
  onStatusChange,
}: ProductsFilterBarProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <Input
        placeholder="Search products..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="sm:max-w-xs"
      />

      <div className="flex gap-2">
        {["all", "low-stock", "critical"].map((filter) => (
          <Button
            key={filter}
            variant={status === filter ? "default" : "outline"}
            onClick={() => onStatusChange(filter)}
          >
            {filter === "all"
              ? "All Products"
              : filter === "low-stock"
              ? "Low Stock"
              : "Critical"}
          </Button>
        ))}
      </div>
    </div>
  );
}
