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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
          esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
          at vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Nam liber tempor cum soluta nobis eleifend option congue nihil
          imperdiet doming id quod mazim placerat facer
        </p>
      </motion.div>
    </Backdrop>
  );
};

export default PortfolioModal;
