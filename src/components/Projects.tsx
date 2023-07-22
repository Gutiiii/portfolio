"use client";
import { motion } from "framer-motion";
import { FC } from "react";
import { FaCode } from "react-icons/fa";
import { PiMonitorBold } from "react-icons/pi";
import { TiInfoLarge } from "react-icons/ti";

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
      <section className="mt-8">
        <div className="group">
          <div className="bg-[#151715] h-44 rounded-xl shadow-lg cursor-pointer group-hover:translate-x-7 transition-translate duration-300 mb-96 ">
            <div className="w-9 pt-2 ">
              <div className="translate-x-0 group-hover:-translate-x-7 transition-translate duration-300 border-[rgb(117,241,214)] border-2 p-1 rounded-full hover:scale-125">
                <TiInfoLarge className="w-6 h-6" />
              </div>
              <div className="translate-x-0 mt-2 group-hover:-translate-x-7 transition-translate duration-300 border-[rgb(117,241,214)] border-2 p-1 rounded-full hover:scale-125">
                <PiMonitorBold className="w-6 h-6 z-10" />
              </div>

              <div className="translate-x-0 mt-2 group-hover:-translate-x-7 transition-translate duration-300 border-[rgb(117,241,214)] border-2 p-1 rounded-full hover:scale-125">
                <FaCode className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
