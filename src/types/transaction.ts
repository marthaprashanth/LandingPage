export type StatusType =
  | "all"
  | "completed"
  | "inProgress"
  | "failed"
  | "refunded";

export interface Transaction {
  id: string;
  type: string;
  date: string;
  transactionId: string;
  recipient: string;
  amount: number;
  bank: string;
  status: StatusType;
}
