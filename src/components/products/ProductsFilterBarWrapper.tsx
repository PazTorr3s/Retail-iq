"use client";

import { useState } from "react";
import { ProductsFilterBar } from "./ProductsFilterBar";
import { ProductsTable } from "./ProductsTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Product } from "@/src/types/product";

type Props = {
  products: Product[];
};

export function ProductsFilterBarWrapper({ products }: Props) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      status === "all" ? true : product.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <ProductsFilterBar
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
      />

      <Card>
        <CardHeader>
          <CardTitle>Products Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductsTable products={filteredProducts} />
        </CardContent>
      </Card>
    </>
  );
}
