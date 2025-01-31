"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FC, Fragment, useState } from "react";
import { FaCode } from "react-icons/fa";
import { PiMonitorBold } from "react-icons/pi";
import { toast } from "sonner";
import CRMModal from "./modals/CRMModal";
import PortfolioModal from "./modals/PortfolioModal";
import ProjSyncModal from "./modals/ProjSyncModal";
import TrustFlareModal from "./modals/TrustFlareModal";

interface ProjectsPropsInterface {
  setVisible: () => void;
  setHidden: () => void;
}

const Projects: FC<ProjectsPropsInterface> = ({ setVisible, setHidden }) => {
  const [trustflareModal, setTrustflaremodal] = useState<boolean>(false);
  const [portfolioModal, setPortfolioModal] = useState<boolean>(false);
  const [crmModal, setCrmModal] = useState<boolean>(false);
  const [projSyncModal, setProjSyncModal] = useState<boolean>(false);

  const openTrustFlare = () => {
    setTrustflaremodal(true);
    setVisible();
  };
  const openPortfolio = () => {
    setPortfolioModal(true);
    setVisible();
  };

  const closePortfolio = () => {
    setPortfolioModal(false);
    setHidden();
  };

  const openCrm = () => {
    setCrmModal(true);
    setVisible();
  };
  const closeTrustflare = () => {
    setTrustflaremodal(false);
    setHidden();
  };
  const closeCrm = () => {
    setCrmModal(false);
    setHidden();
  };

  const openProjSync = () => {
    setProjSyncModal(true);
    setVisible();
  };

  const closeProjSync = () => {
    setProjSyncModal(false);
    setHidden();
  };

  return (
    <Fragment>
      <div className="md:mr-20 md:px-10 pt-40 mx-10 text-left">
        <motion.h2
          initial={{ x: 1700 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-4 text-white sm:text-3xl text-2xl font-bold mb-2"
        >
          Projects
        </motion.h2>

        <motion.section
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <div
            className="group"
            data-tooltip-id="download"
            data-tooltip-content="Click for Info!"
          >
            <div
              className="bg-black h-60 rounded-xl shadow-lg cursor-pointer group-hover:translate-x-7 transition-translate duration-300 relative z-20 p-4"
              onClick={openTrustFlare}
            >
              <div className="flex justify-between ">
                <div className="ml-2 mt-2">
                  <div className="space-y-3">
                    <h3 className="text-[rgb(117,241,214)] text-2xl">
                      TrustFlare
                    </h3>
                    <p className="text-lg">
                      Real Time Widget Display for E-Commerce Owners
                    </p>
                    <p className="text-md">
                      TypeScript, NextJS, NestJS, Socket IO, NextAuth, Stripe
                    </p>
                    <p>october 2024</p>
                  </div>
                </div>
                <div className="hidden 2xl:block ">
                  <Image
                    unoptimized={true}
                    src={"TrustFlare.gif"}
                    alt="the gif"
                    height={260}
                    width={350}
                    className="my-4 rounded-xl"
                  />
                </div>
              </div>
              <div className="w-9 pt-2 " />
            </div>
            <div className="translate-x-0 transition-translate duration-300 border-[rgb(117,241,214)] border-2 p-1 rounded-full hover:scale-125 z-10 relative -top-60 w-9 mt-2 cursor-pointer">
              <a href="https://trustflare.net" target="_blank">
                <PiMonitorBold className="w-6 h-6" />
              </a>
            </div>
            <div
              onClick={() =>
                toast.info("This Repository is currently not Public", {
                  position: "top-center",
                })
              }
              className="translate-x-0 transition-translate duration-300 border-[rgb(117,241,214)] border-2 p-1 rounded-full hover:scale-125 z-10 relative -top-60 w-9 mt-2 cursor-pointer"
            >
              <FaCode className="w-6 h-6" />
            </div>
          </div>
          <div
            className="group"
            data-tooltip-id="download"
            data-tooltip-content="Click for Info!"
          >
            <div
              className="bg-black h-60 rounded-xl shadow-lg cursor-pointer group-hover:translate-x-7 transition-translate duration-300 relative z-20 p-4"
              onClick={openProjSync}
            >
              <div className="flex justify-between ">
                <div className="ml-2 mt-2">
                  <div className="space-y-3">
                    <h3 className="text-[rgb(117,241,214)] text-2xl">
                      ProjSync
                    </h3>
                    <p className="text-lg">
                      Project Management Tool for Freelancers
                    </p>
                    <p className="text-md">
                      TypeScript, NextJS, NestJS, NextAuth¨
                    </p>
                    <p>december 2023</p>
                  </div>
                </div>
                <div className="hidden 2xl:block ">
                  <Image
                    unoptimized={true}
                    src={"projsync.gif"}
                    alt="the gif"
                    height={260}
                    width={350}
                    className="my-4 rounded-xl"
                  />
                </div>
              </div>
              <div className="w-9 pt-2 " />
            </div>
            <div className="translate-x-0 transition-translate duration-300 border-[rgb(117,241,214)] border-2 p-1 rounded-full hover:scale-125 z-10 relative -top-60 w-9 mt-2 cursor-pointer">
              <a href="https://projsync.app" target="_blank">
                <PiMonitorBold className="w-6 h-6" />
              </a>
            </div>
            <div
              onClick={() =>
                toast.info("This Repository is currently not Public", {
                  position: "top-center",
                })
              }
              className="translate-x-0 transition-translate duration-300 border-[rgb(117,241,214)] border-2 p-1 rounded-full hover:scale-125 z-10 relative -top-60 w-9 mt-2 cursor-pointer"
            >
              <FaCode className="w-6 h-6" />
            </div>
          </div>
          <div
            className="group"
            data-tooltip-id="download"
            // data-tooltip-content="Click for Info!"
          >
            <div
              className="bg-black h-60 rounded-xl shadow-lg cursor-pointer group-hover:translate-x-7 transition-translate duration-300 relative z-20 p-4"
              // onClick={openPortfolio}
            >
              <div className="flex justify-between ">
                <div className="ml-2 mt-2">
                  <div className="space-y-3">
                    <h3 className="text-[rgb(117,241,214)] text-2xl">
                      New Portfolio (Unter Construction)
                    </h3>
                    <p className="text-lg">Software Engineer Portfolio</p>
                    <p className="text-md">TypeScript, NextJS</p>
                    <p>january 2025</p>
                  </div>
                </div>
                {/* <div className="hidden 2xl:block ">
                  <Image
                    unoptimized={true}
                    src={"portfolio.gif"}
                    alt="the gif"
                    height={260}
                    width={350}
                    className="my-4 rounded-xl"
                  />
                </div> */}
              </div>
              <div className="w-9 pt-2 " />
            </div>
            <div className="translate-x-0 transition-translate duration-300 border-[rgb(117,241,214)] border-2 p-1 rounded-full hover:scale-125 z-10 relative -top-60 w-9 mt-2 cursor-pointer">
              <PiMonitorBold
                className="w-6 h-6"
                onClick={() =>
                  toast.info("Not Public yet", {
                    position: "top-center",
                  })
                }
              />
            </div>
            <div
              onClick={() =>
                toast.info("This Repository is currently not Public", {
                  position: "top-center",
                })
              }
              className="translate-x-0 transition-translate duration-300 border-[rgb(117,241,214)] border-2 p-1 rounded-full hover:scale-125 z-10 relative -top-60 w-9 mt-2 cursor-pointer"
            >
              <FaCode className="w-6 h-6" />
            </div>
          </div>
          <div
            className="group"
            data-tooltip-id="download"
            data-tooltip-content="Click for Info!"
          >
            <div
              className="bg-black h-60 rounded-xl shadow-lg cursor-pointer group-hover:translate-x-7 transition-translate duration-300 relative z-20 p-4"
              onClick={openPortfolio}
            >
              <div className="flex justify-between ">
                <div className="ml-2 mt-2">
                  <div className="space-y-3">
                    <h3 className="text-[rgb(117,241,214)] text-2xl">
                      Portfolio
                    </h3>
                    <p className="text-lg">Software Engineer Portfolio</p>
                    <p className="text-md">TypeScript, NextJS</p>
                    <p>july 2023</p>
                  </div>
                </div>
                <div className="hidden 2xl:block ">
                  <Image
                    unoptimized={true}
                    src={"portfolio.gif"}
                    alt="the gif"
                    height={260}
                    width={350}
                    className="my-4 rounded-xl"
                  />
                </div>
              </div>
              <div className="w-9 pt-2 " />
            </div>
            <div className="translate-x-0 transition-translate duration-300 border-[rgb(117,241,214)] border-2 p-1 rounded-full hover:scale-125 z-10 relative -top-60 w-9 mt-2 cursor-pointer">
              <PiMonitorBold
                className="w-6 h-6"
                onClick={() =>
                  toast.info("You are already watching this Project", {
                    position: "top-center",
                  })
                }
              />
            </div>
            <div className="translate-x-0 transition-translate duration-300 border-[rgb(117,241,214)] border-2 p-1 rounded-full hover:scale-125 z-10 relative -top-60 w-9 mt-2 cursor-pointer">
              <a href="https://github.com/Gutiiii/portfolio" target="_blank">
                <FaCode className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div
            className="group"
            data-tooltip-id="download"
            data-tooltip-content="Click for Info!"
          >
            <div
              className="bg-black h-60 rounded-xl shadow-lg cursor-pointer group-hover:translate-x-7 transition-translate duration-300 relative z-20 p-4"
              onClick={openCrm}
            >
              <div className="flex justify-between ">
                <div className="ml-2 mt-2">
                  <div className="space-y-3">
                    <h3 className="text-[rgb(117,241,214)] text-2xl">
                      CRM System
                    </h3>
                    <p className="text-lg">CRM System for a Customer</p>

                    <p className="text-md">
                      TypeScript, ReactJS, NodeJS, MongoDB, JWT AUTH
                    </p>
                    <p>march 2023</p>
                  </div>
                </div>
                <div className="hidden 2xl:block ">
                  <Image
                    unoptimized={true}
                    src={"crm.gif"}
                    alt="Portfolio GIF"
                    height={260}
                    width={350}
                    className="my-4 rounded-xl"
                  />
                </div>
              </div>
              <div className="w-9 pt-2 " />
            </div>
            <div
              onClick={() =>
                toast.info("No Preview Available", { position: "top-center" })
              }
              className="translate-x-0 transition-translate duration-300 border-[rgb(117,241,214)] border-2 p-1 rounded-full hover:scale-125 z-10 relative -top-60 w-9 mt-2 cursor-pointer"
            >
              <PiMonitorBold className="w-6 h-6" />
            </div>
            <div className="translate-x-0 transition-translate duration-300 border-[rgb(117,241,214)] border-2 p-1 rounded-full hover:scale-125 z-10 relative -top-60 w-9 mt-2 cursor-pointer">
              <FaCode
                className="w-6 h-6"
                onClick={() =>
                  toast.info("This Repository is currently not Public", {
                    position: "top-center",
                  })
                }
              />
            </div>
          </div>
          <div className="pb-4 pt-8 text-white text-lg font-bold uppercase">
            More Projects
          </div>
          <li className="pl-4">3CX - BEXIO - Integration (API)</li>
          <li className="pl-4">3CX - EXXAS - Integration (API)</li>
          <li className="pl-4">MDigital AG - KPI Dashboard</li>
          <li className="pl-4">MDigital AG - Labelprinter</li>
          <li className="pl-4">
            Notion - Google Calendar Sync{" "}
            <span className="pl-5">Automation</span>
          </li>
        </motion.section>
      </div>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {trustflareModal && (
          <TrustFlareModal
            visible={trustflareModal}
            handleOnClose={closeTrustflare}
          />
        )}
      </AnimatePresence>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {portfolioModal && (
          <PortfolioModal
            visible={portfolioModal}
            handleOnClose={closePortfolio}
          />
        )}
      </AnimatePresence>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {crmModal && <CRMModal visible={crmModal} handleOnClose={closeCrm} />}
      </AnimatePresence>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {projSyncModal && (
          <ProjSyncModal
            visible={projSyncModal}
            handleOnClose={closeProjSync}
          />
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default Projects;
