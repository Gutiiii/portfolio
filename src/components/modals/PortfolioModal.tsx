import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import Backdrop from "../Backdrop";
interface PortfolioModalProps {
  visible: boolean;
  handleOnClose: () => void;
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffnes: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const PortfolioModal: FC<PortfolioModalProps> = ({
  handleOnClose,
  visible,
}) => {
  if (!visible) return null;

  return (
    <Backdrop onClick={handleOnClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-clamp h-min mx-auto items-center"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <span className="font-light text-2xl text-center m-3 block text-[rgb(117,241,214)]">
          Software Engineer Portfolio
        </span>
        <Image
          unoptimized={true}
          src={"portfolio.gif"}
          alt="Portfolio GIF"
          height={600}
          width={800}
          className="rounded-xl mx-auto mb-4"
        />
        <span className="font-bold text-2xl text-center m-3 block text-white">
          TypeScript | NextJS
        </span>
        <span className="font-bold text-xl text-center m-3 block text-white">
          july 2023
        </span>
        <p className="w-clamp mx-auto">
          I put together this project to spotlight my capabilities as a Software
          Engineer, sort of like a billboard flaunting some of my finest work.
          The portfolio was crafted using TypeScript and NextJS, while
          TailwindCSS gave it a slick, stylish finish. As for getting it out
          there, I deployed it with Cloudflare Pages - it simply checked all the
          boxes for what I needed.
        </p>
      </motion.div>
    </Backdrop>
  );
};

export default PortfolioModal;
