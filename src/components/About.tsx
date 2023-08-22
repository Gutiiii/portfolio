"use client";
import { motion } from "framer-motion";

import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className="md:mr-20 md:px-10 pt-40 mx-10">
        <motion.h2
          initial={{ x: 1700 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-4 text-white sm:text-3xl text-2xl font-bold "
        >
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <p className="sm:text-2xl text-md">
            Hello, I&apos;m Samuel Gutmans, a 20-year-old software engineer
            residing in Basel, Switzerland. I can converse fluently in German,
            English, and Danish. Holding degrees in Computer Science and
            Business Administration, I&apos;ve used my knowledge and skills as a
            freelance software engineer in my spare time for over a year. During
            this time, I&apos;ve built various projects for clients scattered
            around the globe.
          </p>
          <br></br>
          <p className="sm:text-2xl text-md">
            When it comes to projects, I&apos;ve made use of a diverse set of
            technologies such as ReactJS (NextJS), NodeJS, TypeScript, Python,
            PHP, and many more. My freelance software engineering journey has
            led me to work on a variety of tasks including web projects, bots,
            and an array of different automations.
          </p>
          <br></br>
          <p className="sm:text-2xl text-md">
            If I were to pinpoint my greatest strength, it would be my
            problem-solving mindset. I have a genuine fascination with diving
            headfirst into complex problems and finding the most efficient
            solutions. This challenge is something I thoroughly enjoy and
            embrace in my work.
          </p>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default About;
