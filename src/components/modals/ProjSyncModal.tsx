import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import Backdrop from "../Backdrop";
interface ProjSyncModalProps {
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

const ProjSyncModal: FC<ProjSyncModalProps> = ({ handleOnClose, visible }) => {
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
          Project Management Tool for Freelancers
        </span>
        <Image
          unoptimized={true}
          src={"projsync.gif"}
          alt="ProjSync GIF"
          height={600}
          width={800}
          className="rounded-xl mx-auto mb-4"
        />
        <span className="font-bold text-2xl text-center m-3 block text-white">
          TypeScript | NextJS | NestJS | NextAuth
        </span>
        <span className="font-bold text-xl text-center m-3 block text-white">
          december 2023
        </span>
        <p className="w-clamp mx-auto">
          ProjSync makes it effortless to keep all clients updated and fosters
          seamless communication. With its intuitive design and real-time
          updates, it ensures everyone is on the same page, eliminating
          misunderstandings and increasing productivity. Say goodbye to the days
          of endless back-and-forths and welcome streamlined, effective
          communication with ProjSync.
        </p>
      </motion.div>
    </Backdrop>
  );
};

export default ProjSyncModal;
