"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import { FaCode } from "react-icons/fa";
import { PiMonitorBold } from "react-icons/pi";
import { Tooltip } from "react-tooltip";

const Projects: FC = () => {
  return (
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
          <div className="bg-black h-60 rounded-xl shadow-lg cursor-pointer group-hover:translate-x-7 transition-translate duration-300 relative z-20">
            <div className="flex justify-between">
              <div className="ml-8 pt-4 ">
                <h3 className="text-[rgb(117,241,214)] text-2xl">Portfolio</h3>
                <p className="text-lg">Software Engineer Portfolio</p>
                <p className="text-md">TypeScript, NextJS</p>
                <p>july 2023</p>
              </div>
              <div className="hidden 2xl:block">
                <Image
                  unoptimized={true}
                  src={"portfolio.gif"}
                  alt="the gif"
                  height={200}
                  width={400}
                  className="mr-8 pt-4 "
                />
              </div>
            </div>
            <div className="w-9 pt-2 " />
          </div>
          <div className="translate-x-0 transition-translate duration-300 border-[rgb(117,241,214)] border-2 p-1 rounded-full hover:scale-125 z-10 relative -top-60 w-9 mt-2 cursor-pointer">
            <PiMonitorBold className="w-6 h-6" />
          </div>
          <div className="translate-x-0 transition-translate duration-300 border-[rgb(117,241,214)] border-2 p-1 rounded-full hover:scale-125 z-10 relative -top-60 w-9 mt-2 cursor-pointer">
            <a href="https://github.com/Gutiiii/portfolio" target="_blank">
              <FaCode className="w-6 h-6" />
            </a>
          </div>
          {/* <div className="translate-x-0 transition-translate duration-300 border-[rgb(117,241,214)] border-2 p-1 rounded-full hover:scale-125 z-30 relative -top-20 w-9 mt-2">
            <TiInfoLarge className="w-6 h-6" />
          </div> */}
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;
