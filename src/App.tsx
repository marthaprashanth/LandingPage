import { motion } from "framer-motion";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import DashboardContent from "./components/dashboard/DashboardContent";
import QuickActions from "./components/dashboard/QuickActions";
import Stats from "./components/dashboard/Stats";
import MonthlySpending from "./components/dashboard/MonthlySpending";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-grey-50 to-purple-50/20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col min-h-screen"
      >
        {/* Main Layout */}
        <div className="flex flex-1 gap-4 p-4">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Header */}
            <Header />

            {/* Dashboard Content */}
            <div className="flex-1 flex gap-4">
              <div className="flex-1 flex flex-col gap-6">
                <DashboardContent />
              </div>

              {/* Right Sidebar */}
              <div className="w-80 flex flex-col gap-4">
                <QuickActions />
                <Stats />
                <MonthlySpending />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
