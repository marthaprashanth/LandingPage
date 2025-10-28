import { motion } from "framer-motion";

const GradientP = () => (
  <div
    className="w-9 h-9 rounded-xl flex items-center justify-center shadow-accent-small"
    style={{ background: "linear-gradient(90deg, #FF70FF 0%, #8A7DFF 100%)" }}
    aria-hidden
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 20V4h6a5 5 0 1 1 0 10H8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const OutlineIcon = ({
  children,
  className = "text-grey-700/70",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className="w-12 h-12 flex items-center justify-center">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {children}
    </svg>
  </div>
);

const MonoDashboardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="3" width="8" height="8" rx="2.5" />
    <rect x="13" y="3" width="8" height="8" rx="2.5" />
    <rect x="3" y="13" width="8" height="8" rx="2.5" />
    <rect x="13" y="13" width="8" height="8" rx="2.5" />
  </svg>
);

const Sidebar = () => {
  const menuItems = [
    {
      key: "Dashboard",
      path: (
        <path
          d="M3 3h7v7H3V3Zm11 0h7v7h-7V3ZM3 14h7v7H3v-7Zm11 0h7v7h-7v-7Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
      active: true,
    },
    {
      key: "Cards",
      path: (
        <>
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
        </>
      ),
    },
    {
      key: "Payments",
      path: (
        <>
          <path
            d="M12 3v18M5 8h9a5 5 0 1 1 0 10H5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ),
      dot: true,
    },
    {
      key: "Statistics",
      path: (
        <>
          <path
            d="M5 19V9M12 19V5M19 19v-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      ),
    },
    {
      key: "Notifications",
      path: (
        <>
          <path
            d="M12 21a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2Zm7-6V11a7 7 0 1 0-14 0v4l-2 2h18l-2-2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ),
      dot: true,
    },
    {
      key: "Help",
      path: (
        <>
          <path
            d="M9.09 9a3 3 0 1 1 5.83 1c0 2-3 2-3 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="19" r="1" fill="currentColor" />
        </>
      ),
    },
  ];

  return (
    <motion.aside
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl flex flex-col justify-between relative overflow-hidden"
      style={{ width: "80px", height: "644px", padding: "15px 0px 15px 0px" }}
      aria-label="Primary"
    >
      {/* Glass background */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(249, 250, 253, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 10px 40px rgba(31, 41, 55, 0.08)",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-center pt-1 pb-4">
          <GradientP />
        </div>

        {/* Icons */}
        <nav className="flex-1" aria-label="Sidebar">
          <ul className="flex flex-col items-center gap-7 mt-12">
            {menuItems.map((item) => {
              const isActive = !!item.active;
              const isDashboard = item.key === "Dashboard";
              return (
                <li key={item.key} className="relative">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.04 }}
                    className={
                      isActive
                        ? "relative w-14 h-12 rounded-xl shadow-accent"
                        : "relative w-12 h-12 rounded-xl hover:text-grey-800 transition-colors"
                    }
                    style={
                      isActive
                        ? { boxShadow: "0 8px 24px rgba(170, 120, 255, 0.25)" }
                        : { background: "transparent" }
                    }
                    aria-label={item.key}
                  >
                    {/* Icon color rules for Dashboard: active black, inactive grey-400 */}
                    {isDashboard ? (
                      isActive ? (
                        <div className="flex items-center justify-center w-full h-full text-black">
                          <MonoDashboardIcon />
                        </div>
                      ) : (
                        <OutlineIcon className="text-grey-400">
                          {item.path}
                        </OutlineIcon>
                      )
                    ) : (
                      <OutlineIcon>{item.path}</OutlineIcon>
                    )}

                    {/* Notification dot */}
                    {item.dot && !isActive && (
                      <span
                        className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                        style={{
                          background:
                            "linear-gradient(135deg, #FF6B6B 0%, #F06595 100%)",
                        }}
                        aria-hidden
                      />
                    )}

                    {/* Active glow */}
                    {isActive && (
                      <span
                        className="absolute inset-0 rounded-xl"
                        style={{
                          boxShadow: "0 0 30px rgba(170, 120, 255, 0.35)",
                          filter: "blur(6px)",
                          opacity: 0.6,
                        }}
                        aria-hidden
                      />
                    )}
                  </motion.button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom / Logout */}
        <div className="mt-6">
          <div className="mx-2 mb-3 h-px bg-grey-200/80" />
          <div className="flex items-center justify-center">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl text-grey-700/80 hover:text-red-600 transition-colors"
              aria-label="Logout"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 17l5-5-5-5M21 12H9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
