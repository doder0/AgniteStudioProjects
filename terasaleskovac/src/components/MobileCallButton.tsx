import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const MobileCallButton = () => {
  return (
    <motion.a
      href="tel:+381648736831"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg md:hidden"
      style={{ boxShadow: "0 0 30px hsl(38 90% 55% / 0.4)" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Phone className="h-6 w-6" />
    </motion.a>
  );
};

export default MobileCallButton;
