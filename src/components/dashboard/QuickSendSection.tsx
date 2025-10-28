import { motion } from "framer-motion";

const QuickSendSection = () => {
  const contacts = [
    { id: "1", name: "Ariana Bush", username: "@ariana007", avatar: "AB" },
    { id: "2", name: "Madelyn Ma...", username: "@made.ngo", avatar: "MM" },
    { id: "3", name: "Zain Siphron", username: "@zainsiphron", avatar: "ZS" },
    { id: "4", name: "Zain Curtis", username: "@zain_c", avatar: "ZC" },
    { id: "5", name: "Martin Stan...", username: "@themartin", avatar: "MS" },
    { id: "6", name: "Aliya Cornrad", username: "@aliya_rd", avatar: "AC" },
    { id: "7", name: "Jakob West...", username: "@jakobw", avatar: "JW" },
    { id: "8", name: "+", label: "Add New" },
  ];

  return (
    <div className="flex flex-col gap-5 pt-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-grey-900">Quick Send</h3>
        <button className="text-xs text-grey-800 underline font-medium hover:bg-gradient-to-r hover:from-[#fcbbfc]/[0.92] hover:to-[#ada6ff] hover:bg-clip-text hover:text-transparent">
          All Beneficiaries
        </button>
      </div>

      {/* Contacts Grid */}
      <div className="flex gap-2.5 flex-wrap">
        {contacts.map((contact) => (
          <motion.div
            key={contact.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-14 h-14 rounded-full bg-shade-white border border-grey-200 shadow-card flex items-center justify-center">
              {contact.id === "8" ? (
                <span className="text-2xl text-grey-500">+</span>
              ) : (
                <span className="text-sm font-semibold text-grey-900">
                  {contact.avatar}
                </span>
              )}
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold text-grey-900">
                {contact.label || contact.name}
              </span>
              {contact.username && (
                <span className="text-xs text-grey-500">
                  {contact.username}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuickSendSection;
