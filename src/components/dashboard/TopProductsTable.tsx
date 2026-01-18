import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { TopProduct } from "@/src/types/dashboard";

type Props = {
  products: TopProduct[];
};

export function TopProductsTable({ products }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead className="text-right">Sales</TableHead>
          <TableHead className="text-right">Revenue</TableHead>
          <TableHead className="text-right">Trend</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map((product) => (
          <TableRow key={product.name}>
            <TableCell className="font-medium">
              {product.name}
            </TableCell>

            <TableCell className="text-right">
              {product.unitsSold}
            </TableCell>

            <TableCell className="text-right">
              {product.revenue}
            </TableCell>

            <TableCell className="text-right">
              <div
                className={cn(
                  "flex items-center justify-end gap-1 font-medium",
                  product.trend.direction === "up"
                    ? "text-green-600"
                    : "text-red-600"
                )}
              >
                {product.trend.direction === "up" ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}
                {product.trend.value}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
