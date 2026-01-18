import { Topbar } from "@/src/components/layout/Topbar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/src/components/ui/card";
import { WeeklyComparisonChart } from "@/src/components/sales/WeeklyComparisonChart";
import { RecentOrdersTable } from "@/src/components/sales/RecentOrdersTable";
import { Order, OrderStatus } from "@/src/types/orders";

type SalesApiResponse = {
  weeklyComparison: {
    day: string;
    thisWeek: number;
    lastWeek: number;
  }[];
  recentOrders: {
    id: string;
    customer: string;
    product: string;
    amount: string;
    status: string;
    time: string;
  }[];
};

function normalizeStatus(status: string): OrderStatus {
  switch (status.toLowerCase()) {
    case "completed":
      return "Completed";
    case "processing":
      return "Processing";
    case "pending":
      return "Pending";
    case "cancelled":
      return "Cancelled";
    default:
      return "Pending";
  }
}

async function getSales(): Promise<{
  weeklyComparison: SalesApiResponse["weeklyComparison"];
  recentOrders: Order[];
}> {
  const res = await fetch("http://localhost:3000/api/sales", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch sales data");
  }

  const rawData: SalesApiResponse = await res.json();

  return {
    weeklyComparison: rawData.weeklyComparison,
    recentOrders: rawData.recentOrders.map((order): Order => ({
      id: order.id,
      customer: order.customer,
      product: order.product,
      amount: order.amount,
      status: normalizeStatus(order.status),
      time: order.time,
    })),
  };
}

export default async function SalesPage() {
  const data = await getSales();

  return (
    <>
      <Topbar title="Sales" />

      <div className="p-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Sales Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <WeeklyComparisonChart data={data.weeklyComparison} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentOrdersTable orders={data.recentOrders} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
