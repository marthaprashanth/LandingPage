import { useState } from "react";
import {
  CreditCard,
  CheckCircle2,
  Clock,
  XCircle,
  ChevronRight,
  RotateCw,
  Upload,
  Download,
} from "lucide-react";
import { transactions } from "../../constant/transactions";
import { StatusType } from "@/types/transaction";

type StatusState = Record<StatusType, boolean>;

const LatestActions = () => {
  const [selectedStatuses, setSelectedStatuses] = useState<StatusState>({
    all: true,
    completed: false,
    inProgress: false,
    failed: false,
    refunded: false,
  });

  const toggleStatus = (status: StatusType) => {
    if (status === "all") {
      const newValue = !selectedStatuses.all;
      setSelectedStatuses({
        all: newValue,
        completed: newValue,
        inProgress: newValue,
        failed: newValue,
        refunded: newValue,
      });
    } else {
      setSelectedStatuses({
        ...selectedStatuses,
        all: false,
        [status]: !selectedStatuses[status],
      });
    }
  };

  const getStatusConfig = (status: StatusType) => {
    switch (status) {
      case "inProgress":
        return {
          icon: <Clock className="w-3 h-3" />,
          text: "Transaction In Progress",
          color: "text-yellow-600",
          bgColor: "bg-yellow-50",
        };
      case "completed":
        return {
          icon: <CheckCircle2 className="w-3 h-3" />,
          text: "Transaction Has Been Settled",
          color: "text-green-600",
          bgColor: "bg-green-50",
        };
      case "failed":
        return {
          icon: <XCircle className="w-3 h-3" />,
          text: "Transaction Has Rejected",
          color: "text-red-600",
          bgColor: "bg-red-50",
        };
      case "refunded":
        return {
          icon: <XCircle className="w-3 h-3" />,
          text: "Transaction Refunded",
          color: "text-blue-600",
          bgColor: "bg-blue-50",
        };
      default:
        return {
          icon: <Clock className="w-3 h-3" />,
          text: "Transaction In Progress",
          color: "text-gray-600",
          bgColor: "bg-gray-50",
        };
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Latest Actions</h2>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-56 flex-shrink-0">
          <div className="space-y-4">
            <div className="text-sm font-medium text-gray-600 mb-3">
              Show Actions :
            </div>

            {/* Payments Filter */}
            <button
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 bg-black text-white  hover:text-white hover:bg-[linear-gradient(90deg,#EC4899_0%,#6366F1_100%)]`}
            >
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                <span>Payments</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Status Filters */}
            <div className="pt-4 space-y-3">
              {(Object.keys(selectedStatuses) as StatusType[]).map((status) => (
                <div key={status} className="flex items-center justify-between">
                  <label
                    htmlFor={status}
                    className="text-sm text-gray-600 cursor-pointer"
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </label>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id={status}
                      checked={selectedStatuses[status]}
                      onChange={() => toggleStatus(status)}
                      className="w-4 h-4 rounded border-2 appearance-none cursor-pointer checked:bg-black"
                      style={{
                        borderImage: selectedStatuses[status]
                          ? "linear-gradient(135deg, #ec4899, #3b82f6) 1"
                          : "none",
                        borderColor: selectedStatuses[status]
                          ? "transparent"
                          : "#d1d5db",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-4" />

            {/* Go to All Payments Section */}
            <div className="text-start space-y-3">
              <a
                href="#"
                className="text-sm font-medium text-gray-800 underline hover:bg-gradient-to-r hover:from-[#fcbbfc]/[0.92] hover:to-[#ada6ff] hover:bg-clip-text hover:text-transparent"
              >
                Go to All Payments
              </a>

              <div className="space-y-2">
                <button className="w-full flex items-center justify-start gap-3 bg-white text-gray-600 border border-gray-200 rounded-md px-4 py-2.5 shadow-sm hover:bg-gray-100 transition">
                  <Upload className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-400">
                    Invoices Send
                  </span>
                </button>

                <button className="w-full flex items-center justify-start gap-3 bg-white text-gray-600 border  border-gray-200 rounded-md px-4 py-2.5 shadow-sm hover:bg-gray-100 transition">
                  <Download className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-400">
                    Invoices Received
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Transactions */}
        <div className="flex-1 space-y-3">
          {transactions.map((transaction) => {
            const statusConfig = getStatusConfig(transaction.status);
            return (
              <div
                key={transaction.id}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 text-xs text-gray-500 mb-1">
                      <span>{transaction.type}</span>
                      <span>{transaction.date}</span>
                      <span>{transaction.transactionId}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">
                        {transaction.recipient}
                      </h3>
                      <div className="text-lg font-semibold text-gray-900">
                        ₹{" "}
                        {transaction.amount.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <CreditCard className="w-3 h-3" />
                      <span>{transaction.bank}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div
                    className={`flex items-center gap-2 text-xs font-medium ${statusConfig.color}`}
                  >
                    {statusConfig.icon}
                    <span>{statusConfig.text}</span>
                  </div>
                  <button className="text-xs text-gray-400 hover:bg-gradient-to-r hover:from-[#fcbbfc]/[0.92] hover:to-[#ada6ff] hover:bg-clip-text hover:text-transparent font-medium">
                    Details
                  </button>
                </div>
              </div>
            );
          })}

          <div className="flex justify-center pt-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-900 rounded-full text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
              <RotateCw className="w-4 h-4" />
              <span>Load More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestActions;
