import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface PortfolioInfoModalProps {
  visible: boolean;
  onClose: () => void;
}

const PortfolioInfoModal: FC<PortfolioInfoModalProps> = ({
  visible,
  onClose,
}) => {
  const handleOnClose = (e: any) => {
    if (e.target.id === "container") {
      onClose();
    }
  };

  if (!visible) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      id="container"
      onClick={handleOnClose}
      
    >
      <div className="">
        <span className="font-light text-2xl text-center m-3 block text-[rgb(117,241,214)]">
          Portfolio
        </span>
        <Image
          unoptimized={true}
          src={"portfolio.gif"}
          alt="Portfolio GIF"
          height={600}
          width={800}
          className="my-4"
        />
      </div>
    </motion.div>
  );
};

export default PortfolioInfoModal;
