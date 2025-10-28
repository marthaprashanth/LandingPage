import { motion } from "framer-motion";
import SearchIcon from "../icons/SearchIcon";

const Header = () => {
  return (
    <header className="bg-shade-white rounded-3xl shadow-card p-6">
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex flex-col gap-1">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-xl font-semibold text-grey-900"
          >
            Dashboard
          </motion.h1>
          <p className="text-xs text-grey-600">
            🤨 Get more out of Paymorz everyday!
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search ..."
              className="w-96 px-5 py-2.5 pl-12 bg-grey-100 border border-grey-300 rounded-2xl text-sm text-grey-700 placeholder-grey-600 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-grey-700" />
          </div>

          {/* Profile */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-[2px]">
                <div className="w-full h-full rounded-full bg-shade-white flex items-center justify-center">
                  <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    AP
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-grey-500">Hello!</span>
                <span className="text-base font-semibold text-grey-900">
                  Alex P.
                </span>
              </div>
            </div>
            <button className="text-grey-700 hover:text-grey-900 transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
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
