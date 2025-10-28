import { motion } from "framer-motion";
import CardItem from "./CardItem";

const CardsSection = () => {
  const sampleCard = {
    id: "1",
    cardName: "Card Name",
    holderName: "Holder Name",
    cardNumber: "1001",
    expDate: "02 / 28",
    cvv: "***",
    balance: 100000,
    verified: true,
  };

  return (
    <div className="flex flex-col gap-4" style={{ width: "431px" }}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-grey-900">My Cards</h3>
        <button className="flex items-center gap-1 text-grey-800 text-xs font-medium hover:bg-gradient-to-r hover:from-[#fcbbfc]/[0.92] hover:to-[#ada6ff] hover:bg-clip-text hover:text-transparent">
          <span className="text-sm bg-black rounded-full w-4 h-4 flex items-center justify-center text-white">
            +
          </span>
          New Card
        </button>
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        style={{ height: "271px" }}
      >
        <CardItem card={sampleCard} />
      </motion.div>
    </div>
  );
};

export default CardsSection;
