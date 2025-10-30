import { motion } from "framer-motion";
import SearchIcon from "../icons/SearchIcon";

const Header = () => {
  return (
    <header className="bg-shade-white rounded-3xl shadow-card p-4 sm:p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left Side */}
        <div className="flex flex-col gap-1 text-center md:text-left">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-lg sm:text-xl font-semibold text-grey-900"
          >
            Dashboard
          </motion.h1>
          <p className="text-xs text-grey-600">
            🤨 Get more out of Paymorz everyday!
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 md:gap-8 w-full md:w-auto">
          {/* Search */}
          <div className="relative w-full sm:w-72 md:w-80 lg:w-96">
            <input
              type="text"
              placeholder="Search ..."
              className="w-full px-4 py-2.5 pl-11 bg-grey-100 border border-grey-300 rounded-2xl text-sm text-grey-700 placeholder-grey-600 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
            <SearchIcon className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-grey-700 w-4 h-4" />
          </div>

          {/* Profile */}
          <div className="flex items-center justify-between sm:justify-normal gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-[2px]">
                <div className="w-full h-full rounded-full bg-shade-white flex items-center justify-center">
                  <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    AP
                  </span>
                </div>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xs text-grey-500">Hello!</span>
                <span className="text-sm sm:text-base font-semibold text-grey-900">
                  Alex P.
                </span>
              </div>
            </div>
            <button className="text-grey-700 hover:text-grey-900 transition-colors">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
              >
                <path
                  d="M4.5 6.75L9 2.25L13.5 6.75M4.5 11.25L9 15.75L13.5 11.25"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
