import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Badge, } from "@/src/components/ui/badge";
import { BadgeVariant } from "@/src/components/ui/badge";
import { Product } from "@/src/types/product";

type ProductStatus = "in-stock" | "low-stock" | "critical";

const statusMap: Record<
ProductStatus,{ label: string; variant: BadgeVariant }> = {
  "in-stock": {
    label: "In Stock",
    variant: "success",
  },
  "low-stock": {
    label: "Low Stock",
    variant: "alert",
  },
  critical: {
    label: "Critical",
    variant: "warning",
  },
};
type ProductsTableProps = {
  products: Product[];
};

export function ProductsTable({ products }: ProductsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Sales</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">
              {product.name}
            </TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>{product.sales}</TableCell>
            <TableCell>
              <Badge variant={statusMap[product.status].variant}>
                {statusMap[product.status].label}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
