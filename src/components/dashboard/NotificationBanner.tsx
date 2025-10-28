import { motion } from "framer-motion";

const NotificationBanner = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-accent rounded-2xl p-6 text-shade-white relative overflow-hidden shadow-accent"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
      <div className="flex items-center justify-between gap-6 relative z-10">
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">
            Hi Alex! You Have 1 Unverified Card
          </h2>
          <p className="text-sm opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <button className="px-6 py-3 bg-shade-white text-grey-900 rounded-2xl font-semibold text-sm hover:bg-grey-100 hover:scale-105 transition-all shadow-lg">
          Verify Now
        </button>
      </div>
    </motion.div>
  );
};

export default NotificationBanner;
