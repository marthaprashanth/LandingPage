import { Card } from "../../types";
import { motion } from "framer-motion";

interface CardItemProps {
  card: Card;
}

const CardItem = ({ card }: CardItemProps) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-grey-900 via-grey-800 to-grey-900 rounded-3xl p-8 text-shade-white relative overflow-hidden shadow-xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-60 -top-40 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-8">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-grey-600 opacity-60">
                {card.cardName}
              </span>
              {card.verified && (
                <div className="flex items-center gap-1">
                  <span className="text-xs">✓</span>
                  <span className="text-xs text-success">Verified</span>
                </div>
              )}
            </div>
            <h4 className="text-sm font-semibold">{card.holderName}</h4>
          </div>
          <div className="text-3xl font-bold">VISA</div>
        </div>

        {/* Card Number */}
        <div className="flex items-center gap-2">
          <span className="text-lg">••••</span>
          <span className="text-lg">••••</span>
          <span className="text-lg">••••</span>
          <span className="text-lg font-semibold">{card.cardNumber}</span>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-grey-600 opacity-60">Exp. Date</span>
            <span className="text-sm font-semibold">{card.expDate}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-grey-600 opacity-60">CVV</span>
            <span className="text-sm font-semibold">{card.cvv}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-grey-600 opacity-60">Balance</span>
            <span className="text-sm font-semibold">
              ₹ {card.balance.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default CardItem;
