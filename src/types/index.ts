export interface Card {
  id: string;
  cardName: string;
  holderName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
  balance: number;
  verified: boolean;
}

export interface Transaction {
  id: string;
  type: string;
  date: string;
  transactionId: string;
  recipient: string;
  amount: number;
  bank: string;
  status: "completed" | "pending" | "failed" | "refunded";
}

export interface Template {
  id: string;
  bankName: string;
  accountNumber: string;
  payeeName: string;
}

export interface QuickSend {
  id: string;
  name: string;
  username: string;
  avatar?: string;
}

export interface QuickAction {
  id: string;
  icon: string;
  title: string;
}

export interface StatMetric {
  id: string;
  label: string;
  value: string | number;
  icon?: string;
}
