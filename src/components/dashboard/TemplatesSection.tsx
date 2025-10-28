import { motion } from "framer-motion";

const TemplatesSection = () => {
  const templates = [
    {
      id: "1",
      bankName: "HDFC Bank, KODAD",
      accountNumber: "HDFC0001642",
      payeeName: "ANANTHARAPU ARUNA THEJASWINI",
    },
    {
      id: "2",
      bankName: "HDFC Bank, KODAD",
      accountNumber: "HDFC0001642",
      payeeName: "ANANTHARAPU ARUNA THEJASWINI",
    },
  ];

  return (
    <div className="flex flex-col gap-4 flex-1">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-grey-900">My Templates</h3>
        <button className="flex items-center gap-1 text-grey-800 text-xs font-medium hover:bg-gradient-to-r hover:from-[#fcbbfc]/[0.92] hover:to-[#ada6ff] hover:bg-clip-text hover:text-transparent">
          <span className="text-sm bg-black rounded-full w-4 h-4 flex items-center justify-center text-white">
            +
          </span>
          Create
        </button>
      </div>

      {/* Templates */}
      <div className="flex flex-col gap-3">
        {templates.map((template) => (
          <motion.div
            key={template.id}
            whileHover={{ scale: 1.02 }}
            className="bg-shade-white rounded-2xl p-4 shadow-card"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M5 3C3.9 3 3 3.9 3 5V15C3 16.1 3.9 17 5 17H15C16.1 17 17 16.1 17 15V5C17 3.9 16.1 3 15 3H5ZM5 5H15V15H5V5ZM7 10L10 13L13 10"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="text-xs text-grey-800">
                  {template.bankName}
                </span>
              </div>
              <span className="text-xs text-grey-800">
                {template.accountNumber}
              </span>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-xs font-semibold text-grey-900 uppercase">
                {template.payeeName}
              </p>
              <button className="text-xs text-grey-700 hover:text-accent">
                Make Payment
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <h6 className="text-end cursor-pointer text-xs text-grey-800 underline font-medium hover:bg-gradient-to-r hover:from-[#fcbbfc]/[0.92] hover:to-[#ada6ff] hover:bg-clip-text hover:text-transparent">
        All Templates
      </h6>
    </div>
  );
};

export default TemplatesSection;
