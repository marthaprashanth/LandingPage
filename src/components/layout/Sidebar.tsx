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
        <path
          d="M12 3v18M5 8h9a5 5 0 1 1 0 10H5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
      dot: true,
    },
    {
      key: "Statistics",
      path: (
        <path
          d="M5 19V9M12 19V5M19 19v-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ),
    },
    {
      key: "Notifications",
      path: (
        <path
          d="M12 21a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2Zm7-6V11a7 7 0 1 0-14 0v4l-2 2h18l-2-2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
    <>
      {/* ✅ Desktop Sidebar (visible only from lg and above) */}
      <motion.aside
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="
          hidden lg:flex
          rounded-3xl flex-col justify-between relative overflow-hidden
          w-16 sm:w-20 md:w-24 lg:w-28
          h-[500px] sm:h-[600px] md:h-[640px] lg:h-[700px]
          py-3 md:py-4
        "
        aria-label="Primary Sidebar"
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
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center pt-1 pb-4 md:pb-6">
            <GradientP />
          </div>

          {/* Menu */}
          <nav className="flex-1">
            <ul className="flex flex-col items-center gap-6 mt-10">
              {menuItems.map((item) => {
                const isActive = !!item.active;
                const isDashboard = item.key === "Dashboard";
                let icon;
                if (isDashboard) {
                  if (isActive) {
                    icon = (
                      <div className="flex items-center justify-center w-full h-full text-black">
                        <MonoDashboardIcon />
                      </div>
                    );
                  } else {
                    icon = (
                      <OutlineIcon className="text-grey-400">
                        {item.path}
                      </OutlineIcon>
                    );
                  }
                } else {
                  icon = <OutlineIcon>{item.path}</OutlineIcon>;
                }

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
                          ? {
                              boxShadow: "0 8px 24px rgba(170, 120, 255, 0.25)",
                            }
                          : { background: "transparent" }
                      }
                    >
                      {icon}
                      {item.dot && !isActive && (
                        <span
                          className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                          style={{
                            background:
                              "linear-gradient(135deg, #FF6B6B 0%, #F06595 100%)",
                          }}
                        />
                      )}
                    </motion.button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Logout */}
          <div className="mt-6">
            <div className="mx-2 mb-3 h-px bg-grey-200/80" />
            <div className="flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl text-grey-700/80 hover:text-red-600 transition-colors"
                aria-label="Logout"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* ✅ Mobile Bottom Navbar (below 1024px) */}
      <motion.nav
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="
          flex lg:hidden
          fixed bottom-0 left-0 right-0 z-50
          bg-white/80 backdrop-blur-xl
          border-t border-grey-200
          justify-around items-center py-2
          shadow-[0_-4px_20px_rgba(0,0,0,0.05)]
        "
      >
        {menuItems.map((item) => (
          <button
            key={item.key}
            className={`relative flex flex-col items-center justify-center ${
              item.active ? "text-accent" : "text-grey-700"
            }`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {item.path}
            </svg>
            <span className="text-[10px] mt-1">{item.key}</span>
            {item.dot && (
              <span className="absolute top-1 right-3 w-2 h-2 rounded-full bg-pink-500" />
            )}
          </button>
        ))}
      </motion.nav>
    </>
  );
};

export default Sidebar;
