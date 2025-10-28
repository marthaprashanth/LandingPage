import { useState } from "react";

const MonthlySpending = () => {
  const [selectedCard] = useState("VISA •••• •••• •••• 1001");

  const data = [
    { month: "Apr", income: 450000, expense: 420000 },
    { month: "May", income: 420000, expense: 480000 },
    { month: "Jun", income: 380000, expense: 450000 },
    { month: "Jul", income: 400000, expense: 420000 },
    { month: "Aug", income: 480000, expense: 380000 },
    { month: "Sep", income: 750000, expense: 410000 },
    { month: "Oct", income: 680000, expense: 650000 },
    { month: "Nov", income: 720000, expense: 680000 },
    { month: "Dec", income: 700000, expense: 380000 },
  ];

  const maxValue = 1000000;
  const height = 280;

  // Generate smooth curve path
  const generatePath = (values: number[]) => {
    const points = values.map((val: number, i: number) => ({
      x: (i / (values.length - 1)) * 100,
      y: ((maxValue - val) / maxValue) * 100,
    }));

    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const xMid = (points[i].x + points[i + 1].x) / 2;
      path += ` Q ${points[i].x} ${points[i].y}, ${xMid} ${
        (points[i].y + points[i + 1].y) / 2
      }`;
      path += ` Q ${points[i + 1].x} ${points[i + 1].y}, ${points[i + 1].x} ${
        points[i + 1].y
      }`;
    }
    return path;
  };

  const incomeValues = data.map((d) => d.income);
  const expenseValues = data.map((d) => d.expense);

  const incomePath = generatePath(incomeValues);
  const expensePath = generatePath(expenseValues);

  return (
    <div className="bg-gray-50 rounded-3xl py-6 max-w-md">
      {/* Header */}
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Total Monthly Spending
      </h3>

      {/* Card Selector */}
      <div className="mb-6">
        <label className="text-xs text-gray-500 mb-2 block">
          Select card :
        </label>
        <div className="relative">
          <select className="w-full bg-white rounded-xl px-4 py-3 text-sm font-medium text-gray-700 appearance-none cursor-pointer border border-gray-200">
            <option>{selectedCard}</option>
          </select>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative mb-6" style={{ height: `${height}px` }}>
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 pr-2">
          <span>1 M</span>
          <span>800k</span>
          <span>600k</span>
          <span>400k</span>
          <span>200k</span>
          <span>0k</span>
        </div>

        {/* Grid lines */}
        <div className="absolute left-12 right-0 top-0 h-full">
          {[0, 20, 40, 60, 80, 100].map((pos) => (
            <div
              key={pos}
              className="absolute w-full border-t border-dashed border-gray-300"
              style={{ top: `${pos}%` }}
            />
          ))}
        </div>

        {/* SVG Chart */}
        <svg
          viewBox="0 0 100 100"
          className="absolute left-12 right-0 top-0 w-[calc(100%-3rem)] h-full"
          preserveAspectRatio="none"
        >
          {/* Income area gradient */}
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fb7185" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#fb7185" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Income area */}
          <path
            d={`${incomePath} L 100 100 L 0 100 Z`}
            fill="url(#incomeGradient)"
          />

          {/* Expense area */}
          <path
            d={`${expensePath} L 100 100 L 0 100 Z`}
            fill="url(#expenseGradient)"
          />

          {/* Income line */}
          <path d={incomePath} fill="none" stroke="#a78bfa" strokeWidth="0.8" />

          {/* Expense line */}
          <path
            d={expensePath}
            fill="none"
            stroke="#fb7185"
            strokeWidth="0.8"
          />

          {/* Dots on Sep */}
          <circle cx="66.7" cy="25" r="1.5" fill="#a78bfa" />
          <circle cx="66.7" cy="59" r="1.5" fill="#fb7185" />
        </svg>

        {/* Annotations */}
        <div className="absolute left-[58%] top-[18%] bg-white rounded-lg px-3 py-1.5 shadow-md text-xs font-medium text-purple-600">
          + ₹ 700k
        </div>
        <div className="absolute left-[68%] top-[52%] bg-white rounded-lg px-3 py-1.5 shadow-md text-xs font-medium text-rose-500">
          - ₹ 700k
        </div>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-12 right-0 flex justify-between text-xs text-gray-400 pt-2">
          {data.map((d) => (
            <span key={d.month}>{d.month}</span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-between items-center mb-6 px-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-400"></div>
          <span className="text-xs text-gray-600">Incomes</span>
        </div>
        <div className="text-sm font-semibold text-gray-800">
          Total: ₹ 24,000.70
        </div>
      </div>

      <div className="flex justify-between items-center mb-6 px-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-400"></div>
          <span className="text-xs text-gray-600">Expenses</span>
        </div>
        <div className="text-sm font-semibold text-gray-800">
          Total: ₹ 24,000.70
        </div>
      </div>

      {/* View All Button */}
      <button className="w-full py-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl text-sm font-medium text-gray-700 hover:from-purple-200 hover:to-blue-200 transition-colors border border-purple-200">
        View All Statistic
      </button>
    </div>
  );
};

export default MonthlySpending;
