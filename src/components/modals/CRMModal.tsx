import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import Backdrop from "../Backdrop";
interface CRMModalProps {
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

const CRMModal: FC<CRMModalProps> = ({ handleOnClose, visible }) => {
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
          CRM System
        </span>
        <Image
          unoptimized={true}
          src={"crm.gif"}
          alt="Portfolio GIF"
          height={600}
          width={800}
          className="rounded-xl mx-auto mb-4"
        />
        <span className="font-bold text-2xl text-center m-3 block text-white">
          TypeScript | ReactJS | NodeJS | MongoDB | JWT AUTH
        </span>
        <span className="font-bold text-xl text-center m-3 block text-white">
          march 2023
        </span>
        <p className="w-clamp mx-auto">
          <p className="mb-4">
            I worked on a project for a client who needed a comprehensive CRM
            system to manage their customers efficiently. The aim was to
            simplify tasks like sending invoices, creating users, and more.
            Throughout the process, I collaborated closely with the client to
            ensure we met all their requirements.{" "}
          </p>
          <p className="mb-4">
            For the frontend, I harnessed the power of TypeScript and ReactJS.
            The component-based approach of React was a perfect match for my
            style of coding. I also used TailwindCSS for its easy and efficient
            styling.
          </p>
          On the backend, I chose Express from NodeJS. I opted for MongoDB as
          the database because its architecture was ideally suited for this type
          of project. I implemented JWT for the authentication system. All in
          all, the result was a client-friendly CRM system that achieved the
          goals we set out to meet.
        </p>
      </motion.div>
    </Backdrop>
  );
};

export default CRMModal;
