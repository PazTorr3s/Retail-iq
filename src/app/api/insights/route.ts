import { Insight } from "@/src/types/insight";

type DummyProduct = {
  title: string;
  price: number;
  stock: number;
  category: string;
};

export async function GET() {
  const res = await fetch("https://dummyjson.com/products?limit=20");
  const data = await res.json();

  const products: DummyProduct[] = data.products;

  const insights: Insight[] = [];

  products
    .filter((p) => p.stock > 0 && p.stock < 15)
    .slice(0, 2)
    .forEach((product, index) => {
      insights.push({
        id: `low-stock-${index}`,
        title: "Low Stock Alert",
        description: `${product.title} is running low in inventory.`,
        metric: `${product.stock} units`,
        type: "alert",
        category: "Inventory",
        severity: "warning",
      });
    });

  products
    .filter((p) => p.price > 500)
    .slice(0, 2)
    .forEach((product, index) => {
      insights.push({
        id: `pricing-${index}`,
        title: "Price Optimization Opportunity",
        description: `${product.title} has a premium price point.`,
        metric: "+18% potential",
        type: "opportunity",
        severity: "success",
        category: "Pricing"
      });
    });

  const categoryCount: Record<string, number> = {};
  products.forEach((p) => {
    categoryCount[p.category] =
      (categoryCount[p.category] || 0) + 1;
  });

  const topCategory = Object.entries(categoryCount).sort(
    (a, b) => b[1] - a[1]
  )[0];

  if (topCategory) {
    insights.push({
      id: "category-trend",
      title: "Category Trend Detected",
      description: `${topCategory[0]} products dominate current inventory.`,
      metric: `${topCategory[1]} products`,
      type: "insight",
      category: "Marketing",
      severity: "info",
    });
  }

  return Response.json(insights);
}
