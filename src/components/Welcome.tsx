"use client";
import { motion } from "framer-motion";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Welcome = () => {
  // const [text] = useTypewriter({
  //   words: ["Software Engineer", "Frontend Engineer", "Backend Engineer"],
  //   loop: true,
  //   delaySpeed: 2000,
  // });
  return (
    <div className="md:ml-20 ml-10 text-left ">
      <div className="md:pt-40 pt-10">
        <motion.h1
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="sm:text-6xl text-4xl font-bold tracking-wide mx-auto "
        >
          Samuel Gutmans
        </motion.h1>
        <motion.h2
          className="my-5 sm:text-3xl text-2xl md:font-thin mx-auto"
          initial={{ x: -1030 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Welcome to my Portfolio
        </motion.h2>
        <motion.h2
          className="sm:text-xl  mr-10 text-gray-400 font-thin"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I am a Software Engineer
          <Cursor cursorColor="gray" />
          living in Switzerland.
        </motion.h2>
      </div>
    </div>
  );
};

export default Welcome;
