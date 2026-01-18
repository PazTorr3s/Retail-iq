type DummyProduct = {
  title: string;
  price: number;
  stock: number;
};

type OrderStatus =
  | "Completed"
  | "Processing"
  | "Pending"
  | "Cancelled";


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

export async function GET() {
  const res = await fetch("https://dummyjson.com/products?limit=20");
  const data = await res.json();

  const products: DummyProduct[] = data.products;

  const salesData = products.map((product) => {
    const unitsSold = Math.floor(Math.random() * 50) + 20;

    return {
      product: product.title,
      unitsSold,
      revenue: unitsSold * product.price,
    };
  });

  const totalRevenue = salesData.reduce(
    (sum, item) => sum + item.revenue,
    0
  );

  const totalOrders = salesData.reduce(
    (sum, item) => sum + item.unitsSold,
    0
  );

  const averageOrderValue = totalRevenue / totalOrders;

  return Response.json({
    kpis: {
      revenue: {
        value: `$${totalRevenue.toFixed(2)}`,
        trend: "+12.4%",
      },
      orders: {
        value: totalOrders.toString(),
        trend: "+8.1%",
      },
      aov: {
        value: `$${averageOrderValue.toFixed(2)}`,
        trend: "+5.6%",
      },
      customers: {
        value: Math.floor(totalOrders * 0.7).toString(),
        trend: "+9.2%",
      },
    },

    weeklyComparison: [
      { day: "Mon", thisWeek: 7200, lastWeek: 6400 },
      { day: "Tue", thisWeek: 8100, lastWeek: 7000 },
      { day: "Wed", thisWeek: 8900, lastWeek: 7600 },
      { day: "Thu", thisWeek: 9400, lastWeek: 8100 },
      { day: "Fri", thisWeek: 10200, lastWeek: 8800 },
      { day: "Sat", thisWeek: 11000, lastWeek: 9200 },
      { day: "Sun", thisWeek: 9800, lastWeek: 8600 },
    ],

    recentOrders: salesData.slice(0, 7).map((item, index) => {
      const rawStatus =
        index % 3 === 0
          ? "completed"
          : index % 3 === 1
          ? "processing"
          : "pending";

      return {
        id: `#${2840 + index}`,
        customer: `Customer ${index + 1}`,
        product: item.product,
        amount: `$${item.revenue.toFixed(2)}`,
        status: normalizeStatus(rawStatus),
        time: `${index * 7 + 2} min ago`,
      };
    }),
  });
}
