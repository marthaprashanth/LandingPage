import { motion } from "framer-motion";

const CardIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="text-grey-300"
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

const ReceiptIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="text-grey-300"
  >
    <path
      d="M7 3h10a2 2 0 0 1 2 2v14l-3-2-3 2-3-2-3 2V5a2 2 0 0 1 2-2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 8h6M9 12h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const QuickActions = () => {
  const actions = [
    { id: "1", icon: <CardIcon />, title: "Make a Payment" },
    { id: "2", icon: <ReceiptIcon />, title: "Sent an Invoice" },
  ];

  return (
    <div className="bg-shade-white rounded-3xl p-6 shadow-card">
      <h3 className="text-base font-semibold text-grey-900 mb-4">
        Quick Actions
      </h3>
      <div className="flex flex-col gap-2">
        {actions.map((action) => (
          <motion.button
            key={action.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative flex items-center gap-3 p-4 rounded-2xl text-shade-white bg-grey-900 overflow-hidden group"
          >
            {/* Gradient hover overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(90deg, #7C3AED 0%, #EC4899 50%, #6366F1 100%)",
              }}
            />

            {/* Content */}
            <span className="relative z-10 flex items-center justify-center w-6 h-6">
              {action.icon}
            </span>
            <span className="relative z-10 text-sm font-semibold">
              {action.title}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
