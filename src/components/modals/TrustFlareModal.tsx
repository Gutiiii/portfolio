import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import Backdrop from "../Backdrop";
import Link from "next/link";
interface TrustFlareModalProps {
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

const TrustFlareModal: FC<TrustFlareModalProps> = ({
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
          TrustFlare: Real-Time Social Proof for E-commerce
        </span>
        <Image
          unoptimized={true}
          src={"TrustFlare.gif"}
          alt="TrustFlare GIF"
          height={600}
          width={800}
          className="rounded-xl mx-auto mb-4"
        />
        <span className="font-bold text-2xl text-center m-3 block text-white">
          TypeScript | NextJS | NestJS | NextAuth | Socket IO | Stripe
        </span>
        <span className="font-bold text-xl text-center m-3 block text-white">
          october 2024
        </span>
        <p className="w-clamp mx-auto">
          TrustFlare{" "}
          <Link
            href={"https://trustflare.net"}
            className="text-blue-500 underline"
            target="_blank"
          >
            (https://trustflare.net)
          </Link>{" "}
          emerged from a collaborative idea with a fellow engineer who
          identified a critical need in the e-commerce space: building customer
          trust through transparent, real-time data. The project&apos;s primary
          objective was to develop a solution that would display live store data
          on landing pages, thereby increasing visitor confidence and
          potentially boosting conversion rates.
        </p>
        <br />
        <p className="w-clamp mx-auto">
          I created a suite of customizable widgets that present complex data
          through responsive, user-friendly visualizations. The technical stack
          includes React with NextJS for the frontend, NestJS for the backend,
          PostgreSQL for data storage, and Socket.io for real-time updates. This
          powerful combination allowed for efficient development of dynamic,
          real-time features while ensuring scalability and performance. The
          entire system was manually deployed on an Ubuntu VPS using Docker,
          with a custom CI/CD pipeline set up for automated deployments,
          ensuring smooth and consistent updates to the production environment.
        </p>
        <br />
        <p className="w-clamp mx-auto">
          Developing TrustFlare presented several key challenges. Ensuring the
          real-time widgets displayed correctly across diverse websites required
          creating a flexible solution that wouldn&apos;t interfere with host
          sites. Data security and user privacy were crucial, necessitating
          robust authentication and encryption measures. We also focused on
          optimizing performance to maintain fast load times and real-time
          updates without impacting host sites. Managing data accuracy across
          time zones and handling high user volumes added complexity. Despite
          these hurdles, through innovative problem-solving, we overcame each
          challenge, resulting in a secure, efficient product that seamlessly
          provides real-time data via our API. Additionally, it was my first
          time integrating Stripe as a payment provider, which, although new to
          me, was an enjoyable learning experience that expanded my skillset in
          handling financial transactions securely.
        </p>
      </motion.div>
    </Backdrop>
  );
};

export default TrustFlareModal;
