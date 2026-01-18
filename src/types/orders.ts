export type OrderStatus =
  | "Completed"
  | "Processing"
  | "Pending"
  | "Cancelled";

export type Order = {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: OrderStatus;
  time: string;
};
