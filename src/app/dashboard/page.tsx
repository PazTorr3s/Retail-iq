import { getBaseUrl } from "@/src/lib/getBaseUrl";
import { Topbar } from "@/src/components/layout/Topbar";
import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/card";
import { KpiCard } from "@/src/components/dashboard/KpiCard";
import { SalesOverviewChart } from "@/src/components/dashboard/DashboardCharts";
import { TopProductsTable } from "@/src/components/dashboard/TopProductsTable";
import { TopProduct } from "@/src/types/dashboard";
import {
  DollarSign,
  ShoppingCart,
  Percent,
  Users,
} from "lucide-react";

type SalesResponse = {
  kpis: {
    revenue: { value: string; trend: string };
    orders: { value: string; trend: string };
    aov: { value: string; trend: string };
    customers: { value: string; trend: string };
  };
};

async function getSales(): Promise<SalesResponse> {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/sales`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch sales");
  }

  return res.json();
}

type DashboardResponse = {
  topProducts: TopProduct[];
};

async function getDashboardData(): Promise<DashboardResponse> {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/dashboard`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard data");
  }

  return res.json();
}

export default async function DashboardPage() {
  const SalesData = await getSales();
  const DashboardData = await getDashboardData();

  return (
    <>
      <Topbar title="Dashboard" />

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard
            label="Total Revenue"
            value={SalesData.kpis.revenue.value}
            icon={<DollarSign />}
            trend={{ value: SalesData.kpis.revenue.trend, direction: "up" }}
          />

          <KpiCard
            label="Total Orders"
            value={SalesData.kpis.orders.value}
            icon={<ShoppingCart />}
            trend={{ value: SalesData.kpis.orders.trend, direction: "up" }}
          />

          <KpiCard
            label="Avg Order Value"
            value={SalesData.kpis.aov.value}
            icon={<Percent />}
            trend={{ value: SalesData.kpis.aov.trend, direction: "up" }}
          />

          <KpiCard
            label="Customers"
            value={SalesData.kpis.customers.value}
            icon={<Users />}
            trend={{ value: SalesData.kpis.customers.trend, direction: "up" }}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <SalesOverviewChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <TopProductsTable products={DashboardData.topProducts} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
