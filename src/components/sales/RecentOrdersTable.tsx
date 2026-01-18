import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Badge } from "@/src/components/ui/badge";
import { Order, OrderStatus } from "@/src/types/orders";

type RecentOrdersTableProps = {
  orders: Order[];
};

function statusVariant(status: OrderStatus) {
  switch (status) {
    case "Completed":
      return "success";
    case "Processing":
      return "info";
    case "Pending":
      return "alert";
    case "Cancelled":
      return "warning";
    default:
      return "default";
  }
}


export function RecentOrdersTable({ orders }: RecentOrdersTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Product</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Time</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.product}</TableCell>
            <TableCell className="text-right">
              {order.amount}
            </TableCell>
            <TableCell>
              <Badge
                variant={statusVariant(order.status)}>
                {order.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              {order.time}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
