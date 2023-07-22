"use client";
import { motion } from "framer-motion";
import React from "react";

const Welcome = () => {
  return (
    <div className="md:ml-20 ml-10 text-left ">
      <div className="md:pt-40 pt-10">
        <motion.h1
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:text-5xl sm:text-4xl text-3xl  font-bold tracking-wide mx-auto "
        >
          Samuel Gutmans
        </motion.h1>
        <motion.h2
          className="my-5 md:text-3xl sm:text-2xl text-xl md:font-thin mx-auto"
          initial={{ x: -1030 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Welcome to my Portfolio
        </motion.h2>
        <motion.h2
          className="md:text-xl sm:text-lg text-sm
          mr-10 text-gray-400 font-thin"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I&apos;m a Software Engineer living in Switzerland.
        </motion.h2>
      </div>
    </div>
  );
};

export default Welcome;
