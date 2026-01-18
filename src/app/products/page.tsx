import { getBaseUrl } from "@/src/lib/getBaseUrl";
import { Topbar } from "@/src/components/layout/Topbar";
import { Product } from "@/src/types/product";
import { ProductsFilterBarWrapper } from "@/src/components/products/ProductsFilterBarWrapper";

async function getProducts(): Promise<Product[]> {
  const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/products`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <Topbar title="Products" />

      <div className="p-6 space-y-6">
        <ProductsFilterBarWrapper products={products} />
      </div>
    </>
  );
}
