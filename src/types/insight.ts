export type InsightType = "opportunity" | "alert" | "insight" ;

export type InsightSeverity = "success" | "warning" | "info";

export type InsightCategory =
  | "Opportunities"
  | "Inventory"
  | "Pricing"
  | "Marketing";


  export type Insight = {
  id: string;
  title: string;
  description: string;
  metric: string;
  type: InsightType;
  severity: InsightSeverity;
  category: InsightCategory;
};
