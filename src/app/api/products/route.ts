import { Product } from "@/src/types/product";

type DummyProduct = {
  id: number;
  title: string;
  category: string;
  price: number;
  stock: number;
};

function pseudoRandom(seed: number) {
  return Math.abs(Math.sin(seed) * 10000) % 1;
}

export async function GET() {
  const res = await fetch("https://dummyjson.com/products?limit=8");
  const data = await res.json();

  const products: Product[] = data.products.map(
    (item: DummyProduct): Product => {
      const rand = pseudoRandom(item.id);

      let simulatedStock: number;

      if (rand < 0.15) simulatedStock = 0;
      else if (rand < 0.35) simulatedStock = 8;
      else simulatedStock = item.stock;
      return {
        id: String(item.id),
        name: item.title,
        category:
          item.category === "smartphones" ||
          item.category === "laptops"
            ? "Electronics"
            : "Accessories",
        price: item.price,
        stock: simulatedStock,
        sales: Math.floor(100 + rand * 900),
        status:
          simulatedStock === 0
            ? "critical"
            : simulatedStock < 20
            ? "low-stock"
            : "in-stock",
      };
    }
  );

  return Response.json(products);
}
