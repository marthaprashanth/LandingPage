import { Transaction } from "../../types";

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-50 text-emerald-700 border border-emerald-200";
      case "pending":
        return "bg-amber-50 text-amber-700 border border-amber-200";
      case "failed":
        return "bg-red-50 text-red-700 border border-red-200";
      default:
        return "bg-grey-100 text-grey-700 border border-grey-300";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Transaction Has Been Settled";
      case "pending":
        return "Transaction in Progress";
      case "failed":
        return "Transaction Has Rejected";
      default:
        return status;
    }
  };

  return (
    <div className="bg-shade-white rounded-2xl p-5 shadow-card hover:shadow-accent-small transition-all duration-200 hover:scale-[1.01]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs text-grey-500">{transaction.type}</span>
        <span className="text-xs text-grey-500">{transaction.date}</span>
        <span className="text-xs text-grey-500 font-mono tracking-wider">
          {transaction.transactionId}
        </span>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-1 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-grey-900 uppercase">
            {transaction.recipient}
          </span>
          <span className="text-sm font-semibold text-grey-900">
            - ₹ {transaction.amount.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-accent rounded"></div>
          <span className="text-xs text-grey-700">{transaction.bank}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium ${getStatusColor(
            transaction.status
          )}`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              transaction.status === "completed"
                ? "bg-emerald-600"
                : transaction.status === "pending"
                ? "bg-amber-600"
                : "bg-red-600"
            }`}
          ></div>
          <span className="text-xs">{getStatusText(transaction.status)}</span>
        </div>
        <button className="text-xs text-grey-700 hover:text-accent">
          Details
        </button>
      </div>
    </div>
  );
};

export default TransactionItem;
