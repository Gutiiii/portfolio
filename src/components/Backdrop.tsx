"use client";
import { motion } from "framer-motion";
import { FC } from "react";

interface BackdropProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Backdrop: FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <div className="relative z-20 h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-white bg-opacity-10 backdrop-blur-sm"
        onClick={onClick}
      >
        <div className="fixed inset-0 z-20 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform px-5 pb-4 text-left transition-all text-white ">
              {children}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Backdrop;
