"use client";
import { motion } from "framer-motion";
import { FC } from "react";

interface BackdropProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Backdrop: FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 w-full h-full pt-2 justify-center flex bg-white bg-opacity-10 backdrop-blur-sm z-40 text-white"
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
