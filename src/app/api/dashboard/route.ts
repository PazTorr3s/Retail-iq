type DummyProduct = {
  id: number;
  title: string;
  price: number;
};

export async function GET() {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();

  const products: DummyProduct[] = data.products;

  const topProducts = products.map((product, index) => {
    const unitsSold = Math.floor(200 + Math.random() * 800);
    const revenue = unitsSold * product.price;

    return {
      name: product.title,
      unitsSold,
      revenue: `$${revenue.toLocaleString()}`,
      trend: {
        value: `${(Math.random() * 15).toFixed(1)}%`,
        direction: Math.random() > 0.3 ? "up" : "down",
      },
    };
  });

  return Response.json({
    topProducts,
  });
}
