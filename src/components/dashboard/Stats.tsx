import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const PaymentIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    className="text-grey-800"
  >
    <rect
      x="3"
      y="6"
      width="18"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M3 11h18" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const SendIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    className="text-grey-800"
  >
    <path
      d="M22 2L11 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 2L15 22L11 13L2 9L22 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InboxIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    className="text-grey-800"
  >
    <path
      d="M22 12h-6l-2 3h-4l-2-3H2l3-7h14l3 7Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Stats = () => {
  const stats = [
    {
      id: "1",
      label: "Total Payments",
      value: "₹ 24,000.70",
      icon: PaymentIcon,
    },
    { id: "2", label: "Invoices Sanded", value: "12", icon: SendIcon },
    { id: "3", label: "Invoices Received", value: "1", icon: InboxIcon },
  ];

  // Build a fixed week (25–30 March 2024) to match the reference
  const days = useMemo(() => {
    const baseDate = new Date(2024, 2, 25); // 25 March 2024
    return Array.from({ length: 6 }, (_, i) => {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() + i);
      return {
        day: String(d.getDate()),
        weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
        dateObj: d,
      };
    });
  }, []);

  const initialSelected = useMemo(() => days[2], [days]); // 27 Mar 2024 as active
  const [selected, setSelected] = useState(initialSelected);

  const selectedLabel = useMemo(() => {
    const m = selected.dateObj.toLocaleDateString("en-US", { month: "long" });
    return `${selected.dateObj.getDate()} ${m} ${selected.dateObj.getFullYear()}`;
  }, [selected]);

  return (
    <div className="bg-shade-white rounded-3xl p-6 shadow-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-semibold text-grey-900">Stats</h3>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-grey-900 border border-grey-300 bg-white">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-grey-900 text-white text-[10px]">
            📅
          </span>
          Calendar
        </button>
      </div>

      {/* Calendar Days */}
      <div className="flex gap-3 mb-3 overflow-x-auto pb-2">
        {days.map((day, index) => {
          const isActive = selected.dateObj.getTime() === day.dateObj.getTime();
          return (
            <div key={index} className="relative">
              {/* Gradient border wrapper when active */}
              <div
                className={`${isActive ? "p-[2px] rounded-2xl" : "p-0"}`}
                style={
                  isActive
                    ? {
                        background:
                          "linear-gradient(135deg, #FCBBFC 0%, #ADA6FF 100%)",
                      }
                    : undefined
                }
              >
                <button
                  type="button"
                  onClick={() => setSelected(day)}
                  className={`relative flex flex-col items-center justify-center px-4 py-3 min-w-[70px] rounded-2xl transition-none select-none ${
                    isActive
                      ? "bg-black text-white"
                      : "bg-white text-grey-900 border border-grey-200 shadow-sm"
                  }`}
                >
                  <span className="text-lg font-extrabold">{day.day}</span>
                  <span
                    className={`${
                      isActive ? "text-grey-200" : "text-grey-500"
                    } text-xs`}
                  >
                    {day.weekday}
                  </span>
                  {isActive && (
                    <span className="mt-2 w-10 h-1 rounded-full bg-white/80" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected date text */}
      <p className="text-xs text-grey-500 text-center mb-6">{selectedLabel}</p>

      {/* Stats */}
      <div className="flex flex-col gap-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-between p-5 bg-shade-white border border-grey-300 rounded-2xl shadow-card hover:shadow-accent-small transition-all relative overflow-hidden group"
            >
              {/* Background gradient on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(252, 231, 243, 0.6) 0%, rgba(219, 234, 254, 0.6) 100%)",
                }}
              ></div>

              <div className="flex flex-col gap-1 relative z-10">
                <span className="text-xs text-grey-600">{stat.label}</span>
                <span className="text-lg font-semibold text-grey-900">
                  {stat.value}
                </span>
              </div>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center relative z-10"
                style={{
                  background:
                    "linear-gradient(135deg, #FCE7F3 0%, #DBEAFE 100%)",
                }}
              >
                <Icon />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
