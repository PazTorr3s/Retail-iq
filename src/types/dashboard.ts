export type ProductTrend = {
  value: string;
  direction: "up" | "down";
};

export type TopProduct = {
  name: string;
  unitsSold: number;
  revenue: string;
  trend: ProductTrend;
};
