export type ProductStatus = "in-stock" | "low-stock" | "critical";

export type Product = {
  id: string;
  name: string;
  category: "Electronics" | "Accessories";
  price: number;
  stock: number;
  sales: number;
  status: ProductStatus;
};
